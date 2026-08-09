import React from "react";
import {
  Mail,
  Phone,
  ArrowUpRight,
  Code2,
} from "lucide-react";

function TechTemplate({
  resume,
  photo,
  sections,
  theme,
}) {
  const personal = resume?.personal || {};
  const isDark = theme === "dark";

  // ==================================================
  // COLORS
  // ==================================================

  const page = isDark
    ? "bg-[#0d1715] text-[#e8f3ef]"
    : "bg-[#f1f7f5] text-[#20332f]";

  const card = isDark
    ? "bg-[#14221f] border-[#29413a]"
    : "bg-[#ffffff] border-[#d5e5df]";

  const softCard = isDark
    ? "bg-[#1b2d28]"
    : "bg-[#e3f0eb]";

  const muted = isDark
    ? "text-[#a9beb7]"
    : "text-[#657a73]";

  const faint = isDark
    ? "text-[#657c74]"
    : "text-[#91a29d]";

  const border = isDark
    ? "border-[#29413a]"
    : "border-[#d5e5df]";

  const accent = isDark
    ? "text-[#8fd3bc]"
    : "text-[#397d68]";

  const accentBg = isDark
    ? "bg-[#1b382f]"
    : "bg-[#e0f0e9]";

  const accentBorder = isDark
    ? "border-[#34594d]"
    : "border-[#c5ddd4]";

  // ==================================================
  // HEADING
  // ==================================================

  const Heading = ({
    number,
    title,
  }) => (
    <div className="mb-10">
      <div className="flex items-center gap-4">
        <span
          className={`font-mono text-xs ${accent}`}
        >
          {number}
        </span>

        <span
          className={`w-12 h-px ${
            isDark
              ? "bg-[#3c5c52]"
              : "bg-[#bdd5cc]"
          }`}
        />

        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          {title}
        </h2>
      </div>
    </div>
  );

  // ==================================================
  // PHOTO
  // ==================================================

  const renderPhoto = () => {
    if (photo) {
      return (
        <div className="relative">
          <div
            className={`absolute inset-0 translate-x-3 translate-y-3 rounded-2xl ${
              isDark
                ? "bg-[#31594c]"
                : "bg-[#c9e0d7]"
            }`}
          />

          <img
            src={photo}
            alt={personal.name || "Profile"}
            className={`relative w-40 h-40 md:w-48 md:h-48 object-cover rounded-2xl border ${border} shadow-xl`}
          />
        </div>
      );
    }

    return (
      <div
        className={`w-40 h-40 md:w-48 md:h-48 rounded-2xl border ${border} ${softCard} flex flex-col items-center justify-center`}
      >
        <Code2
          size={25}
          className={`mb-3 ${accent}`}
        />

        <span
          className={`text-xs uppercase tracking-widest ${faint}`}
        >
          Add Photo
        </span>
      </div>
    );
  };

  // ==================================================
  // SECTIONS
  // ==================================================

  const renderSection = (section) => {
    switch (section) {
      // ==================================================
      // ABOUT
      // ==================================================

      case "about":
        return (
          <section
            id="about"
            key="about"
            className="py-20 scroll-mt-24"
          >
            <Heading
              number="01"
              title="About"
            />

            <div
              className={`rounded-2xl border ${border} ${card} p-8 md:p-10`}
            >
              <p
                className={`text-lg md:text-xl leading-8 max-w-4xl ${muted}`}
              >
                I am a motivated professional with
                an interest in technology, continuous
                learning and building meaningful
                solutions.
              </p>
            </div>
          </section>
        );

      // ==================================================
      // EDUCATION
      // ==================================================

      case "education":
        if (!resume.education?.length) {
          return null;
        }

        return (
          <section
            id="education"
            key="education"
            className={`py-20 border-t ${border} scroll-mt-24`}
          >
            <Heading
              number="02"
              title="Education"
            />

            <div className="grid md:grid-cols-2 gap-5">
              {resume.education.map(
                (item, index) => (
                  <div
                    key={index}
                    className={`p-7 rounded-2xl border ${border} ${card}`}
                  >
                    <span
                      className={`font-mono text-xs ${faint}`}
                    >
                      EDUCATION{" "}
                      {String(
                        index + 1
                      ).padStart(2, "0")}
                    </span>

                    <h3 className="text-xl font-semibold mt-5">
                      {item.course}
                    </h3>

                    <p
                      className={`mt-2 ${muted}`}
                    >
                      {item.institute}
                    </p>

                    {item.score && (
                      <span
                        className={`inline-block mt-5 px-4 py-2 rounded-lg ${accentBg} ${accent} text-xs`}
                      >
                        {item.score.label}:{" "}
                        {item.score.value}
                      </span>
                    )}
                  </div>
                )
              )}
            </div>
          </section>
        );

      // ==================================================
      // SKILLS
      // ==================================================

      case "skills":
        if (!resume.skills) {
          return null;
        }

        return (
          <section
            id="skills"
            key="skills"
            className={`py-20 border-t ${border} scroll-mt-24`}
          >
            <Heading
              number="03"
              title="Skills"
            />

            <div className="grid md:grid-cols-2 gap-5">
              {Object.entries(
                resume.skills
              ).map(([category, values]) => {
                if (!values?.length) {
                  return null;
                }

                return (
                  <div
                    key={category}
                    className={`p-7 rounded-2xl border ${border} ${card}`}
                  >
                    <h3 className="text-lg font-semibold capitalize">
                      {category.replace(
                        /([A-Z])/g,
                        " $1"
                      )}
                    </h3>

                    <div className="flex flex-wrap gap-2.5 mt-6">
                      {values.map(
                        (skill, index) => (
                          <span
                            key={index}
                            className={`px-4 py-2 rounded-lg border ${accentBorder} ${accentBg} ${accent} text-sm font-mono`}
                          >
                            {skill}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        );

      // ==================================================
      // PROJECTS
      // ==================================================

      case "projects":
        if (!resume.projects?.length) {
          return null;
        }

        return (
          <section
            id="projects"
            key="projects"
            className={`py-20 border-t ${border} scroll-mt-24`}
          >
            <Heading
              number="04"
              title="Projects"
            />

            <div className="space-y-5">
              {resume.projects.map(
                (project, index) => (
                  <article
                    key={index}
                    className={`group p-8 rounded-2xl border ${border} ${card} relative overflow-hidden`}
                  >
                    {/* Decorative tech line */}
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-1 ${
                        isDark
                          ? "bg-[#4c8f78]"
                          : "bg-[#79ae9d]"
                      }`}
                    />

                    <div className="pl-3">
                      <div className="flex items-center justify-between">
                        <span
                          className={`font-mono text-xs ${faint}`}
                        >
                          PROJECT{" "}
                          {String(
                            index + 1
                          ).padStart(2, "0")}
                        </span>

                        <ArrowUpRight
                          size={19}
                          className={`${faint} group-hover:translate-x-1 group-hover:-translate-y-1 transition`}
                        />
                      </div>

                      <h3 className="text-2xl font-semibold mt-5">
                        {project.title}
                      </h3>

                      <p
                        className={`mt-5 leading-7 max-w-4xl ${muted}`}
                      >
                        {project.description}
                      </p>

                      {project.technologies
                        ?.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-6">
                          {project.technologies.map(
                            (
                              tech,
                              techIndex
                            ) => (
                              <span
                                key={
                                  techIndex
                                }
                                className={`px-3 py-1.5 rounded-md ${softCard} ${accent} text-xs font-mono`}
                              >
                                {tech}
                              </span>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  </article>
                )
              )}
            </div>
          </section>
        );

      // ==================================================
      // CERTIFICATES
      // ==================================================

      case "certificates":
        if (!resume.certificates?.length) {
          return null;
        }

        return (
          <section
            id="certificates"
            key="certificates"
            className={`py-20 border-t ${border} scroll-mt-24`}
          >
            <Heading
              number="05"
              title="Certificates"
            />

            <div className="grid md:grid-cols-2 gap-5">
              {resume.certificates.map(
                (certificate, index) => (
                  <div
                    key={index}
                    className={`p-7 rounded-2xl border ${border} ${card}`}
                  >
                    <span
                      className={`font-mono text-xs ${faint}`}
                    >
                      CERTIFICATE{" "}
                      {String(
                        index + 1
                      ).padStart(2, "0")}
                    </span>

                    <h3 className="text-xl font-semibold mt-5">
                      {certificate.title}
                    </h3>

                    <p
                      className={`mt-4 leading-7 ${muted}`}
                    >
                      {certificate.description}
                    </p>
                  </div>
                )
              )}
            </div>
          </section>
        );

      // ==================================================
      // ACHIEVEMENTS
      // ==================================================

      case "achievements":
        if (!resume.achievements?.length) {
          return null;
        }

        return (
          <section
            id="achievements"
            key="achievements"
            className={`py-20 border-t ${border} scroll-mt-24`}
          >
            <Heading
              number="06"
              title="Achievements"
            />

            <div className="max-w-4xl space-y-4">
              {resume.achievements.map(
                (achievement, index) => (
                  <div
                    key={index}
                    className={`flex gap-5 p-6 rounded-xl border ${border} ${card}`}
                  >
                    <span
                      className={`font-mono text-xs ${accent}`}
                    >
                      {String(
                        index + 1
                      ).padStart(2, "0")}
                    </span>

                    <p
                      className={`leading-7 ${muted}`}
                    >
                      {
                        achievement.description
                      }
                    </p>
                  </div>
                )
              )}
            </div>
          </section>
        );

      // ==================================================
      // LANGUAGES
      // ==================================================

      case "languages":
        if (!resume.languages?.length) {
          return null;
        }

        return (
          <section
            id="languages"
            key="languages"
            className={`py-20 border-t ${border} scroll-mt-24`}
          >
            <Heading
              number="07"
              title="Languages"
            />

            <div className="flex flex-wrap gap-4">
              {resume.languages.map(
                (language, index) => (
                  <div
                    key={index}
                    className={`px-5 py-3 rounded-xl border ${border} ${card}`}
                  >
                    <span className="font-medium">
                      {language.name}
                    </span>

                    {language.level && (
                      <span
                        className={`ml-2 text-xs ${faint}`}
                      >
                        {language.level}
                      </span>
                    )}
                  </div>
                )
              )}
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  // ==================================================
  // MAIN
  // ==================================================

  return (
    <div
      className={`min-h-screen ${page} overflow-hidden`}
    >
      {/* ==================================================
          NAVBAR
      ================================================== */}

      <nav
        className={`sticky top-0 z-50 ${
          isDark
            ? "bg-[#0d1715]/90"
            : "bg-[#f1f7f5]/90"
        } backdrop-blur-xl border-b ${border}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <a
            href="#top"
            className={`font-mono font-semibold text-lg whitespace-nowrap ${accent}`}
          >
            {personal.name ||
              "Portfolio"}
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`text-xs capitalize ${muted} hover:opacity-70 transition`}
              >
                {section}
              </a>
            ))}
          </div>

          <span
            className={`font-mono text-xs ${faint}`}
          >
            2026
          </span>
        </div>
      </nav>

      {/* ==================================================
          HERO
      ================================================== */}

      <header
        id="top"
        className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32"
      >
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">
          <div>
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border ${accentBorder} ${accentBg} ${accent} text-xs font-mono`}
            >
              <Code2 size={14} />

              DEVELOPER PORTFOLIO
            </div>

            <h1
              className="
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
                font-bold
                tracking-tight
                leading-none
                mt-7
                whitespace-nowrap
              "
            >
              {personal.name ||
                "Your Name"}
            </h1>

            <p
              className={`font-mono text-lg md:text-xl mt-7 max-w-2xl ${muted}`}
            >
              Building ideas into practical
              digital solutions.
            </p>

            <div
              className={`flex flex-wrap gap-5 mt-8 text-sm ${muted}`}
            >
              {personal.email && (
                <span className="flex items-center gap-2">
                  <Mail size={15} />
                  {personal.email}
                </span>
              )}

              {personal.phone && (
                <span className="flex items-center gap-2">
                  <Phone size={15} />
                  {personal.phone}
                </span>
              )}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            {renderPhoto()}
          </div>
        </div>
      </header>

      {/* ==================================================
          CONTENT
      ================================================== */}

      <main className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
        {sections.map(renderSection)}
      </main>

      {/* ==================================================
          FOOTER
      ================================================== */}

      <footer
        className={`border-t ${border} py-10`}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-4">
          <p
            className={`font-mono text-sm ${muted}`}
          >
            {personal.name ||
              "Portfolio"}
          </p>

          <p
            className={`font-mono text-xs ${faint}`}
          >
            Created with SmartResumeAnalyzer
          </p>
        </div>
      </footer>
    </div>
  );
}

export default TechTemplate;