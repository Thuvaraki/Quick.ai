import express from "express";
import { auth } from "../middlewares/auth.js";
import { generateArticle } from "../controllers/aiController.js";

const aiRouter = express.Router(); //means creating a separate router for AI-related endpoints. helps to create modular, mountable route handlers. Instead of putting all routes in server.js, you can organize them into separate files.

aiRouter.post("/generate-article", auth, generateArticle);

export default aiRouter;
