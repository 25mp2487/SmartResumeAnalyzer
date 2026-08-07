function parseLanguages(lines, sections) {

    let languages = [];

    const languageStart = sections.languages;

    if (languageStart === undefined) {
        return languages;
    }

    // Find where Languages section ends
    let languageEnd = lines.length;

    const possibleEnds = [
        sections.projects,
        sections.skills,
        sections.certificates,
        sections.achievements
    ];

    possibleEnds.forEach(end => {

        if (
            end !== undefined &&
            end > languageStart &&
            end < languageEnd
        ) {
            languageEnd = end;
        }

    });

    const languageLines = lines.slice(
        languageStart + 1,
        languageEnd
    );

    languageLines.forEach(line => {

        if (!line || line.trim() === "") return;

        // Remove bullets
        line = line
            .replace(/^[-•*]\s*/, "")
            .replace(/\.$/, "") // Remove trailing period
            .trim();

        let language = {
            name: "",
            level: ""
        };

        // English - Fluent
        if (line.includes("-")) {

            const parts = line.split("-");

            language.name = parts[0].trim();
            language.level = parts.slice(1).join("-").trim();

        }

        // English : Fluent
        else if (line.includes(":")) {

            const parts = line.split(":");

            language.name = parts[0].trim();
            language.level = parts.slice(1).join(":").trim();

        }

        // Only language name
        else {

            language.name = line;
            language.level = "";

        }

        languages.push(language);

    });

    return languages;

}

module.exports = {
    parseLanguages
};