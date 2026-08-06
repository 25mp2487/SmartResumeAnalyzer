function parseSkills(lines, sections) {

    let skills = {
        programmingLanguages: [],
        webTechnologies: [],
        database: [],
        coreConcepts: [],
        otherSkills: []
    };

    const skillsStart = sections.skills;
    const languagesStart = sections.languages;

    if (
        skillsStart === undefined ||
        languagesStart === undefined
    ) {
        return skills;
    }

    const skillLines = lines.slice(
        skillsStart + 1,
        languagesStart
    );

    skillLines.forEach((line) => {

        const lower = line.toLowerCase();

        // Programming Languages
        if (lower.includes("programming")) {

            const values = line.split(":")[1];

            if (values) {
                skills.programmingLanguages = values
                    .split(",")
                    .map(item =>
                        item
                            .replace(/\(.*?\)/g, "")
                            .trim()
                    );
            }

        }

        // Web Technologies
        else if (
            lower.includes("web") ||
            lower.includes("frontend") ||
            lower.includes("backend")
        ) {

            const values = line.split(":")[1];

            if (values) {
                skills.webTechnologies = values
                    .split(",")
                    .map(item =>
                        item
                            .replace(/\(.*?\)/g, "")
                            .trim()
                    );
            }

        }

        // Database
        else if (
            lower.includes("database") ||
            lower.includes("dbms")
        ) {

            const values = line.split(":")[1];

            if (values) {
                skills.database = values
                    .split(",")
                    .map(item =>
                        item
                            .replace(/\(.*?\)/g, "")
                            .trim()
                    );
            }

        }

        // Core Concepts
        else if (
            lower.includes("core") ||
            lower.includes("concept")
        ) {

            const values = line.split(":")[1];

            if (values) {
                skills.coreConcepts = values
                    .split(",")
                    .map(item =>
                        item
                            .replace(/\(.*?\)/g, "")
                            .trim()
                    );
            }

        }

        // Any other category
        else {

            const values = line.split(":");

            if (values.length > 1) {

                skills.otherSkills.push({

                    category: values[0].trim(),

                    values: values[1]
                        .split(",")
                        .map(item =>
                            item
                                .replace(/\(.*?\)/g, "")
                                .trim()
                        )

                });

            }

        }

    });

    return skills;

}

module.exports = {
    parseSkills
};