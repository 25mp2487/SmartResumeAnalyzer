import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Upload,
  Palette,
  LayoutTemplate,
  Download,
  Check,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleGetStarted = () => {
    navigate("/auth");
  };

  return (
    <div className="min-h-screen bg-[#080611] text-white overflow-hidden">

      {/* ================= NAVBAR ================= */}

      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#080611]/80 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* Logo */}

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
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


          {/* Desktop Navigation */}

          <div className="hidden md:flex items-center gap-8">

            <a
              href="#features"
              className="text-sm text-gray-400 hover:text-white transition"
            >
              Features
            </a>

            <a
              href="#templates"
              className="text-sm text-gray-400 hover:text-white transition"
            >
              Templates
            </a>

            <a
              href="#how-it-works"
              className="text-sm text-gray-400 hover:text-white transition"
            >
              How it works
            </a>

          </div>


          {/* Desktop Buttons */}

          <div className="hidden md:flex items-center gap-3">

            <button
              onClick={() => navigate("/auth")}
              className="px-4 py-2 text-sm text-gray-300 hover:text-white transition"
            >
              Login
            </button>

            <button
              onClick={handleGetStarted}
              className="px-5 py-2.5 rounded-xl bg-white text-black text-sm font-semibold hover:bg-gray-200 transition"
            >
              Get Started
            </button>

          </div>


          {/* Mobile Menu Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-300"
          >
            {menuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

        </div>


        {/* Mobile Menu */}

        {menuOpen && (
          <div className="md:hidden border-t border-white/10 px-6 py-5 space-y-4 bg-[#080611]">

            <a
              href="#features"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-400"
            >
              Features
            </a>

            <a
              href="#templates"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-400"
            >
              Templates
            </a>

            <a
              href="#how-it-works"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-400"
            >
              How it works
            </a>

            <button
              onClick={() => navigate("/login")}
              className="w-full py-3 rounded-xl bg-white text-black font-semibold"
            >
              Get Started
            </button>

          </div>
        )}

      </nav>


      {/* ================= HERO ================= */}

      <section className="relative min-h-screen flex items-center pt-28">

        {/* Background glow */}

        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/20 blur-[140px] rounded-full pointer-events-none" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-pink-500/10 blur-[120px] rounded-full pointer-events-none" />


        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">

          <div className="max-w-4xl mx-auto text-center">

            {/* Badge */}

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-400/20 bg-purple-400/5 text-purple-300 text-sm mb-8">

              <Sparkles size={15} />

              Build a portfolio that feels like you

            </div>


            {/* Heading */}

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">

              Turn your resume into a

              <span className="block mt-3 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 bg-clip-text text-transparent">
                stunning portfolio.
              </span>

            </h1>


            {/* Description */}

            <p className="mt-8 text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">

              Upload your resume, choose a design,
              customize your content and create a
              professional portfolio without starting
              from scratch.

            </p>


            {/* CTA */}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">

              <button
                onClick={handleGetStarted}
                className="group flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white text-black font-semibold hover:bg-gray-200 transition"
              >

                Create My Portfolio

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />

              </button>


              <a
                href="#templates"
                className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 transition"
              >
                Explore Templates
              </a>

            </div>


            {/* Small trust text */}

            <p className="mt-7 text-xs text-gray-600">
              Upload • Customize • Preview • Download
            </p>

          </div>


          {/* ================= HERO PREVIEW ================= */}

          <div className="relative max-w-5xl mx-auto mt-20">

            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/10 to-orange-500/20 blur-3xl" />

            <div className="relative rounded-3xl border border-white/10 bg-[#11101a] p-3 shadow-2xl">

              {/* Browser bar */}

              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">

                <div className="w-3 h-3 rounded-full bg-red-400/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <div className="w-3 h-3 rounded-full bg-green-400/70" />

                <div className="ml-4 flex-1 h-7 rounded-lg bg-white/5" />

              </div>


              {/* Fake Portfolio */}

              <div className="grid md:grid-cols-[1fr_260px] min-h-[350px]">

                <div className="p-8 md:p-12">

                  <div className="w-20 h-2 rounded-full bg-purple-400/50" />

                  <div className="w-64 md:w-96 h-8 rounded-lg bg-white/10 mt-6" />

                  <div className="w-48 h-4 rounded-lg bg-white/5 mt-4" />

                  <div className="grid grid-cols-2 gap-4 mt-10">

                    <div className="h-20 rounded-xl bg-white/5" />
                    <div className="h-20 rounded-xl bg-white/5" />

                  </div>

                </div>


                <div className="hidden md:flex items-center justify-center bg-white/[0.02]">

                  <div className="w-36 h-44 rounded-2xl bg-gradient-to-br from-purple-400/20 to-pink-400/20 border border-white/10" />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}

      <section
        id="features"
        className="py-28 border-t border-white/10"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-2xl mb-16">

            <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest">
              Features
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Everything you need to build your portfolio.
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              From your resume to the final downloadable
              portfolio, everything can be customized in
              one place.
            </p>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

            <FeatureCard
              icon={Upload}
              title="Resume Upload"
              description="Start with your existing resume and use its information as the foundation for your portfolio."
            />

            <FeatureCard
              icon={LayoutTemplate}
              title="Multiple Templates"
              description="Choose from minimal, dark, technical, professional and aesthetic portfolio designs."
            />

            <FeatureCard
              icon={Palette}
              title="Customize Everything"
              description="Edit your content, upload your photo, change themes and personalize your portfolio."
            />

            <FeatureCard
              icon={ArrowRight}
              title="Rearrange Sections"
              description="Move sections around to decide exactly how your portfolio should be presented."
            />

            <FeatureCard
              icon={Sparkles}
              title="Live Preview"
              description="See your changes instantly while designing your portfolio."
            />

            <FeatureCard
              icon={Download}
              title="Download"
              description="Once your portfolio is ready, download your finished design."
            />

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}

      <section
        id="how-it-works"
        className="py-28 border-t border-white/10"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-2xl mx-auto">

            <p className="text-pink-400 text-sm font-semibold uppercase tracking-widest">
              How it works
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Three simple steps.
            </h2>

          </div>


          <div className="grid md:grid-cols-3 gap-6 mt-16">

            <Step
              number="01"
              title="Upload"
              description="Upload your resume and let your existing information become the starting point."
            />

            <Step
              number="02"
              title="Customize"
              description="Choose a template, edit your content, upload your photo and arrange your sections."
            />

            <Step
              number="03"
              title="Download"
              description="Preview your finished portfolio and download it when everything looks right."
            />

          </div>

        </div>

      </section>


      {/* ================= TEMPLATES ================= */}

      <section
        id="templates"
        className="py-28 border-t border-white/10"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">

            <div>

              <p className="text-orange-300 text-sm font-semibold uppercase tracking-widest">
                Templates
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mt-4">
                A style for every personality.
              </h2>

            </div>

            <button
              onClick={handleGetStarted}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
            >
              View all templates
              <ArrowRight size={16} />
            </button>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-14">

            <TemplateCard
              name="Minimal"
              description="Clean & simple"
              className="bg-[#eef5f8]"
            />

            <TemplateCard
              name="Dark"
              description="Elegant & modern"
              className="bg-[#24202b]"
            />

            <TemplateCard
              name="Tech"
              description="Developer focused"
              className="bg-[#dceee8]"
            />

            <TemplateCard
              name="Professional"
              description="Corporate & polished"
              className="bg-[#e9e7df]"
            />

            <TemplateCard
              name="Aesthetic"
              description="Soft & creative"
              className="bg-[#f2e3e8]"
            />

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="py-28">

        <div className="max-w-5xl mx-auto px-6">

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-orange-500/10 p-10 md:p-16 text-center">

            <div className="absolute w-72 h-72 bg-purple-500/10 blur-3xl rounded-full -top-32 -left-20" />

            <div className="relative">

              <Sparkles
                className="mx-auto text-purple-400"
                size={28}
              />

              <h2 className="text-4xl md:text-5xl font-bold mt-6">
                Your resume deserves more than a PDF.
              </h2>

              <p className="text-gray-400 mt-5 max-w-xl mx-auto">
                Turn your existing resume into a portfolio
                that represents your skills, projects and
                personality.
              </p>

              <button
                onClick={handleGetStarted}
                className="mt-8 px-7 py-4 rounded-2xl bg-white text-black font-semibold hover:bg-gray-200 transition"
              >
                Start Building
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-5">

          <div className="flex items-center gap-3">

            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Sparkles size={15} />
            </div>

            <span className="font-semibold">
              SmartResume
            </span>

          </div>

          <p className="text-xs text-gray-600">
            Portfolio Studio • 2026
          </p>

        </div>

      </footer>

    </div>
  );
}


