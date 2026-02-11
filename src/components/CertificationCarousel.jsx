import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
import { certificates } from '../data/certificates'

// Import Swiper styles
import 'swiper/css'

export default function CertificationCarousel() {
    return (
        <div className="py-8 relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary-200/10 rounded-full blur-3xl" />

            <Swiper
                modules={[Autoplay]}
                spaceBetween={40}
                slidesPerView={2}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                speed={1000}
                breakpoints={{
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 60,
                    },
                    1280: {
                        slidesPerView: 6,
                        spaceBetween: 60,
                    },
                }}
                className="certification-carousel"
            >
                {certificates.map((cert) => (
                    <SwiperSlide key={cert.id}>
                        <motion.div
                            whileHover={{ y: -8, scale: 1.05 }}
                            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                            className="cursor-pointer"
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-gold/50 aspect-square flex flex-col items-center justify-center group relative overflow-hidden">
                                {/* Gradient Overlay on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                                {/* Badge Animation */}
                                <motion.div
                                    className="absolute top-2 right-2 w-2 h-2 bg-gold rounded-full opacity-0 group-hover:opacity-100"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                />

                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-contain filter grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100 relative z-10"
                                />
                            </div>
                            <p className="text-center text-xs font-semibold text-gray-600 mt-4 group-hover:text-gold transition-colors duration-300 line-clamp-2">
                                {cert.title}
                            </p>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx>{`
        .certification-carousel {
          padding: 2rem 0;
        }
      `}</style>
        </div>
    )
}
