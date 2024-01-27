import { Schema, model } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const usersSchema = new Schema({
  email: String,
  password: String,
});

usersSchema.plugin(passportLocalMongoose, { usernameField: "email" });

export default model("users", usersSchema);
