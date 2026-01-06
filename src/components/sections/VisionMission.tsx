'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function VisionMission() {
    return (
        <section
            id="vision"
            className="section-padding bg-dark-300 relative overflow-hidden"
            aria-labelledby="vision-heading"
        >
            {/* Background effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl" />

            <div className="container-custom relative">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {/* Section Header */}
                    <motion.div variants={fadeInUp} className="text-center mb-16">
                        <span className="inline-block text-primary-500 text-sm font-semibold uppercase tracking-wider mb-4">
                            Our Purpose
                        </span>
                        <h2 id="vision-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                            Vision & <span className="text-gradient">Mission</span>
                        </h2>
                    </motion.div>

                    {/* Cards Grid */}
                    <motion.div
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                    >
                        {/* Vision Card */}
                        <motion.div
                            variants={fadeInUp}
                            className="relative p-8 rounded-2xl bg-gradient-to-br from-primary-500/10 to-transparent border border-primary-500/20 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl" />
                            <div className="relative">
                                <div className="w-14 h-14 mb-6 rounded-xl bg-primary-500/20 flex items-center justify-center">
                                    <svg className="w-7 h-7 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Vision</h3>
                                <p className="text-white/70 text-lg leading-relaxed">
                                    To create a future where intelligent systems prevent road accidents
                                    <strong className="text-white"> before human error turns fatal</strong>.
                                </p>
                            </div>
                        </motion.div>

                        {/* Mission Card */}
                        <motion.div
                            variants={fadeInUp}
                            className="relative p-8 rounded-2xl bg-gradient-to-br from-accent-500/10 to-transparent border border-accent-500/20 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/10 rounded-full blur-2xl" />
                            <div className="relative">
                                <div className="w-14 h-14 mb-6 rounded-xl bg-accent-500/20 flex items-center justify-center">
                                    <svg className="w-7 h-7 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Mission</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-white/70">
                                        <svg className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Enhance driving safety using AI
                                    </li>
                                    <li className="flex items-start gap-3 text-white/70">
                                        <svg className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Reduce accident-related injuries and deaths
                                    </li>
                                    <li className="flex items-start gap-3 text-white/70">
                                        <svg className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Make advanced mobility safety accessible and scalable
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
