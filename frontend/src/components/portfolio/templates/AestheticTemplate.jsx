import React from "react";
import {
  Mail,
  Phone,
  ArrowUpRight,
  Palette,
} from "lucide-react";

function AestheticTemplate({
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
    ? "bg-[#211b23] text-[#f5eaf2]"
    : "bg-[#faf6f5] text-[#433b40]";

  const card = isDark
    ? "bg-[#2b232d] border-[#4a3948]"
    : "bg-[#fffdfb] border-[#eadedb]";

  const softCard = isDark
    ? "bg-[#352b36]"
    : "bg-[#f3e8e8]";

  const muted = isDark
    ? "text-[#cdbfc9]"
    : "text-[#786e74]";

  const faint = isDark
    ? "text-[#887783]"
    : "text-[#aaa0a4]";

  const border = isDark
    ? "border-[#4a3948]"
    : "border-[#eadedb]";

  const accent = isDark
    ? "text-[#e2a9c2]"
    : "text-[#b87891]";

  const accentBg = isDark
    ? "bg-[#45313d]"
    : "bg-[#f3e0e6]";

  const accentBorder = isDark
    ? "border-[#654657]"
    : "border-[#e5c6d0]";

  // ==================================================
  // SECONDARY PASTEL COLORS
  // ==================================================

  const lavender = isDark
    ? "bg-[#3d3045]"
    : "bg-[#eee7f3]";

  const peach = isDark
    ? "bg-[#44332e]"
    : "bg-[#f7e9df]";

  const sage = isDark
    ? "bg-[#304039]"
    : "bg-[#e6eee7]";

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
          className={`text-xs tracking-[0.2em] ${accent}`}
        >
          {number}
        </span>

        <span
          className={`w-10 h-px ${
            isDark
              ? "bg-[#745363]"
              : "bg-[#d8bcc5]"
          }`}
        />

        <h2
          className="
            text-3xl
            md:text-4xl
            font-medium
            tracking-tight
            italic
          "
        >
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
            className={`absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] ${
              isDark
                ? "bg-[#563b49]"
                : "bg-[#ead1d8]"
            }`}
          />

          <img
            src={photo}
            alt={personal.name || "Profile"}
            className={`
              relative
              w-40
              h-48
              md:w-48
              md:h-56
              object-cover
              rounded-[2rem]
              border
              ${border}
              shadow-lg
            `}
          />
        </div>
      );
    }

    return (
      <div
        className={`
          w-40
          h-48
          md:w-48
          md:h-56
          rounded-[2rem]
          border
          ${border}
          ${softCard}
          flex
          flex-col
          items-center
          justify-center
        `}
      >
        <Palette
          size={25}
          className={`mb-3 ${accent}`}
        />

        <span
          className={`text-xs tracking-[0.2em] uppercase ${faint}`}
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
              className={`
                rounded-[2rem]
                border
                ${border}
                ${lavender}
                p-8
                md:p-12
              `}
            >
              <p
                className={`
                  text-base
                  md:text-lg
                  leading-8
                  max-w-4xl
                  ${muted}
                `}
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

            <div className="grid md:grid-cols-2 gap-6">
              {resume.education.map(
                (item, index) => (
                  <div
                    key={index}
                    className={`
                      p-7
                      rounded-[2rem]
                      border
                      ${border}
                      ${index % 2 === 0
                        ? peach
                        : sage}
                    `}
                  >
                    <span
                      className={`text-xs tracking-[0.2em] ${faint}`}
                    >
                      EDUCATION{" "}
                      {String(
                        index + 1
                      ).padStart(2, "0")}
                    </span>

                    <h3 className="text-xl md:text-2xl font-medium mt-6">
                      {item.course}
                    </h3>

                    <p
                      className={`mt-2 ${muted}`}
                    >
                      {item.institute}
                    </p>

                    {item.score && (
                      <span
                        className={`
                          inline-block
                          mt-5
                          px-4
                          py-2
                          rounded-full
                          ${accentBg}
                          ${accent}
                          text-xs
                        `}
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
            className={`py-24 border-t ${border} scroll-mt-24`}
          >
            <Heading
              number="03"
              title="Skills"
            />

            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(
                resume.skills
              ).map(([category, values]) => {
                if (!values?.length) {
                  return null;
                }

                return (
                  <div
                    key={category}
                    className={`
                      p-7
                      rounded-[2rem]
                      border
                      ${border}
                      ${card}
                    `}
                  >
                    <h3
                      className={`
                        text-lg
                        font-medium
                        capitalize
                        italic
                        ${accent}
                      `}
                    >
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
                            className={`
                              px-4
                              py-2
                              rounded-full
                              border
                              ${accentBorder}
                              ${accentBg}
                              ${accent}
                              text-sm
                            `}
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

            <div className="grid lg:grid-cols-2 gap-6">
              {resume.projects.map(
                (project, index) => (
                  <article
                    key={index}
                    className={`
                      group
                      p-8
                      rounded-[2rem]
                      border
                      ${border}
                      ${card}
                      relative
                      overflow-hidden
                    `}
                  >
                    {/* Pastel decorative circle */}

                    <div
                      className={`
                        absolute
                        -top-12
                        -right-12
                        w-32
                        h-32
                        rounded-full
                        ${
                          index % 2 === 0
                            ? lavender
                            : peach
                        }
                      `}
                    />

                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-xs tracking-[0.2em] ${faint}`}
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

                      <h3 className="text-2xl font-medium mt-7">
                        {project.title}
                      </h3>

                      <p
                        className={`
                          mt-5
                          leading-7
                          ${muted}
                        `}
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
                                className={`
                                  px-3
                                  py-1.5
                                  rounded-full
                                  ${softCard}
                                  ${muted}
                                  text-xs
                                `}
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

            <div className="grid md:grid-cols-2 gap-6">
              {resume.certificates.map(
                (certificate, index) => (
                  <div
                    key={index}
                    className={`
                      p-7
                      rounded-[2rem]
                      border
                      ${border}
                      ${index % 2 === 0
                        ? lavender
                        : peach}
                    `}
                  >
                    <span
                      className={`text-xs tracking-[0.2em] ${faint}`}
                    >
                      CERTIFICATE{" "}
                      {String(
                        index + 1
                      ).padStart(2, "0")}
                    </span>

                    <h3 className="text-xl font-medium mt-6">
                      {certificate.title}
                    </h3>

                    <p
                      className={`
                        mt-4
                        leading-7
                        ${muted}
                      `}
                    >
                      {
                        certificate.description
                      }
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

            <div className="max-w-4xl space-y-5">
              {resume.achievements.map(
                (achievement, index) => (
                  <div
                    key={index}
                    className={`
                      flex
                      gap-5
                      p-6
                      rounded-[1.5rem]
                      border
                      ${border}
                      ${card}
                    `}
                  >
                    <span
                      className={`
                        w-9
                        h-9
                        shrink-0
                        rounded-full
                        ${accentBg}
                        ${accent}
                        flex
                        items-center
                        justify-center
                        text-xs
                      `}
                    >
                      {String(
                        index + 1
                      ).padStart(2, "0")}
                    </span>

                    <p
                      className={`
                        leading-7
                        ${muted}
                      `}
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
                    className={`
                      px-6
                      py-4
                      rounded-[1.5rem]
                      border
                      ${border}
                      ${card}
                    `}
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
      className={`
        min-h-screen
        ${page}
        overflow-hidden
        font-sans
      `}
    >
      {/* ==================================================
          NAVBAR
      ================================================== */}

      <nav
        className={`
          sticky
          top-0
          z-50
          ${
            isDark
              ? "bg-[#211b23]/90"
              : "bg-[#faf6f5]/90"
          }
          backdrop-blur-xl
          border-b
          ${border}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <a
            href="#top"
            className={`
              text-lg
              font-medium
              italic
              whitespace-nowrap
              ${accent}
            `}
          >
            {personal.name ||
              "Portfolio"}
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`
                  text-xs
                  capitalize
                  ${muted}
                  hover:${accent}
                  transition
                `}
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
              className={`
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                border
                ${accentBorder}
                ${accentBg}
                ${accent}
                text-xs
              `}
            >
              <Palette size={14} />

              PERSONAL PORTFOLIO
            </div>

            <h1
              className="
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
                font-medium
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
              className={`
                text-xl
                md:text-2xl
                italic
                mt-7
                max-w-2xl
                ${muted}
              `}
            >
              A little collection of my
              skills, projects, experiences
              and things I have created.
            </p>

            <div
              className={`
                flex
                flex-wrap
                gap-5
                mt-8
                text-sm
                ${muted}
              `}
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
            className={`text-sm italic ${muted}`}
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

export default AestheticTemplate;