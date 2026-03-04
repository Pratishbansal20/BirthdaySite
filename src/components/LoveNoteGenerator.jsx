import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import config from '../config';

const LoveNoteGenerator = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="py-20 w-full max-w-3xl px-4 relative flex flex-col items-center">
            <div className="glass-card w-full p-6 md:p-12 flex flex-col items-center relative overflow-hidden group">
                {/* Decorative elements */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-300 shadow-md border border-slate-400 z-10" />

                <h2 className="text-3xl text-center text-princess-pink font-bold mb-8 font-serif mt-4">
                    A Letter For You 💌
                </h2>

                <div className="w-full bg-white/70 rounded-xl p-6 md:p-10 shadow-inner relative border border-white/50">
                    <p className="text-xl md:text-2xl text-slate-700 font-serif leading-relaxed mb-6">
                        My Dearest Princess,
                    </p>

                    <p className="text-lg md:text-xl text-slate-700 font-serif leading-loose italic">
                        {config.loveNotes[0]}
                    </p>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 1.2, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="pt-4 space-y-6">
                                    {config.loveNotes.slice(1).map((note, index) => (
                                        <p key={index} className="text-lg md:text-xl text-slate-700 font-serif leading-loose italic">
                                            {note}
                                        </p>
                                    ))}
                                    <div className="w-full flex justify-end mt-10">
                                        <p className="text-xl md:text-2xl text-slate-700 font-serif leading-relaxed text-right border-t border-princess-pink/30 pt-4 inline-block">
                                            Forever yours, <br />
                                            <span className="font-bold text-princess-pink">Me</span>
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Faded overlay when closed */}
                    {!isOpen && (
                        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/80 to-transparent rounded-b-xl flex items-end justify-center pb-6">
                            <button
                                onClick={() => setIsOpen(true)}
                                className="px-8 py-3 bg-white text-princess-pink border border-princess-pink font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-princess-pink hover:text-white transition-all transform hover:-translate-y-1"
                            >
                                Read More ✨
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default LoveNoteGenerator;
