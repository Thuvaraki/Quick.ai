import OpenAI from "openai"; //imports the official OpenAI Node.js SDK.
import sql from "../configs/db.js";
import { clerkClient } from "@clerk/express";

// With the import of official OpenAI Node.js SDK, Normally, we can use it with OpenAI’s API (e.g., gpt-4, gpt-4o-mini).
// But here, we are reusing the OpenAI client to talk to Google’s Gemini API (by pointing it to a custom baseURL).
//Google already provides an official Gemini SDK. With that, we can use Gemini directly without relying on OpenAI’s client.
const AI = new OpenAI({
  apiKey: process.env.GEMINI_API_KEY,
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
});

export const generateArticle = async (req, res) => {
  try {
    const { userId } = req.auth(); //auth is an object; by using destructuring, we are able to pick out specific keys from that object directly
    const { prompt, length } = req.body;

    const plan = req.plan;

    const free_usage = req.free_usage;

    if (plan !== "premium" && free_usage >= 10) {
      return res.json({
        success: false,
        message: "Limit reached. Upgrade to continue.",
      });
    }

    const response = await AI.chat.completions.create({
      //.chat.completions.create() is a method to generate chat-based responses. Basically, we are asking Gemini to “write” or “respond” to a prompt like ChatGPT.
      model: "gemini-2.0-flash",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      // temperature is used to Controls creativity / randomness in the response:
      // 0 → very deterministic, safe answer
      // 1 → very creative, more random
      // 0.7 → a good balance between creative and sensible.
      max_tokens: length,
    });

    const content = response.choices[0].message.content;
    // choices → array of possible responses (usually 1).
    // .message.content → the generated text.

    await sql`INSERT INTO creations (user_id, prompt, content, type)
    VALUES (${userId}, ${prompt}, ${content}, 'article')`;

    if (plan !== "premium") {
      await clerkClient.users.updateUserMetadata(userId, {
        privateMetadata: {
          free_usage: free_usage + 1,
        },
      });
    }
    res.json({ success: true, content });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
