import { Schema, model } from "mongoose";

const voucherSchema = new Schema({
  title: { type: String, required: true, maxlength: 50 },
  description: { type: String, required: true, maxlength: 1000 },
  location: { type: Schema.Types.ObjectId, ref: "Location", required: true },
  rating: { type: Number, min: 0, max: 5, default: 5 },
  thumbnail: [{ type: String }],
  price: { type: Number, required: true, min: 0 },
  expiration_date: { type: Date },
  participants: { type: Number, default: 1 },
  available: { type: Boolean, default: true },
  categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
});

export default model("vouchers", voucherSchema);
