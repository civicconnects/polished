import { Zap, Heart, Layers } from 'lucide-react';

const BenefitBand = () => {
    return (
        <section className="bg-secondary py-6 md:py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-around items-center gap-6 md:gap-0 text-white">

                    <div className="flex items-center gap-3">
                        <Heart size={24} fill="currentColor" className="text-white" />
                        <span className="font-serif text-lg tracking-widest uppercase">100% Human Hair</span>
                    </div>

                    <div className="hidden md:block w-px h-8 bg-white/30" />

                    <div className="flex items-center gap-3">
                        <Zap size={24} fill="currentColor" className="text-white" />
                        <span className="font-serif text-lg tracking-widest uppercase">Ethically Sourced</span>
                    </div>

                    <div className="hidden md:block w-px h-8 bg-white/30" />

                    <div className="flex items-center gap-3">
                        <Layers size={24} fill="currentColor" className="text-white" />
                        <span className="font-serif text-lg tracking-widest uppercase">Double Drawn</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default BenefitBand;
