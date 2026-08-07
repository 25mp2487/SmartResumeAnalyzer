function parseProjects(lines, sections) {

    let projects = [];

    const projectStart = sections.projects;

    if (projectStart === undefined) {
        return projects;
    }

    // Find where Projects section ends
    let projectEnd = lines.length;

    const possibleEnds = [
        sections.skills,
        sections.certificates,
        sections.achievements,
        sections.languages
    ];

    possibleEnds.forEach(end => {

        if (
            end !== undefined &&
            end > projectStart &&
            end < projectEnd
        ) {
            projectEnd = end;
        }

    });

    const projectLines = lines.slice(
        projectStart + 1,
        projectEnd
    );

    if (projectLines.length === 0) {
        return projects;
    }

    let currentProject = null;

    projectLines.forEach(line => {

        line = line.trim();

        if (line === "") return;

        // Project title
        if (
            line.length < 70 &&
            !line.endsWith(".") &&
            !line.includes(":")
        ) {

            if (currentProject) {
                currentProject.description =
                    currentProject.description.trim();

                projects.push(currentProject);
            }

            currentProject = {

                title: line,

                description: "",

                technologies: []

            };

        }

        else {

            if (!currentProject) {

                currentProject = {

                    title: "Project",

                    description: "",

                    technologies: []

                };

            }

            currentProject.description += line + " ";

        }

    });

    if (currentProject) {

        currentProject.description =
            currentProject.description.trim();

        projects.push(currentProject);

    }

    // -------------------------
    // Technology Detection
    // -------------------------

    const techPatterns = {

        "C": /\bC\b/i,

        "Java": /\bJava\b/i,

        "Python": /\bPython\b/i,

        "PHP": /\bPHP\b/i,

        "HTML": /\bHTML\b/i,

        "CSS": /\bCSS\b/i,

        "JavaScript": /\bJavaScript\b/i,

        "React": /\bReact\b/i,

        "Node.js": /\bNode\.?js\b/i,

        "Express": /\bExpress\b/i,

        "MongoDB": /\bMongoDB\b/i,

        "MySQL": /\bMySQL\b/i,

        "SQL": /\bSQL\b/i,

        "Flutter": /\bFlutter\b/i,

        "Firebase": /\bFirebase\b/i,

        "AWS": /\bAWS\b/i

    };

    projects.forEach(project => {

        for (const tech in techPatterns) {

            if (techPatterns[tech].test(project.description)) {

                project.technologies.push(tech);

            }

        }

        project.technologies =
            [...new Set(project.technologies)];

    });

    return projects;

}

module.exports = {
    parseProjects
};