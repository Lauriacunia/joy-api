import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { connectMongoDB } from "./config/configMongoDB.js";
import CONFIG from "./config/config.js";
import router from "./routes/index.js";
import { errorHandler } from "./utils/errorHandler.js";
import cookieParser from "cookie-parser";
import session from "express-session";

/** ━━━━━━━━━━━ variables ━━━━━━━━━━━ */

const app = express();
const { PORT } = CONFIG;

/** ━━━━━━━━━━━ middlewares ━━━━━━━━━━━*/
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);
app.use(cookieParser(CONFIG.SECRET));
app.use(
  session({ secret: CONFIG.SECRET, resave: true, saveUninitialized: true })
);

/** ━━━━━━━━━━━ routes ━━━━━━━━━━━ */
app.use("/", router);

/** ━━━━━━━━━━━connection mongoDB ━━━━━━━━━━━ */
connectMongoDB();

/** ━━━━━━━━━━━ server up ━━━━━━━━━━━ */
const server = app.listen(PORT, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${PORT}`);
  console.log(
    `🚀 Server started on port ${PORT}. 
          at ${new Date().toLocaleString()}`
  );
});

server.on("error", (err) => console.log(err));
