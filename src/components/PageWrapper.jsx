import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { pageVariants, pageTransition } from '../lib/animationVariants'

export default function PageWrapper({ children }) {
    const [isPageLoading, setIsPageLoading] = useState(true)

    useEffect(() => {
        setIsPageLoading(true)
        const timer = setTimeout(() => {
            setIsPageLoading(false)
        }, 400)

        return () => clearTimeout(timer)
    }, [children])

    return (
        <>
            {/* Top Loading Bar */}
            <AnimatePresence>
                {isPageLoading && (
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        exit={{ scaleX: 1, opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
                        style={{
                            background: 'linear-gradient(90deg, #FF6B6B 0%, #FFA500 50%, #D4AF37 100%)',
                            boxShadow: '0 2px 10px rgba(212, 175, 55, 0.5)',
                        }}
                    />
                )}
            </AnimatePresence>

            {/* Page Content with Transition */}
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className="min-h-full"
            >
                {children}
            </motion.div>
        </>
    )
}
