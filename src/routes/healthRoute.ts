import { Elysia } from "elysia";
import { getHealth} from "../controllers/healthController";
import jwt from "@elysiajs/jwt";
import { authMiddleware } from "../middlewares/authMiddleware";
import { config } from "dotenv";
config()

export const healthRoutes = (app: Elysia): Elysia => {
  return app.group("/api", (app) =>
    app

      .use(
        jwt({
          name: "jwt",
          secret: process.env.JWT_SECRET_KEY || "your-super-secret-key",
        })
      )

      .get("/health", getHealth,{beforeHandle :authMiddleware})

)};

