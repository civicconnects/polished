import { motion } from 'framer-motion';

const RedesignHero = () => {
    return (
        <section className="relative h-[70vh] min-h-[500px] flex flex-col justify-start items-center text-center px-8 pt-24 overflow-hidden text-[#0f0f0f]" style={{ backgroundColor: '#FFC0CB' }}>
            {/* Background Image/Gradient removed for solid color */}

            {/* Centered Image behind text */}
            <img
                src="/images/melissa-hero-final.png"
                alt="Polished by Melissa"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 max-h-[60%] md:max-h-[80%] w-auto z-0 opacity-100 pointer-events-none"
            />

            <h1
                className="relative z-10 font-serif text-[2.25rem] md:text-[7.5rem] font-bold leading-none tracking-[0.1em] md:tracking-[0.2em]"
                style={{
                    background: 'linear-gradient(to bottom, #cfc09f 10%, #c5a059 20%, #d4af37 30%, #f0b105 45%, #ffdb4d 50%, #f0b105 55%, #b8860b 70%, #5c4302 90%, #3a2c0f 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: '#f0b105' // Fallback
                }}
            >
                POLISHED
            </h1>
        </section>
    );
};

export default RedesignHero;
