import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock } from 'lucide-react';
import config from '../config';

const MemoryVault = () => {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [passphrase, setPassphrase] = useState('');
    const [error, setError] = useState(false);

    const handleUnlock = (e) => {
        e.preventDefault();
        if (passphrase.toLowerCase().replace(/\s/g, '') === config.vault.passphrase) {
            setIsUnlocked(true);
            setError(false);
        } else {
            setError(true);
            setTimeout(() => setError(false), 2000); // Shake/error state duration
        }
    };

    return (
        <section className="py-20 w-full max-w-4xl px-4 relative flex flex-col items-center">
            <h2 className="text-4xl text-center text-princess-pink font-bold mb-12 drop-shadow-sm">
                Private Vault
            </h2>

            <div className="w-full relative transition-all duration-1000">
                {/* Locked State Container */}
                <AnimatePresence mode="wait">
                    {!isUnlocked ? (
                        <motion.div
                            key="locked"
                            className="flex items-center justify-center p-4 backdrop-blur-xl rounded-3xl glass-card overflow-hidden min-h-[400px]"
                            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", position: "absolute", top: 0, left: 0, right: 0, zIndex: 20 }}
                            transition={{ duration: 0.8 }}
                        >
                            <form
                                onSubmit={handleUnlock}
                                className="relative z-30 flex flex-col items-center glass-card p-8 bg-white/60 w-full max-w-sm"
                            >
                                <Lock size={48} className="text-princess-pink mb-4" />
                                <h3 className="text-xl font-bold text-slate-700 mb-6 text-center">
                                    Our go-to password
                                </h3>

                                <input
                                    type="text"
                                    placeholder="_ _ _ _ _ _ _ _ _ _ _ _"
                                    value={passphrase}
                                    onChange={(e) => setPassphrase(e.target.value)}
                                    className={`w-full px-4 py-3 rounded-xl border-2 outline-none text-center font-bold tracking-widest bg-white/80 transition-colors ${error ? 'border-red-400 text-red-500' : 'border-princess-pink/30 focus:border-princess-pink text-slate-700'
                                        }`}
                                />

                                {error && (
                                    <motion.p
                                        initial={{ x: -10 }} animate={{ x: [10, -10, 10, -10, 0] }}
                                        transition={{ duration: 0.4 }}
                                        className="text-red-500 text-sm mt-2 font-bold"
                                    >
                                        Incorrect passphrase.
                                    </motion.p>
                                )}

                                <button
                                    type="submit"
                                    className="mt-6 w-full py-3 bg-gradient-to-r from-princess-pink to-princess-lavender text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-transform"
                                >
                                    Unlock
                                </button>
                            </form>
                        </motion.div>
                    ) : (

                        /* Unlocked Content */
                        <motion.div
                            key="unlocked"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="w-full glass-card p-4 md:p-8"
                        >
                            <div className="flex items-center justify-center gap-4 mb-4">
                                <Unlock className="text-princess-gold" size={32} />
                                <h3 className="text-2xl font-bold text-slate-700">Vault Opened</h3>
                            </div>

                            <div className="flex flex-col items-center justify-center w-full min-h-[400px] relative">
                                <AnimatePresence>
                                    {/* We don't need the isUnlocked check here anymore because this whole component only renders when unlocked */}
                                    <motion.div
                                        key="happycat"
                                        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                        exit={{ opacity: 0, scale: 1.5, filter: 'blur(10px)' }}
                                        transition={{ duration: 0.8 }}
                                        className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
                                    >
                                        {/* Temporary Happy Cat popup */}
                                        <motion.img
                                            src="/happycat.jpg"
                                            alt="Happy Cat"
                                            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-2xl shadow-2xl border-4 border-white"
                                            animate={{ opacity: [1, 1, 0] }}
                                            transition={{ duration: 3, times: [0, 0.7, 1], delay: 0.5 }} // Fade out after sequence
                                        />
                                    </motion.div>
                                </AnimatePresence>

                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 3, duration: 1 }} // Appears after cat fades
                                    className="bg-white/50 rounded-2xl p-2 border-2 border-white shadow-sm w-full max-w-2xl flex items-center justify-center overflow-hidden z-10"
                                >
                                    <img src="/canva-template.jpg" alt="Our Template" className="w-full h-auto rounded-xl"
                                        onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = '<span class="text-slate-400 p-20 text-center">Secret Image (Please name your uploaded collage "canva-template.jpg" and place it in the public folder)</span>' }}
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default MemoryVault;
