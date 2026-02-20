import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import images from '../assets/images'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsOpen(false)
    }, [location])

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Us' },
        { path: '/products', label: 'Products' },
        { path: '/quality', label: 'Quality & Certifications' },
        { path: '/partners', label: 'Partners' },
        { path: '/contact', label: 'Contact' }
    ]

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-4'
                }`}
        >
            <nav className="container-custom">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group">
                        <img
                            src={images.logo1}
                            alt="Bees Line Exports Logo"
                            className="h-16 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
                            style={{ mixBlendMode: 'multiply' }}
                        />
                        {/* Company name intentionally hidden for a cleaner navbar */}
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${location.pathname === link.path
                                        ? 'text-gold bg-beige'
                                        : 'text-gray-700 hover:text-gold hover:bg-beige/50'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                to="/request-export"
                                className="ml-4 btn-primary text-sm"
                            >
                                Request Export
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-gray-700 hover:text-gold transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden overflow-hidden"
                        >
                            <ul className="py-4 space-y-2">
                                {navLinks.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            className={`block px-4 py-2 rounded-lg font-medium transition-all ${location.pathname === link.path
                                                ? 'text-gold bg-beige'
                                                : 'text-gray-700 hover:text-gold hover:bg-beige/50'
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                                <li className="pt-2">
                                    <Link
                                        to="/request-export"
                                        className="block btn-primary text-center"
                                    >
                                        Request Export
                                    </Link>
                                </li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    )
}
