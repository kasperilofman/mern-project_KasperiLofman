// Mongoose schema for the AboutMe collection
const mongoose = require("mongoose");

const AboutMeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    bio: {
      type: String,
      required: [true, "Bio is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },
    skills: {
      type: [String],
      default: [],
    },
    education: {
      type: String,
      required: [true, "Education is required"],
    },
    github: {
      type: String,
      default: "",
    },
    linkedin: {
      type: String,
      default: "",
    },
    profileImage: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AboutMe", AboutMeSchema);
