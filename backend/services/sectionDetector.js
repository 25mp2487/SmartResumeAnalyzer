function detectSections(lines) {

    const headings = {

        education: [
            "Education",
            "Educational Background",
            "Academic Qualification",
            "Academic Qualifications",
            "Qualification"
        ],

        skills: [
            "Skills",
            "Technical Skills",
            "Key Skills",
            "Core Skills"
        ],

        projects: [
            "Projects",
            "Project",
            "Academic Projects"
        ],

        certificates: [
            "Certificates",
            "Certifications",
            "Courses"
        ],

        achievements: [
            "Achievements",
            "Awards",
            "Achievements & Awards"
        ],

        languages: [
            "Languages",
            "Language"
        ],

        experience: [
            "Experience",
            "Work Experience",
            "Professional Experience",
            "Internships"
        ]

    };

    const sections = {};

    lines.forEach((line, index) => {

        const text = line.toLowerCase();

        Object.keys(headings).forEach((section) => {

            headings[section].forEach((heading) => {

                if (text === heading.toLowerCase()) {

                    sections[section] = index;

                }

            });

        });

    });

    return sections;

}

module.exports = {
    detectSections
};