/* ==================================================
   FEATURE CARD
================================================== */

function FeatureCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <div className="group p-7 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-purple-400/20 transition">

      <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-500/10 group-hover:text-purple-300 transition">

        <Icon size={20} />

      </div>

      <h3 className="text-lg font-semibold mt-6">
        {title}
      </h3>

      <p className="text-sm text-gray-500 mt-3 leading-6">
        {description}
      </p>

    </div>
  );
}


/* ==================================================
   STEP
================================================== */

function Step({
  number,
  title,
  description,
}) {
  return (
    <div className="relative p-8 rounded-3xl border border-white/10 bg-white/[0.03]">

      <span className="text-sm text-purple-400 font-mono">
        {number}
      </span>

      <h3 className="text-2xl font-semibold mt-8">
        {title}
      </h3>

      <p className="text-gray-500 mt-4 leading-7">
        {description}
      </p>

    </div>
  );
}


/* ==================================================
   TEMPLATE CARD
================================================== */

function TemplateCard({
  name,
  description,
  className,
}) {
  return (
    <div className="group">

      <div
        className={`h-64 rounded-2xl ${className} p-5 overflow-hidden`}
      >

        <div className="w-16 h-2 bg-black/10 rounded-full" />

        <div className="w-32 h-4 bg-black/10 rounded-full mt-6" />

        <div className="w-24 h-2 bg-black/10 rounded-full mt-3" />

        <div className="grid grid-cols-2 gap-3 mt-8">

          <div className="h-20 rounded-xl bg-black/5" />

          <div className="h-20 rounded-xl bg-black/5" />

        </div>

        <div className="space-y-2 mt-5">

          <div className="h-2 rounded-full bg-black/10" />

          <div className="h-2 w-4/5 rounded-full bg-black/10" />

          <div className="h-2 w-3/5 rounded-full bg-black/10" />

        </div>

      </div>

      <h3 className="font-semibold mt-4">
        {name}
      </h3>

      <p className="text-sm text-gray-600 mt-1">
        {description}
      </p>

    </div>
  );
}

export default Home;