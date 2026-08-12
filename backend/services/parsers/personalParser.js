function parsePersonal(lines, sections) {
    const text = lines.join("\n");

    // ==========================================
    // EMAIL
    // ==========================================

    const emailRegex =
        /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;

    const emailMatch = text.match(emailRegex);

    const email = emailMatch ? emailMatch[0] : "";

    // ==========================================
    // PHONE
    // ==========================================

    const phoneRegex =
        /(?:\+?\d{1,3}[\s.-]?)?(?:\(?\d{2,4}\)?[\s.-]?)?\d{3,5}[\s.-]?\d{3,5}/g;

    let phone = "";

    const phoneCandidates = text.match(phoneRegex) || [];

    for (const candidate of phoneCandidates) {
        const digits = candidate.replace(/\D/g, "");

        if (digits.length >= 10 && digits.length <= 13) {
            phone = candidate.trim();
            break;
        }
    }

    // ==========================================
    // LINKEDIN
    // ==========================================

    const linkedinRegex =
        /(?:https?:\/\/)?(?:www\.)?linkedin\.com\/[A-Za-z0-9_./-]+/i;

    const linkedinMatch = text.match(linkedinRegex);

    const linkedin = linkedinMatch
        ? linkedinMatch[0]
        : "";

    // ==========================================
    // GITHUB
    // ==========================================

    const githubRegex =
        /(?:https?:\/\/)?(?:www\.)?github\.com\/[A-Za-z0-9_.-]+/i;

    const githubMatch = text.match(githubRegex);

    const github = githubMatch
        ? githubMatch[0]
        : "";

    // ==========================================
    // NAME
    // ==========================================

    let name = "";

    const firstLines = lines.slice(
        0,
        Math.min(lines.length, 15)
    );

    for (const line of firstLines) {
        const cleaned = line.trim();

        if (!cleaned) continue;

        if (emailRegex.test(cleaned)) continue;

        if (/linkedin\.com/i.test(cleaned)) continue;

        if (/github\.com/i.test(cleaned)) continue;

        if (/\d/.test(cleaned)) continue;

        if (
            /^(resume|curriculum vitae|cv|portfolio)$/i.test(
                cleaned
            )
        ) {
            continue;
        }

        if (
            /^(education|skills|projects|experience|profile|summary|about)$/i.test(
                cleaned
            )
        ) {
            continue;
        }

        if (cleaned.length < 3 || cleaned.length > 60) {
            continue;
        }

        // A likely person's name usually contains 1-5 words
        const words = cleaned.split(/\s+/);

        if (words.length > 5) continue;

        if (
            words.every((word) =>
                /^[A-Za-z.'-]+$/.test(word)
            )
        ) {
            name = cleaned;
            break;
        }
    }

    // ==========================================
    // ADDRESS
    // ==========================================

    let address = "";

    const addressKeywords = [
        "street",
        "road",
        "lane",
        "avenue",
        "nagar",
        "po",
        "p.o",
        "district",
        "kerala",
        "india",
        "pin",
        "pincode",
    ];

    const addressLines = [];

    for (const line of lines.slice(0, 15)) {
        const lower = line.toLowerCase();

        if (
            addressKeywords.some((keyword) =>
                lower.includes(keyword)
            )
        ) {
            addressLines.push(line);
        }
    }

    if (addressLines.length > 0) {
        address = addressLines.join(", ");
    }

    return {
        name,
        email,
        phone,
        address,
        github,
        linkedin,
    };
}

module.exports = {
    parsePersonal,
};