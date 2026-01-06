import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
    preload: true,
    fallback: ['system-ui', 'arial'],
})

export const metadata: Metadata = {
    title: 'IMAS | Intelligent Mobility & Driver Assistance System',
    description: 'AI-powered driver assistance platform that predicts risks and prevents road accidents in real time. Edge-first architecture for instant response.',
    keywords: ['AI driver safety', 'accident prevention', 'ADAS', 'fleet safety', 'driver monitoring', 'road safety', 'edge AI'],
    authors: [{ name: 'IMAS' }],
    openGraph: {
        title: 'IMAS - Predicting Risk. Preventing Accidents. Saving Lives.',
        description: 'AI-powered intelligent driver assistance system that monitors drivers and roads in real time.',
        type: 'website',
        siteName: 'IMAS',
        locale: 'en_US',
        images: [
            {
                url: '/images/og-image.png',
                width: 1200,
                height: 630,
                alt: 'IMAS - Intelligent Mobility & Driver Assistance System',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'IMAS | AI-Powered Road Safety',
        description: 'Predicting Risk. Preventing Accidents. Saving Lives.',
        images: ['/images/og-image.png'],
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },
    manifest: '/manifest.json',
    robots: {
        index: true,
        follow: true,
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={inter.variable}>
            <body className="min-h-screen flex flex-col">
                <a href="#main-content" className="skip-to-content">
                    Skip to main content
                </a>
                <Header />
                <main id="main-content" className="flex-1">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
