import { motion } from 'framer-motion';

const ShopFullRange = () => {
    return (
        <section className="py-20 bg-[#5A5A5A] text-white text-center">
            <div className="max-w-4xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-4xl md:text-5xl mb-6 uppercase tracking-wide"
                >
                    Shop The Full Range
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-200 text-lg mb-10 leading-relaxed max-w-2xl mx-auto"
                >
                    Our hair is Virgin European remy human hair for both of our closures and wefts.
                    We recommend our closures will last 6-12 months with the average customer needing 1/2 closures per year.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <a
                        href="#shop"
                        className="inline-block bg-white text-black px-10 py-3 text-sm font-bold tracking-widest uppercase hover:bg-gray-100 transition-colors"
                    >
                        Shop
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
export default ShopFullRange;
