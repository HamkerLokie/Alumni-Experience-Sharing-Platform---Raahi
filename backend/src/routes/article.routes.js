import { Router } from "express";
import {
  getSingleArticle,
  postArticle,
} from "../controllers/article.controller.js";
import {
  getAllRequest,
  requestArticle,
} from "../controllers/request.controller.js";

const router = Router();

router.route("/post").post(postArticle);

router.route("/:articleId").get(getSingleArticle);

router.route("/request").post(requestArticle);
router.route("/request/all").get(getAllRequest);

export default router;
