'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function WhatWeSolve() {
    return (
        <section
            id="what-we-solve"
            className="section-padding bg-dark-200 relative overflow-hidden"
            aria-labelledby="what-we-solve-heading"
        >
            {/* Gradient accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark-300/50 to-transparent pointer-events-none" />

            <div className="container-custom relative">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <motion.span
                        variants={fadeInUp}
                        className="inline-block text-primary-500 text-sm font-semibold uppercase tracking-wider mb-4"
                    >
                        The Impact
                    </motion.span>

                    <motion.h2
                        variants={fadeInUp}
                        id="what-we-solve-heading"
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
                    >
                        From Reactive Safety to{' '}
                        <span className="text-gradient">Predictive Prevention</span>
                    </motion.h2>

                    <motion.p
                        variants={fadeInUp}
                        className="text-white/70 text-lg md:text-xl leading-relaxed mb-12"
                    >
                        IMAS / IDAS bridges the gap between human driving limitations and machine intelligence
                        by identifying risky patterns early and enabling <strong className="text-white">preventive action
                            before accidents occur</strong>.
                    </motion.p>

                    {/* Visual Comparison */}
                    <motion.div
                        variants={fadeInUp}
                        className="grid md:grid-cols-2 gap-6"
                    >
                        {/* Before */}
                        <div className="p-6 rounded-2xl bg-dark-300/50 border border-red-500/20">
                            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-red-500/10 flex items-center justify-center">
                                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-red-400 mb-2">Traditional Approach</h3>
                            <p className="text-white/60 text-sm">
                                React after the danger has already manifested. Damage control instead of prevention.
                            </p>
                        </div>

                        {/* After */}
                        <div className="p-6 rounded-2xl bg-dark-300/50 border border-primary-500/20">
                            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary-500/10 flex items-center justify-center">
                                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-primary-500 mb-2">IMAS Approach</h3>
                            <p className="text-white/60 text-sm">
                                Predict, alert, and prevent before any incident occurs. True proactive safety.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
