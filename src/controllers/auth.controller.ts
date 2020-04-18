import { Request, Response } from "express";
import User, { IUser } from "../models/user";
import { config } from "../config";

import jwt from "jsonwebtoken";

//SignUp
export const signup = async (req: Request, res: Response) => {
  const user = await User.findOne({ email: req.body.email });

  if (user) return res.status(500).json({ msg: "user exist!" });

  const newuser: IUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  newuser.password = await newuser.encryptPassword(newuser.password);
  const savedUser = await newuser.save();

  res.status(200).json({ msg: "user created", savedUser });
};

// SignIn
export const signin = async (req: Request, res: Response) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) return res.status(500).json({ msg: "user not found!" });

  const isVerify = await user.validatePassword(req.body.password);

  if (!isVerify) {
    return res.status(500).json({ msg: "incorrect data!" });
  } else {
    const token: string = await jwt.sign(
      { userId: user.id },
      config.jwt.type.accsess.secret,
      { expiresIn: config.jwt.type.accsess.expiresIn }
    );

    res.header("Authorization", `Bearer ${token}`).send(user);
  }
};
