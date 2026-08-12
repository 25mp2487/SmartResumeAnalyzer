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

function parseAchievements(lines, sections) {
    const sectionLines = getSectionRange(
        lines,
        sections,
        "achievements"
    );

    if (sectionLines.length === 0) {
        return [];
    }

    return sectionLines
        .map((line) =>
            line
                .replace(/^[•▪◾◆►*-]\s*/, "")
                .trim()
        )
        .filter((line) => line.length > 0);
}

module.exports = {
    parseAchievements,
};