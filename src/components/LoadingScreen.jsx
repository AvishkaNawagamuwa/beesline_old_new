import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import images from '../assets/images'

export default function LoadingScreen() {
    const [loading, setLoading] = useState(true)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        // Smooth progress animation
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval)
                    return 100
                }
                // Accelerate towards the end
                const increment = prev < 70 ? 2 : prev < 90 ? 3 : 5
                return Math.min(prev + increment, 100)
            })
        }, 30)

        // Hide loading screen when complete
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000)

        return () => {
            clearInterval(progressInterval)
            clearTimeout(timer)
        }
    }, [])

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-cream via-white to-beige"
                >
                    {/* Logo */}
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="mb-8"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gold/10 rounded-full blur-3xl"></div>
                            <img
                                src={images.logo1}
                                alt="Bees Line Exports Logo"
                                className="w-32 h-32 md:w-40 md:h-40 object-contain relative z-10"
                                style={{ mixBlendMode: 'multiply' }}
                            />
                        </div>
                    </motion.div>

                    {/* Company Name */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="mb-12 text-center"
                    >
                        <h1 className="text-3xl md:text-4xl font-bold mb-2">
                            <span className="text-gray-900">BEES LINE </span>
                            <span className="text-gold">EXPORTS</span>
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
                    </motion.div>

                    {/* Circular Spinner */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="relative w-20 h-20 mb-8"
                    >
                        {/* Background circle */}
                        <div className="absolute inset-0 rounded-full border-4 border-beige"></div>
                        
                        {/* Animated gradient circle */}
                        <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: 'conic-gradient(from 0deg, #D4AF37, #FFA500, #D4AF37)',
                                WebkitMaskImage: 'radial-gradient(circle, transparent 50%, black 50%)',
                                maskImage: 'radial-gradient(circle, transparent 50%, black 50%)',
                            }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                        />
                        
                        {/* Center dot */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gold rounded-full shadow-lg shadow-gold/50"></div>
                    </motion.div>

                    {/* Progress Bar */}
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: '400px' }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="w-full max-w-md px-8 mb-6"
                    >
                        <div className="relative h-2 bg-beige rounded-full overflow-hidden shadow-inner">
                            <motion.div
                                className="absolute inset-y-0 left-0 rounded-full"
                                style={{
                                    background: 'linear-gradient(90deg, #FFA500 0%, #D4AF37 50%, #B8962E 100%)',
                                    boxShadow: '0 2px 10px rgba(212, 175, 55, 0.4)',
                                }}
                                initial={{ width: '0%' }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                            />
                        </div>
                        
                        {/* Progress Text */}
                        <div className="flex items-center justify-between mt-3 text-sm">
                            <span className="text-gray-600 font-medium">LOADING</span>
                            <motion.span
                                className="text-gold font-bold text-lg"
                                key={progress}
                                initial={{ scale: 1.2 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.2 }}
                            >
                                {progress}%
                            </motion.span>
                        </div>
                    </motion.div>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="text-gray-600 text-sm md:text-base font-medium tracking-wider uppercase"
                    >
                        Pure Ayurvedic Excellence
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
