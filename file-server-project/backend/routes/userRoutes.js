const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
  updateUserPassword,
} = require("../controllers/userController");
const protect = require("../middleware/authMiddleware");

router.post("/", loginUser);
router.post("/signup", registerUser);
router.get("/user", protect, getUser);
router.put("/reset", updateUserPassword);

module.exports = router;
