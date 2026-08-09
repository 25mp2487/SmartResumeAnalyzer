import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  Code2,
  Moon,
  Palette,
  Sparkles,
  Sun,
} from "lucide-react";

function TemplateSelection() {
  const navigate = useNavigate();
  const { resumeId } = useParams();

  const templates = [
    {
      id: "minimal",
      name: "Minimal Light",
      description:
        "A clean and simple portfolio with elegant typography and plenty of white space.",
      icon: Sun,
      previewClass: "bg-white text-gray-900",
      accent: "from-gray-700 to-gray-400",
    },
    {
      id: "dark",
      name: "Elegant Dark",
      description:
        "A premium dark portfolio with a sophisticated and modern appearance.",
      icon: Moon,
      previewClass: "bg-[#171717] text-white",
      accent: "from-purple-500 to-pink-500",
    },
    {
      id: "tech",
      name: "Tech Developer",
      description:
        "A technical portfolio designed for developers and technology professionals.",
      icon: Code2,
      previewClass: "bg-[#0f172a] text-cyan-300",
      accent: "from-cyan-400 to-blue-500",
    },
    {
      id: "professional",
      name: "Professional",
      description:
        "A structured and professional design suitable for corporate and job applications.",
      icon: Briefcase,
      previewClass: "bg-[#f8fafc] text-slate-800",
      accent: "from-indigo-500 to-violet-500",
    },
    {
      id: "aesthetic",
      name: "Aesthetic",
      description:
        "A creative and visually appealing portfolio with a soft modern aesthetic.",
      icon: Palette,
      previewClass: "bg-[#faf7f5] text-stone-800",
      accent: "from-rose-400 to-orange-300",
    },
  ];

  const handleSelect = (templateId) => {
    navigate(`/portfolio/${resumeId}/edit?template=${templateId}`);
  };

  return (
    <div className="min-h-screen bg-[#080611] text-white">

      {/* Navbar */}
      <nav className="border-b border-white/10 bg-[#080611]/90 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Sparkles size={20} />
            </div>

            <div>
              <h1 className="font-bold text-lg">
                SmartResume
              </h1>

              <p className="text-xs text-gray-500">
                Portfolio Studio
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate(`/portfolio/${resumeId}`)}
            className="text-sm text-gray-400 hover:text-white transition"
          >
            Back to Portfolio
          </button>

        </div>
      </nav>


      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-10">

        <div className="max-w-3xl">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-400/20 bg-purple-400/5 text-purple-300 text-sm mb-6">
            <Sparkles size={15} />
            Portfolio Studio
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Choose your portfolio
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 bg-clip-text text-transparent">
              design
            </span>
          </h2>

          <p className="mt-5 text-gray-400 text-lg leading-relaxed">
            Select a template that matches your style. You can customize
            your photo, content, section arrangement and appearance later.
          </p>

        </div>

      </section>


      {/* Templates */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

          {templates.map((template) => {

            const Icon = template.icon;

            return (
              <div
                key={template.id}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-purple-400/40 hover:-translate-y-1 transition-all duration-300"
              >

                {/* Preview */}
                <div className="p-5">

                  <div
                    className={`relative h-64 rounded-2xl overflow-hidden ${template.previewClass}`}
                  >

                    {/* Fake portfolio preview */}
                    <div className="p-6">

                      <div className="flex items-center justify-between">

                        <div className="w-8 h-8 rounded-full bg-black/10" />

                        <div className="flex gap-2">
                          <div className="w-8 h-1 rounded-full bg-black/10" />
                          <div className="w-8 h-1 rounded-full bg-black/10" />
                          <div className="w-8 h-1 rounded-full bg-black/10" />
                        </div>

                      </div>


                      <div className="mt-8">

                        <div className="w-24 h-2 rounded-full bg-black/20 mb-3" />

                        <div className="w-40 h-4 rounded-full bg-black/20 mb-2" />

                        <div className="w-32 h-2 rounded-full bg-black/10" />

                      </div>


                      <div className="grid grid-cols-3 gap-3 mt-8">

                        <div className="h-16 rounded-lg bg-black/5" />
                        <div className="h-16 rounded-lg bg-black/5" />
                        <div className="h-16 rounded-lg bg-black/5" />

                      </div>


                      <div className="mt-5 space-y-2">

                        <div className="w-full h-2 rounded-full bg-black/10" />

                        <div className="w-4/5 h-2 rounded-full bg-black/10" />

                        <div className="w-3/5 h-2 rounded-full bg-black/10" />

                      </div>

                    </div>


                    {/* Template icon */}
                    <div className="absolute bottom-4 right-4">

                      <div
                        className={`w-11 h-11 rounded-xl bg-gradient-to-br ${template.accent} flex items-center justify-center text-white shadow-lg`}
                      >
                        <Icon size={20} />
                      </div>

                    </div>

                  </div>

                </div>


                {/* Details */}
                <div className="px-6 pb-6">

                  <h3 className="text-xl font-semibold">
                    {template.name}
                  </h3>

                  <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                    {template.description}
                  </p>


                  <button
                    onClick={() => handleSelect(template.id)}
                    className="mt-6 w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-purple-500 hover:border-purple-500 transition-all duration-300 font-medium"
                  >

                    Use Template

                    <ArrowRight
                      size={17}
                      className="group-hover:translate-x-1 transition"
                    />

                  </button>

                </div>

              </div>
            );
          })}

        </div>

      </section>


      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center">

        <p className="text-gray-600 text-sm">
          SmartResume Portfolio Studio • 2026
        </p>

      </footer>

    </div>
  );
}

export default TemplateSelection;