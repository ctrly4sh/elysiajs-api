import { Elysia } from "elysia";
import { getHealth} from "../controllers/healthController";
import jwt from "@elysiajs/jwt";
import { authMiddleware } from "../middlewares/authMiddleware";
import { config } from "dotenv";

// Load environment variables from .env file
config()


/**
 * Defines health check routes for the application.
 * - Uses JWT authentication for secured access.
 * - Applies authentication middleware before handling requests.
 * - Provides a `/health` endpoint to check server status.
 * 
 * @param {Elysia} app - The Elysia application instance.
 * @returns {Elysia} - The modified application instance with health routes.
 */


export const healthRoutes = (app: Elysia): Elysia => {
  return app.group("/api", (app) =>
    app
      // Register JWT middleware to handle authentication
      .use(
        jwt({
          name: "jwt", // Assigns JWT to request context
          secret: process.env.JWT_SECRET_KEY || "your-super-secret-key", // Uses environment variable or fallback
        })
      )

          // Define a health check endpoint that requires authentication

      .get("/health", getHealth,{beforeHandle :authMiddleware})

)};

