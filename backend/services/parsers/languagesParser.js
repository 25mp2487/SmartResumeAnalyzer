function parseLanguages(lines, sections) {

    let languages = [];


    const languageStart = sections.languages;


    if (languageStart === undefined) {
        return languages;
    }



    // Find ending section

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


        if (!line) return;



        // Remove bullets and extra spaces

        line = line
            .replace(/^[-•*]\s*/, "")
            .trim();



        // Handle level

        if (line.includes("-")) {

            const parts = line.split("-");


            languages.push({

                name: parts[0].trim(),

                level: parts[1].trim()

            });


        }

        else {


            languages.push({

                name: line,

                level: ""

            });


        }


    });



    return languages;

}



module.exports = {
    parseLanguages
};