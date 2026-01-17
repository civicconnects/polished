import { motion } from 'framer-motion';

const RedesignHero = () => {
    return (
        <section className="h-screen flex flex-col justify-start items-center text-center border-b border-grid-line relative overflow-hidden">
            <div className="absolute inset-x-0 bottom-0 top-[15%] z-0 bg-[#e9e7e8]">
                <img src="/images/header-bg-final.jpg" alt="Background" className="w-full h-full object-contain object-bottom opacity-100" />
                <div className="absolute inset-0 bg-transparent" />
            </div>
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute top-[10%] left-0 right-0 text-[15vw] leading-none tracking-widest text-black font-serif z-10"
            >
                POLISHED
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
