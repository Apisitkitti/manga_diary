'use client'

import { HeroUIProvider } from '@heroui/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <HeroUIProvider>
            <NextThemesProvider attribute="class">
                {children}
            </NextThemesProvider>
        </HeroUIProvider>
    )
}

export default Providers
