import { Request, Response } from "express";
import Wod, { IWod } from "../models/wod";
import jwt from "jsonwebtoken";

async function getUserId(token: string): Promise<string> {
  const payload: any = await jwt.decode(token, { complete: true });
  return payload.payload.userId;
}

export const createWod = async (req: Request, res: Response) => {
  const token: any = req.headers.authorization?.split(" ")[1].toString();

  const id = await getUserId(token);

  const newWod: IWod = new Wod({
    title: req.body.title,
    description: req.body.description,
    trainingTime: req.body.trainingTime,
    userId: id,
  });
  await newWod.save();
  res.status(200).json(newWod);
};

export const deleteWod = async (req: Request, res: Response) => {
  if (!req.query.wodId) {
    return res
      .status(500)
      .json({ msg: "no such wod!" })
      .redirect("/user/wods");
  } else {
    await Wod.findOneAndDelete({ _id: req.query.wodId });
    return res
      .status(200)
      .json({ msg: `Wod id: ${req.query.wodId} deleted!` })
      .redirect("/user/wods");
  }
};

export const changeWodValue = async (req: Request, res: Response) => {
  const wod = await Wod.findOne({ _id: req.query.wodId });

  if (!wod) {
    return res.status(404).json({ msg: "now such wod!" });
  } else {
    return res.status(200).json({
      title: wod.title,
      description: wod.description,
      trainingTime: wod.trainingTime,
    });
  }
};

export const editWod = async (req: Request, res: Response) => {
  const wod = await Wod.findOne({ _id: req.query.wodId });

  if (!wod) {
    return res.status(404).json({ msg: "now such wod!" });
  } else {
    await Wod.updateOne(
      { _id: req.query.wodId },
      {
        title: req.body.title,
        description: req.body.description,
        trainingTime: req.body.trainingTime,
      }
    );

    return res.status(200).json({ msg: "Wod update!" });
  }
};
