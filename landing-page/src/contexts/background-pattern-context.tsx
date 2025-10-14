"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type BackgroundPattern = "grid" | "beams" | "none";

interface BackgroundPatternContextType {
  pattern: BackgroundPattern;
  setPattern: (pattern: BackgroundPattern) => void;
}

const BackgroundPatternContext = createContext<BackgroundPatternContextType | undefined>(
  undefined
);

export function BackgroundPatternProvider({ children }: { children: ReactNode }) {
  const [pattern, setPattern] = useState<BackgroundPattern>("grid");

  return (
    <BackgroundPatternContext.Provider value={{ pattern, setPattern }}>
      {children}
    </BackgroundPatternContext.Provider>
  );
}

export function useBackgroundPattern() {
  const context = useContext(BackgroundPatternContext);
  if (context === undefined) {
    throw new Error("useBackgroundPattern must be used within a BackgroundPatternProvider");
  }
  return context;
}

