import express from "express";
import newsControllers from "../app/controllers/NewsController.js";

const router = express.Router();

router.get("/:slug", newsControllers.show);
router.get("/", newsControllers.index);

export default router;
