const express = require("express");
const router = express.Router();

const multer = require("multer");
const path = require("path");
const fs = require("fs");

const db = require("../db");

const { extractText } = require("../services/pdfService");
const { parseResume } = require("../services/parserService");

// Upload folder
const uploadFolder = path.join(__dirname, "../uploads");

// Create upload folder if it doesn't exist
if (!fs.existsSync(uploadFolder)) {
    fs.mkdirSync(uploadFolder);
}

// Multer Storage
const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, uploadFolder);
    },

    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }

});

const upload = multer({
    storage: storage
});

// =======================
// Upload Resume
// =======================

router.post("/upload", upload.single("resume"), async (req, res) => {

    try {

        if (!req.file) {

            return res.status(400).json({
                message: "No file uploaded."
            });

        }

        console.log("========== Uploaded File ==========");
        console.log(req.file);

        // Extract Resume Text
        const resumeText = await extractText(req.file.path);

        console.log("\n========== Resume Text ==========\n");
        console.log(resumeText);

        // Parse Resume
        const parsedResume = parseResume(resumeText);

        console.log("\n========== Personal Details ==========");
        console.log("Name :", parsedResume.personal.name);
        console.log("Email:", parsedResume.personal.email);
        console.log("Phone:", parsedResume.personal.phone);
        console.log("Address:", parsedResume.personal.address);

        console.log("\n========== Education ==========");
        console.log(parsedResume.education);

        console.log("\n========== Skills ==========");
        console.log(parsedResume.skills);

        console.log("\n========== Projects ==========");
        console.log(parsedResume.projects);

        console.log("\n========== Certificates ==========");
        console.log(parsedResume.certificates);

        console.log("\n========== Achievements ==========");
        console.log(parsedResume.achievements);

        console.log("\n========== Languages ==========");
        console.log(parsedResume.languages);

        // ==========================
        // Insert into Resume table
        // ==========================

        const userID = null;
        const uploadDate = new Date().toISOString().split("T")[0];
        const status = "Uploaded";

        const resumeSQL = `
        INSERT INTO Resume
        (
            user_id,
            file_name,
            file_path,
            upload_date,
            status
        )
        VALUES (?, ?, ?, ?, ?)
        `;

        db.run(
            resumeSQL,
            [
                userID,
                req.file.originalname,
                req.file.path,
                uploadDate,
                status
            ],

            function (err) {

                if (err) {

                    console.error(err);

                    return res.status(500).json({
                        message: "Resume insertion failed.",
                        error: err.message
                    });

                }

                const resumeID = this.lastID;

                // ==========================
                // Insert into Resume_Details
                // ==========================

                const detailsSQL = `
                INSERT INTO Resume_Details
                (
                    resume_id,
                    name,
                    email,
                    phone,
                    education,
                    skills,
                    projects,
                    certifications,
                    achievements,
                    languages,
                    github,
                    linkedin
                )
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                `;

                db.run(

                    detailsSQL,

                    [
                        resumeID,

                        parsedResume.personal.name,
                        parsedResume.personal.email,
                        parsedResume.personal.phone,

                        JSON.stringify(parsedResume.education),

                        JSON.stringify(parsedResume.skills),

                        JSON.stringify(parsedResume.projects),

                        JSON.stringify(parsedResume.certificates),

                        JSON.stringify(parsedResume.achievements),

                        JSON.stringify(parsedResume.languages),

                        "", // GitHub
                        ""  // LinkedIn
                    ],

                    function (err) {

                        if (err) {

                            console.error(err);

                            return res.status(500).json({
                                message: "Resume Details insertion failed.",
                                error: err.message
                            });

                        }

                        return res.status(200).json({

                            message: "Resume uploaded successfully!",

                            resume_id: resumeID,

                            resume_details_id: this.lastID,

                            parsedResume

                        });

                    }

                );

            }

        );

    }

    catch (error) {

        console.error(error);

        return res.status(500).json({

            message: "Resume processing failed.",

            error: error.message

        });

    }

});

module.exports = router;