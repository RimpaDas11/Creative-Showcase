



const express = require("express");
const router = express.Router();
const multer = require("multer");
const jwt = require("jsonwebtoken");
const Image = require("../models/Image");


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });


router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1]; // Bearer <token>
    const decoded = jwt.verify(token, "SECRET_KEY");

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const image = new Image({
      username: decoded.username,
      imageUrl: `/uploads/${req.file.filename}`,
    });

    await image.save();

    res.status(200).json(image);
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: "Upload failed" });
  }
});


router.get("/user", async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, "SECRET_KEY");

    const images = await Image.find({ username: decoded.username });
    res.json(images);
  } catch (err) {
    res.status(401).json([]);
  }
});


router.get("/all", async (req, res) => {
  try {
    const images = await Image.find().sort({ createdAt: -1 });
    res.json(images);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


router.get("/user/:username", async (req, res) => {
  try {
    const images = await Image.find({ username: req.params.username });
    res.json(images);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
