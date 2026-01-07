'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations'

const audiences = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        ),
        title: 'Individual Owners',
        description: 'Personal vehicle safety for families and daily commuters',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
        ),
        title: 'Fleet & Logistics',
        description: 'Comprehensive fleet monitoring and driver safety management',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            </svg>
        ),
        title: 'Public Transport',
        description: 'Safety solutions for buses, taxis, and shared mobility',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        title: 'Corporate Mobility',
        description: 'Enterprise fleet safety and compliance solutions',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: 'Smart Cities',
        description: 'Road safety analytics for urban infrastructure',
    },
]

export default function WhoItIsFor() {
    return (
        <section
            id="who-its-for"
            className="section-padding bg-dark-300 relative overflow-hidden"
            aria-labelledby="who-its-for-heading"
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
                            Use Cases
                        </span>
                        <h2 id="who-its-for-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Who Is <span className="text-gradient">IMAS</span> For?
                        </h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            Scalable solutions for every mobility need
                        </p>
                    </motion.div>

                    {/* Audience Cards */}
                    <motion.div
                        variants={staggerContainer}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {audiences.map((audience, index) => (
                            <motion.div
                                key={index}
                                variants={scaleIn}
                                className="group p-6 rounded-2xl bg-dark-200/50 border border-white/5 hover:border-primary-500/30 hover:bg-dark-200 transition-all text-center"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-500 group-hover:bg-primary-500/20 transition-colors">
                                    {audience.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    {audience.title}
                                </h3>
                                <p className="text-white/60 text-sm">
                                    {audience.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
