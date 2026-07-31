// Fills the database with AboutMe data. Run with: "npm run seed" in the folder location "backend/"
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const AboutMe = require("../models/AboutMe");

dotenv.config();

const sampleAboutMe = {
  name: "Kasperi Löfman",
  title: "Software Engineering Student",
  bio: "I'm a software engineering student who enjoys building applications and websites. Some of my hobbies also include floorball and playing clarinet in a band.",
  email: "kasperi.lofman[at]gmail.com",
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "HTML/CSS",
    "Git",
    "Python",
    "Matlab",
  ],
  education: "Studying B.Sc. in Software Engineering, Lappeenranta-Lahti University of Technology (Expected 2026)",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  profileImage: "/src/assets/profile.jpg",
};

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB for seeding...");

    await AboutMe.deleteMany();
    console.log("Cleared existing AboutMe data");

    await AboutMe.create(sampleAboutMe);
    console.log("Seeded AboutMe data successfully");

    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error.message);
    process.exit(1);
  }
};

seedDatabase();
