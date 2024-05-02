import express from "express";
import { convection } from "../controllers/convection.controller.js";
const router = express.Router();

router.post("/convection", convection);

export default router;
