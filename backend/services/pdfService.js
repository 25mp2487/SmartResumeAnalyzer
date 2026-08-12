const fs = require("fs");
const pdfParse = require("pdf-parse");

async function extractText(filePath) {
    try {
        if (!fs.existsSync(filePath)) {
            throw new Error("PDF file not found.");
        }

        const buffer = fs.readFileSync(filePath);

        const data = await pdfParse(buffer);

        if (!data || !data.text) {
            throw new Error("No readable text found in the PDF.");
        }

        const cleanedText = data.text
            .replace(/\r\n/g, "\n")
            .replace(/\r/g, "\n")
            .replace(/\t/g, " ")
            .replace(/\u00a0/g, " ")
            .replace(/[ ]{2,}/g, " ")
            .replace(/\n{3,}/g, "\n\n")
            .trim();

        return cleanedText;
    } catch (error) {
        console.error("PDF extraction error:", error);
        throw error;
    }
}

module.exports = {
    extractText,
};