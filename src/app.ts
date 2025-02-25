import { Elysia } from "elysia";
import { userRoutes } from "./routes/userRoutes";
import { config } from "dotenv";
import cors from "@elysiajs/cors";
import { mongoDBConnection } from "./services/mongoConnection";
import { healthRoutes } from "./routes/healthRoute";
import { rateLimit } from "elysia-rate-limit";
import { helmet } from "elysia-helmet";

// Initialize MongoDB connection
mongoDBConnection();

// Load environment variables from .env file
config();

// Set the port, defaulting to 3000 if not defined
const PORT: number = Number(process.env.PORT) || 3000;

/**
 * Initializes the Elysia server with essential security and performance features.
 * - Uses rate limiting to prevent abuse.
 * - Adds security headers with Helmet.
 * - Enables CORS for cross-origin requests.
 * - Configures routes for user authentication and health checks.
 * - Starts the server on the specified port.
 */
const app = new Elysia()
  // Apply rate limiting to prevent excessive requests from clients
  .use(rateLimit())

  // Secure the application by adding various HTTP headers (e.g., CSP, HSTS, XSS Protection)
  .use(helmet())

  // Enable CORS for cross-origin requests (default: allows all origins)
  .use(cors({
    origin: ["*"] // Update with allowed origins for better security
  }))

  // Register user-related routes (e.g., login, authentication, profile management)
  .use(userRoutes) // demo route for jwt verification

  // Register health check routes (useful for monitoring)
  .use(healthRoutes)

  // Start the server and listen on the specified port
  .listen(PORT);

// Log the server's status to the console
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
