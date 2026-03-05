"use client";

import { useTheme } from "next-themes";
import { DynamicIcon } from "lucide-react/dynamic";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="group inline-flex items-center justify-center rounded-lg p-2.5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300 ease-out"
      onClick={handleToggle}
    >
      <DynamicIcon
        name={theme === "dark" ? "sun" : "moon"}
        className="h-5 w-5 transition-transform duration-500 ease-out group-hover:rotate-12"
      />
    </button>
  );
}
