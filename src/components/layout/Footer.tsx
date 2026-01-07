import Link from 'next/link'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const footerLinks = {
        product: [
            { href: '#solution', label: 'Solution' },
            { href: '#features', label: 'Features' },
            { href: '#how-it-works', label: 'How It Works' },
            { href: '#tech-stack', label: 'Technology' },
        ],
        company: [
            { href: '#about', label: 'About Us' },
            { href: '#vision', label: 'Vision & Mission' },
            { href: '#roadmap', label: 'Roadmap' },
            { href: '#contact', label: 'Contact' },
        ],
        legal: [
            { href: '/privacy', label: 'Privacy Policy' },
            { href: '/terms', label: 'Terms of Service' },
        ],
    }

    return (
        <footer className="bg-dark-200 border-t border-white/10">
            <div className="container-custom py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-bold text-gradient">IMAS</span>
                        </Link>
                        <p className="mt-4 text-sm text-white/60 leading-relaxed">
                            Intelligent Mobility & Driver Assistance System. Predicting risks and preventing road accidents through AI.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Product
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.product.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-white/60 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-white/60 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Legal
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/60 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-white/40">
                        © {currentYear} IMAS. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <span className="text-xs text-white/30">
                            Built with Edge-first AI • Privacy-aware by design
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
