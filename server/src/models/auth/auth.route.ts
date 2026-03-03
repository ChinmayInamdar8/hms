import express from "express";
import { AuthLoginController, AuthRegisterController } from "./auth.controller.js";
const router = express.Router();


router.post('/login', AuthLoginController);
router.post('/register', AuthRegisterController);

export default router;