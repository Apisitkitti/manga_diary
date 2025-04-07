import type { Metadata } from 'next'
import './style/globals.css'
import Providers from './provider'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
    title: 'MangaDiary',
    description: 'Welcome reader to MangaDiary',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="bg-[#243263]">
                <Providers>
                    <Header />
                    <div className="min-h-[calc(100dvh-100px)]">{children}</div>
                    <Footer />
                </Providers>
            </body>
        </html>
    )
}
