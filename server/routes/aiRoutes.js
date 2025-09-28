import express from "express";
import { auth } from "../middlewares/auth.js";
import {
  generateArticle,
  generateBlogTitle,
  generateImage,
  removeImageBackground,
  removeImageObject,
  resumeReview,
} from "../controllers/aiController.js";
import { upload } from "../configs/multer.js";

const aiRouter = express.Router(); //means creating a separate router for AI-related endpoints. helps to create modular, mountable route handlers. Instead of putting all routes in server.js, you can organize them into separate files.

aiRouter.post("/generate-article", auth, generateArticle);

aiRouter.post("/generate-blog-title", auth, generateBlogTitle);

aiRouter.post("/generate-image", auth, generateImage);

aiRouter.post(
  "/remove-image-background",
  upload.single("image"),
  auth,
  removeImageBackground
);

aiRouter.post(
  "/remove-image-object",
  upload.single("image"),
  auth,
  removeImageObject
);

aiRouter.post("/resume-review", upload.single("resume"), auth, resumeReview);

export default aiRouter;
