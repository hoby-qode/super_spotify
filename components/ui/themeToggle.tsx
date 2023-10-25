'use client'

import { themeState } from '@/src/atoms/player.atom'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

const ThemeToggle = () => {
  const [theme, setTheme] = useRecoilState(themeState)
  useEffect(() => {
    const refreshTheme = () => {
      localStorage.setItem('theme', theme)
    }
    refreshTheme()
  }, [theme])
  return (
    <div className="toggleTheme">
      <input
        type="checkbox"
        id="toggle-theme"
        onChange={() =>
          setTheme(theme === 'dark-theme' ? 'light-theme' : 'dark-theme')
        }
        className="toggleTheme_input"
      />
      <label htmlFor="toggle-theme" className="toggleTheme_label">
        {theme == 'dark-theme' ? 'dark-theme' : 'light-theme'}
      </label>
    </div>
  )
}

export default ThemeToggle
