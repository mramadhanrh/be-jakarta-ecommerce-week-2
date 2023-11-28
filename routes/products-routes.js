import express from "express";
import { getProductsList } from "../controllers/products-controllers.js";

const router = express.Router();

router.get("/list", getProductsList);

export default router;
