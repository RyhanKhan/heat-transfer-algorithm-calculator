import express from "express";
import {
  cylinder,
  sphere,
  wall,
} from "../controllers/conduction.controller.js";
const router = express.Router();

router.post("/wall", wall);
router.post("/cylinder", cylinder);
router.post("/sphere", sphere);

export default router;
