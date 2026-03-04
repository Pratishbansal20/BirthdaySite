import React from 'react';
import { motion } from 'framer-motion';
import config from '../config';

const TimelineSection = () => {
    // Pastel themes for the nodes to match the reference image
    const themes = [
        { border: 'border-orange-400', text: 'text-orange-500', line: 'bg-orange-400', icon: '🌟' },
        { border: 'border-green-400', text: 'text-green-500', line: 'bg-green-400', icon: '💖' },
        { border: 'border-blue-400', text: 'text-blue-500', line: 'bg-blue-400', icon: '✈️' },
        { border: 'border-yellow-400', text: 'text-yellow-500', line: 'bg-yellow-400', icon: '🎁' },
        { border: 'border-teal-400', text: 'text-teal-500', line: 'bg-teal-400', icon: '🎄' },
        { border: 'border-purple-400', text: 'text-purple-500', line: 'bg-purple-400', icon: '🥂' },
        { border: 'border-pink-400', text: 'text-pink-500', line: 'bg-pink-400', icon: '✨' },
    ];

    return (
        <section className="pt-32 pb-20 w-full overflow-x-clip overflow-y-visible relative">
            <h2 className="text-4xl text-center text-princess-pink font-bold mb-8 drop-shadow-sm font-serif">
                Our Story
            </h2>
            <p className="text-center text-slate-500 mb-10 max-w-md mx-auto italic px-4">
                Scroll horizontally to walk through our favorite memories...
            </p>

            {/* Horizontal Scroll Container */}
            <div className="w-full overflow-x-auto overflow-y-visible no-scrollbar pb-20">
                <div className="flex items-center min-w-max relative px-10 h-[950px] md:h-[1100px] space-x-0 mx-auto w-max">
                    {/* Continuous Background Line */}
                    <div className="absolute top-1/2 left-10 right-10 h-1 bg-slate-200 -translate-y-1/2 z-0 rounded-full" />

                    {config.timeline.map((item, index) => {
                        const isTop = index % 2 === 0;
                        const theme = themes[index % themes.length];

                        return (
                            <motion.div
                                key={index}
                                className="relative flex flex-col justify-center items-center w-72 md:w-80 shrink-0 group"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "0px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {/* Decorative line connecting between nodes */}
                                <div className={`absolute top-1/2 left-0 w-full h-1 ${theme.line} -translate-y-1/2 z-0 opacity-40`} />

                                {/* Center Node (Circle) */}
                                <div className={`w-14 h-14 rounded-full bg-white border-[3px] ${theme.border} z-20 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 relative`}>
                                    {/* The SVG "Bump" effect wrapper */}
                                    <div className={`absolute inset-[-6px] rounded-full border-[3px] border-transparent group-hover:${theme.border} opacity-30 transition-all duration-300`} />
                                    <span className="text-xl relative z-10">{theme.icon}</span>
                                </div>

                                {/* Alternating Card Container */}
                                <div className={`absolute w-64 md:w-72 flex flex-col items-center z-30 ${isTop ? 'bottom-full mb-8' : 'top-full mt-8'}`}>
                                    {/* Connecting Vertical Line */}
                                    <div className={`absolute w-0.5 h-8 ${theme.line} ${isTop ? '-bottom-8' : '-top-8'}`} />

                                    {/* Card */}
                                    <div className={`w-full bg-white/90 backdrop-blur-md rounded-2xl border shadow-lg hover:shadow-xl transition-shadow p-5 relative overflow-hidden group-hover:-translate-y-1 duration-300 ${theme.border}`}>
                                        {/* Subtle top/bottom accent border */}
                                        <div className={`absolute ${isTop ? 'bottom-0' : 'top-0'} left-0 w-full h-1 ${theme.line}`} />

                                        <div className={`text-sm font-bold ${theme.text} mb-1 uppercase tracking-wider mt-1`}>
                                            {item.date}
                                        </div>
                                        <h3 className="text-lg md:text-xl font-bold text-slate-700 mb-3 leading-snug">
                                            {item.title}
                                        </h3>

                                        <div className="w-full h-56 md:h-72 rounded-lg mb-4 bg-slate-100 flex items-center justify-center border border-slate-200 overflow-hidden relative">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0 z-10"
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.style.display = 'none';
                                                    e.target.parentNode.innerHTML = '<div class="w-full h-full flex flex-col items-center justify-center bg-slate-100 text-slate-400 absolute inset-0 z-0 p-4 text-center"><span class="text-xs font-bold uppercase tracking-wider">Memory Photo</span><span class="text-[10px] mt-1 opacity-70">(Placeholder)</span></div>';
                                                }}
                                            />
                                        </div>
                                        <p className="text-sm text-slate-600 italic">
                                            "{item.description}"
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
