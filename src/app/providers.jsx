'use client'
import { ThemeProvider } from 'next-themes';

export function Provider({ children, ...props}) {
  return <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem {...props}>
              {children}
          </ThemeProvider>;
}
