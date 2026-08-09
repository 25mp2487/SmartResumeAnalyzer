import React from "react";
import {
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react";

function MinimalTemplate({
  resume,
  photo,
  sections,
  theme,
}) {
  const personal = resume?.personal || {};
  const isDark = theme === "dark";

  // --------------------------------------------------
  // COLORS
  // --------------------------------------------------

  const page = isDark
    ? "bg-[#101a26] text-[#edf4fa]"
    : "bg-[#f4f8fc] text-[#243447]";

  const card = isDark
    ? "bg-[#172536] border-[#2b4054]"
    : "bg-white border-[#dce7f1]";

  const softCard = isDark
    ? "bg-[#1d3042]"
    : "bg-[#e8f1f8]";

  const muted = isDark
    ? "text-[#aebdca]"
    : "text-[#66788a]";

  const faint = isDark
    ? "text-[#718596]"
    : "text-[#91a0ad]";

  const border = isDark
    ? "border-[#2b4054]"
    : "border-[#dce7f1]";

  const accent = isDark
    ? "text-[#8bb8df]"
    : "text-[#4f7ea8]";

  const accentBg = isDark
    ? "bg-[#1e3449]"
    : "bg-[#e5eff8]";

  // --------------------------------------------------
  // SECTION HEADING
  // --------------------------------------------------

  const Heading = ({
    number,
    title,
  }) => (
    <div className="mb-10">
      <div className="flex items-center gap-4">
        <span
          className={`text-xs font-mono ${faint}`}
        >
          {number}
        </span>

        <span
          className={`w-10 h-px ${
            isDark
              ? "bg-[#3c5266]"
              : "bg-[#c8d8e5]"
          }`}
        />

        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          {title}
        </h2>
      </div>
    </div>
  );

  // --------------------------------------------------
  // PHOTO
  // --------------------------------------------------

  const renderPhoto = () => {
    if (photo) {
      return (
        <img
          src={photo}
          alt={personal.name || "Profile"}
          className={`w-36 h-36 md:w-44 md:h-44 object-cover rounded-2xl border ${border} shadow-lg`}
        />
      );
    }

    return (
      <div
        className={`w-36 h-36 md:w-44 md:h-44 rounded-2xl border ${border} ${softCard} flex items-center justify-center`}
      >
        <span
          className={`text-xs uppercase tracking-widest ${faint}`}
        >
          Add Photo
        </span>
      </div>
    );
  };

  // --------------------------------------------------
  // RENDER SECTIONS
  // --------------------------------------------------

  const renderSection = (section) => {
    switch (section) {
      // ================================================
      // ABOUT
      // ================================================

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

      // ================================================
      // EDUCATION
      // ================================================

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
                      className={`text-xs font-mono ${faint}`}
                    >
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
                      <div
                        className={`inline-block mt-5 px-4 py-2 rounded-lg ${accentBg} text-sm ${accent}`}
                      >
                        {item.score.label}:{" "}
                        {item.score.value}
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </section>
        );

      // ================================================
      // SKILLS
      // ================================================

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

            <div className="flex flex-wrap gap-3">
              {Object.entries(
                resume.skills
              ).map(([category, values]) => {
                if (!values?.length) {
                  return null;
                }

                return values.map(
                  (skill, index) => (
                    <span
                      key={`${category}-${index}`}
                      className={`px-4 py-2.5 rounded-lg border ${border} ${softCard} text-sm ${accent}`}
                    >
                      {skill}
                    </span>
                  )
                );
              })}
            </div>
          </section>
        );

      // ================================================
      // PROJECTS
      // ================================================

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
                    className={`group p-8 rounded-2xl border ${border} ${card} hover:-translate-y-1 transition-all duration-300`}
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <span
                          className={`text-xs font-mono ${faint}`}
                        >
                          PROJECT{" "}
                          {String(
                            index + 1
                          ).padStart(2, "0")}
                        </span>

                        <h3 className="text-2xl font-semibold mt-4">
                          {project.title}
                        </h3>
                      </div>

                      <ArrowUpRight
                        size={20}
                        className={`${faint} group-hover:translate-x-1 group-hover:-translate-y-1 transition`}
                      />
                    </div>

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
                              className={`px-3 py-1.5 rounded-md text-xs ${softCard} ${accent}`}
                            >
                              {tech}
                            </span>
                          )
                        )}
                      </div>
                    )}
                  </article>
                )
              )}
            </div>
          </section>
        );

      // ================================================
      // CERTIFICATES
      // ================================================

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

      // ================================================
      // ACHIEVEMENTS
      // ================================================

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

            <div className="space-y-4 max-w-4xl">
              {resume.achievements.map(
                (achievement, index) => (
                  <div
                    key={index}
                    className={`flex gap-5 p-6 rounded-xl border ${border} ${card}`}
                  >
                    <span
                      className={`text-xs font-mono ${faint}`}
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

      // ================================================
      // LANGUAGES
      // ================================================

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

  // --------------------------------------------------
  // MAIN
  // --------------------------------------------------

  return (
    <div
      className={`min-h-screen ${page} overflow-hidden`}
    >
      {/* ============================================
          NAVBAR
      ============================================ */}

      <nav
        className={`sticky top-0 z-50 ${
          isDark
            ? "bg-[#101a26]/90"
            : "bg-[#f4f8fc]/90"
        } backdrop-blur-xl border-b ${border}`}
      >
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <a
            href="#top"
            className="font-semibold text-lg whitespace-nowrap"
          >
            {personal.name ||
              "Portfolio"}
          </a>

          <div className="hidden md:flex items-center gap-6">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`text-xs capitalize ${muted} hover:${accent} transition`}
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

      {/* ============================================
          HERO
      ============================================ */}

      <header
        id="top"
        className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32"
      >
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
          <div>
            <p
              className={`text-sm font-medium ${accent}`}
            >
              PERSONAL PORTFOLIO
            </p>

            <h1
              className="
                text-5xl
                sm:text-6xl
                md:text-7xl
                font-bold
                tracking-tight
                leading-none
                mt-5
                whitespace-nowrap
              "
            >
              {personal.name ||
                "Your Name"}
            </h1>

            <p
              className={`text-lg md:text-xl mt-6 max-w-2xl ${muted}`}
            >
              A simple collection of my
              skills, experiences, projects
              and achievements.
            </p>

            <div
              className={`flex flex-wrap gap-5 mt-7 text-sm ${muted}`}
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

          <div className="flex justify-center md:justify-end">
            {renderPhoto()}
          </div>
        </div>
      </header>

      {/* ============================================
          CONTENT
      ============================================ */}

      <main className="max-w-6xl mx-auto px-6 md:px-12 pb-20">
        {sections.map(renderSection)}
      </main>

      {/* ============================================
          FOOTER
      ============================================ */}

      <footer
        className={`border-t ${border} py-10`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <p
            className={`text-sm ${muted}`}
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

export default MinimalTemplate;