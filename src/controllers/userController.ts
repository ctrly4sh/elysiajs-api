import { error } from "elysia";
import User from "../models/userModel";
import ResponseHandler from "../utils/ResponseHandler";
import { Codes } from "../utils/httpCodesAndMessages";


export const login = async ({ jwt, body, set, cookie: { auth } }: any) => {
  const { email, password } = body as any;

  try {

    console.log("email", email);
    
    if(!(email == "yash@gmail.com") || !(password == "yash111") ){
      return ResponseHandler.sendError(set,Codes.UNAUTHORIZED,201,"invalid credentials")

    }
    const token = await jwt.sign({email: email});
    return ResponseHandler.sendSuccess(set, token, 201, "Login successfull")

    
  } catch (error: any) {
    console.error("Login error:", error);
    set.status = 500;
    return { message: "Login failed", error: error.message };
  }
};

