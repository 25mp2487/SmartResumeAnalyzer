import React from "react";
import {
  Mail,
  Phone,
  ArrowUpRight,
  Briefcase,
} from "lucide-react";

function ProfessionalTemplate({
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
    ? "bg-[#101820] text-[#edf2f5]"
    : "bg-[#f5f3ef] text-[#27313a]";

  const card = isDark
    ? "bg-[#18232d] border-[#2d3b47]"
    : "bg-[#fffdfa] border-[#ded9d0]";

  const softCard = isDark
    ? "bg-[#202d38]"
    : "bg-[#ebe7df]";

  const muted = isDark
    ? "text-[#aebac3]"
    : "text-[#6b7378]";

  const faint = isDark
    ? "text-[#687783]"
    : "text-[#969a9c]";

  const border = isDark
    ? "border-[#2d3b47]"
    : "border-[#ded9d0]";

  const accent = isDark
    ? "text-[#9dbbd0]"
    : "text-[#526f86]";

  const accentBg = isDark
    ? "bg-[#263b4a]"
    : "bg-[#e2e9ed]";

  const accentBorder = isDark
    ? "border-[#3c5668]"
    : "border-[#cbd7dd]";

  // ==================================================
  // SECTION HEADING
  // ==================================================

  const Heading = ({
    number,
    title,
  }) => (
    <div className="mb-10">
      <div className="flex items-center gap-4">
        <span
          className={`text-xs font-mono ${accent}`}
        >
          {number}
        </span>

        <span
          className={`w-14 h-px ${
            isDark
              ? "bg-[#425361]"
              : "bg-[#c6c7c5]"
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
                ? "bg-[#314758]"
                : "bg-[#d4dfe4]"
            }`}
          />

          <img
            src={photo}
            alt={personal.name || "Profile"}
            className={`relative w-40 h-48 md:w-48 md:h-56 object-cover rounded-2xl border ${border} shadow-xl`}
          />
        </div>
      );
    }

    return (
      <div
        className={`w-40 h-48 md:w-48 md:h-56 rounded-2xl border ${border} ${softCard} flex flex-col items-center justify-center`}
      >
        <Briefcase
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
            className="py-24 scroll-mt-24"
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
            className={`py-24 border-t ${border} scroll-mt-24`}
          >
            <Heading
              number="02"
              title="Education"
            />

            <div className="space-y-5">
              {resume.education.map(
                (item, index) => (
                  <div
                    key={index}
                    className={`p-7 md:p-8 rounded-2xl border ${border} ${card}`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                      <div>
                        <span
                          className={`text-xs font-mono ${faint}`}
                        >
                          EDUCATION{" "}
                          {String(
                            index + 1
                          ).padStart(2, "0")}
                        </span>

                        <h3 className="text-xl md:text-2xl font-semibold mt-5">
                          {item.course}
                        </h3>

                        <p
                          className={`mt-2 ${muted}`}
                        >
                          {item.institute}
                        </p>
                      </div>

                      {item.score && (
                        <div
                          className={`self-start md:self-center px-4 py-2 rounded-lg ${accentBg} ${accent} text-xs`}
                        >
                          {item.score.label}:{" "}
                          {item.score.value}
                        </div>
                      )}
                    </div>
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
            className={`py-24 border-t ${border} scroll-mt-24`}
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
                            className={`px-4 py-2 rounded-lg border ${accentBorder} ${accentBg} ${accent} text-sm`}
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
            className={`py-24 border-t ${border} scroll-mt-24`}
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
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 ${
                        isDark
                          ? "bg-[#4d6879]"
                          : "bg-[#8ca6b7]"
                      }`}
                    />

                    <div className="pt-2">
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-xs font-mono ${faint}`}
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
                                className={`px-3 py-1.5 rounded-md ${softCard} ${muted} text-xs`}
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
            className={`py-24 border-t ${border} scroll-mt-24`}
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
                      className={`text-xs font-mono ${faint}`}
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
            className={`py-24 border-t ${border} scroll-mt-24`}
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
            className={`py-24 border-t ${border} scroll-mt-24`}
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
                    className={`px-6 py-4 rounded-xl border ${border} ${card}`}
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
            ? "bg-[#101820]/90"
            : "bg-[#f5f3ef]/90"
        } backdrop-blur-xl border-b ${border}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <a
            href="#top"
            className={`font-semibold text-lg whitespace-nowrap ${accent}`}
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
            className={`text-xs ${faint}`}
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
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border ${accentBorder} ${accentBg} ${accent} text-xs`}
            >
              <Briefcase size={14} />

              PROFESSIONAL PORTFOLIO
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
              className={`text-xl md:text-2xl mt-7 max-w-2xl ${muted}`}
            >
              A professional overview of my
              skills, experience, projects and
              achievements.
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
            className={`text-sm font-medium ${muted}`}
          >
            {personal.name ||
              "Portfolio"}
          </p>

          <p
            className={`text-xs ${faint}`}
          >
            Created with SmartResumeAnalyzer
          </p>
        </div>
      </footer>
    </div>
  );
}

export default ProfessionalTemplate;