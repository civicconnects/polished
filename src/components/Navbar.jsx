import { ShoppingBag, User, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navLinks } from '../constants';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-[#c59d5f] shadow-md transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 cursor-pointer text-white text-center">
                        <div className="flex flex-col items-center leading-none">
                            <span className="font-serif text-2xl md:text-3xl tracking-[0.2em] uppercase">POLISHED</span>
                            <div className="flex flex-col items-center -mt-1">
                                <span className="font-sans text-[0.5rem] md:text-[0.6rem] tracking-widest uppercase mb-[-0.2rem]">BY</span>
                                <span className="text-3xl md:text-4xl capitalize" style={{ fontFamily: '"Pinyon Script", cursive' }}>Melissa</span>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="flex space-x-6 items-center border-b border-white/30 pb-1">
                            {/* Home and About removed as per request */}
                            <a href="#contact" className="text-white hover:text-white/80 text-sm font-medium uppercase tracking-wider">Contact</a>
                            <a href="#shop" className="text-white hover:text-white/80 text-sm font-medium uppercase tracking-wider">Shop</a>
                        </div>

                        <div className="flex items-center space-x-4 pl-4 border-l border-white/30">
                            {/* Log In removed as per request */}
                            <button className="relative p-2 text-white hover:text-white/80 transition-colors">
                                <ShoppingBag size={20} />
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-black transform translate-x-1/4 -translate-y-1/4 bg-white rounded-full">0</span>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button className="relative p-2 text-white transition-colors">
                            <ShoppingBag size={24} />
                            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-black transform translate-x-1/4 -translate-y-1/4 bg-white rounded-full">0</span>
                        </button>
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-200 absolute w-full shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
                        {navLinks.map((link) => (
                            <a key={link.id} href={`#${link.id}`} onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-black hover:bg-gray-50 transition-colors uppercase tracking-widest">{link.title}</a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};
export default Navbar;
