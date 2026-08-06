function parseAchievements(lines, sections) {

    let achievements = [];

    const achievementStart = sections.achievements;

    if (achievementStart === undefined) {
        return achievements;
    }


    // Find ending section

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


    if (achievementLines.length === 0) {
        return achievements;
    }



    let currentAchievement = null;



    achievementLines.forEach(line => {


        // Short line = possible achievement title

        if (
            line.length < 80 &&
            !line.endsWith(".")
        ) {


            if (currentAchievement) {

                achievements.push(currentAchievement);

            }


            currentAchievement = {

                title: line,

                description: ""

            };


        }


        else {


            if (!currentAchievement) {

                currentAchievement = {

                    title: "Achievement",

                    description: ""

                };

            }


            currentAchievement.description +=
                line + " ";

        }


    });



    // Add last achievement

    if (currentAchievement) {

        achievements.push(currentAchievement);

    }



    achievements.forEach(item => {

        item.description =
            item.description.trim();

    });



    return achievements;

}


module.exports = {
    parseAchievements
};