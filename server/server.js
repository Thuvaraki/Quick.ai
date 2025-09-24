import express from "express";
import cors from "cors";
import "dotenv/config"; //preload file that automatically calls .config() to automatically load environment variables from a .env file into process.env
// Alternative method - loads variables from .env into process.env
// import dotenv from "dotenv";
// dotenv.config();

const app = express();
app.use(cors()); //cors = Cross-Origin Resource Sharing middleware.
// By default, browsers block API requests if the frontend (say running on http://localhost:3000) tries to call a backend running on another origin (say http://localhost:5000).
// cors() allow frontend to talk backend which is running on another origin.
app.use(express.json());
// express.json() is a built-in middleware in Express.
// It helps our app read JSON data sent from the client (like in POST or PUT requests) and makes it available in req.body. Without it, Express cannot understand JSON data in requests.

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});

app.get("/", (req, res) => res.send("Server is Live!"));
