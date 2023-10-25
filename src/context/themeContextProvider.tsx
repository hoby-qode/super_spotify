'use client'

import ThemeToggle from '@/components/ui/themeToggle'
import { useState } from 'react'

export default function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  return (
    <body className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
      {children}
      <ThemeToggle isDarkTheme={isDarkTheme} onChangeTheme={setIsDarkTheme} />
    </body>
  )
}
