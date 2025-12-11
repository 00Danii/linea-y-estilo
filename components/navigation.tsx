"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ModeToggle } from "./theme";

interface NavigationProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navigation({ isDark, toggleTheme }: NavigationProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode = mounted ? resolvedTheme === "dark" : isDark;
  const logoSrc = isDarkMode ? "/logoDark.svg" : "/logoLight.svg";

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <img
              src={logoSrc}
              alt="Línea & Estilo"
              className="w-9 h-9 rounded-lg object-contain"
            />
            <span className="text-xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Línea & Estilo
            </span>
          </div>

          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
