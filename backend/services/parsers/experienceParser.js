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

function parseExperience(lines, sections) {
    const sectionLines = getSectionRange(
        lines,
        sections,
        "experience"
    );

    if (sectionLines.length === 0) {
        return [];
    }

    const experiences = [];

    const dateRegex =
        /\b(19|20)\d{2}\b\s*(?:[-–]\s*(?:\d{2,4}|present|current))?/i;

    let current = null;

    for (const line of sectionLines) {
        const cleaned = line
            .replace(/^[•▪◾◆►*-]\s*/, "")
            .trim();

        if (!cleaned) continue;

        const dateMatch =
            cleaned.match(dateRegex);

        // A short line without a date is often
        // a job title or company name.
        if (!current) {
            current = {
                role: cleaned,
                company: "",
                duration: dateMatch
                    ? dateMatch[0]
                    : "",
                description: "",
            };

            continue;
        }

        if (
            !current.company &&
            !dateMatch &&
            cleaned.length < 100
        ) {
            current.company = cleaned;
            continue;
        }

        if (
            dateMatch &&
            !current.duration
        ) {
            current.duration = dateMatch[0];
            continue;
        }

        current.description +=
            (current.description ? " " : "") +
            cleaned;
    }

    if (current) {
        experiences.push(current);
    }

    return experiences;
}

module.exports = {
    parseExperience,
};