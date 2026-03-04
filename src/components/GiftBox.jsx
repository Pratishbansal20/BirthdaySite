import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, Gift } from 'lucide-react';

const GiftBox = ({ gift }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0, hours: 0, minutes: 0, seconds: 0
    });
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [isOpened, setIsOpened] = useState(false);

    useEffect(() => {
        const targetDate = new Date(gift.unlockDate).getTime();

        const intervalId = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                setIsUnlocked(true);
                clearInterval(intervalId);
            } else {
                const d = Math.floor(distance / (1000 * 60 * 60 * 24));
                const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const s = Math.floor((distance % (1000 * 60)) / 1000);
                setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [gift.unlockDate]);

    return (
        <div className="glass-card p-6 flex flex-col items-center justify-center relative min-h-[300px] overflow-hidden group">
            {!isOpened ? (
                <motion.div
                    className={`w-full h-full flex flex-col items-center justify-center p-4 cursor-pointer ${!isUnlocked ? 'opacity-80' : 'hover:scale-105 transition-transform'}`}
                    animate={!isUnlocked ? { rotate: [0, -2, 2, -2, 2, 0] } : {}}
                    transition={!isUnlocked ? { repeat: Infinity, duration: 4, ease: "easeInOut" } : {}}
                    onClick={() => isUnlocked && setIsOpened(true)}
                >
                    {/* Box Graphic */}
                    <div className="relative mb-6">
                        <Gift size={80} className={isUnlocked ? 'text-princess-pink' : 'text-slate-400'} />
                        {!isUnlocked && (
                            <div className="absolute -top-2 -right-2 bg-slate-700 rounded-full p-2 border-2 border-white shadow-sm">
                                <Lock size={16} className="text-white" />
                            </div>
                        )}
                    </div>

                    <h3 className="text-xl font-bold text-slate-700 mb-2 text-center">{gift.title}</h3>

                    {!isUnlocked ? (
                        <div className="flex gap-2 text-xs font-bold text-slate-500 bg-white/50 px-4 py-2 rounded-full mt-2">
                            <span className="w-8 text-center">{timeLeft.days}d</span>:
                            <span className="w-8 text-center">{timeLeft.hours}h</span>:
                            <span className="w-8 text-center">{timeLeft.minutes}m</span>:
                            <span className="w-8 text-center">{timeLeft.seconds}s</span>
                        </div>
                    ) : (
                        <motion.p
                            className="text-princess-pink font-bold animate-pulse mt-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            Click to Open! ✨
                        </motion.p>
                    )}
                </motion.div>
            ) : (
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-full h-full flex flex-col items-center"
                >
                    <h3 className="text-2xl font-bold text-princess-pink mb-4">{gift.title}</h3>
                    <div className="w-full h-32 bg-princess-cream rounded-xl mb-4 overflow-hidden border-2 border-white flex items-center justify-center">
                        <img src={gift.image} alt={gift.title} className="w-full h-full object-cover"
                            onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = '<span class="text-xs text-slate-400">Gift Image</span>' }}
                        />
                    </div>
                    <p className="text-slate-600 text-center italic mb-4 leading-relaxed">"{gift.message}"</p>
                    {gift.clue && (
                        <div className="w-full bg-princess-lavender/20 p-3 rounded-lg border border-princess-lavender/40">
                            <span className="text-xs font-bold text-princess-lavender block mb-1 uppercase tracking-wider">Clue</span>
                            <p className="text-sm font-semibold text-slate-700">{gift.clue}</p>
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    );
};

export default GiftBox;
