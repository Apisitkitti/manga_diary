import type { Metadata } from 'next'
import './globals.css'
import Providers from './provider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
        <html lang="en">
            <body>
                <Providers>
                    <Header />
                    <div className="my-5">{children}</div>
                    <Footer />
                </Providers>
            </body>
        </html>
    )
}
