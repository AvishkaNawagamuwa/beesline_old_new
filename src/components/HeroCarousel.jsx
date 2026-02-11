import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, EffectFade, Parallax } from 'swiper/modules'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css/parallax'

const slideVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }
    }
}

const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, delay: 0.2, ease: 'easeOut' }
    }
}

const subtitleVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, delay: 0.4, ease: 'easeOut' }
    }
}

const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { delay: 0.6, duration: 0.6 }
    }
}

export default function HeroCarousel() {
    const slides = [
        {
            id: 1,
            title: 'Premium Sri Lankan Herbal Products',
            subtitle: "Nature's Wisdom Meets Modern Wellness",
            description: 'Authentic Ayurvedic formulations for global distribution',
            buttons: [
                { text: 'Explore Products', link: '/products', primary: true },
                { text: 'Become a Partner', link: '/partners', primary: false }
            ],
            // Herbal leaves background with golden overlay
            bgImage: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1920&q=80',
            bgOverlay: 'linear-gradient(135deg, rgba(212, 175, 55, 0.75) 0%, rgba(76, 84, 47, 0.85) 100%)'
        },
        {
            id: 2,
            title: 'GMP Certified Manufacturing',
            subtitle: 'International Quality Standards',
            description: 'ISO 22000 | HACCP | GMP Aligned Processes',
            buttons: [
                { text: 'View Certifications', link: '/quality', primary: true },
                { text: 'Request Export Quote', link: '/request-export', primary: false }
            ],
            // Modern lab/facility with light overlay
            bgImage: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1920&q=80',
            bgOverlay: 'linear-gradient(135deg, rgba(245, 241, 232, 0.88) 0%, rgba(212, 175, 55, 0.82) 100%)'
        },
        {
            id: 3,
            title: 'Trusted Global Export Partner',
            subtitle: 'Bringing Sri Lankan Heritage to the World',
            description: 'Reliable supply chain • Competitive pricing • Complete documentation',
            buttons: [
                { text: 'Partner With Us', link: '/partners', primary: true },
                { text: 'Contact Us', link: '/contact', primary: false }
            ],
            // Global/earth theme with warm overlay
            bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
            bgOverlay: 'linear-gradient(135deg, rgba(76, 84, 47, 0.82) 0%, rgba(212, 175, 55, 0.78) 100%)'
        }
    ]

    return (
        <div className="relative">
            <Swiper
                modules={[Autoplay, Pagination, Navigation, EffectFade, Parallax]}
                effect="fade"
                parallax={true}
                speed={1200}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active',
                }}
                navigation={true}
                loop={true}
                className="hero-carousel h-screen"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative h-full flex items-center justify-center overflow-hidden">
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{
                                    backgroundImage: `url('${slide.bgImage}')`,
                                }}
                            />

                            {/* Gradient Overlay for Brand Colors */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: slide.bgOverlay,
                                }}
                            />

                            {/* Subtle Pattern Overlay */}
                            <div className="absolute inset-0 opacity-[0.03]">
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                                        backgroundSize: '24px 24px'
                                    }}
                                />
                            </div>

                            {/* Vignette Effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />

                            {/* Content */}
                            <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
                                <div className="max-w-5xl mx-auto text-center">
                                    <motion.div
                                        key={`title-${slide.id}`}
                                        initial="hidden"
                                        animate="visible"
                                        variants={titleVariants}
                                        data-swiper-parallax="-300"
                                    >
                                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-2xl">
                                            {slide.title}
                                        </h1>
                                    </motion.div>

                                    <motion.div
                                        key={`subtitle-${slide.id}`}
                                        initial="hidden"
                                        animate="visible"
                                        variants={subtitleVariants}
                                        data-swiper-parallax="-200"
                                    >
                                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/95 mb-3 sm:mb-4 font-semibold drop-shadow-lg">
                                            {slide.subtitle}
                                        </p>
                                        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 md:mb-12 drop-shadow-md font-medium">
                                            {slide.description}
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        key={`buttons-${slide.id}`}
                                        initial="hidden"
                                        animate="visible"
                                        variants={buttonVariants}
                                        data-swiper-parallax="-100"
                                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                                    >
                                        {slide.buttons.map((button, idx) => (
                                            <motion.div
                                                key={idx}
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <Link
                                                    to={button.link}
                                                    className={`inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 shadow-2xl ${button.primary
                                                            ? 'bg-white text-gold hover:bg-cream hover:shadow-gold/50'
                                                            : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-gold backdrop-blur-sm'
                                                        }`}
                                                >
                                                    {button.text}
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx>{`
        .hero-carousel {
          --swiper-navigation-size: 24px;
          --swiper-navigation-color: #fff;
          --swiper-pagination-color: #fff;
          --swiper-pagination-bullet-inactive-color: #fff;
          --swiper-pagination-bullet-inactive-opacity: 0.5;
          --swiper-pagination-bottom: 40px;
        }

        .hero-carousel .swiper-button-prev,
        .hero-carousel .swiper-button-next {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(12px);
          border: 2px solid rgba(255, 255, 255, 0.4);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-carousel .swiper-button-prev:hover,
        .hero-carousel .swiper-button-next:hover {
          background: rgba(255, 255, 255, 0.98);
          border-color: #D4AF37;
          --swiper-navigation-color: #D4AF37;
          transform: scale(1.15);
          box-shadow: 0 12px 28px rgba(212, 175, 55, 0.35);
        }

        .hero-carousel .swiper-button-prev::after,
        .hero-carousel .swiper-button-next::after {
          font-size: 24px;
          font-weight: bold;
        }

        .hero-carousel .swiper-pagination-bullet {
          width: 14px;
          height: 14px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background: rgba(255, 255, 255, 0.95);
          border: 2px solid transparent;
          opacity: 1;
        }

        .hero-carousel .swiper-pagination-bullet-active {
          width: 50px;
          border-radius: 8px;
          background: linear-gradient(90deg, rgba(255,255,255,0.95) 0%, #D4AF37 50%, rgba(255,255,255,0.95) 100%);
          border-color: rgba(255, 255, 255, 0.6);
          box-shadow: 0 4px 16px rgba(212, 175, 55, 0.5);
        }

        @media (max-width: 640px) {
          .hero-carousel .swiper-button-prev,
          .hero-carousel .swiper-button-next {
            width: 45px;
            height: 45px;
            --swiper-navigation-size: 18px;
          }
          
          .hero-carousel {
            --swiper-pagination-bottom: 20px;
          }
        }
      `}</style>
        </div>
    )
}
