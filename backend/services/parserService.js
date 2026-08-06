const { detectSections } = require("./sectionDetector");

const { parsePersonal } = require("./parsers/personalParser");
const { parseEducation } = require("./parsers/educationParser");
const { parseSkills } = require("./parsers/skillsParser");
const { parseProjects } = require("./parsers/projectsParser");
const { parseCertificates } = require("./parsers/certificatesParser");
const { parseAchievements } = require("./parsers/achievementsParser");
const { parseLanguages } = require("./parsers/languagesParser");

function parseResume(text) {

    // Split resume into clean lines
    const lines = text
        .split("\n")
        .map(line => line.trim())
        .filter(line => line.length > 0);

    // Detect section positions
    const sections = detectSections(lines);

    // Call individual parsers
    const personal = parsePersonal(lines, sections);

    const education = parseEducation(lines, sections);

    const skills = parseSkills(lines, sections);

    const projects = parseProjects(lines, sections);

    const certificates = parseCertificates(lines, sections);

    const achievements = parseAchievements(lines, sections);

    const languages = parseLanguages(lines, sections);

    // Final Resume Object
    return {

        personal,

        education,

        skills,

        projects,

        certificates,

        achievements,

        languages

    };

}

module.exports = {
    parseResume
};