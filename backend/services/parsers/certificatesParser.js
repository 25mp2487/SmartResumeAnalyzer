function parseCertificates(lines, sections) {

    let certificates = [];

    const start = sections.certificates;

    if (start === undefined) {
        return certificates;
    }

    // Find where Certificates section ends
    let end = lines.length;

    const possibleEnds = [
        sections.achievements,
        sections.projects,
        sections.skills,
        sections.languages,
        sections.experience
    ];

    possibleEnds.forEach(section => {

        if (
            section !== undefined &&
            section > start &&
            section < end
        ) {
            end = section;
        }

    });

    const certificateLines = lines.slice(start + 1, end);

    let currentCertificate = null;

    certificateLines.forEach(line => {

        line = line.trim();

        if (line === "") return;

        // Detect certificate title
        const isTitle =
            !line.endsWith(".") &&
            !/^(Completed|Successfully|Worked|Developed|Designed|Implemented|Gained|Knowledge|knowledge|The|This|Service|service|Data|data|Classification|classification)/i.test(line);

        if (isTitle) {

            // Save previous certificate
            if (currentCertificate) {

                currentCertificate.description =
                    currentCertificate.description.trim();

                certificates.push(currentCertificate);

            }

            currentCertificate = {
                title: line,
                description: ""
            };

        } else {

            if (!currentCertificate) {

                currentCertificate = {
                    title: "Certificate",
                    description: ""
                };

            }

            currentCertificate.description += line + " ";

        }

    });

    // Push last certificate
    if (currentCertificate) {

        currentCertificate.description =
            currentCertificate.description.trim();

        certificates.push(currentCertificate);

    }

    return certificates;

}

module.exports = {
    parseCertificates
};