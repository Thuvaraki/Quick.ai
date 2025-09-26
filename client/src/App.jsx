import React from "react";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import WriteArticle from "./pages/WriteArticle";
import BlogTitles from "./pages/BlogTitles";
import GenerateImages from "./pages/GenerateImages";
import RemoveBackground from "./pages/RemoveBackground";
import RemoveObject from "./pages/RemoveObject";
import ReviewResume from "./pages/ReviewResume";
import Community from "./pages/Community";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";

const App = () => {
  const { getToken } = useAuth();
  useEffect(() => {
    getToken().then((token) => console.log(token));
  }, []);
  // useAuth() is a React hook provided by Clerk.
  // When we call it inside a React component, it gives auth-related info and helper functions about the currently logged-in user.
  // It typically returns an object like this:
  // {
  //   isLoaded, // true if auth state is ready
  //     isSignedIn, // true if user is logged in
  //     userId, // the signed-in user’s ID
  //     sessionId, // current session ID
  //     getToken; // function to fetch the JWT/token
  // }
  // getToken is a function that retrieves a JWT (JSON Web Token) for the signed-in user.

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/ai" element={<Layout />}>
          {/* an index route, meaning If it’s nested under /ai, then navigating to /ai will show Dashboard */}
          <Route index element={<Dashboard />} />
          <Route path="write-article" element={<WriteArticle />} />
          {/* shouldn't be  path="/blog-titles" - leading / makes it absolute, not nested under /ai */}
          <Route path="blog-titles" element={<BlogTitles />} />
          <Route path="generate-images" element={<GenerateImages />} />
          <Route path="remove-background" element={<RemoveBackground />} />
          <Route path="remove-object" element={<RemoveObject />} />
          <Route path="review-resume" element={<ReviewResume />} />
          <Route path="community" element={<Community />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
