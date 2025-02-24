import { error } from "elysia";
import User from "../models/userModel";
import ResponseHandler from "../utils/ResponseHandler";


export const login = async ({ jwt, body, set, cookie: { auth } }: any) => {
  const { email, password } = body as any;

  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      set.status = 401;
      return ResponseHandler.sendError(set, error, 404, "Invalid credentials");
    }

    if (password !== user.password) {
      set.status = 401;
      return ResponseHandler.sendError(set, error, 404, "Invalid credentials");
    }

    const token = await jwt.sign({email: user.email,});
    
    auth.set({
      value: token,
    });

    set.status = 200;

    return ResponseHandler.sendSuccess(set, token, 201, "Login successfull")
    
  } catch (error: any) {
    console.error("Login error:", error);
    set.status = 500;
    return { message: "Login failed", error: error.message };
  }
};

