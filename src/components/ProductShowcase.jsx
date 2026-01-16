import { motion } from 'framer-motion';
import { products } from '../constants';

const ProductShowcase = () => {
    return (
        <section id="shop" className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="font-serif text-5xl text-[#c59d5f] mb-4">The Collection</h2>
                    <div className="w-24 h-1 bg-brand-gold mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group cursor-pointer"
                        >
                            {/* Image Container */}
                            <div className="relative overflow-hidden aspect-[4/5] mb-6 shadow-sm group-hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                />
                                {product.badge && (
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold tracking-widest uppercase">
                                        {product.badge}
                                    </div>
                                )}
                            </div>

                            {/* Minimal Content */}
                            <div className="text-center">
                                <h3 className="font-serif text-2xl text-gray-900 mb-2">{product.name}</h3>
                                <p className="text-brand-gold font-bold text-lg mb-1">{product.price}</p>
                                <p className="text-gray-500 text-sm font-light mb-4">{product.lengths}</p>
                                <button className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-brand-pink hover:border-brand-pink transition-colors">
                                    Shop Now
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default ProductShowcase;
