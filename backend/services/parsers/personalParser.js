function parsePersonal(lines, sections) {

    // --------------------------
    // EMAIL
    // --------------------------

    const emailRegex =
        /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;

    let email = "";

    const emailLine = lines.find(line => emailRegex.test(line));

    if (emailLine) {
        email = emailLine.match(emailRegex)[0];
    }

    // --------------------------
    // PHONE
    // --------------------------

    const phoneRegex = /\b\d{10}\b/;

    let phone = "";

    if (emailLine) {

        const phoneMatch = emailLine.match(phoneRegex);

        if (phoneMatch) {
            phone = phoneMatch[0];
        }

    }

    // --------------------------
    // NAME
    // --------------------------

    let name = "";

    const educationIndex = sections.education ?? lines.length;

    for (let i = 0; i < educationIndex; i++) {

        const line = lines[i];

        if (/\d/.test(line)) continue;

        if (line.includes("@")) continue;

        if (
            line.includes(",") ||
            line.includes("P.O") ||
            line.includes("Road") ||
            line.includes("Street")
        ) continue;

        if (line.length < 3) continue;

        name = line;

        break;

    }

    // --------------------------
    // ADDRESS
    // --------------------------

    let address = "";

    if (name && emailLine) {

        const nameIndex = lines.indexOf(name);
        const contactIndex = lines.indexOf(emailLine);

        if (contactIndex > nameIndex) {

            address = lines
                .slice(nameIndex + 1, contactIndex)
                .join(" ");

        }

    }

    return {

        name,

        email,

        phone,

        address

    };

}

module.exports = {
    parsePersonal
};