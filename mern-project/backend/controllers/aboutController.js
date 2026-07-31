// Controller functions for the /api/about routes
const AboutMe = require("../models/AboutMe");

// GET /api/about
const getAboutMe = async (req, res) => {
  try {
    const aboutMe = await AboutMe.findOne();

    if (!aboutMe) {
      return res.status(404).json({
        success: false,
        message: "About Me information not found. Please seed the database.",
      });
    }

    res.status(200).json({ success: true, data: aboutMe });
  } catch (error) {
    console.error("Error in getAboutMe:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error while fetching About Me information",
    });
  }
};

// POST /api/about
const createAboutMe = async (req, res) => {
  try {
    // only one profile should exist
    const existing = await AboutMe.findOne();
    if (existing) {
      return res.status(400).json({
        success: false,
        message: "About Me information already exists. Use PUT to update it instead.",
      });
    }

    const aboutMe = await AboutMe.create(req.body);
    res.status(201).json({ success: true, data: aboutMe });
  } catch (error) {
    console.error("Error in createAboutMe:", error.message);

    res.status(500).json({
      success: false,
      message: "Server error while creating About Me information",
    });
  }
};

// PUT /api/about
const updateAboutMe = async (req, res) => {
  try {
    let aboutMe = await AboutMe.findOne();

    if (!aboutMe) {
      return res.status(404).json({
        success: false,
        message: "About Me information not found",
      });
    }

    aboutMe = await AboutMe.findByIdAndUpdate(aboutMe._id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ success: true, data: aboutMe });
  } catch (error) {
    console.error("Error in updateAboutMe:", error.message);

    res.status(500).json({
      success: false,
      message: "Server error while updating About Me information",
    });
  }
};

// DELETE /api/about
const deleteAboutMe = async (req, res) => {
  try {
    const aboutMe = await AboutMe.findOne();

    if (!aboutMe) {
      return res.status(404).json({
        success: false,
        message: "About Me information not found",
      });
    }

    await AboutMe.findByIdAndDelete(aboutMe._id);
    res.status(200).json({
      success: true,
      message: "About Me information deleted successfully",
    });
  } catch (error) {
    console.error("Error in deleteAboutMe:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error while deleting About Me information",
    });
  }
};

module.exports = { getAboutMe, createAboutMe, updateAboutMe, deleteAboutMe };
