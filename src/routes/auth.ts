import { Router } from "express";
import { check } from "express-validator";

import { signup, signin } from "../controllers/auth.controller";
const router: Router = Router();

router.post(
  "/signup",
  [
    check("email", "Некорректный email").isEmail(),
    check("password", "Минимальная длина пароля 6 символов").isLength({
      min: 6,
    }),
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email", "Введите корректный email")
      .normalizeEmail()
      .isEmail(),
    check("password", "Введите пароль").exists(),
  ],
  signin
);

export default router;
