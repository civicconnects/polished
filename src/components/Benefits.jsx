import { motion } from 'framer-motion';
import { HeartHandshake, Layers, Clock } from 'lucide-react';
import { benefits } from '../constants';

// Component mapping for icons
const iconMap = {
    "HeartHandshake": HeartHandshake,
    "Layers": Layers,
    "Clock": Clock
};

const Benefits = () => {
    return (
        <section id="about" className="py-24 bg-primary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {benefits.map((benefit, index) => {
                        const IconComponent = iconMap[benefit.icon];
                        return (
                            <motion.div
                                key={benefit.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                                className="bg-white p-10 rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-300 border border-transparent hover:border-pink-100"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-50 mb-6 text-accent">
                                    {IconComponent && <IconComponent size={32} strokeWidth={1.5} />}
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-light">{benefit.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
export default Benefits;
