import { Elysia } from "elysia";
import { login } from "../controllers/userController";
import jwt from "@elysiajs/jwt";
import { config } from "dotenv";
config()

export const userRoutes = (app: Elysia): Elysia => {
  return app.group("/api", (app) =>
    app

      .use(
        jwt({
          name: "jwt",
          secret: process.env.JWT_SECRET_KEY || "your-super-secret-key",
        })
      )

      .post("/login", login)
)};

