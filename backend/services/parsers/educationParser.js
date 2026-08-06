function parseEducation(lines, sections) {

    let education = [];

    const educationStart = sections.education;
    const certificateStart = sections.certificates;

    if (
        educationStart === undefined ||
        certificateStart === undefined
    ) {
        return education;
    }

    const educationLines = lines.slice(
        educationStart + 1,
        certificateStart
    );

    let i = 0;

    while (i < educationLines.length) {

        const institute = educationLines[i] || "";
        const course = educationLines[i + 1] || "";

        if (!institute || !course) break;

        const educationObj = {
            institute,
            course
        };

        const nextLine = educationLines[i + 2];

        if (nextLine) {

            // Grade
            if (/^(A|A\+|B|B\+|C|C\+|D|F)$/i.test(nextLine)) {

                educationObj.score = {
                    label: "Grade",
                    value: nextLine
                };

                i += 3;
            }

            // CGPA
            else if (/CGPA/i.test(nextLine)) {

                educationObj.score = {
                    label: "CGPA",
                    value: nextLine.replace(/CGPA\s*:?\s*/i, "").trim()
                };

                i += 3;
            }

            // GPA
            else if (/GPA/i.test(nextLine)) {

                educationObj.score = {
                    label: "GPA",
                    value: nextLine.replace(/GPA\s*:?\s*/i, "").trim()
                };

                i += 3;
            }

            // Percentage
            else if (
                /Percentage/i.test(nextLine) ||
                /\d+%/.test(nextLine)
            ) {

                educationObj.score = {
                    label: "Percentage",
                    value: nextLine.replace(/Percentage\s*:?\s*/i, "").trim()
                };

                i += 3;
            }

            // No score (currently studying or not mentioned)
            else {

                i += 2;

            }

        }
        else {

            i += 2;

        }

        education.push(educationObj);

    }

    return education;

}

module.exports = {
    parseEducation
};