function parseProjects(lines, sections) {

    let projects = [];

    const projectStart = sections.projects;
    const skillsStart = sections.skills;

    if (
        projectStart === undefined
    ) {
        return projects;
    }


    // Determine where projects section ends
    let projectEnd = skillsStart;

    if (projectEnd === undefined) {
        projectEnd = lines.length;
    }


    const projectLines = lines.slice(
        projectStart + 1,
        projectEnd
    );


    if (projectLines.length === 0) {
        return projects;
    }


    let currentProject = null;


    projectLines.forEach((line) => {

        // Detect possible project title
        // Usually short lines without punctuation
        if (
            line.length < 60 &&
            !line.includes(".") &&
            !line.includes(":")
        ) {

            // Save previous project
            if (currentProject) {
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


            currentProject.description +=
                line + " ";


        }

    });


    // Push last project
    if (currentProject) {

        projects.push(currentProject);

    }



    // Extract technologies
    projects.forEach(project => {

        const techList = [

            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "MySQL",
            "SQL",
            "PHP",
            "Python",
            "Java",
            "C",
            "Flutter",
            "Firebase",
            "AWS"

        ];


        techList.forEach(tech => {

            if (
                project.description
                .toLowerCase()
                .includes(tech.toLowerCase())
            ) {

                project.technologies.push(tech);

            }

        });


        // Remove duplicate technologies
        project.technologies =
            [...new Set(project.technologies)];


        project.description =
            project.description.trim();

    });


    return projects;

}


module.exports = {
    parseProjects
};