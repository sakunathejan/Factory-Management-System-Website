import bcrypt from "bcrypt";
import User from "../Models/userLoginModel.js";

export const handleLogin = async (req, res) => {
  const { userId, password, termsAccepted } = req.body;

  // Validate input
  if (!userId || !password) {
    return res.status(400).json({ message: "User ID and password are required." });
  }
  
  try {
    const user = await User.findOne({ userId });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    return res.status(200).json({ message: "Login successful." });
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({ message: "Server error. Please try again later." });
  }
};

