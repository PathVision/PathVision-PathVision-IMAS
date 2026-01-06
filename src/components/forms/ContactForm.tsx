'use client'

import { useState } from 'react'

// Replace with your Web3Forms access key
const WEB3FORMS_ACCESS_KEY = '7735c02f-7f04-4078-9914-b13bea3a7c84'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    })
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    ...formData,
                    subject: `New Demo Request from ${formData.name}`,
                }),
            })

            const result = await response.json()

            if (result.success) {
                setStatus('success')
                setFormData({ name: '', email: '', company: '', message: '' })
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    return (
        <div className="p-8 rounded-2xl bg-dark-300/50 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-2 text-center">
                Get in Touch
            </h3>
            <p className="text-white/60 text-center mb-8">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot for spam protection */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                            Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-dark-200 border border-white/10 text-white placeholder-white/40 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors"
                            placeholder="John Doe"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                            Email Address <span className="text-red-400">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-dark-200 border border-white/10 text-white placeholder-white/40 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors"
                            placeholder="john@company.com"
                        />
                    </div>
                </div>

                {/* Company */}
                <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                        Company / Organization
                    </label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-dark-200 border border-white/10 text-white placeholder-white/40 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors"
                        placeholder="Acme Inc."
                    />
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                        Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-dark-200 border border-white/10 text-white placeholder-white/40 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors resize-none"
                        placeholder="Tell us about your needs..."
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Send message"
                >
                    {status === 'loading' ? (
                        <span className="flex items-center justify-center gap-2">
                            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Sending...
                        </span>
                    ) : (
                        'Send Message'
                    )}
                </button>

                {/* Status Messages */}
                {status === 'success' && (
                    <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-center">
                        Thank you! Your message has been sent successfully. We&apos;ll be in touch soon.
                    </div>
                )}

                {status === 'error' && (
                    <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-center">
                        Oops! Something went wrong. Please try again or email us directly.
                    </div>
                )}
            </form>
        </div>
    )
}
