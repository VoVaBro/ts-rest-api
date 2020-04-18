import {Request, Response} from 'express'
import User from '../models/user'





export const profile = async (req: Request, res: Response) => {

    const users = await User.find({});
  
    if (!users) return res.status(404).json({ msg: "users not found !" });
  
  
    res.status(200).json({users: users});
  };
  