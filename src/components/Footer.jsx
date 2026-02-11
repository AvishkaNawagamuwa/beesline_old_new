import { Link } from 'react-router-dom'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Main Footer */}
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <img
                                src="/assets/images/logo1.png"
                                alt="Bees Line Exports Logo"
                                className="h-10 w-auto object-contain brightness-0 invert"
                            />
                            <span className="text-lg font-semibold text-white">
                                Bees Line Exports
                            </span>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Premium Sri Lankan herbal and Ayurvedic products for global export and distribution. GMP certified, quality assured.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-sm hover:text-gold transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-sm hover:text-gold transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" className="text-sm hover:text-gold transition-colors">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link to="/quality" className="text-sm hover:text-gold transition-colors">
                                    Quality & Certifications
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Our Products</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/products/ashwagandha" className="text-sm hover:text-gold transition-colors">
                                    Ashwagandha Capsules
                                </Link>
                            </li>
                            <li>
                                <Link to="/products/garcinia" className="text-sm hover:text-gold transition-colors">
                                    Garcinia Capsules
                                </Link>
                            </li>
                            <li>
                                <Link to="/products/moringa" className="text-sm hover:text-gold transition-colors">
                                    Moringa Capsules
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" className="text-sm hover:text-gold transition-colors">
                                    View All Products →
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start space-x-2">
                                <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Sri Lanka</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:info@beeslineexports.com" className="hover:text-gold transition-colors">
                                    info@beeslineexports.com
                                </a>
                            </li>
                            <li>
                                <Link to="/contact" className="inline-block mt-2 btn-primary text-sm">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-gray-400">
                            © {currentYear} Bees Line Exports. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-6 text-sm">
                            <Link to="/partners" className="text-gray-400 hover:text-gold transition-colors">
                                Partners
                            </Link>
                            <Link to="/request-export" className="text-gray-400 hover:text-gold transition-colors">
                                Become a Distributor
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
