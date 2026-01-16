import { motion } from 'framer-motion';

const testimonials = [
    { id: 1, image: "/images/testimonial-1.jpg", alt: "Exceptional Service Review" },
    { id: 2, image: "/images/testimonial-2.jpg", alt: "Love Melissa Review" },
    { id: 3, image: "/images/testimonial-3.jpg", alt: "5 Star Polish Review" }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl text-[#c59d5f] mb-4">Client Testimonials</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="bg-white shadow-lg rounded-sm overflow-hidden"
                        >
                            <img
                                src={item.image}
                                alt={item.alt}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Testimonials;
