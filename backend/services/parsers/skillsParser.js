function getSectionRange(lines, sections, sectionName) {
    const start = sections[sectionName];

    if (start === undefined) {
        return [];
    }

    const nextSections = Object.values(sections)
        .filter((index) => index > start)
        .sort((a, b) => a - b);

    const end =
        nextSections.length > 0
            ? nextSections[0]
            : lines.length;

    return lines.slice(start + 1, end);
}

function parseSkills(lines, sections) {
    const sectionLines = getSectionRange(
        lines,
        sections,
        "skills"
    );

    if (sectionLines.length === 0) {
        return [];
    }

    const skills = [];

    for (const line of sectionLines) {
        let cleaned = line
            .replace(/^[•▪◾◆►*-]\s*/, "")
            .trim();

        if (!cleaned) continue;

        // Remove category prefixes
        cleaned = cleaned.replace(
            /^(technical skills|programming languages|tools|technologies|frameworks|databases)\s*[:\-]\s*/i,
            ""
        );

        const parts = cleaned
            .split(/[,|;•]/)
            .map((item) => item.trim())
            .filter(Boolean);

        for (const skill of parts) {
            if (skill.length < 1) continue;
            if (skill.length > 50) continue;

            if (!skills.some(
                (existing) =>
                    existing.toLowerCase() ===
                    skill.toLowerCase()
            )) {
                skills.push(skill);
            }
        }
    }

    return skills;
}

module.exports = {
    parseSkills,
};