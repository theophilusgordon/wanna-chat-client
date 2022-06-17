const express = require("express");
const router = express.Router();
const {
  getFiles,
  createFile,
  updateFile,
  deleteFile,
} = require("../controllers/fileController");
const protect = require("../middleware/authMiddleware");

router.route("/dashboard").get(protect, getFiles).post(protect, createFile);
router.route("/:id").put(protect, updateFile).delete(protect, deleteFile);

module.exports = router;
