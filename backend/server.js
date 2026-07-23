const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 5000;

app.use(cors());

// Create uploads folder automatically if it doesn't exist
const uploadFolder = path.join(__dirname, "uploads");

if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder);
}

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadFolder);
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

// Test API
app.get("/api/message", (req, res) => {
  res.send("Frontend and Backend Connected Successfully!");
});

// Upload API
app.post("/upload", (req, res) => {
  upload.single("resume")(req, res, function (err) {
    if (err) {
      console.error("Upload Error:", err);

      return res.status(500).json({
        message: "Upload failed",
        error: err.message,
      });
    }

    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded",
      });
    }

    console.log("========== Resume Uploaded ==========");
    console.log(req.file);

    res.json({
      message: "Resume uploaded successfully!",
      filename: req.file.originalname,
      size: req.file.size,
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});