import { motion } from 'framer-motion';

const RedesignHero = () => {
    return (
        <section className="relative h-[70vh] min-h-[500px] flex flex-col justify-center items-center text-center px-8 overflow-hidden text-[#f0f0f0]">
            {/* Background Image with Dark Gradient Overlay */}
            <div
                className="absolute inset-0 w-full h-full -z-10"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(15, 15, 15, 0.7), rgba(15, 15, 15, 0.4)), url('/header-bg.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top'
                }}
            />

            <h1 className="font-serif text-[3.5rem] md:text-[5rem] font-bold leading-[1.1] mb-4 drop-shadow-md">
                Polished by Melissa
            </h1>

            <p className="font-sans text-base md:text-[1.25rem] font-light max-w-[600px] mb-8 opacity-90">
                Luxury hair care, silk press mastery, and wardrobe strategy for the modern woman.
            </p>

            <div className="bg-[#f0f0f0] text-[#0f0f0f] px-8 py-3 uppercase tracking-widest text-sm font-semibold cursor-pointer hover:bg-[#d4af37] transition-colors duration-300">
                Book Your Transformation
            </div>
        </section>
    );
};

export default RedesignHero;
