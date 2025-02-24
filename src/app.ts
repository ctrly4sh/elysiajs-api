import { Elysia } from "elysia";
import { userRoutes } from "./routes/userRoutes";
import { config } from "dotenv";
import cors from "@elysiajs/cors";
import { mongoDBConnection } from "./services/mongoConnection";
import { healthRoutes } from "./routes/healthRoute";
mongoDBConnection();

const PORT = process.env.PORT;
config()

const app = new Elysia()
  .use(cors({
    origin: ["*"] //Can add more origins 
  }))
  .use(userRoutes)
  .use(healthRoutes)
  .listen(PORT)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
