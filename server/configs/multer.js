import multer from "multer";

// tells Multer to use the disk storage engine
// can pass two functions inside the object:
// destination(req, file, cb) → decides where to save the file.
// filename(req, file, cb) → decides the file name.
// keeping {} empty means, Multer will fall back to default behavior: Saves in the system temp directory (like /tmp) and Uses a random filename.
const storage = multer.diskStorage({});

export const upload = multer({ storage });

// Multer is a middleware for handling multipart/form-data (mainly file uploads) in Node.js/Express.
// When we don’t care where the file is stored permanently because we are just going to read it immediately and process it (e.g., upload to Cloudinary, AWS S3, or parse a PDF).
// After processing, we can delete the temp file.
