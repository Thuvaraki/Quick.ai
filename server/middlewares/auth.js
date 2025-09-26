import { clerkClient } from "@clerk/express";

//Middleware to check userId and hasPremiumPlan

export const auth = async (req, res, next) => {
  try {
    const { userId, has } = req.auth();
    // Pull has function from req.auth().
    // Call has({ plan: "premium" }) to see if user is premium.
    // Store the result (true/false) in hasPremiumPlan.
    const hasPremiumPlan = await has({ plan: "premium" });

    const user = await clerkClient.users.getUser(userId);

    if (!hasPremiumPlan && user.privateMetadata.free_usage) {
      req.free_usage = user.privateMetadata.free_usage;
    } else {
      // Reset free usage if premium or missing
      await clerkClient.users.updateUserMetadata(userId, {
        privateMetadata: {
          free_usage: 0,
        },
      });
      req.free_usage = 0;
    }

    // Attach plan info to request
    req.plan = hasPremiumPlan ? "premium" : "free";

    next();
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
