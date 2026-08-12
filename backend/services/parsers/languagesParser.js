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

function parseLanguages(lines, sections) {
    const sectionLines = getSectionRange(
        lines,
        sections,
        "languages"
    );

    if (sectionLines.length === 0) {
        return [];
    }

    const languages = [];

    for (const line of sectionLines) {
        const cleaned = line
            .replace(/^[•▪◾◆►*-]\s*/, "")
            .trim();

        if (!cleaned) continue;

        const parts = cleaned
            .split(/[,|;/•]/)
            .map((item) =>
                item
                    .replace(
                        /\s*\((native|fluent|basic|intermediate|advanced)\)/gi,
                        ""
                    )
                    .trim()
            )
            .filter(Boolean);

        for (const language of parts) {
            if (
                !languages.some(
                    (existing) =>
                        existing.toLowerCase() ===
                        language.toLowerCase()
                )
            ) {
                languages.push(language);
            }
        }
    }

    return languages;
}

module.exports = {
    parseLanguages,
};