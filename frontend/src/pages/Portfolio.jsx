import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ArrowLeft, Save, Eye } from "lucide-react";

import TemplateSelection from "../components/portfolio/TemplateSelection";
import ContentEditor from "../components/portfolio/ContentEditor";
import PhotoUploader from "../components/portfolio/PhotoUploader";
import PortfolioPreview from "../components/portfolio/PortfolioPreview";
import SectionOrganizer from "../components/portfolio/SectionOrganizer";
import ThemeSelector from "../components/portfolio/ThemeSelector";

function Portfolio() {
  const { resumeId } = useParams();
  const navigate = useNavigate();

  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);

  // Selected portfolio template
  const [selectedTemplate, setSelectedTemplate] =
    useState("minimal");

  // Portfolio appearance
  const [theme, setTheme] = useState("light");

  // Profile photo
  const [photo, setPhoto] = useState(null);

  // Portfolio sections
  const [sections, setSections] = useState([
    "about",
    "education",
    "skills",
    "projects",
    "certificates",
    "achievements",
    "languages",
  ]);

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
        console.error(
          "Error fetching resume:",
          error
        );
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

  // Update photo
  const handlePhotoChange = (newPhoto) => {
    setPhoto(newPhoto);
  };

  // Save portfolio
  const handleSave = () => {
    const portfolioData = {
      resume,
      selectedTemplate,
      theme,
      photo,
      sections,
    };

    console.log(
      "Portfolio saved:",
      portfolioData
    );

    alert("Portfolio changes saved successfully!");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#080611] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-2 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />

          <p className="text-gray-400">
            Loading portfolio...
          </p>
        </div>
      </div>
    );
  }

  if (!resume) {
    return (
      <div className="min-h-screen bg-[#080611] text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-3">
            Portfolio Not Found
          </h2>

          <p className="text-gray-500 mb-6">
            We couldn't load the selected resume.
          </p>

          <button
            onClick={() => navigate("/")}
            className="px-5 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 transition"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080611] text-white">

      {/* ================= NAVBAR ================= */}

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#080611]/90 backdrop-blur-xl">

        <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold">
              SR
            </div>

            <div>
              <h1 className="font-bold">
                Portfolio Studio
              </h1>

              <p className="text-xs text-gray-500">
                SmartResumeAnalyzer
              </p>
            </div>

          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">

            <button
              onClick={() =>
                navigate(
                  `/portfolio/${resumeId}`
                )
              }
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition text-sm"
            >
              <Eye size={16} />
              View Portfolio
            </button>

            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 transition text-sm font-medium"
            >
              <Save size={16} />
              Save
            </button>

          </div>

        </div>

      </nav>


      {/* ================= PAGE HEADER ================= */}

      <section className="max-w-[1600px] mx-auto px-6 pt-8 pb-6">

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition mb-5"
        >
          <ArrowLeft size={16} />
          Back
        </button>

        <h2 className="text-3xl md:text-4xl font-bold">
          Customize your portfolio
        </h2>

        <p className="text-gray-500 mt-2">
          Choose a design, edit your information,
          upload your photo and arrange your sections.
        </p>

      </section>


      {/* ================= TEMPLATE SELECTION ================= */}

      <section className="max-w-[1600px] mx-auto px-6 pb-8">

        <TemplateSelection
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={
            setSelectedTemplate
          }
        />

      </section>


      {/* ================= EDITOR ================= */}

      <main className="max-w-[1600px] mx-auto px-6 pb-12">

        <div className="grid xl:grid-cols-[420px_1fr] gap-8">

          {/* ================= LEFT PANEL ================= */}

          <aside className="space-y-6">

            <ContentEditor
              resume={resume}
              setResume={updateResume}
            />

            <PhotoUploader
              photo={photo}
              setPhoto={handlePhotoChange}
            />

            <SectionOrganizer
              sections={sections}
              setSections={setSections}
            />

            <ThemeSelector
              theme={theme}
              setTheme={setTheme}
            />

            {/* Save Button */}

            <button
              onClick={handleSave}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition font-semibold"
            >
              Save Portfolio
            </button>

          </aside>


          {/* ================= RIGHT PREVIEW ================= */}

          <section className="min-w-0">

            <div className="sticky top-24">

              <div className="flex items-center justify-between mb-4">

                <div>
                  <p className="text-xs text-purple-400 uppercase tracking-wider">
                    Live Preview
                  </p>

                  <h3 className="text-lg font-semibold">
                    Your Portfolio
                  </h3>
                </div>

                <span className="text-xs text-gray-600">
                  {selectedTemplate}
                </span>

              </div>

              <PortfolioPreview
                resume={resume}
                photo={photo}
                sections={sections}
                template={selectedTemplate}
                theme={theme}
              />

            </div>

          </section>

        </div>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10 py-6 text-center">

        <p className="text-xs text-gray-600">
          SmartResumeAnalyzer • Portfolio Studio • 2026
        </p>

      </footer>

    </div>
  );
}

export default Portfolio;