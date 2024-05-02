import express from "express";
import {
  energy,
  energyBlackBody,
} from "../controllers/radiation.controller.js";
const router = express.Router();

router.post("/energy-black-body", energyBlackBody);
router.post("/energy", energy);

export default router;
