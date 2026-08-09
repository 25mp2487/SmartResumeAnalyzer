import React from "react";

function ContentEditor({ resume, setResume }) {
  if (!resume) {
    return null;
  }

  const updatePersonal = (field, value) => {
    setResume({
      ...resume,
      personal: {
        ...resume.personal,
        [field]: value,
      },
    });
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

      <div className="mb-6">
        <p className="text-xs text-gray-500 uppercase tracking-wider">
          Content
        </p>

        <h2 className="text-lg font-semibold mt-1">
          Edit Personal Details
        </h2>
      </div>

      <div className="space-y-4">

        {/* Name */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Name
          </label>

          <input
            type="text"
            value={resume.personal?.name || ""}
            onChange={(e) =>
              updatePersonal("name", e.target.value)
            }
            className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 outline-none focus:border-purple-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Email
          </label>

          <input
            type="email"
            value={resume.personal?.email || ""}
            onChange={(e) =>
              updatePersonal("email", e.target.value)
            }
            className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 outline-none focus:border-purple-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Phone
          </label>

          <input
            type="text"
            value={resume.personal?.phone || ""}
            onChange={(e) =>
              updatePersonal("phone", e.target.value)
            }
            className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 outline-none focus:border-purple-500"
          />
        </div>

      </div>

    </div>
  );
}

export default ContentEditor;