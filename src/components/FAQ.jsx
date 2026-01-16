import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "What makes your Remy hair different?",
        answer: "Our hair is double-drawn and ethically sourced European Remy human hair. The cuticles are aligned in the same direction, ensuring minimal tangling and maximum longevity."
    },
    {
        question: "How long does shipping take?",
        answer: "We process orders within 24-48 hours. Standard shipping takes 3-5 business days, while expedited options are available at checkout."
    },
    {
        question: "Can I dye or heat style the hair?",
        answer: "Yes, because it is 100% human hair, you can style it just like your own. We recommend using a heat protectant and consulting a professional for coloring."
    },
    {
        question: "What is your return policy?",
        answer: " We accept returns on unopened sets within 30 days of purchase. The security tie must remain intact for a full refund."
    }
];

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-6 text-left focus:outline-none"
            >
                <span className="font-serif text-xl text-gray-900">{question}</span>
                <span className="text-brand-gold">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-gray-600 font-light leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    return (
        <section className="py-24 bg-primary/20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl text-[#c59d5f] mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-500 font-light">Everything you need to know about the Polished Standard.</p>
                </div>

                <div className="bg-white p-8 md:p-12 shadow-sm rounded-sm">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};
export default FAQ;
