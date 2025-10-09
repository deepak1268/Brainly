import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
const JWT_USER_SECRET = "deepak"

export async function userAuth(req: Request,res: Response,next: NextFunction){
    try{
        const token = req.header("token");
        if(token){
            const decodedInfo  = jwt.verify(token,JWT_USER_SECRET) // will throw error if not verified
            if(typeof decodedInfo === "string"){
                return res.status(403).json({
                    message: "Invalid Token"
                })
            }
            req.userId = decodedInfo.userId
            next()
        } 
        else{
            return res.status(403).json({
                message: "You are not logged in."
            })
        }
    } catch(err){
        return res.status(403).json({
            message: "Invalid Token"
        })
    }
}