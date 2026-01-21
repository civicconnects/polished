import { motion } from 'framer-motion';

const RedesignHero = () => {
    return (
        <section className="relative h-[70vh] min-h-[500px] flex flex-col justify-center items-center text-center px-8 overflow-hidden text-[#0f0f0f]" style={{ backgroundColor: '#FFC0CB' }}>
            {/* Background Image/Gradient removed for solid color */}

            {/* Centered Image behind text */}
            <img
                src="/images/melissa-hero-final.png"
                alt="Polished by Melissa"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 max-h-[90%] w-auto z-0 opacity-100 pointer-events-none"
            />

            <h1 className="relative z-10 font-serif text-[5rem] md:text-[9rem] font-bold leading-none text-[#d4af37] tracking-tight">
                POLISHED
            </h1>
        </section>
    );
};

export default RedesignHero;
