import { Request, Response } from "express";
import User, { IUser } from "../models/user";

import jwt from "jsonwebtoken";

export const signup = async (req: Request, res: Response) => {

console.log('1111', req.body)

res.send({msg: 'ok'})
//   const user: IUser = new User({
//     username: req.body.username,
//     email: req.body.email,
//     password: req.body.password,
//   });

//   user.password = await user.encryptPassword(user.password);
//   const savedUser = await user.save();

//   const token: string = jwt.sign({ id: savedUser.id }, "vvvvvv");
//   res.header("auth-token", token).json(savedUser);
};

export const signin = (req: Request, res: Response) => {};

export const profile = (req: Request, res: Response) => {
   
};
