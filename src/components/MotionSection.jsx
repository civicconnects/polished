import { motion } from 'framer-motion';

const MotionSection = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row h-screen max-h-[800px] border border-gray-100 shadow-sm">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 flex items-center justify-center p-12 bg-gray-50 bg-opacity-50"
                    >
                        <div className="text-center md:text-left max-w-md">
                            <h2 className="font-serif text-5xl md:text-6xl mb-6 text-[#c59d5f] leading-none">
                                Experience <br />
                                <span className="italic text-black">the Bounce</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
                                Our signature wefts are crafted to move naturally.
                                Lightweight, voluminous, and undeniably soft.
                                See the difference in motion.
                            </p>
                            <a href="#shop" className="text-brand-pink font-bold uppercase tracking-widest border-b-2 border-brand-pink pb-1 hover:text-black hover:border-black transition-colors">
                                View Collection
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 relative bg-gray-200"
                    >
                        <img
                            src="/images/melissa-pink-gown.jpg"
                            alt="Experience the Bounce"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
export default MotionSection;
