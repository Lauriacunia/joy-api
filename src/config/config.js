import dotenv from "dotenv";

dotenv.config();

const CONFIG = {
  PORT: process.env.PORT || "3000",
  DB_NAME: process.env.DB_NAME || "test",
  MONGO_USER: process.env.MONGO_USER || "",
  MONGO_PASS: process.env.MONGO_PASS || "",
  DATASOURCE: process.env.DATASOURCE || "MONGO",
  SECRET: process.env.SECRET || "",
};

export default CONFIG;
