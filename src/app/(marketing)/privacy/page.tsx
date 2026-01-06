import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Privacy Policy | IMAS',
    description: 'Privacy Policy for IMAS - Intelligent Mobility & Driver Assistance System',
}

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen pt-24 pb-16 bg-dark-300">
            <article className="container-custom max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                    Privacy Policy
                </h1>

                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="text-white/70 text-lg mb-8">
                        Last updated: January 2026
                    </p>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                        <p className="text-white/70 mb-4">
                            IMAS (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy.
                            This Privacy Policy explains how we collect, use, disclose, and safeguard
                            your information when you visit our website or use our services.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                        <h3 className="text-xl font-semibold text-white mb-3">Personal Information</h3>
                        <p className="text-white/70 mb-4">
                            We may collect personal information that you voluntarily provide when you:
                        </p>
                        <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                            <li>Fill out contact or demo request forms</li>
                            <li>Subscribe to our newsletter</li>
                            <li>Contact us directly</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mb-3">Automatically Collected Information</h3>
                        <p className="text-white/70 mb-4">
                            When you visit our website, we may automatically collect certain information
                            including your IP address, browser type, operating system, and browsing behavior.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                        <p className="text-white/70 mb-4">
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc list-inside text-white/70 space-y-2">
                            <li>Respond to your inquiries and demo requests</li>
                            <li>Improve our website and services</li>
                            <li>Send you relevant information about our products</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">4. AI and Edge Processing</h2>
                        <p className="text-white/70 mb-4">
                            Our IMAS system is designed with privacy in mind. Driver monitoring
                            data is processed <strong className="text-white">at the edge</strong> (on-device)
                            whenever possible, minimizing data transmission and storage. We implement
                            industry-standard encryption for any data that is synced to the cloud.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
                        <p className="text-white/70 mb-4">
                            We implement appropriate technical and organizational measures to protect
                            your personal information against unauthorized access, alteration, disclosure,
                            or destruction.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
                        <p className="text-white/70 mb-4">
                            If you have questions about this Privacy Policy, please contact us at:
                        </p>
                        <p className="text-white/70">
                            Email: privacy@imas.ai<br />
                        </p>
                    </section>
                </div>
            </article>
        </div>
    )
}
