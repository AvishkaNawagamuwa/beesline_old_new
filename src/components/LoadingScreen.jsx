import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import images from '../assets/images'

export default function LoadingScreen() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Hide loading screen after animation
        const timer = setTimeout(() => {
            setLoading(false)
        }, 3000)

        return () => {
            clearTimeout(timer)
        }
    }, [])

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white overflow-hidden"
                >
                    {/* Animated rays in background */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        {[...Array(12)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 bg-gradient-to-t from-transparent via-gold/5 to-transparent"
                                style={{
                                    height: '40%',
                                    transformOrigin: 'center center',
                                    transform: `rotate(${i * 30}deg) translateY(-50%)`,
                                }}
                                animate={{
                                    opacity: [0.3, 0.6, 0.3],
                                    height: ['35%', '45%', '35%'],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.1,
                                    ease: 'easeInOut',
                                }}
                            />
                        ))}
                    </div>

                    {/* Welcome Text */}
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mb-8 md:mb-12 relative z-10"
                    >
                        <h2 className="text-2xl md:text-3xl font-light text-gray-600 tracking-widest">
                            Welcome to
                        </h2>
                    </motion.div>

                    {/* Diamond Container with Logo */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                        className="relative mb-12 md:mb-16"
                    >
                        {/* Outer glow rings */}
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                        >
                            <div className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full border-2 border-gold/10"></div>
                        </motion.div>

                        <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                        >
                            <div className="w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full border border-gold/5"></div>
                        </motion.div>

                        {/* Main diamond shape */}
                        <div className="relative w-52 h-52 md:w-64 md:h-64 flex items-center justify-center">
                            {/* Glowing background */}
                            <motion.div
                                className="absolute inset-0"
                                animate={{
                                    boxShadow: [
                                        '0 0 40px 10px rgba(212, 175, 55, 0.3)',
                                        '0 0 60px 20px rgba(212, 175, 55, 0.5)',
                                        '0 0 40px 10px rgba(212, 175, 55, 0.3)',
                                    ],
                                }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                style={{
                                    transform: 'rotate(45deg)',
                                    background: 'linear-gradient(135deg, rgba(255, 165, 0, 0.1) 0%, rgba(212, 175, 55, 0.2) 50%, rgba(255, 165, 0, 0.1) 100%)',
                                    borderRadius: '20px',
                                }}
                            />

                            {/* Diamond border */}
                            <motion.div
                                className="absolute inset-4 border-4"
                                style={{
                                    transform: 'rotate(45deg)',
                                    borderRadius: '18px',
                                }}
                                animate={{
                                    borderColor: ['#D4AF37', '#FFA500', '#D4AF37'],
                                }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            />

                            {/* Inner diamond glow */}
                            <motion.div
                                className="absolute inset-8"
                                style={{
                                    transform: 'rotate(45deg)',
                                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(255, 165, 0, 0.15))',
                                    borderRadius: '15px',
                                }}
                                animate={{
                                    opacity: [0.5, 0.8, 0.5],
                                }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            />

                            {/* Logo */}
                            <motion.div
                                className="relative z-10"
                                animate={{
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <img
                                    src={images.logo1}
                                    alt="Bees Line Exports"
                                    className="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-2xl"
                                    style={{ filter: 'drop-shadow(0 4px 20px rgba(212, 175, 55, 0.3))' }}
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Company Name */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-center relative z-10"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold tracking-wider mb-2">
                            <span 
                                className="inline-block"
                                style={{
                                    background: 'linear-gradient(135deg, #4A4A4A 0%, #2C2C2C 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                BEES LINE
                            </span>
                            {' '}
                            <motion.span
                                className="inline-block"
                                animate={{
                                    textShadow: [
                                        '0 0 20px rgba(212, 175, 55, 0.5)',
                                        '0 0 30px rgba(255, 165, 0, 0.6)',
                                        '0 0 20px rgba(212, 175, 55, 0.5)',
                                    ],
                                }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                style={{
                                    background: 'linear-gradient(135deg, #FFA500 0%, #D4AF37 50%, #B8962E 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                EXPORTS
                            </motion.span>
                        </h1>
                        
                        {/* Decorative line */}
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4"
                        />
                    </motion.div>

                    {/* Loading dots indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="absolute bottom-12 flex gap-2"
                    >
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                className="w-2 h-2 rounded-full bg-gold"
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                    ease: 'easeInOut',
                                }}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
