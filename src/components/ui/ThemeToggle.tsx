import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const dark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
      aria-pressed={dark}
      title={`Switch to ${dark ? "light" : "dark"} mode`}
      className="theme-toggle group relative grid size-11 place-items-center overflow-hidden rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-blue-300 hover:text-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      <Sun
        className={`absolute transition duration-300 ${dark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
        size={18}
        aria-hidden="true"
      />
      <Moon
        className={`absolute transition duration-300 ${dark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`}
        size={18}
        aria-hidden="true"
      />
    </button>
  );
}
