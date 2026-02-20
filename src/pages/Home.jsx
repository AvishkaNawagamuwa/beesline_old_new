import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroCarousel from '../components/HeroCarousel'
import FeaturedProductsCarousel from '../components/FeaturedProductsCarousel'
import CertificationCarousel from '../components/CertificationCarousel'
import ScrollToTopButton from '../components/ScrollToTopButton'

// Animation variants for scroll reveals
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
}

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    }
}

export default function Home() {
    return (
        <div>
            {/* Hero Carousel - Full width, full height */}
            <HeroCarousel />

            {/* Who We Are Section */}
            <section className="py-12 bg-gradient-to-br from-white via-beige/10 to-white">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUp}
                        className="text-center mb-12"
                    >
                        <h2 className="section-title">Who We Are</h2>
                        <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
                        <p className="section-subtitle">
                            A trusted name in Sri Lankan herbal exports, bringing nature's finest to the world
                        </p>
                    </motion.div>

                    {/* 2-Column Layout: Story + BR Card */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 gap-12 mb-12 items-center"
                    >
                        {/* Left Column - Company Story */}
                        <motion.div variants={fadeInUp} className="space-y-6">
                            <div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-4">Building Trust Through Excellence</h3>
                                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                                    Bees Line Exports (Pvt) Ltd is a registered and professionally managed herbal export company rooted in Sri Lanka's rich Ayurvedic tradition. We combine ancient wellness wisdom with modern manufacturing standards to deliver premium herbal products to the global market.
                                </p>
                                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                                    Our commitment extends beyond exceptional products—we prioritize transparency, compliance, and building long-term partnerships with international distributors who share our values of quality and integrity.
                                </p>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    Every product we export is manufactured under GMP-certified facilities and meets rigorous international standards, ensuring our partners and end consumers receive only the best.
                                </p>
                            </div>
                        </motion.div>

                        {/* Right Column - BR Verification Card */}
                        <motion.div
                            variants={fadeInUp}
                            whileHover={{ y: -8 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gold/10"
                        >
                            <div className="mb-6">
                                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Company Registration</h3>
                                <p className="text-sm text-gray-500 mt-1">Verified & Registered in Sri Lanka</p>
                            </div>

                            <div className="space-y-5 mb-8 pb-8 border-b border-gray-200">
                                <div>
                                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Company Name</p>
                                    <p className="text-lg font-semibold text-gray-900 mt-1">BEES LINE EXPORTS (PVT) LTD</p>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Company Number</p>
                                    <p className="text-lg font-semibold text-gold mt-1">PV 002310335</p>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Incorporated</p>
                                    <p className="text-lg font-semibold text-gray-900 mt-1">30 November 2020</p>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Company Type</p>
                                    <p className="text-sm text-gray-700 mt-1">Private Company with Limited Liability<br /><span className="text-xs text-gray-600">Companies Act No. 7 of 2007</span></p>
                                </div>
                            </div>

                            <button className="w-full px-6 py-3 bg-gradient-to-r from-gold to-gold/80 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                View Registration Certificate
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* 3 Premium Value Tiles */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {[
                            {
                                icon: '🌿',
                                title: 'Herbal Expertise',
                                desc: "Rooted in Sri Lanka's centuries-old Ayurvedic tradition, we combine ancient wellness knowledge with cutting-edge manufacturing excellence."
                            },
                            {
                                icon: '✅',
                                title: 'Certified Quality',
                                desc: 'GMP-certified manufacturing and international compliance standards ensure every product meets the highest global safety and efficacy requirements.'
                            },
                            {
                                icon: '🌍',
                                title: 'Export & Partnerships',
                                desc: 'We build lasting relationships with international distributors, offering competitive pricing, reliable support, and consistent availability.'
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 relative overflow-hidden group border border-gray-100"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-500"></div>
                                <div className="text-5xl mb-6 relative z-10">{item.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed relative z-10">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Featured Products Carousel Section */}
            <section className="py-12 bg-gradient-to-br from-beige/20 to-cream/30">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUp}
                        className="text-center mb-10"
                    >
                        <h2 className="section-title">Featured Products</h2>
                        <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
                        <p className="section-subtitle">
                            Experience the best of Sri Lankan herbal wellness
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUp}
                    >
                        <FeaturedProductsCarousel />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUp}
                        className="text-center mt-12"
                    >
                        <Link to="/products" className="btn-primary inline-flex items-center gap-2">
                            View All Products
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-12 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUp}
                        className="text-center mb-10"
                    >
                        <h2 className="section-title">Why Choose Bees Line Exports</h2>
                        <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={staggerContainer}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {[
                            { icon: '🎯', title: 'Authentic Products', desc: 'Sourced directly from Sri Lankan farms and manufacturers, ensuring genuine quality and traditional formulations.' },
                            { icon: '📦', title: 'Reliable Supply Chain', desc: 'Consistent product availability with efficient logistics and timely international delivery.' },
                            { icon: '💰', title: 'Competitive Pricing', desc: 'Direct export prices that give you strong margins while maintaining premium quality.' },
                            { icon: '📜', title: 'Complete Documentation', desc: 'All necessary export papers, certificates, and compliance documents provided.' },
                            { icon: '🔬', title: 'Lab Tested', desc: 'Every batch undergoes rigorous quality testing to ensure safety and effectiveness.' },
                            { icon: '🌟', title: 'Ongoing Support', desc: 'Dedicated account management and technical support for all our distribution partners.' }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ y: -8, scale: 1.03 }}
                                className="bg-beige/30 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="text-4xl mb-4 relative z-10 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-3 relative z-10">{item.title}</h4>
                                <p className="text-gray-700 relative z-10">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Quality & Certifications Section */}
            <section className="py-12 bg-gradient-to-br from-cream/40 to-beige/20">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUp}
                        className="text-center mb-10"
                    >
                        <h2 className="section-title">Quality & Certifications</h2>
                        <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
                        <p className="section-subtitle">
                            International standards ensuring premium quality and safety
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUp}
                    >
                        <CertificationCarousel />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUp}
                        className="text-center mt-12"
                    >
                        <Link to="/quality" className="btn-secondary inline-flex items-center gap-2">
                            View All Certifications
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </Link>
                    </motion.div>

                    {/* Quality Commitment */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={staggerContainer}
                        className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg"
                    >
                        <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Quality Commitment</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { title: 'GMP-Aligned Processes', desc: 'All manufacturing follows Good Manufacturing Practice standards for consistent quality.' },
                                { title: 'HACCP Food Safety', desc: 'Hazard Analysis and Critical Control Points system ensures safety at every stage.' },
                                { title: 'Lab Testing', desc: 'Rigorous testing for purity, potency, and quality before export.' },
                                { title: 'Traceable Sourcing', desc: 'Complete supply chain transparency with export-ready packaging.' }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    className="flex items-start gap-4"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                                        <p className="text-gray-600 text-sm">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Partners CTA Section */}
            <section className="py-12 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUp}
                        className="bg-gradient-to-r from-gold/10 via-primary-100/10 to-gold/10 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute inset-0" style={{
                                backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)',
                                backgroundSize: '30px 30px'
                            }}></div>
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Become a Distribution Partner
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                                Join our growing network of international distributors and bring premium Sri Lankan herbal products to your market.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/partners" className="btn-primary">
                                    Learn About Partnership
                                </Link>
                                <Link to="/request-export" className="btn-secondary">
                                    Request Export Quote
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Scroll to Top Button */}
            <ScrollToTopButton />
        </div>
    )
}
