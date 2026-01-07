'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const comparisons = [
    { traditional: 'Reactive', imas: 'Predictive' },
    { traditional: 'Fragmented tools', imas: 'Unified platform' },
    { traditional: 'Post-incident alerts', imas: 'Pre-incident prevention' },
    { traditional: 'Rule-based only', imas: 'AI-driven intelligence' },
    { traditional: 'Cloud-dependent', imas: 'Edge-first intelligence' },
]

export default function WhyDifferent() {
    return (
        <section
            id="why-different"
            className="section-padding bg-dark-200 relative overflow-hidden"
            aria-labelledby="why-different-heading"
        >
            <div className="container-custom">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Section Header */}
                    <motion.div variants={fadeInUp} className="text-center mb-12">
                        <span className="inline-block text-primary-500 text-sm font-semibold uppercase tracking-wider mb-4">
                            The Difference
                        </span>
                        <h2 id="why-different-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Why <span className="text-gradient">IMAS / IDAS</span> Is Different
                        </h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            A paradigm shift in road safety technology
                        </p>
                    </motion.div>

                    {/* Comparison Table */}
                    <motion.div
                        variants={fadeInUp}
                        className="overflow-hidden rounded-2xl border border-white/10"
                    >
                        <table className="w-full" role="table">
                            <thead>
                                <tr className="bg-dark-300">
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-white/60 uppercase tracking-wider">
                                        Traditional Systems
                                    </th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-primary-500 uppercase tracking-wider">
                                        IMAS / IDAS
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {comparisons.map((row, index) => (
                                    <tr
                                        key={index}
                                        className="bg-dark-200/50 hover:bg-dark-200 transition-colors"
                                    >
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-white/60">{row.traditional}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <svg className="w-5 h-5 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-white font-medium">{row.imas}</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
