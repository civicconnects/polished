import { motion } from 'framer-motion';

const RedesignHero = () => {
    return (
        <section className="h-screen flex flex-col justify-start items-center text-center border-b border-grid-line relative overflow-hidden bg-[#eeeced]">
            <div className="absolute inset-x-0 bottom-0 top-[15%] z-0 bg-[#eeeced]">
                <img src="/images/header-bg-transparent.png" alt="Background" className="w-full h-full object-contain object-bottom opacity-100 mix-blend-multiply" />
                <div className="absolute inset-0 bg-transparent" />
            </div>
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute top-4 left-0 right-0 text-[15vw] leading-none tracking-widest text-black font-serif z-10"
            >
                POLISHED
            </motion.h1>
        </section>
    );
};

export default RedesignHero;
