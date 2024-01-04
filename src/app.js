import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { connectMongoDB } from "./config/configMongoDB.js";
import CONFIG from "./config/config.js";

/** ★━━━━━━━━━━━★ variables ★━━━━━━━━━━━★ */

const app = express();
const { PORT } = CONFIG;

/** ★━━━━━━━━━━━★ middlewares ★━━━━━━━━━━━★*/
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** ★━━━━━━━━━━━★ routes ★━━━━━━━━━━━★ */

app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});
/** ★━━━━━━━━━━━★ connection mongoDB ★━━━━━━━━━━━★ */
connectMongoDB();

const server = app.listen(PORT, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${PORT}`);
  console.log(
    `🚀 Server started on port ${PORT}. 
          at ${new Date().toLocaleString()}`
  );
});

server.on("error", (err) => console.log(err));
