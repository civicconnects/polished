import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Video Background Placeholder */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/20 z-10" /> {/* Overlay - Reduced opacity for image */}
                <img
                    src="/images/hero-bg-v2.jpg"
                    alt="The Polished Standard"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center 20%" }} // Adjusted to focus on faces
                />
            </div>

            <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#c59d5f] mb-6 tracking-wide"
                >
                    Hair Extensions
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="font-sans text-lg md:text-2xl text-gray-200 mb-10 font-light tracking-wider"
                >
                    Luxury European Remy Hair that moves with you.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <a
                        href="#shop"
                        className="inline-block bg-brand-pink text-white px-10 py-4 text-sm md:text-base font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Shop the Drop
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
export default Hero;
