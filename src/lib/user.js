import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
  },
  { timestamps: true }
);
export const User = mongoose.models?.User || mongoose.model("User", userSchema);
