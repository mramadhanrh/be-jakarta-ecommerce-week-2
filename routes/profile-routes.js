import express from "express";
import {
  getMyProfile,
  getProfileById,
} from "../controllers/profile-controllers.js";

const router = express.Router();

// router.get("/me", getMyProfile);

router.get("/", getProfileById);

export default router;
