import React from 'react';
import { motion } from 'framer-motion';

const FavPicsSection = () => {
    return (
        <section className="py-20 w-full flex flex-col items-center px-4 relative">
            <h2 className="text-3xl md:text-4xl text-center text-princess-pink font-bold mb-4 md:mb-6 font-serif drop-shadow-sm">
                Her Fav Pics 💖
            </h2>

            <p className="text-center text-slate-600 mb-8 md:mb-12 max-w-xl mx-auto italic font-serif text-base md:text-xl leading-relaxed px-2 md:px-4">
                "Although every pic of yours is my fav but here are some that does things to me."
            </p>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-4xl rounded-2xl md:rounded-3xl overflow-hidden glass-card p-2 md:p-5 shadow-xl md:shadow-2xl group border border-white/60"
            >
                {/* Decorative Glow Elements */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-princess-pink/40 rounded-full blur-3xl z-0" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-princess-lavender/40 rounded-full blur-3xl z-0" />

                <div className="relative w-full rounded-2xl overflow-hidden shadow-inner bg-white/50 z-10 border border-white/40">
                    <img
                        src="/favpics.jpg"
                        alt="Her Favorite Pics"
                        className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700 ease-in-out"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentNode.innerHTML = '<div class="p-20 text-center text-slate-500 font-serif">Please make sure <b>favpics.jpg</b> is placed directly in the `public` folder!</div>';
                        }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default FavPicsSection;
