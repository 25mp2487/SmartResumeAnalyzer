import React from "react";

function PhotoUploader({ photo, setPhoto }) {
  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setPhoto(imageUrl);
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

      <div className="mb-5">
        <p className="text-xs text-gray-500 uppercase tracking-wider">
          Profile Photo
        </p>

        <h2 className="text-lg font-semibold mt-1">
          Upload Photo
        </h2>
      </div>

      <div className="flex flex-col items-center">

        {/* Preview */}
        {photo ? (
          <img
            src={photo}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-2 border-purple-500 mb-4"
          />
        ) : (
          <div className="w-28 h-28 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 mb-4">
            No Photo
          </div>
        )}

        {/* Upload */}
        <label className="cursor-pointer px-5 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 transition font-medium">
          Choose Photo

          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="hidden"
          />
        </label>

        {photo && (
          <button
            type="button"
            onClick={() => setPhoto(null)}
            className="mt-3 text-sm text-red-400 hover:text-red-300"
          >
            Remove Photo
          </button>
        )}

      </div>

    </div>
  );
}

export default PhotoUploader;