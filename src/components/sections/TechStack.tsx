'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations'

const techCategories = [
    {
        category: 'Frontend',
        description: 'Modern, type-safe UI development',
        techs: [
            { name: 'Next.js 14', color: 'bg-white/10 text-white' },
            { name: 'TypeScript', color: 'bg-blue-500/10 text-blue-400' },
            { name: 'Tailwind CSS', color: 'bg-cyan-500/10 text-cyan-400' },
        ],
    },
    {
        category: 'Performance',
        description: 'Optimized for speed and efficiency',
        techs: [
            { name: 'SSR / SSG', color: 'bg-green-500/10 text-green-400' },
            { name: 'Code Splitting', color: 'bg-emerald-500/10 text-emerald-400' },
            { name: 'Edge Caching', color: 'bg-teal-500/10 text-teal-400' },
        ],
    },
    {
        category: 'UX',
        description: 'Smooth, delightful interactions',
        techs: [
            { name: 'Framer Motion', color: 'bg-pink-500/10 text-pink-400' },
            { name: 'Responsive', color: 'bg-purple-500/10 text-purple-400' },
            { name: 'A11y Ready', color: 'bg-violet-500/10 text-violet-400' },
        ],
    },
    {
        category: 'Deployment',
        description: 'Global edge infrastructure',
        techs: [
            { name: 'Vercel', color: 'bg-white/10 text-white' },
            { name: 'Global CDN', color: 'bg-orange-500/10 text-orange-400' },
            { name: 'Auto Scaling', color: 'bg-amber-500/10 text-amber-400' },
        ],
    },
]

export default function TechStack() {
    return (
        <section
            id="tech-stack"
            className="section-padding bg-dark-200 relative overflow-hidden"
            aria-labelledby="tech-stack-heading"
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
                            Built Right
                        </span>
                        <h2 id="tech-stack-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Technology <span className="text-gradient">Stack</span>
                        </h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            Intent-based architecture for enterprise-grade performance
                        </p>
                    </motion.div>

                    {/* Tech Grid */}
                    <motion.div
                        variants={staggerContainer}
                        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {techCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                variants={scaleIn}
                                className="p-6 rounded-2xl bg-dark-300/50 border border-white/5 hover:border-primary-500/30 transition-all"
                            >
                                <h3 className="text-lg font-bold text-white mb-1">
                                    {category.category}
                                </h3>
                                <p className="text-white/50 text-sm mb-4">
                                    {category.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {category.techs.map((tech, tIndex) => (
                                        <span
                                            key={tIndex}
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${tech.color}`}
                                        >
                                            {tech.name}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
