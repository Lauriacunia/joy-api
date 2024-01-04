import { Schema, model } from "mongoose";

const locationSchema = new Schema({
  neighborhood: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
});

export default model("locations", locationSchema);
