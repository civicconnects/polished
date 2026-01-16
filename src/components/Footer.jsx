import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-[#0b0b0b] text-white pt-20 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* 2-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 gap-y-16 mb-20 md:text-left text-center">

                    {/* Brand & Contact (Left Side) */}
                    <div className="space-y-6 md:pr-12 md:mr-auto">
                        <h3 className="font-serif text-3xl text-[#c59d5f] mb-2">Polished by Melissa</h3>
                        <div className="space-y-4 text-gray-300 text-sm font-light leading-relaxed">
                            <p className="flex items-start gap-3 justify-center md:justify-start">
                                <span className="mt-1"><MapPin size={16} /></span>
                                <span>2301 N. Central Express Way,<br />Suite 290 · Plano, TX 75075</span>
                            </p>
                            <p className="flex items-center gap-3 justify-center md:justify-start">
                                <Mail size={16} />
                                <a href="mailto:info@polishedbymelissa.com" className="hover:text-white transition-colors">info@polishedbymelissa.com</a>
                            </p>
                            <p className="flex items-center gap-3 justify-center md:justify-start">
                                <Phone size={16} />
                                <a href="tel:9722132603" className="hover:text-white transition-colors">972 213-2603</a>
                            </p>
                        </div>
                    </div>

                    {/* Opening Hours (Right Side - Pushed to right edge on desktop) */}
                    <div className="md:ml-auto">
                        <h4 className="font-serif text-2xl mb-8 text-[#c59d5f]">Opening Hours</h4>
                        <div className="space-y-4 text-gray-300 text-sm font-light leading-relaxed">
                            <p>Tuesday - Saturday: 10AM - 5PM</p>
                            <p>Monday & Sunday: Closed</p>

                            <div className="flex gap-4 mt-6 pt-2 justify-center md:justify-start">
                                <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
                                <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-xs tracking-wider uppercase">
                    <p>&copy; {new Date().getFullYear()} Polished by Melissa. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
