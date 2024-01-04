import { Router } from "express";
import categoryRouter from "./category.router.js";

const router = Router();

router.use("/categories", categoryRouter);

export default router;
