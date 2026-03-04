import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = ({ onOpen }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
        setTimeout(() => {
            onOpen(); // Trigger parent state to hide hero and show main content
        }, 1500); // Wait for envelope animation to finish
    };

    return (
        <motion.section
            className="absolute inset-0 z-50 flex items-center justify-center bg-princess-cream overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            onAnimationComplete={(definition) => {
                if (definition.opacity === 0) {
                    // Component is fully hidden, parent should unmount it
                }
            }}
            style={{ pointerEvents: isOpen ? 'none' : 'auto' }}
        >
            <div className="absolute inset-0 pointer-events-none">
                {/* Subtle floating particles can go here */}
            </div>

            <div className="relative z-10 flex flex-col items-center">
                <motion.h1
                    className="text-3xl md:text-5xl text-princess-pink mb-8 text-center font-bold px-4 drop-shadow-sm"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    Hey you. Yes you. <br /><span className="text-2xl md:text-4xl">Today is about the most beautiful human alive.</span>
                </motion.h1>

                {/* Envelope Animation Container */}
                <div className="relative w-64 h-48 cursor-pointer group" onClick={handleOpen}>
                    <motion.div
                        className="absolute inset-0 bg-white rounded-lg shadow-xl border-2 border-princess-pink/30 flex items-center justify-center"
                        animate={isOpen ? { scale: 1.1, opacity: 0 } : { scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="text-princess-pink/50 text-6xl">✉️</div>

                        {!isOpen && (
                            <div className="absolute -bottom-16">
                                <button className="px-8 py-3 bg-gradient-to-r from-princess-pink to-princess-lavender text-white rounded-full font-bold shadow-lg group-hover:scale-105 transition-transform">
                                    Open Me ✨
                                </button>
                            </div>
                        )}
                    </motion.div>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center p-4"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1.5, opacity: 1 }}
                                exit={{ scale: 2, opacity: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <span className="text-8xl">💖</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.section>
    );
};

export default HeroSection;
