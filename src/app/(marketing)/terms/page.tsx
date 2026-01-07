import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Terms of Service | IMAS',
    description: 'Terms of Service for IMAS - Intelligent Mobility & Driver Assistance System',
}

export default function TermsOfService() {
    return (
        <div className="min-h-screen pt-24 pb-16 bg-dark-300">
            <article className="container-custom max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                    Terms of Service
                </h1>

                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="text-white/70 text-lg mb-8">
                        Last updated: January 2026
                    </p>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                        <p className="text-white/70 mb-4">
                            By accessing and using the IMAS website and services, you accept and agree
                            to be bound by these Terms of Service. If you do not agree to these terms,
                            please do not use our services.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
                        <p className="text-white/70 mb-4">
                            IMAS provides an AI-powered Intelligent Mobility & Driver Assistance System
                            designed to enhance road safety through real-time driver monitoring, lane
                            detection, and predictive analytics.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
                        <p className="text-white/70 mb-4">
                            As a user of our services, you agree to:
                        </p>
                        <ul className="list-disc list-inside text-white/70 space-y-2">
                            <li>Provide accurate information when requested</li>
                            <li>Use our services in compliance with applicable laws</li>
                            <li>Not attempt to interfere with the proper functioning of our systems</li>
                            <li>Maintain the confidentiality of any account credentials</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
                        <p className="text-white/70 mb-4">
                            All content, features, and functionality on the IMAS website, including but
                            not limited to text, graphics, logos, and software, are the exclusive property
                            of IMAS and are protected by international copyright, trademark, and other
                            intellectual property laws.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
                        <p className="text-white/70 mb-4">
                            IMAS and its affiliates shall not be liable for any indirect, incidental,
                            special, consequential, or punitive damages resulting from your use of or
                            inability to use our services. Our driver assistance system is designed to
                            assist drivers but does not replace the need for attentive driving.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">6. Disclaimer</h2>
                        <p className="text-white/70 mb-4">
                            The IMAS system is a driver assistance tool and should not be considered a
                            substitute for safe driving practices. Drivers must maintain full attention
                            and control of their vehicles at all times.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">7. Modifications</h2>
                        <p className="text-white/70 mb-4">
                            We reserve the right to modify these Terms of Service at any time. Changes
                            will be effective immediately upon posting to our website. Your continued
                            use of our services after any changes constitutes acceptance of the new terms.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">8. Contact Information</h2>
                        <p className="text-white/70 mb-4">
                            For questions regarding these Terms of Service, please contact us at:
                        </p>
                        <p className="text-white/70">
                            Email: legal@imas.ai<br />
                        </p>
                    </section>
                </div>
            </article>
        </div>
    )
}
