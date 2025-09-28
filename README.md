# Quick.AI

Quick.AI is an AI-powered platform that allows users to create articles, blog titles, and images, as well as edit images by removing backgrounds or objects. The platform leverages Gemini API, ClipDrop API, and Cloudinary for content generation and editing. Users can manage their creations, view community-shared content, and interact through likes/dislikes.  

---

## Features

### AI Content Generation
- **Article Writing:** Generate articles with customizable lengths:
  - 500–800 words
  - 800–1200 words
  - 1200+ words  
- **Blog Titles:** Generate 6 different types of blog titles using Gemini API.  
- **Image Generation:** Generate images in 8 styles using ClipDrop API. Users can choose whether to publish images publicly.  
- **Image Editing:**  
  - Remove image background using Cloudinary.  
  - Remove objects from images using Cloudinary.  

### Community & Interaction
- Published images appear in the **Community** section along with the original prompt.  
- Users can **like** or **dislike** community creations.  

### User Experience
- **Home Page:** Displays features, testimonials, plan cards, and a footer.  
- **User Profile:** Manage your account, view your plan, and ensure security.  
- **Dashboard:** Shows the number of creations, active plan, and user's recent creations.  
- **Authentication & Security:**  
  - Sign up, login, and logout handled via **Clerk**.  
  - Provides profile management, billing, and secure authentication.  

---

## Tech Stack

- **Frontend:** React, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** Neon (PostgreSQL)  
- **Authentication & Billing:** Clerk  
- **AI & Media APIs:**  
  - **Gemini API** for articles & blog titles  
  - **ClipDrop API** for image generation  
  - **Cloudinary** for background & object removal  

---

## Installation & Setup

1. Clone the repository:  
    ```bash
   git clone https://github.com/yourusername/Quick.AI.git
   cd Quick.AI
   
2. Install dependencies:
  npm install

3. Create a .env file in the root directory and add the following:
  DATABASE_URL=your_neon_postgres_url
  VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
  GEMINI_API_KEY=your_gemini_api_key
  CLIPDROP_API_KEY=your_clipdrop_api_key
  CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
  CLOUDINARY_API_KEY=your_cloudinary_api_key
  CLOUDINARY_API_SECRET=your_cloudinary_api_secret

4. Run the development server:
  npm run dev

5. Open http://localhost:5173 in your browser.
