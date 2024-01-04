import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  color: { type: String },
  image_cover: { type: String },
  name: { type: String, required: true },
  keywords: [{ type: String }],
});

export default model("categories", categorySchema);
