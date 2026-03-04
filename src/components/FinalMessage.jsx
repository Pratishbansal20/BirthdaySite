import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FinalMessage = () => {
    const [isActive, setIsActive] = useState(false);
    const [step, setStep] = useState(0);
    const [easterEggVisible, setEasterEggVisible] = useState(false);

    // Easter Egg Listener
    useEffect(() => {
        let keys = '';
        const secretCode = 'iloveyou';

        const handleKeyDown = (e) => {
            keys += e.key.toLowerCase();
            // Keep only the last N characters
            if (keys.length > secretCode.length) {
                keys = keys.slice(-secretCode.length);
            }
            if (keys === secretCode) {
                setEasterEggVisible(true);
                setTimeout(() => setEasterEggVisible(false), 5000); // Hide after 5 seconds
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const handleStart = () => {
        setIsActive(true);
        // Sequence the text
        setTimeout(() => setStep(1), 2000);
        setTimeout(() => setStep(2), 5000);
    };

    return (
        <>
            <section className="py-32 w-full flex flex-col items-center px-4 relative">
                <button
                    onClick={handleStart}
                    className="px-8 py-3 bg-slate-800 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-slate-700 transition-all font-serif"
                >
                    One last thing...
                </button>
            </section>

            {/* Fullscreen Overlay */}
            <AnimatePresence>
                {isActive && (
                    <motion.div
                        className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        {/* Soft Sparkles Background */}
                        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

                        <div className="relative z-10 text-center text-white font-serif max-w-2xl">
                            <AnimatePresence mode="wait">
                                {step === 1 && (
                                    <motion.h2
                                        key="step1"
                                        className="text-3xl md:text-5xl font-light leading-relaxed text-princess-cream"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 1.05 }}
                                        transition={{ duration: 1.5 }}
                                    >
                                        You made my year.
                                    </motion.h2>
                                )}
                                {step === 2 && (
                                    <motion.h2
                                        key="step2"
                                        className="text-4xl md:text-6xl font-bold leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-princess-pink via-white to-princess-lavender"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 2 }}
                                    >
                                        I can't wait to make your lifetime.
                                    </motion.h2>
                                )}
                            </AnimatePresence>
                        </div>

                        {step === 2 && (
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 3, duration: 1 }}
                                className="absolute bottom-10 text-white/50 hover:text-white underline text-sm"
                                onClick={() => { setIsActive(false); setStep(0); }}
                            >
                                Close
                            </motion.button>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Easter Egg Popup */}
            <AnimatePresence>
                {easterEggVisible && (
                    <motion.div
                        className="fixed inset-0 z-[200] pointer-events-none flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="absolute inset-0 bg-princess-pink/20 backdrop-blur-sm" />
                        <motion.div
                            className="text-6xl md:text-8xl font-serif text-white drop-shadow-[0_0_20px_rgba(255,183,197,1)] z-10 font-bold tracking-widest uppercase text-center"
                            initial={{ scale: 0.5, rotate: -5 }}
                            animate={{ scale: 1.2, rotate: 5 }}
                            transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
                        >
                            I LOVE YOU TOO! 💖
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default FinalMessage;
