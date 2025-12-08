"use client";
import { ModeToggle } from "./theme";

interface NavigationProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navigation({ isDark, toggleTheme }: NavigationProps) {
  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-primary via-accent to-secondary flex items-center justify-center">
              <span className="text-sm font-bold text-foreground">L&E</span>
            </div>
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
