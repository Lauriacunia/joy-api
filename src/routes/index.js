import { Router } from "express";
import categoryRouter from "./category.router.js";
import locationRouter from "./location.router.js";
import voucherRouter from "./voucher.router.js";
import authRouter from "./auth.router.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/categories", categoryRouter);
router.use("/locations", locationRouter);
router.use("/vouchers", voucherRouter);

export default router;
