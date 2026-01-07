'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            aria-labelledby="hero-heading"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-dark-300">
                <div className="absolute inset-0 bg-hero-glow opacity-60" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl" />
            </div>

            {/* Grid Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                }}
            />

            {/* Content */}
            <motion.div
                className="container-custom relative z-10 text-center pt-20"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                {/* Badge */}
                <motion.div variants={fadeInUp} className="mb-6">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-500 text-sm font-medium">
                        <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                        AI-Powered Road Safety
                    </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    id="hero-heading"
                    variants={fadeInUp}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                >
                    <span className="text-white">Predicting Risk.</span>
                    <br />
                    <span className="text-gradient glow-text">Preventing Accidents.</span>
                    <br />
                    <span className="text-white">Saving Lives.</span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    variants={fadeInUp}
                    className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed"
                >
                    An AI-powered Intelligent Mobility & Driver Assistance System that monitors
                    drivers and roads in real time to predict danger and enhance road safety.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={fadeInUp}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#demo"
                        className="btn-primary text-lg px-8 py-4"
                        aria-label="Request a demo of IMAS"
                    >
                        Request Demo
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <a
                        href="#solution"
                        className="btn-secondary text-lg px-8 py-4"
                        aria-label="Explore IMAS solution"
                    >
                        Explore Solution
                    </a>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    variants={fadeInUp}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <div className="flex flex-col items-center gap-2 text-white/40">
                        <span className="text-xs uppercase tracking-widest">Scroll</span>
                        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
                            <motion.div
                                className="w-1.5 h-1.5 bg-primary-500 rounded-full"
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                            />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}
