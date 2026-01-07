'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, flowStep } from '@/lib/animations'

const steps = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        ),
        title: 'Cameras & Sensors',
        description: 'Multi-point data capture',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
        ),
        title: 'Edge AI Processing',
        description: 'On-device intelligence',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
        ),
        title: 'Instant Alerts',
        description: 'Real-time driver warnings',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
        ),
        title: 'Secure Cloud Sync',
        description: 'Encrypted data transfer',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
            </svg>
        ),
        title: 'Dashboard & Insights',
        description: 'Web & mobile analytics',
    },
]

export default function HowItWorks() {
    return (
        <section
            id="how-it-works"
            className="section-padding bg-dark-200 relative overflow-hidden"
            aria-labelledby="how-it-works-heading"
        >
            <div className="container-custom">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {/* Section Header */}
                    <motion.div variants={fadeInUp} className="text-center mb-16">
                        <span className="inline-block text-primary-500 text-sm font-semibold uppercase tracking-wider mb-4">
                            The Process
                        </span>
                        <h2 id="how-it-works-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            How <span className="text-gradient">IMAS</span> Works
                        </h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            From data capture to actionable insights in milliseconds
                        </p>
                    </motion.div>

                    {/* Flow Diagram */}
                    <div className="relative max-w-5xl mx-auto">
                        {/* Connection Line */}
                        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500/20 via-primary-500/40 to-primary-500/20 -translate-y-1/2" />

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    custom={index}
                                    variants={flowStep}
                                    className="relative flex flex-col items-center text-center group"
                                >
                                    {/* Step Number */}
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-dark-300 border border-primary-500/50 flex items-center justify-center">
                                        <span className="text-xs text-primary-500 font-bold">{index + 1}</span>
                                    </div>

                                    {/* Icon Card */}
                                    <div className="w-20 h-20 rounded-2xl bg-dark-300 border border-white/10 flex items-center justify-center text-primary-500 group-hover:border-primary-500/50 group-hover:bg-primary-500/5 transition-all mb-4">
                                        {step.icon}
                                    </div>

                                    {/* Text */}
                                    <h3 className="text-white font-semibold mb-1 text-sm md:text-base">
                                        {step.title}
                                    </h3>
                                    <p className="text-white/50 text-xs md:text-sm">
                                        {step.description}
                                    </p>

                                    {/* Arrow (between steps) */}
                                    {index < steps.length - 1 && (
                                        <div className="hidden md:block absolute top-10 -right-2 text-primary-500/40">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Tagline */}
                    <motion.div
                        variants={fadeInUp}
                        className="text-center mt-12"
                    >
                        <p className="text-xl md:text-2xl font-medium text-white/80">
                            Intelligence at the edge. <span className="text-gradient">Safety in real time.</span>
                        </p>
                    </motion.div>

                    {/* Edge AI Explanation */}
                    <motion.div
                        variants={fadeInUp}
                        className="mt-12 max-w-3xl mx-auto"
                    >
                        <div className="p-6 rounded-2xl bg-dark-300/50 border border-white/10">
                            <p className="text-white/70 text-center leading-relaxed">
                                Unlike traditional systems, IMAS processes critical signals <strong className="text-white">at the edge</strong> to
                                ensure instant response without relying on constant internet connectivity. This edge-first architecture
                                enables <strong className="text-primary-500">sub-millisecond reaction times</strong> in life-critical situations.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
