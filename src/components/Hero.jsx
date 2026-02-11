import { motion } from 'framer-motion'

export default function Hero({ title, subtitle, children, className = '' }) {
    return (
        <section className={`pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-beige/30 to-cream ${className}`}>
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    {title && (
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                            {title}
                        </h1>
                    )}
                    {subtitle && (
                        <p className="text-lg md:text-xl text-gray-600 mb-8">
                            {subtitle}
                        </p>
                    )}
                    {children}
                </motion.div>
            </div>
        </section>
    )
}
