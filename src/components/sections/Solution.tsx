'use client'

import { motion } from 'framer-motion'
import { fadeInUp, fadeInRight, staggerContainer } from '@/lib/animations'

const capabilities = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
        ),
        title: 'Driver Monitoring',
        description: 'Drowsiness and distraction detection',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
        ),
        title: 'Lane Awareness',
        description: 'Lane detection and departure alerts',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
        ),
        title: 'Real-time Alerts',
        description: 'Instant audio and visual warnings',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
        ),
        title: 'Edge AI Processing',
        description: 'On-device intelligence for instant response',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        title: 'Cloud Dashboards',
        description: 'Connected insights and analytics',
    },
]

export default function Solution() {
    return (
        <section
            id="solution"
            className="section-padding bg-dark-300 relative overflow-hidden"
            aria-labelledby="solution-heading"
        >
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl" />

            <div className="container-custom relative">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                >
                    {/* Left Content */}
                    <div>
                        <motion.span
                            variants={fadeInUp}
                            className="inline-block text-primary-500 text-sm font-semibold uppercase tracking-wider mb-4"
                        >
                            Our Solution
                        </motion.span>

                        <motion.h2
                            variants={fadeInUp}
                            id="solution-heading"
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
                        >
                            Introducing <span className="text-gradient">IMAS</span>
                        </motion.h2>

                        <motion.p
                            variants={fadeInUp}
                            className="text-white/70 text-lg leading-relaxed mb-8"
                        >
                            IMAS acts as a <strong className="text-white">digital co-driver</strong> that
                            continuously observes the driver and the road, analyzes behavior using AI, and provides
                            real-time alerts to <strong className="text-white">prevent accidents before they occur</strong>.
                        </motion.p>

                        <motion.div variants={fadeInUp}>
                            <a
                                href="#how-it-works"
                                className="btn-primary"
                                aria-label="Learn how IMAS works"
                            >
                                See How It Works
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </a>
                        </motion.div>
                    </div>

                    {/* Right - Capabilities Grid */}
                    <motion.div
                        variants={staggerContainer}
                        className="grid gap-4"
                    >
                        {capabilities.map((cap, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInRight}
                                className="flex items-start gap-4 p-4 rounded-xl bg-dark-200/50 border border-white/5 hover:border-primary-500/30 hover:bg-dark-200 transition-all group"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-500 group-hover:bg-primary-500/20 transition-colors">
                                    {cap.icon}
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold mb-1">{cap.title}</h3>
                                    <p className="text-white/60 text-sm">{cap.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
