import { Request, Response, NextFunction } from "express";
import jwt, {VerifyOptions} from "jsonwebtoken";
import { config } from "../config";



const verifyToken = async (token: string): Promise<boolean> => {

    const secret: string = config.jwt.type.accsess.secret

    const decodet:any = await jwt.verify(token, secret)


    if (decodet) {
        return true
    } else {
         return false
    }
};


export async function isAuth(req: Request, res: Response, next: NextFunction) {

    const token:any = req.headers.authorization?.split(' ')[1].toString()

    if(!token) {
       return res.status(403).json({msg: 'no token'})
    } 

    const validToken = await verifyToken(token)



    if (!validToken) {
       return res.status(400).json({msg: 'invalid token!'})
    } else {
         next()
    }  
}
