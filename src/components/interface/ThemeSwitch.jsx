"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import Image from "next/image";

export function Theme() {
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  function toggleTheme() {
    return theme === "light" ? setTheme("dark") : setTheme("light");
  }

  useEffect(() => setHasMounted(true), []);

  if (!hasMounted) {
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={36}
        height={36}
        sizes="36x36"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`bg-secondary text-foreground rounded-full p-1 duration-300 transition-transform group: ${
        theme === "light" ? "-rotate-180" : "rotate-0"
      }`}
      aria-label="Toggle Theme"
    >
      {theme === "light" ? <BiSolidSun size={18} /> : <BiSolidMoon size={18} />}
    </button>
  );
}
