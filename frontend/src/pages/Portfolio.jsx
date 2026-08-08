import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Portfolio() {
  const { resumeId } = useParams();

  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/resume/${resumeId}`
        );

        console.log("Resume data:", response.data);

        setResume(response.data.resume);

      } catch (error) {
        console.error("Error fetching resume:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResume();
  }, [resumeId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <p className="text-xl text-cyan-400">
          Loading portfolio...
        </p>
      </div>
    );
  }

  if (!resume) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <p className="text-xl text-red-400">
          Portfolio not found.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <section className="min-h-screen flex items-center justify-center px-6">

        <div className="text-center">

          <p className="text-cyan-400 text-lg mb-4">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold">
            {resume.personal?.name}
          </h1>

          <p className="text-slate-400 mt-6">
            {resume.personal?.email}
          </p>

          <p className="text-slate-400 mt-2">
            {resume.personal?.phone}
          </p>

        </div>

      </section>


      {/* Education */}

      {resume.education?.length > 0 && (

        <section className="py-24 px-6 bg-slate-900">

          <div className="max-w-6xl mx-auto">

            <h2 className="text-4xl font-bold mb-10">
              Education
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              {resume.education.map((item, index) => (

                <div
                  key={index}
                  className="p-6 rounded-xl border border-slate-700 bg-slate-950"
                >

                  <h3 className="text-xl font-bold">
                    {item.course}
                  </h3>

                  <p className="text-slate-400 mt-2">
                    {item.institute}
                  </p>

                  {item.score && (
                    <p className="text-cyan-400 mt-4">
                      {item.score.label}: {item.score.value}
                    </p>
                  )}

                </div>

              ))}

            </div>

          </div>

        </section>

      )}


      {/* Skills */}

      {resume.skills && (

        <section className="py-24 px-6 bg-slate-950">

          <div className="max-w-6xl mx-auto">

            <h2 className="text-4xl font-bold mb-10">
              Skills
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              {Object.entries(resume.skills).map(
                ([category, values]) => {

                  if (!values || values.length === 0) {
                    return null;
                  }

                  return (
                    <div
                      key={category}
                      className="p-6 rounded-xl border border-slate-800 bg-slate-900"
                    >

                      <h3 className="text-xl font-semibold mb-5 capitalize">
                        {category.replace(
                          /([A-Z])/g,
                          " $1"
                        )}
                      </h3>

                      <div className="flex flex-wrap gap-3">

                        {values.map((skill, index) => (

                          <span
                            key={index}
                            className="px-4 py-2 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800"
                          >
                            {skill}
                          </span>

                        ))}

                      </div>

                    </div>
                  );
                }
              )}

            </div>

          </div>

        </section>

      )}


      {/* Projects */}

      {resume.projects?.length > 0 && (

        <section className="py-24 px-6 bg-slate-900">

          <div className="max-w-6xl mx-auto">

            <h2 className="text-4xl font-bold mb-10">
              Projects
            </h2>

            <div className="space-y-6">

              {resume.projects.map((project, index) => (

                <div
                  key={index}
                  className="p-8 rounded-xl border border-slate-700 bg-slate-950"
                >

                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 mt-5 leading-7">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-6">

                    {project.technologies?.map(
                      (tech, techIndex) => (

                        <span
                          key={techIndex}
                          className="px-4 py-2 rounded-full bg-cyan-950 text-cyan-300"
                        >
                          {tech}
                        </span>

                      )
                    )}

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>

      )}


      {/* Certificates */}

      {resume.certificates?.length > 0 && (

        <section className="py-24 px-6 bg-slate-950">

          <div className="max-w-6xl mx-auto">

            <h2 className="text-4xl font-bold mb-10">
              Certificates
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              {resume.certificates.map(
                (certificate, index) => (

                  <div
                    key={index}
                    className="p-6 rounded-xl border border-slate-800 bg-slate-900"
                  >

                    <h3 className="text-xl font-bold">
                      {certificate.title}
                    </h3>

                    <p className="text-slate-400 mt-4 leading-7">
                      {certificate.description}
                    </p>

                  </div>

                )
              )}

            </div>

          </div>

        </section>

      )}


      {/* Achievements */}

      {resume.achievements?.length > 0 && (

        <section className="py-24 px-6 bg-slate-900">

          <div className="max-w-6xl mx-auto">

            <h2 className="text-4xl font-bold mb-10">
              Achievements
            </h2>

            <div className="space-y-4">

              {resume.achievements.map(
                (achievement, index) => (

                  <div
                    key={index}
                    className="p-6 rounded-xl border border-slate-700 bg-slate-950"
                  >

                    <p className="text-slate-300 leading-7">
                      {achievement.description}
                    </p>

                  </div>

                )
              )}

            </div>

          </div>

        </section>

      )}


      {/* Languages */}

      {resume.languages?.length > 0 && (

        <section className="py-24 px-6 bg-slate-950">

          <div className="max-w-6xl mx-auto">

            <h2 className="text-4xl font-bold mb-10">
              Languages
            </h2>

            <div className="flex flex-wrap gap-5">

              {resume.languages.map(
                (language, index) => (

                  <div
                    key={index}
                    className="px-6 py-4 rounded-xl border border-slate-800 bg-slate-900"
                  >

                    <p className="font-semibold">
                      {language.name}
                    </p>

                    {language.level && (
                      <p className="text-slate-500 text-sm mt-1">
                        {language.level}
                      </p>
                    )}

                  </div>

                )
              )}

            </div>

          </div>

        </section>

      )}

    </div>
  );
}

export default Portfolio;