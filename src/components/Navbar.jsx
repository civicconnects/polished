import { ShoppingBag, User, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navLinks } from '../constants';

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-[95%] left-[2.5%] z-50 flex justify-between items-center py-8 mix-blend-difference text-white">
            <div className="font-headline font-bold text-2xl tracking-tighter">POLISHED.</div>
            <a href="#contact" className="border border-white px-8 py-3 rounded-full uppercase text-xs hover:bg-white hover:text-black transition-all duration-300">
                Book Appointment
            </a>
        </nav>
    );
};
export default Navbar;
