import { useNavigate } from "react-router-dom";
import {
  Upload,
  FileText,
  Sparkles,
  LayoutDashboard,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

function App() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">

      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none">

        <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="absolute top-[300px] right-[-150px] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl" />

        <div className="absolute bottom-[-200px] left-[40%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-3xl" />

      </div>


      {/* ================= NAVBAR ================= */}

      <nav className="relative z-10 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* Logo */}

          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("/")}
          >

            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">

              <FileText size={21} />

            </div>

            <div>

              <h1 className="font-bold text-lg">
                SmartResume
              </h1>

              <p className="text-xs text-gray-500">
                Analyzer
              </p>

            </div>

          </div>


          {/* Navigation */}

          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">

            <a
              href="#features"
              className="hover:text-white transition"
            >
              Features
            </a>

            <a
              href="#how-it-works"
              className="hover:text-white transition"
            >
              How It Works
            </a>

            <button
              onClick={() => navigate("/login")}
              className="px-5 py-2.5 rounded-lg border border-white/10 hover:bg-white/5 transition"
            >
              Login
            </button>

          </div>

        </div>

      </nav>


      {/* ================= HERO ================= */}

      <main className="relative z-10">

        <section className="max-w-7xl mx-auto px-6 pt-24 pb-20">

          <div className="grid lg:grid-cols-2 gap-16 items-center">


            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 text-sm mb-7">

                <Sparkles size={15} />

                Smart Resume → Portfolio Generator

              </div>


              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">

                Turn your

                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">

                  Resume into a Portfolio.

                </span>

              </h2>


              <p className="mt-7 text-lg text-gray-400 max-w-xl leading-relaxed">

                Upload your resume and let SmartResumeAnalyzer
                extract your education, skills, projects,
                certifications, achievements and more —
                then transform them into a professional portfolio.

              </p>


              {/* Buttons */}

              <div className="flex flex-wrap gap-4 mt-9">

                <button
                  onClick={() => navigate("/upload")}
                  className="group flex items-center gap-3 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 font-semibold shadow-lg shadow-cyan-500/20 transition-all duration-300"
                >

                  <Upload size={19} />

                  Upload Resume

                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />

                </button>


                <a
                  href="#features"
                  className="px-7 py-3.5 rounded-xl border border-white/10 hover:bg-white/5 transition font-medium"
                >
                  Explore Features
                </a>

              </div>


              {/* Small trust text */}

              <div className="flex flex-wrap gap-6 mt-8 text-sm text-gray-500">

                <div className="flex items-center gap-2">

                  <CheckCircle2
                    size={16}
                    className="text-cyan-400"
                  />

                  Automatic extraction

                </div>

                <div className="flex items-center gap-2">

                  <CheckCircle2
                    size={16}
                    className="text-cyan-400"
                  />

                  Structured portfolio

                </div>

              </div>

            </div>


            {/* RIGHT VISUAL */}

            <div className="relative">

              <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full" />


              <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 shadow-2xl">

                {/* Top */}

                <div className="flex items-center justify-between mb-6">

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">

                      <FileText
                        size={20}
                        className="text-cyan-400"
                      />

                    </div>

                    <div>

                      <p className="font-medium">
                        Your Resume
                      </p>

                      <p className="text-xs text-gray-500">
                        Resume.pdf
                      </p>

                    </div>

                  </div>


                  <span className="text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">

                    Ready

                  </span>

                </div>


                {/* Resume preview */}

                <div className="space-y-4">

                  <div className="h-3 w-3/4 rounded bg-white/10" />

                  <div className="h-2 w-full rounded bg-white/5" />

                  <div className="h-2 w-5/6 rounded bg-white/5" />

                  <div className="grid grid-cols-2 gap-3 pt-4">

                    <div className="h-20 rounded-xl bg-white/[0.04] border border-white/5" />

                    <div className="h-20 rounded-xl bg-white/[0.04] border border-white/5" />

                  </div>

                  <div className="h-20 rounded-xl bg-white/[0.04] border border-white/5" />

                </div>


                {/* Processing */}

                <div className="mt-6 p-4 rounded-xl bg-cyan-500/5 border border-cyan-400/10">

                  <div className="flex items-center justify-between mb-3">

                    <span className="text-sm text-gray-300">
                      Portfolio generation
                    </span>

                    <span className="text-sm text-cyan-400">
                      85%
                    </span>

                  </div>

                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">

                    <div className="h-full w-[85%] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />

                  </div>

                </div>


              </div>

            </div>

          </div>

        </section>


        {/* ================= FEATURES ================= */}

        <section
          id="features"
          className="border-t border-white/5 bg-white/[0.015]"
        >

          <div className="max-w-7xl mx-auto px-6 py-24">

            <div className="text-center max-w-2xl mx-auto mb-14">

              <p className="text-cyan-400 text-sm font-medium mb-3">
                FEATURES
              </p>

              <h2 className="text-3xl md:text-4xl font-bold">
                Everything you need to build your portfolio
              </h2>

              <p className="text-gray-500 mt-4">
                Your resume information is automatically organized
                into meaningful portfolio sections.
              </p>

            </div>


            <div className="grid md:grid-cols-3 gap-6">


              {/* Feature 1 */}

              <div className="group p-7 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-cyan-400/20 transition">

                <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-6">

                  <FileText
                    className="text-cyan-400"
                    size={23}
                  />

                </div>

                <h3 className="text-xl font-semibold mb-3">
                  Resume Parsing
                </h3>

                <p className="text-gray-500 leading-relaxed">
                  Extract structured information from uploaded
                  resumes including education, skills, projects
                  and certifications.
                </p>

              </div>


              {/* Feature 2 */}

              <div className="group p-7 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-blue-400/20 transition">

                <div className="w-12 h-12 rounded-xl bg-blue-400/10 flex items-center justify-center mb-6">

                  <Sparkles
                    className="text-blue-400"
                    size={23}
                  />

                </div>

                <h3 className="text-xl font-semibold mb-3">
                  Smart Organization
                </h3>

                <p className="text-gray-500 leading-relaxed">
                  Automatically organize resume information
                  into clean and meaningful portfolio sections.
                </p>

              </div>


              {/* Feature 3 */}

              <div className="group p-7 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-purple-400/20 transition">

                <div className="w-12 h-12 rounded-xl bg-purple-400/10 flex items-center justify-center mb-6">

                  <LayoutDashboard
                    className="text-purple-400"
                    size={23}
                  />

                </div>

                <h3 className="text-xl font-semibold mb-3">
                  Portfolio Generation
                </h3>

                <p className="text-gray-500 leading-relaxed">
                  Transform your extracted resume data into a
                  professional and responsive portfolio.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= HOW IT WORKS ================= */}

        <section
          id="how-it-works"
          className="max-w-7xl mx-auto px-6 py-24"
        >

          <div className="text-center mb-16">

            <p className="text-cyan-400 text-sm font-medium mb-3">
              HOW IT WORKS
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              From resume to portfolio in three steps
            </h2>

          </div>


          <div className="grid md:grid-cols-3 gap-8">

            <Step
              number="01"
              title="Upload"
              description="Upload your resume in a supported format."
            />

            <Step
              number="02"
              title="Analyze"
              description="The system extracts and structures your resume information."
            />

            <Step
              number="03"
              title="Generate"
              description="Your information is transformed into a professional portfolio."
            />

          </div>

        </section>


        {/* ================= CTA ================= */}

        <section className="px-6 pb-24">

          <div className="max-w-5xl mx-auto rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-cyan-500/10 to-blue-600/5 p-12 text-center">

            <Sparkles
              className="mx-auto text-cyan-400 mb-5"
              size={30}
            />

            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to build your portfolio?
            </h2>

            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Upload your resume and let SmartResumeAnalyzer
              transform your information into a professional portfolio.
            </p>

            <button
              onClick={() => navigate("/upload")}
              className="mt-8 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold hover:opacity-90 transition"
            >
              Get Started
            </button>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/5 py-8">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <div className="flex items-center gap-2">

            <FileText
              size={18}
              className="text-cyan-400"
            />

            <span className="font-medium">
              SmartResumeAnalyzer
            </span>

          </div>

          <p className="text-sm text-gray-600">
            Resume to Portfolio Generator
          </p>

        </div>

      </footer>

    </div>
  );
}


/* =========================
   STEP COMPONENT
========================= */

function Step({ number, title, description }) {

  return (

    <div className="relative text-center">

      <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 font-bold text-lg mb-6">

        {number}

      </div>

      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-gray-500 leading-relaxed max-w-sm mx-auto">
        {description}
      </p>

    </div>

  );
}

export default App;