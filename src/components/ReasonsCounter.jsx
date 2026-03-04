import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import config from '../config';

const ReasonsCounter = () => {
    const [count, setCount] = useState(0);
    const [hearts, setHearts] = useState([]);

    const handleClick = (e) => {
        setCount(prev => prev + 1);

        // Create a floating heart at click position
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newHeart = { id: Date.now(), x, y };
        setHearts(prev => [...prev, newHeart]);

        // Remove heart after animation
        setTimeout(() => {
            setHearts(prev => prev.filter(h => h.id !== newHeart.id));
        }, 1000);
    };

    const currentReason = count === 0 ? "Click the heart..." : config.reasons[(count - 1) % config.reasons.length];

    return (
        <section className="py-20 w-full flex justify-center px-4">
            <div className="glass-card w-full max-w-2xl p-10 flex flex-col items-center">
                <h2 className="text-3xl text-center text-princess-pink font-bold mb-8 font-serif">
                    Reasons I Love You
                </h2>

                {/* Interaction Area */}
                <div
                    className="relative w-40 h-40 flex items-center justify-center cursor-pointer group mb-10"
                    onClick={handleClick}
                >
                    {/* Background Pulse */}
                    <motion.div
                        className="absolute w-full h-full bg-princess-pink/20 rounded-full"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />

                    {/* Main Heart Button */}
                    <motion.div
                        className="z-10 bg-gradient-to-br from-princess-pink to-[#FF8C9D] w-24 h-24 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(248,200,220,0.6)] group-hover:scale-110 active:scale-90 transition-transform"
                        whileTap={{ scale: 0.9 }}
                    >
                        <Heart size={48} className="text-white fill-white" />
                    </motion.div>

                    {/* Floating Particles */}
                    <AnimatePresence>
                        {hearts.map(heart => (
                            <motion.div
                                key={heart.id}
                                initial={{ opacity: 1, scale: 0.5, x: heart.x - 80, y: heart.y - 80 }}
                                animate={{ opacity: 0, scale: 1.5, y: heart.y - 180 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="absolute z-20 pointer-events-none"
                            >
                                <Heart size={24} className="text-princess-pink fill-princess-pink" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Counter & Reason Display */}
                <div className="text-center w-full min-h-[100px]">
                    <div className="text-6xl font-bold text-princess-pink opacity-20 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none font-serif">
                        {count}
                    </div>
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={count}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="text-2xl text-slate-700 italic font-serif relative z-10"
                        >
                            {currentReason}
                        </motion.p>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default ReasonsCounter;
