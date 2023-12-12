import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { CORS_ORIGIN } from "./config/index.js";
import postArticleRoute from "./routes/article.routes.js";
import { errHandler } from "./middlewares/errorHandler.middleware.js";
const app = express();

app.use(
  cors({
    origin: CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.use("/api/v1/articles", postArticleRoute);

app.get("/", (req, res) => {
  res.send("Hii From Server of ESP");
});

app.use(errHandler);

export { app };
