import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import images from '../assets/images'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-[#0a0a0a] text-gray-300">
            {/* Main Footer */}
            <div className="container-custom py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <img
                                src={images.logo1}
                                alt="Bees Line Exports Logo"
                                className="h-10 w-auto object-contain"
                            />
                            <div className="text-lg font-semibold">
                                <span className="text-white">Bees Line</span>
                                <br />
                                <span className="text-gold">Exports</span>
                            </div>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed mb-6">
                            Premium Sri Lankan herbal and Ayurvedic products for global export and distribution. GMP certified, quality assured.
                        </p>
                        {/* Social Media Icons */}
                        <div className="flex items-center space-x-3">
                            <a 
                                href="https://www.facebook.com/Beeslineexport/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                                aria-label="Facebook"
                            >
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                            <a 
                                href="https://www.facebook.com/Beeslineexport/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                                aria-label="Instagram"
                            >
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/bees-line-3501141a5/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/bees-line-3501141a5/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                                aria-label="TikTok"
                            >
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                            <h3 className="text-white font-semibold">Quick Links</h3>
                        </div>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-sm text-gray-400 hover:text-gold transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-sm text-gray-400 hover:text-gold transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" className="text-sm text-gray-400 hover:text-gold transition-colors">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link to="/quality" className="text-sm text-gray-400 hover:text-gold transition-colors">
                                    Quality & Certifications
                                </Link>
                            </li>
                            <li>
                                <Link to="/partners" className="text-sm text-gray-400 hover:text-gold transition-colors">
                                    Partners
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                            <h3 className="text-white font-semibold">Our Products</h3>
                        </div>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/products/ashwagandha" className="text-sm text-gray-400 hover:text-gold transition-colors">
                                    Ashwagandha Capsules
                                </Link>
                            </li>
                            <li>
                                <Link to="/products/garcinia" className="text-sm text-gray-400 hover:text-gold transition-colors">
                                    Garcinia Capsules
                                </Link>
                            </li>
                            <li>
                                <Link to="/products/moringa" className="text-sm text-gray-400 hover:text-gold transition-colors">
                                    Moringa Capsules
                                </Link>
                            </li>
                            <li>
                                <Link to="/products/turmeric" className="text-sm text-gray-400 hover:text-gold transition-colors">
                                    Turmeric Capsules
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" className="text-sm text-gold hover:text-yellow-400 transition-colors">
                                    View All Products →
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <Mail className="w-5 h-5 text-gold" />
                            <h3 className="text-white font-semibold">Get in Touch</h3>
                        </div>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start space-x-3">
                                <div className="w-8 h-8 rounded bg-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <MapPin className="w-4 h-4 text-gold" />
                                </div>
                                <div>
                                    <p className="text-white font-semibold">BEES LINE EXPORTS (Pvt) Ltd</p>
                                    <address className="not-italic text-gray-400 text-sm">
                                        No. 10, Horton Place,<br />
                                        Colombo 07, Sri Lanka
                                    </address>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <div className="w-8 h-8 rounded bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <Phone className="w-4 h-4 text-red-500" />
                                </div>
                                <div>
                                    <a href="tel:+94777182110" className="text-gold hover:underline block">+94 777 182 110</a>
                                    <a href="tel:+94777667576" className="text-gold hover:underline block">+94 777 667 576</a>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <div className="w-8 h-8 rounded bg-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <Mail className="w-4 h-4 text-gold" />
                                </div>
                                <div>
                                    <a href="mailto:info@beeslineexport.com" className="text-gold hover:underline block">info@beeslineexport.com</a>
                                    <a href="mailto:beeslineexport@gmail.com" className="text-gold hover:underline block">beeslineexport@gmail.com</a>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Link to="/contact" className="inline-flex items-center space-x-2 btn-primary text-sm">
                                    <MessageCircle className="w-4 h-4" />
                                    <span>Contact Us</span>
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
                            © {currentYear}{' '}
                            <a 
                                href="https://www.theloop.lk/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gold hover:underline"
                            >
                                The Loop
                            </a>
                            . All rights reserved.
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
