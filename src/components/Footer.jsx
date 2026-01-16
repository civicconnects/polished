import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-16 px-8 border-t border-grid-line flex flex-wrap justify-between items-end">
            <div className="mb-8 md:mb-0">
                <p className="text-sm uppercase tracking-widest mb-1">2301 N. Central Expressway</p>
                <p className="text-sm uppercase tracking-widest text-gray-500">Plano, TX</p>
                <p className="mt-4 text-xs text-gray-600">© 2026 Polished by Melissa</p>
            </div>
            <div className="text-[12vw] font-headline opacity-20 leading-[0.8]">EST. 2024</div>
        </footer>
    );
};
export default Footer;
