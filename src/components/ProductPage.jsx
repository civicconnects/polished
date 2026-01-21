import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import { products } from '../data/products';

const ProductPage = () => {
    const navigate = useNavigate();
    const { productId } = useParams();
    const product = products[productId];

    const [selectedSize, setSelectedSize] = useState(product ? product.sizes[0] : null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (product) {
            setSelectedSize(product.sizes[0]);
            setQuantity(1);
        }
    }, [productId, product]);

    const handleQuantityChange = (delta) => {
        setQuantity(prev => Math.max(1, prev + delta));
    };

    if (!product) {
        return (
            <div className="min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl mb-4">Product Not Found</h2>
                    <button onClick={() => navigate('/')} className="text-[#d4af37] hover:underline">Return Home</button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#0f0f0f] min-h-screen text-[#f0f0f0] pt-24 pb-12 px-6 md:px-12 font-sans">
            <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-[#d4af37] mb-8 hover:text-white transition-colors uppercase tracking-widest text-xs"
            >
                <ArrowLeft size={16} /> Back to Collection
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
                {/* Product Image */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    key={`img-${productId}`}
                    className="relative aspect-[4/5] md:aspect-auto md:h-[80vh] overflow-hidden border border-[#333333]"
                >
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Product Details */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    key={`txt-${productId}`}
                    className="flex flex-col justify-center"
                >
                    <span className="text-[#d4af37] tracking-[0.2em] text-sm uppercase mb-2">{product.subtitle}</span>
                    <h1 className="text-4xl md:text-6xl font-serif mb-4 uppercase">{product.title}</h1>
                    <p className="text-2xl md:text-3xl mb-8 font-light">${selectedSize?.price}.00</p>

                    <div className="space-y-8 border-t border-[#333333] pt-8">
                        {/* Description */}
                        <div className="prose prose-invert max-w-none text-gray-400 font-light leading-relaxed">
                            <p className="mb-4">{product.description}</p>
                            {product.details && (
                                <>
                                    <h4 className="text-white uppercase tracking-wider text-sm font-medium mt-6 mb-2">Description</h4>
                                    <p>{product.details}</p>
                                </>
                            )}
                        </div>

                        {/* Size Selector */}
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-3">Select Length</label>
                            <div className="grid grid-cols-5 gap-2">
                                {product.sizes.map((item) => (
                                    <button
                                        key={item.size}
                                        onClick={() => setSelectedSize(item)}
                                        className={`py-3 border text-sm transition-all duration-300 ${selectedSize?.size === item.size
                                                ? 'border-[#d4af37] bg-[#d4af37] text-black font-medium'
                                                : 'border-[#333333] hover:border-[#d4af37] text-gray-400'
                                            }`}
                                    >
                                        {item.size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity & Add to Cart */}
                        <div className="flex flex-col md:flex-row gap-4 pt-4">
                            <div className="flex items-center border border-[#333333] h-14 w-full md:w-32 justify-between px-4">
                                <button onClick={() => handleQuantityChange(-1)} className="text-gray-400 hover:text-white"><Minus size={16} /></button>
                                <span className="font-medium text-lg">{quantity}</span>
                                <button onClick={() => handleQuantityChange(1)} className="text-gray-400 hover:text-white"><Plus size={16} /></button>
                            </div>
                            <button className="flex-1 bg-white text-black h-14 flex items-center justify-center gap-2 uppercase tracking-widest font-medium hover:bg-[#d4af37] transition-colors duration-300">
                                <ShoppingBag size={18} /> Add to Cart - ${((selectedSize?.price || 0) * quantity).toFixed(2)}
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProductPage;
