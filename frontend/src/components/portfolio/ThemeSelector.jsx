import React from "react";
import { Sun, Moon, Monitor } from "lucide-react";

function ThemeSelector({ theme, setTheme }) {
  const themes = [
    {
      id: "light",
      name: "Light",
      description: "Clean and bright",
      icon: Sun,
    },
    {
      id: "dark",
      name: "Dark",
      description: "Elegant and modern",
      icon: Moon,
    },
    {
      id: "system",
      name: "System",
      description: "Use device preference",
      icon: Monitor,
    },
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

      <div className="mb-5">
        <p className="text-xs text-gray-500 uppercase tracking-wider">
          Appearance
        </p>

        <h2 className="text-lg font-semibold mt-1">
          Choose Theme
        </h2>

        <p className="text-sm text-gray-500 mt-2">
          Change how your portfolio looks.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3">

        {themes.map((item) => {
          const Icon = item.icon;
          const selected = theme === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setTheme(item.id)}
              className={`p-4 rounded-xl border transition text-left ${
                selected
                  ? "border-purple-500 bg-purple-500/10"
                  : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
              }`}
            >

              <Icon
                size={20}
                className={
                  selected
                    ? "text-purple-400"
                    : "text-gray-400"
                }
              />

              <p className="font-medium mt-3">
                {item.name}
              </p>

              <p className="text-xs text-gray-500 mt-1">
                {item.description}
              </p>

            </button>
          );
        })}

      </div>

    </div>
  );
}

export default ThemeSelector;