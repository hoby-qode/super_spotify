'use client'
import React, { useEffect, useState } from 'react'

// const theme = () => {
//     if (!localStorage.getItem('theme')) {
//         localStorage.setItem('theme', 'dark-theme')
//         return 'dark-theme'
//     } else {
//         return localStorage.getItem('theme')
//     }
// }

export function useTheme({args}:{args:String | null}) {
    const [theme, setTheme] = useState(args ?? 'dark-theme')
    useEffect(() => {
        const refreshTheme = () => {
            localStorage.setItem('theme', theme)
            setTheme(theme)
        }
    refreshTheme()
    }, [theme])
    
    return {
        theme: theme,
        setTheme: setTheme(args)
    }
}
