function parseCertificates(lines, sections) {

    let certificates = [];

    const certificateStart = sections.certificates;
    const achievementStart = sections.achievements;
    const projectsStart = sections.projects;
    const skillsStart = sections.skills;


    if (certificateStart === undefined) {
        return certificates;
    }


    // Find where certificates section ends
    let certificateEnd = lines.length;


    const possibleEnds = [
        achievementStart,
        projectsStart,
        skillsStart
    ];


    possibleEnds.forEach(end => {

        if (
            end !== undefined &&
            end > certificateStart &&
            end < certificateEnd
        ) {
            certificateEnd = end;
        }

    });



    const certificateLines = lines.slice(
        certificateStart + 1,
        certificateEnd
    );


    if (certificateLines.length === 0) {
        return certificates;
    }



    let currentCertificate = null;



    certificateLines.forEach(line => {


        // Detect certificate title
        // Usually short lines
        if (
            line.length < 100 &&
            !line.endsWith(".") &&
            !line.includes("Successfully") &&
            !line.includes("Completed") &&
            !line.includes("Gained")
        ) {


            if (currentCertificate) {

                certificates.push(currentCertificate);

            }


            currentCertificate = {

                title: line,

                description: ""

            };


        }


        else {


            if (!currentCertificate) {

                currentCertificate = {

                    title: "Certificate",

                    description: ""

                };

            }


            currentCertificate.description +=
                line + " ";

        }


    });



    // Add last certificate

    if (currentCertificate) {

        certificates.push(currentCertificate);

    }



    // Clean descriptions

    certificates.forEach(cert => {

        cert.description =
            cert.description.trim();

    });



    return certificates;

}


module.exports = {
    parseCertificates
};