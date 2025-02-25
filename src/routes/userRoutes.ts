import { Elysia } from "elysia";
import { login } from "../controllers/userController";
import jwt from "@elysiajs/jwt";
import { config } from "dotenv";
config()

export const userRoutes = (app: Elysia): Elysia => {
  return app.group("/api", (app) =>
    app
      .post("/login", login)
)};

