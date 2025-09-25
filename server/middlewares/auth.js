import { clerkClient } from "@clerk/express";

//Middleware to check userId and hasPremiumPlan

export const auth = async (req, res, next) => {
  try {
    const { userId } = req.auth;

    const user = await clerkClient.users.getUser(userId);

    // Check if user has a premium plan from metadata
    const hasPremiumPlan = user.privateMetadata.plan === "premium";

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
