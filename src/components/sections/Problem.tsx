'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const problems = [
    {
        title: 'Driver fatigue and distraction',
        description: 'Reduced alertness and attention silently increase the risk of critical driving errors.',
        colorClass: 'amber',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.64 0 8.577 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.64 0-8.577-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
    {
        title: 'Human reaction time is limited',
        description: 'In sudden or complex situations, human responses are often too slow to prevent impact.',
        colorClass: 'blue',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        title: 'Safety systems react too late',
        description: 'Most existing systems respond only after danger becomes unavoidable.',
        colorClass: 'red',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
        ),
    },
    {
        title: 'Road awareness is fragmented',
        description: 'Critical insights are scattered across disconnected tools instead of a single intelligent system.',
        colorClass: 'indigo',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            </svg>
        ),
    },
]

const colorStyles = {
    amber: {
        iconBg: 'bg-amber-500/10',
        iconBorder: 'border-amber-500/20',
        iconText: 'text-amber-400',
        glow: 'shadow-amber-500/5',
        hoverBorder: 'hover:border-amber-500/30',
        hoverIconBg: 'group-hover:bg-amber-500/20',
    },
    blue: {
        iconBg: 'bg-sky-500/10',
        iconBorder: 'border-sky-500/20',
        iconText: 'text-sky-400',
        glow: 'shadow-sky-500/5',
        hoverBorder: 'hover:border-sky-500/30',
        hoverIconBg: 'group-hover:bg-sky-500/20',
    },
    red: {
        iconBg: 'bg-rose-500/10',
        iconBorder: 'border-rose-500/20',
        iconText: 'text-rose-400',
        glow: 'shadow-rose-500/5',
        hoverBorder: 'hover:border-rose-500/30',
        hoverIconBg: 'group-hover:bg-rose-500/20',
    },
    indigo: {
        iconBg: 'bg-indigo-500/10',
        iconBorder: 'border-indigo-500/20',
        iconText: 'text-indigo-400',
        glow: 'shadow-indigo-500/5',
        hoverBorder: 'hover:border-indigo-500/30',
        hoverIconBg: 'group-hover:bg-indigo-500/20',
    },
}

export default function Problem() {
    return (
        <section
            id="problem"
            className="section-padding bg-dark-200 relative overflow-hidden"
            aria-labelledby="problem-heading"
        >
            {/* Subtle top gradient line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container-custom">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="max-w-5xl mx-auto"
                >
                    {/* Section Header */}
                    <motion.div variants={fadeInUp} className="text-center mb-14">
                        <h2 id="problem-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
                            Road Accidents Don&apos;t Happen <span className="text-gradient">Suddenly</span>
                        </h2>
                        <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
                            Most serious accidents are the result of ignored warning signs that build up over time.
                        </p>
                    </motion.div>

                    {/* Problem Cards Grid - 2 columns on desktop */}
                    <motion.div
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
                    >
                        {problems.map((problem, index) => {
                            const colors = colorStyles[problem.colorClass as keyof typeof colorStyles]
                            return (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className={`
                                        group flex items-start gap-5 p-6 md:p-7 rounded-2xl 
                                        bg-dark-300/60 border border-white/5 
                                        ${colors.hoverBorder} ${colors.glow}
                                        shadow-lg hover:shadow-xl
                                        transition-all duration-300 ease-out
                                        hover:-translate-y-0.5
                                    `}
                                >
                                    {/* Icon Container */}
                                    <div className={`
                                        flex-shrink-0 w-12 h-12 rounded-full 
                                        ${colors.iconBg} ${colors.iconBorder} ${colors.iconText}
                                        ${colors.hoverIconBg}
                                        border flex items-center justify-center 
                                        transition-colors duration-300
                                    `}>
                                        {problem.icon}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-white font-semibold text-base md:text-lg mb-1.5">
                                            {problem.title}
                                        </h3>
                                        <p className="text-white/50 text-sm md:text-base leading-relaxed">
                                            {problem.description}
                                        </p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
