"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface ThemeContextType {
  isGradient: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isGradient, setIsGradient] = useState(true)

  const toggleTheme = () => {
    setIsGradient((prev) => !prev)
  }

  return (
    <ThemeContext.Provider value={{ isGradient, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

