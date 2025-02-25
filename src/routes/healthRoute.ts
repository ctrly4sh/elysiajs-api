import { Elysia } from "elysia";
import { getHealth} from "../controllers/healthController";
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


export const healthRoutes = (app: Elysia): any=> {
    return app
        .get("/health", getHealth)
};

