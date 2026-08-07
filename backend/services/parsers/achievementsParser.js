function parseAchievements(lines, sections) {

    let achievements = [];

    const achievementStart = sections.achievements;

    if (achievementStart === undefined) {
        return achievements;
    }

    // Find end of Achievements section
    let achievementEnd = lines.length;

    const possibleEnds = [
        sections.projects,
        sections.skills,
        sections.certificates,
        sections.languages
    ];

    possibleEnds.forEach(end => {

        if (
            end !== undefined &&
            end > achievementStart &&
            end < achievementEnd
        ) {
            achievementEnd = end;
        }

    });

    const achievementLines = lines.slice(
        achievementStart + 1,
        achievementEnd
    );

    let current = "";

    achievementLines.forEach(line => {

        line = line.trim();

        if (line === "") return;

        // If previous line wasn't finished, continue it
        if (current !== "") {

            current += " " + line;

        } else {

            current = line;

        }

        // Sentence completed
        if (
            line.endsWith(".") ||
            line.endsWith("!") ||
            line.endsWith("?")
        ) {

            achievements.push({
                description: current.trim()
            });

            current = "";

        }

    });

    // Last achievement (if no period at end)
    if (current !== "") {

        achievements.push({
            description: current.trim()
        });

    }

    return achievements;

}

module.exports = {
    parseAchievements
};