import { Codes } from "../utils/httpCodesAndMessages";
import ResponseHandler from "../utils/ResponseHandler";

export const authMiddleware = async ({ jwt, headers, set, store }: any) => {
  const authHeader: string = headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return ResponseHandler.sendError(
      set,
      "No token provided",
      Codes.UNAUTHORIZED,
      "Unauthorized: No token provided"
    );
  }

  const token = authHeader.split(" ")[1];

  try {
    const profile = await jwt.verify(token);

    if (!profile) {
      return ResponseHandler.sendError(
        set,
        "Invalid token",
        Codes.UNAUTHORIZED,
        "Unauthorized: Invalid token"
      );
    }

    store.profile = profile;
    console.log("Middleware done => proceeding to controller");

  } catch (error: any) {
    let statusCode = Codes.UNAUTHORIZED;
    let message = "Authentication failed";

    if (error.name === "TokenExpiredError") {
      message = "Token has expired";
    } else if (error.name === "JsonWebTokenError") {
      message = "Invalid token format";
    }

    return ResponseHandler.sendError(set, error, statusCode, message);
  }
};
