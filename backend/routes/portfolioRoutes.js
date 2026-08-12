const express = require("express");
const router = express.Router();
const db = require("../db");

// =====================================================
// GET PORTFOLIO BY PORTFOLIO ID
// GET /api/portfolio/:portfolioId
// =====================================================

router.get("/:portfolioId", (req, res) => {
    const { portfolioId } = req.params;

    const sql = `
        SELECT *
        FROM portfolio
        WHERE portfolio_id = ?
    `;

    db.get(sql, [portfolioId], (err, portfolio) => {

        if (err) {
            console.error("Error fetching portfolio:", err);

            return res.status(500).json({
                error: "Failed to fetch portfolio"
            });
        }

        if (!portfolio) {
            return res.status(404).json({
                message: "Portfolio not found"
            });
        }

        try {

            // Personal details
            portfolio.personal = portfolio.personal
                ? JSON.parse(portfolio.personal)
                : {
                    name: "",
                    email: "",
                    phone: "",
                    github: "",
                    linkedin: ""
                };

            // Education
            portfolio.education = portfolio.education
                ? JSON.parse(portfolio.education)
                : [];

            // Skills
            portfolio.skills = portfolio.skills
                ? JSON.parse(portfolio.skills)
                : [];

            // Projects
            portfolio.projects = portfolio.projects
                ? JSON.parse(portfolio.projects)
                : [];

            // Certificates
            portfolio.certificates = portfolio.certificates
                ? JSON.parse(portfolio.certificates)
                : [];

            // Achievements
            portfolio.achievements = portfolio.achievements
                ? JSON.parse(portfolio.achievements)
                : [];

            // Languages
            portfolio.languages = portfolio.languages
                ? JSON.parse(portfolio.languages)
                : [];

            // Section order
            portfolio.section_order = portfolio.section_order
                ? JSON.parse(portfolio.section_order)
                : [
                    "about",
                    "education",
                    "skills",
                    "projects",
                    "certificates",
                    "achievements",
                    "languages"
                ];

        } catch (parseError) {

            console.error(
                "Error parsing portfolio data:",
                parseError
            );

            return res.status(500).json({
                error: "Invalid portfolio data"
            });
        }

        res.status(200).json({
            portfolio: portfolio
        });
    });
});


// =====================================================
// CREATE PORTFOLIO
// POST /api/portfolio
// =====================================================

router.post("/", (req, res) => {

    const {
        resume_id,
        template_name,
        theme,
        photo_path,
        about,
        education,
        skills,
        projects,
        certificates,
        achievements,
        languages,
        section_order
    } = req.body;


    // -------------------------------------------------
    // Check resume ID
    // -------------------------------------------------

    if (!resume_id) {

        return res.status(400).json({
            error: "resume_id is required"
        });

    }


    // -------------------------------------------------
    // Get personal details from Resume_Details
    // -------------------------------------------------

    const resumeSQL = `
        SELECT
            name,
            email,
            phone,
            github,
            linkedin
        FROM Resume_Details
        WHERE resume_id = ?
    `;


    db.get(
        resumeSQL,
        [resume_id],
        (err, resumeDetails) => {

            if (err) {

                console.error(
                    "Error fetching resume details:",
                    err
                );

                return res.status(500).json({
                    error: "Failed to fetch resume details"
                });

            }


            if (!resumeDetails) {

                return res.status(404).json({
                    error: "Resume details not found"
                });

            }


            // -------------------------------------------------
            // Personal details automatically taken from resume
            // -------------------------------------------------

            const personal = {

                name: resumeDetails.name || "",

                email: resumeDetails.email || "",

                phone: resumeDetails.phone || "",

                github: resumeDetails.github || "",

                linkedin: resumeDetails.linkedin || ""

            };


            // -------------------------------------------------
            // Create portfolio
            // -------------------------------------------------

            const portfolioSQL = `
                INSERT INTO portfolio
                (
                    resume_id,
                    template_name,
                    theme,
                    photo_path,
                    personal,
                    about,
                    education,
                    skills,
                    projects,
                    certificates,
                    achievements,
                    languages,
                    section_order,
                    generated_date
                )
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))
            `;


            const values = [

                resume_id,

                template_name || "minimal",

                theme || "light",

                photo_path || null,

                JSON.stringify(personal),

                about || "",

                JSON.stringify(education || []),

                JSON.stringify(skills || []),

                JSON.stringify(projects || []),

                JSON.stringify(certificates || []),

                JSON.stringify(achievements || []),

                JSON.stringify(languages || []),

                JSON.stringify(
                    section_order || [
                        "about",
                        "education",
                        "skills",
                        "projects",
                        "certificates",
                        "achievements",
                        "languages"
                    ]
                )

            ];


            db.run(
                portfolioSQL,
                values,
                function (err) {

                    if (err) {

                        console.error(
                            "SQLite ERROR while creating portfolio:",
                            err
                        );

                        return res.status(500).json({
                            error: err.message
                        });

                    }


                    console.log(
                        "Portfolio created. ID:",
                        this.lastID
                    );


                    return res.status(201).json({

                        message:
                            "Portfolio created successfully",

                        portfolio_id:
                            this.lastID

                    });

                }
            );

        }
    );
});


