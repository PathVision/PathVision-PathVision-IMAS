'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const roadmapItems = [
    {
        phase: 'Phase 1',
        title: 'Predictive Modeling',
        description: 'Accident probability prediction using historical patterns',
        status: 'upcoming',
    },
    {
        phase: 'Phase 2',
        title: 'Road Condition Intelligence',
        description: 'Real-time road surface and weather analytics',
        status: 'planned',
    },
    {
        phase: 'Phase 3',
        title: 'Insurance Integration',
        description: 'Risk scoring APIs for insurance providers',
        status: 'planned',
    },
    {
        phase: 'Phase 4',
        title: 'Smart City Analytics',
        description: 'Urban traffic flow and safety optimization',
        status: 'planned',
    },
    {
        phase: 'Phase 5',
        title: 'Autonomous Compatibility',
        description: 'Integration with self-driving vehicle systems',
        status: 'future',
    },
]

export default function Roadmap() {
    return (
        <section
            id="roadmap"
            className="section-padding bg-dark-300 relative overflow-hidden"
            aria-labelledby="roadmap-heading"
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
                            What&apos;s Next
                        </span>
                        <h2 id="roadmap-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Future <span className="text-gradient">Roadmap</span>
                        </h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            Our vision for the next generation of road safety
                        </p>
                    </motion.div>

                    {/* Timeline */}
                    <motion.div
                        variants={staggerContainer}
                        className="relative max-w-3xl mx-auto"
                    >
                        {/* Vertical Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500/20" />

                        {roadmapItems.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className={`relative flex items-start gap-8 mb-8 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Dot */}
                                <div className="absolute left-4 md:left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-primary-500 ring-4 ring-dark-300" />

                                {/* Content */}
                                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                    <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-primary-500 bg-primary-500/10 rounded-full">
                                        {item.phase}
                                    </span>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-white/60 text-sm">{item.description}</p>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="hidden md:block flex-1" />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
