import express, { RequestHandler } from "express";
import { register, login } from "../../controllers/authController";
import { validateRegistration, validateLogin } from "../../middleware/validator";

const router = express.Router();

router.post(
  "/register",
  validateRegistration as RequestHandler[],register as RequestHandler
);
router.post(
  "/login",
  validateLogin as RequestHandler[],login as RequestHandler
);

export default router;
