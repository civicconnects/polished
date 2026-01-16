import { motion } from 'framer-motion';

const RedesignHero = () => {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center border-b border-grid-line relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img src="/images/header-bg-new.jpg" alt="Background" className="w-full h-full object-cover opacity-50" />
                <div className="absolute inset-0 bg-black/40" />
            </div>
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-[12vw] leading-none tracking-tighter mix-blend-difference z-10"
            >
                Unapologetically<br />Polished
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mt-8 text-xl md:text-2xl text-gray-400 max-w-lg font-light"
            >
                The intersection of luxury hair care, silk press mastery, and wardrobe strategy.
            </motion.p>
        </section>
    );
};

export default RedesignHero;
