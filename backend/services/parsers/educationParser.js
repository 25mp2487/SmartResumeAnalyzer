function getSectionRange(lines, sections, sectionName) {
    const start = sections[sectionName];

    if (start === undefined) {
        return [];
    }

    const sectionNames = Object.values(sections)
        .filter((index) => index > start)
        .sort((a, b) => a - b);

    const end =
        sectionNames.length > 0
            ? sectionNames[0]
            : lines.length;

    return lines.slice(start + 1, end);
}

function parseEducation(lines, sections) {
    const sectionLines = getSectionRange(
        lines,
        sections,
        "education"
    );

    if (sectionLines.length === 0) {
        return [];
    }

    const education = [];

    const degreeKeywords = [
        "mca",
        "mba",
        "m.tech",
        "mtech",
        "msc",
        "m.sc",
        "ma ",
        "master",
        "bca",
        "b.tech",
        "btech",
        "bsc",
        "b.sc",
        "ba ",
        "bachelor",
        "phd",
        "ph.d",
        "diploma",
        "higher secondary",
        "plus two",
        "12th",
        "10th",
        "sslc",
    ];

    const yearRegex =
        /\b(19|20)\d{2}\b(?:\s*[-–]\s*(?:\d{2,4}|present|current))?/i;

    let current = null;

    for (const line of sectionLines) {
        const cleaned = line.trim();

        if (!cleaned) continue;

        const lower = cleaned.toLowerCase();

        const yearMatch = cleaned.match(yearRegex);

        const looksLikeDegree =
            degreeKeywords.some((keyword) =>
                lower.includes(keyword)
            );

        if (looksLikeDegree) {
            if (current) {
                education.push(current);
            }

            current = {
                degree: cleaned,
                institution: "",
                year: yearMatch
                    ? yearMatch[0]
                    : "",
            };

            continue;
        }

        if (!current) {
            continue;
        }

        if (yearMatch && !current.year) {
            current.year = yearMatch[0];
            continue;
        }

        if (!current.institution) {
            current.institution = cleaned;
        }
    }

    if (current) {
        education.push(current);
    }

    return education;
}

module.exports = {
    parseEducation,
};