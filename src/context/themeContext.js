"use client"
import React, { useEffect, createContext, useState } from 'react'

const ThemeContext = createContext()

const getTheme = () => {
  if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'dark-theme')
    return 'dark-theme'
  } else {
    return localStorage.getItem('theme')
  }
}

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme)

  function toggleTheme() {
    if (theme === 'dark-theme') {
      setTheme('light-theme')
    } else {
      setTheme('theme-dark')
    }
  }
  useEffect(() => {
    const refreshTheme = () => {
      localStorage.setItem('theme', theme)
    }

    refreshTheme()
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <body className={theme}>{children}</body>
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider };
