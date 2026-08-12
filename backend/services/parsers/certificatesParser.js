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

function parseCertificates(lines, sections) {
    const sectionLines = getSectionRange(
        lines,
        sections,
        "certificates"
    );

    if (sectionLines.length === 0) {
        return [];
    }

    const certificates = [];

    const yearRegex = /\b(19|20)\d{2}\b/;

    for (const line of sectionLines) {
        const cleaned = line
            .replace(/^[•▪◾◆►*-]\s*/, "")
            .trim();

        if (!cleaned) continue;

        const yearMatch =
            cleaned.match(yearRegex);

        let content = cleaned;

        let year = yearMatch
            ? yearMatch[0]
            : "";

        if (yearMatch) {
            content = cleaned
                .replace(yearMatch[0], "")
                .trim();
        }

        const parts = content
            .split(/\s+[|,-]\s+/)
            .map((item) => item.trim())
            .filter(Boolean);

        let name = content;
        let issuer = "";

        if (parts.length >= 2) {
            name = parts[0];
            issuer = parts.slice(1).join(" - ");
        }

        certificates.push({
            name,
            issuer,
            year,
        });
    }

    return certificates;
}

module.exports = {
    parseCertificates,
};