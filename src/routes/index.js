import { Router } from "express";

const router = Router();

router.use("/", (req, res) => {
  res.send("¡Hola, router!");
});

export default router;
