import { ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const FloatingShopButton = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY > lastScrollY && window.scrollY > 100) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
                setLastScrollY(window.scrollY);
            }
        };

        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    }, [lastScrollY]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-0 left-0 right-0 z-40 p-4 md:hidden"
                >
                    <a
                        href="#shop"
                        className="block w-full bg-accent text-black py-4 shadow-2xl text-center font-bold uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-transform duration-100"
                    >
                        <ShoppingBag size={20} />
                        Shop Now
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
export default FloatingShopButton;
