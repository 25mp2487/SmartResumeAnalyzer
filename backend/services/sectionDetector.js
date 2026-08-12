// ==========================================
// SECTION DETECTOR
// ==========================================

const sectionPatterns = {
    education: [
        "education",
        "educational background",
        "educational qualification",
        "educational qualifications",
        "academic background",
        "academic qualification",
        "academic qualifications",
        "academic details",
        "academic profile",
        "qualifications",
        "qualification",
        "studies",
    ],

    skills: [
        "skills",
        "skill",
        "technical skills",
        "technical skill",
        "key skills",
        "core skills",
        "professional skills",
        "computer skills",
        "technical expertise",
        "expertise",
        "competencies",
        "core competencies",
    ],

    projects: [
        "projects",
        "project",
        "academic projects",
        "academic project",
        "personal projects",
        "personal project",
        "key projects",
        "major projects",
        "project experience",
    ],

    certificates: [
        "certificates",
        "certificate",
        "certifications",
        "certification",
        "courses",
        "courses and certifications",
        "training",
        "training and certifications",
        "licenses and certifications",
    ],

    achievements: [
        "achievements",
        "achievement",
        "awards",
        "award",
        "honors",
        "honours",
        "accomplishments",
        "achievements and awards",
        "awards and achievements",
    ],

    languages: [
        "languages",
        "language",
        "language skills",
        "linguistic skills",
    ],

    experience: [
        "experience",
        "work experience",
        "professional experience",
        "employment history",
        "employment",
        "career history",
        "work history",
        "internships",
        "internship",
        "industrial experience",
        "professional background",
    ],

    about: [
        "about",
        "about me",
        "profile",
        "profile summary",
        "professional summary",
        "summary",
        "career summary",
        "career objective",
        "objective",
        "professional profile",
        "personal profile",
        "overview",
    ],
};

// ------------------------------------------
// Normalize heading
// ------------------------------------------

function normalizeHeading(text) {
    return text
        .toLowerCase()
        .replace(/[|•▪◾◆►]/g, " ")
        .replace(/^[\d.\-_)]+\s*/, "")
        .replace(/[:\-–—]+$/, "")
        .replace(/\s+/g, " ")
        .trim();
}

// ------------------------------------------
// Check whether line is a heading
// ------------------------------------------

function detectSectionType(line) {
    const normalized = normalizeHeading(line);

    if (!normalized) {
        return null;
    }

    // Exact matching first
    for (const section of Object.keys(sectionPatterns)) {
        for (const pattern of sectionPatterns[section]) {
            if (normalized === pattern) {
                return section;
            }
        }
    }

    // More flexible matching
    for (const section of Object.keys(sectionPatterns)) {
        for (const pattern of sectionPatterns[section]) {
            if (
                normalized.startsWith(pattern + " ") ||
                normalized.endsWith(" " + pattern)
            ) {
                return section;
            }
        }
    }

    return null;
}

// ------------------------------------------
// Detect all sections
// ------------------------------------------

function detectSections(lines) {
    const sections = {};

    lines.forEach((line, index) => {
        const section = detectSectionType(line);

        if (section) {
            sections[section] = index;
        }
    });

    return sections;
}

// ------------------------------------------
// Export
// ------------------------------------------

module.exports = {
    detectSections,
    detectSectionType,
    normalizeHeading,
};