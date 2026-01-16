import { motion } from 'framer-motion';

const BentoCard = ({ title, category, className, delay, image }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className={`bg-[#1a1a1a] border border-[#333333] min-h-[300px] flex flex-col justify-between hover:-translate-y-2 hover:border-[#d4af37] transition-all duration-300 group overflow-hidden relative ${className}`}
    >
        {image && <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" />}
        <div className="relative z-10 p-8 h-full flex flex-col justify-between">
            <div>
                <span className="text-[#d4af37] text-sm uppercase tracking-widest block mb-2">{category}</span>
                <h3 className="text-4xl">{title}</h3>
            </div>
        </div>
    </motion.div>
);

const BentoGrid = () => {
    return (
        <section className="py-24 px-8 border-b border-[#333333]">
            <h2 className="text-6xl md:text-8xl mb-12 border-b border-[#333333] pb-8">Hair Extension</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Visual Row */}
                <BentoCard title="Visuals" category="Lookbook" image="/images/product-3.jpg" delay={0.1} className="md:col-span-1" />
                <BentoCard title="Details" category="Close Up" image="/images/product-5.jpg" delay={0.2} className="md:col-span-1" />
                <BentoCard title="Style" category="In Motion" image="/images/product-4.jpg" delay={0.3} className="md:col-span-1" />

                {/* Hair Extension Types (Replacing Services) */}
                <BentoCard title="Straight" category="Texture" image="/images/hair-straight.jpg" delay={0.1} />
                <BentoCard title="Body Wave" category="Texture" image="/images/hair-wavy.jpg" delay={0.2} />
                <BentoCard title="Deep Wave" category="Texture" image="/images/bounce.jpg" delay={0.3} />

                {/* About & Philosophy */}
                <div className="md:col-span-2 bg-[#0f0f0f] border border-[#333333] p-12 flex flex-col justify-center hover:border-[#d4af37] transition-colors duration-300">
                    <span className="text-[#d4af37] text-sm uppercase tracking-widest block mb-6">About Polished</span>
                    <h3 className="text-2xl md:text-4xl leading-snug font-light text-gray-300">
                        Established in 2024, Polished by Melissa is Plano’s premier destination for luxury hair care. We believe in the art of the silk press and the power of a curated wardrobe.
                    </h3>
                </div>

                {/* Testimonial */}
                <div className="md:col-span-1 bg-[#1a1a1a] border border-[#333333] p-8 flex flex-col justify-center text-center italic hover:border-[#d4af37] transition-colors duration-300">
                    <p className="text-2xl font-headline mb-6">"The best hair experience I've ever had. Truly transformative."</p>
                    <span className="text-[#d4af37] text-xs uppercase tracking-widest">— Sarah J.</span>
                </div>

                {/* The Standard (Quality) */}
                <div className="md:col-span-3 bg-[#0f0f0f] border border-[#333333] p-8 min-h-[200px] flex flex-col justify-center items-center text-center hover:border-[#d4af37] transition-colors duration-300">
                    <span className="text-[#d4af37] text-sm uppercase tracking-widest block mb-4">The Standard</span>
                    <h3 className="text-3xl md:text-5xl leading-tight">100% Human Hair • Ethically Sourced • Double Drawn</h3>
                </div>

                {/* The Collection (Choices) */}
                <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                    <div className="border border-[#333333] p-6 hover:border-[#d4af37] transition-colors">
                        <h4 className="text-[#d4af37] uppercase tracking-widest mb-2">Textures</h4>
                        <p className="text-xl text-gray-400">Straight • Body Wave • Deep Wave • Kinky Straight</p>
                    </div>
                    <div className="border border-[#333333] p-6 hover:border-[#d4af37] transition-colors">
                        <h4 className="text-[#d4af37] uppercase tracking-widest mb-2">Lengths</h4>
                        <p className="text-xl text-gray-400">18" • 20" • 22" • 24" • 26" • 30"</p>
                    </div>
                    <div className="border border-[#333333] p-6 hover:border-[#d4af37] transition-colors">
                        <h4 className="text-[#d4af37] uppercase tracking-widest mb-2">Origin</h4>
                        <p className="text-xl text-gray-400">Raw Cambodian • Virgin Indian • Burmese Curly</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BentoGrid;
