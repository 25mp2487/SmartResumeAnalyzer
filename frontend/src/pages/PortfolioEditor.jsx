import React, { useEffect, useState } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

import ContentEditor from "../components/portfolio/ContentEditor";
import PhotoUploader from "../components/portfolio/PhotoUploader";
import SectionOrganizer from "../components/portfolio/SectionOrganizer";
import ThemeSelector from "../components/portfolio/ThemeSelector";
import PortfolioPreview from "../components/portfolio/PortfolioPreview";
import TemplateSelection from "../components/portfolio/TemplateSelection";

function PortfolioEditor() {
  const { resumeId } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const template = searchParams.get("template") || "minimal";

  const [resume, setResume] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [theme, setTheme] = useState("light");

  const [sections, setSections] = useState([
    "about",
    "education",
    "skills",
    "projects",
    "certificates",
    "achievements",
    "languages",
  ]);

  const [loading, setLoading] = useState(true);

  // Fetch resume
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

  // Update resume
  const updateResume = (updatedResume) => {
    setResume(updatedResume);
  };

  // Change template
  const changeTemplate = (newTemplate) => {
    navigate(`/portfolio/${resumeId}/edit?template=${newTemplate}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#080611] text-white flex items-center justify-center">
        <p className="text-gray-400">
          Loading portfolio editor...
        </p>
      </div>
    );
  }

  if (!resume) {
    return (
      <div className="min-h-screen bg-[#080611] text-white flex items-center justify-center">
        <p className="text-red-400">
          Resume not found.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080611] text-white">

      {/* Editor Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#080611]/90 backdrop-blur-xl">
        <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">

          <div>
            <h1 className="text-xl font-bold">
              Portfolio Studio
            </h1>

            <p className="text-xs text-gray-500">
              Customize your portfolio
            </p>
          </div>

          <div className="flex items-center gap-3">

            <button
              onClick={() => navigate(`/portfolio/${resumeId}`)}
              className="px-4 py-2 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition"
            >
              View Portfolio
            </button>

            <button
              onClick={() => setShowTemplates(true)}
              className="px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 transition font-medium"
            >
              Change Template
            </button>

          </div>

        </div>
      </nav>

      {/* Main Editor */}
      <main className="max-w-[1600px] mx-auto p-6">

        <div className="grid xl:grid-cols-[420px_1fr] gap-6">

          {/* LEFT EDITOR PANEL */}
          <aside className="space-y-5">

            {/* Template */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

              <div className="flex items-center justify-between mb-4">

                <div>
                  <p className="text-xs text-gray-500 uppercase">
                    Template
                  </p>

                  <h2 className="font-semibold capitalize">
                    {template}
                  </h2>
                </div>

                <button
                  onClick={() => setShowTemplates(true)}
                  className="text-sm text-purple-400 hover:text-purple-300"
                >
                  Change
                </button>

              </div>

            </div>

            {/* Content Editor */}
            <ContentEditor
              resume={resume}
              setResume={updateResume}
            />

            {/* Photo */}
            <PhotoUploader
              photo={photo}
              setPhoto={setPhoto}
            />

            {/* Section Organizer */}
            <SectionOrganizer
              sections={sections}
              setSections={setSections}
            />

            {/* Theme */}
            <ThemeSelector
              theme={theme}
              setTheme={setTheme}
            />

          </aside>

          {/* RIGHT PREVIEW */}
          <section className="min-w-0">

            <div className="sticky top-24">

              <PortfolioPreview
                resume={resume}
                photo={photo}
                sections={sections}
                template={template}
                theme={theme}
              />

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}

export default PortfolioEditor;