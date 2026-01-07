'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations'

const featureGroups = [
    {
        title: 'Driver Intelligence',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        color: 'primary',
        features: [
            'Drowsiness detection',
            'Eye blink & head-pose analysis',
            'Distraction monitoring',
        ],
    },
    {
        title: 'Road Intelligence',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
        ),
        color: 'accent',
        features: [
            'Lane detection',
            'Lane departure alerts',
            'Obstacle awareness',
        ],
    },
    {
        title: 'Real-Time Safety',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        color: 'green',
        features: [
            'Audio and visual alerts',
            'Priority-based warnings',
            'Haptic feedback support',
        ],
    },
    {
        title: 'Insights & Analytics',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        color: 'orange',
        features: [
            'Trip summaries',
            'Risk behavior trends',
            'Driving performance insights',
        ],
    },
]

const colorClasses = {
    primary: {
        bg: 'bg-primary-500/10',
        border: 'border-primary-500/20',
        text: 'text-primary-500',
        hover: 'group-hover:border-primary-500/50',
    },
    accent: {
        bg: 'bg-accent-500/10',
        border: 'border-accent-500/20',
        text: 'text-accent-500',
        hover: 'group-hover:border-accent-500/50',
    },
    green: {
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/20',
        text: 'text-emerald-500',
        hover: 'group-hover:border-emerald-500/50',
    },
    orange: {
        bg: 'bg-orange-500/10',
        border: 'border-orange-500/20',
        text: 'text-orange-500',
        hover: 'group-hover:border-orange-500/50',
    },
}

export default function Features() {
    return (
        <section
            id="features"
            className="section-padding bg-dark-300 relative overflow-hidden"
            aria-labelledby="features-heading"
        >
            {/* Background accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl" />

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
                            Capabilities
                        </span>
                        <h2 id="features-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Comprehensive <span className="text-gradient">Safety Features</span>
                        </h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            A complete suite of AI-powered tools for proactive road safety
                        </p>
                    </motion.div>

                    {/* Feature Cards Grid */}
                    <motion.div
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 gap-6 lg:gap-8"
                    >
                        {featureGroups.map((group, index) => {
                            const colors = colorClasses[group.color as keyof typeof colorClasses]
                            return (
                                <motion.div
                                    key={index}
                                    variants={scaleIn}
                                    className={`group p-6 md:p-8 rounded-2xl bg-dark-200/50 border border-white/5 ${colors.hover} transition-all hover:bg-dark-200`}
                                >
                                    {/* Icon & Title */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className={`w-14 h-14 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center ${colors.text}`}>
                                            {group.icon}
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white">
                                            {group.title}
                                        </h3>
                                    </div>

                                    {/* Features List */}
                                    <ul className="space-y-3">
                                        {group.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="flex items-center gap-3">
                                                <svg className={`w-5 h-5 ${colors.text} flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-white/70">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
