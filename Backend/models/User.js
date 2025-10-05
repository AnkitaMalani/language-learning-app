import { Schema, model } from "mongoose";

const userSchema = new Schema({
  firstName: { type: String, required: [true, "FirstName is required"] },
  lastName: { type: String, required: [true, "LastName is required"] },
  email: { type: String, required: [true, "Email is required"], unique: true },
  password: {
    type: String,
    required: [true, "Password is required"],
    select: false,
  },
  createAt: { type: Date, default: Date.now },
});

export default model("User", userSchema);
