// Routes for /api/about
const express = require("express");
const {
  getAboutMe,
  createAboutMe,
  updateAboutMe,
  deleteAboutMe,
} = require("../controllers/aboutController");

const router = express.Router();

router.route("/").get(getAboutMe).post(createAboutMe).put(updateAboutMe).delete(deleteAboutMe);

module.exports = router;
