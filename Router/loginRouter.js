import express from "express";
import { handleLogin } from "../Controller/loginController.js";

const router = express.Router();

// POST route for login
router.post("/", handleLogin);

export default router;
