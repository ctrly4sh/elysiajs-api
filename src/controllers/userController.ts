import ResponseHandler from "../utils/ResponseHandler";
import { Codes } from "../utils/httpCodesAndMessages";

/**
 * Handles user login by verifying email and password.
 * Currently, authentication is hardcoded for demonstration purposes.
 * In a real application, you should fetch the user from the database and validate credentials.
 */
export const login = async ({ jwt, body, set, cookie: { auth } }: any) => {
  // Extract email and password from request body
  const { email, password } = body as any;

  try {
    console.log("email", email);

    /**
     * Temporary Hardcoded Login:
     * - This is just to test JWT authentication.
     * - In a real application, replace this with proper user authentication logic.
     */
    if (!(email == "yash@gmail.com") || !(password == "yash111")) {
      return ResponseHandler.sendError(
        set,
        Codes.UNAUTHORIZED,
        201,
        "Invalid credentials"
      );
    }

    // Generate JWT Token upon successful authentication
    const token = await jwt.sign({ email: email });

    return ResponseHandler.sendSuccess(set, token, 201, "Login successful");
  } catch (error: any) {
    console.error("Login error:", error);
    set.status = 500;
    return { message: "Login failed", error: error.message };
  }
};