// =====================================================
// UPDATE PORTFOLIO
// PUT /api/portfolio/:portfolioId
// =====================================================

router.put("/:portfolioId", (req, res) => {

    const { portfolioId } = req.params;


    const {
        personal,
        template_name,
        theme,
        photo_path,
        about,
        education,
        skills,
        projects,
        certificates,
        achievements,
        languages,
        section_order
    } = req.body;


    const sql = `
        UPDATE portfolio
        SET
            personal = ?,
            template_name = ?,
            theme = ?,
            photo_path = ?,
            about = ?,
            education = ?,
            skills = ?,
            projects = ?,
            certificates = ?,
            achievements = ?,
            languages = ?,
            section_order = ?
        WHERE portfolio_id = ?
    `;


    const values = [

        JSON.stringify(
            personal || {
                name: "",
                email: "",
                phone: "",
                github: "",
                linkedin: ""
            }
        ),

        template_name || "minimal",

        theme || "light",

        photo_path || null,

        about || "",

        JSON.stringify(education || []),

        JSON.stringify(skills || []),

        JSON.stringify(projects || []),

        JSON.stringify(certificates || []),

        JSON.stringify(achievements || []),

        JSON.stringify(languages || []),

        JSON.stringify(section_order || []),

        portfolioId

    ];


    db.run(
        sql,
        values,
        function (err) {

            if (err) {

                console.error(
                    "Error updating portfolio:",
                    err
                );

                return res.status(500).json({
                    error: "Failed to update portfolio"
                });

            }


            if (this.changes === 0) {

                return res.status(404).json({
                    message: "Portfolio not found"
                });

            }


            return res.status(200).json({

                message:
                    "Portfolio updated successfully"

            });

        }
    );
});


// =====================================================
// DELETE PORTFOLIO
// DELETE /api/portfolio/:portfolioId
// =====================================================

router.delete("/:portfolioId", (req, res) => {

    const { portfolioId } = req.params;


    const sql = `
        DELETE FROM portfolio
        WHERE portfolio_id = ?
    `;


    db.run(
        sql,
        [portfolioId],
        function (err) {

            if (err) {

                console.error(
                    "Error deleting portfolio:",
                    err
                );

                return res.status(500).json({
                    error: "Failed to delete portfolio"
                });

            }


            if (this.changes === 0) {

                return res.status(404).json({
                    message: "Portfolio not found"
                });

            }


            return res.status(200).json({

                message:
                    "Portfolio deleted successfully"

            });

        }
    );
});


module.exports = router;