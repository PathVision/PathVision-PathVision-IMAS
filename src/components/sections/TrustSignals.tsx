'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const signals = [
    { text: 'Edge-first architecture', icon: '⚡' },
    { text: 'Privacy-aware by design', icon: '🔒' },
    { text: 'Production-grade AI', icon: '🧠' },
    { text: 'Designed for scalability', icon: '📈' },
]

export default function TrustSignals() {
    return (
        <section
            className="py-8 md:py-12 bg-dark-300 border-y border-white/5"
            aria-label="Trust signals"
        >
            <div className="container-custom">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="flex flex-wrap items-center justify-center gap-6 md:gap-12"
                >
                    {signals.map((signal, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="flex items-center gap-2 text-white/60 hover:text-white/80 transition-colors"
                        >
                            <span className="text-lg">{signal.icon}</span>
                            <span className="text-sm md:text-base font-medium">{signal.text}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
