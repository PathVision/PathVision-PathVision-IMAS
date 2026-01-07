'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import ContactForm from '@/components/forms/ContactForm'

export default function CallToAction() {
    return (
        <section
            id="demo"
            className="section-padding bg-dark-200 relative overflow-hidden"
            aria-labelledby="cta-heading"
        >
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark-300 to-dark-200" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-3xl" />

            <div className="container-custom relative">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Header */}
                    <motion.div variants={fadeInUp} className="text-center mb-12">
                        <h2 id="cta-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Let&apos;s Build <span className="text-gradient">Safer Roads</span> Together
                        </h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            Join us in revolutionizing road safety with AI-powered driver assistance
                        </p>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-wrap items-center justify-center gap-4 mb-16"
                    >
                        <a
                            href="#contact-form"
                            className="btn-primary text-lg px-8 py-4"
                            aria-label="Request a demo"
                        >
                            Request Demo
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a
                            href="#contact-form"
                            className="btn-secondary text-lg px-8 py-4"
                            aria-label="Contact us"
                        >
                            Contact Us
                        </a>
                        <a
                            href="#contact-form"
                            className="btn-accent text-lg px-8 py-4"
                            aria-label="Partner with us"
                        >
                            Partner With Us
                        </a>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        variants={fadeInUp}
                        id="contact-form"
                        className="scroll-mt-24"
                    >
                        <ContactForm />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
