import React from 'react';
import { motion } from 'framer-motion';

const FloatingSVGs = () => {
    // Define floating items with their image paths and initial positions/animations
    const floatingItems = [
        { id: 1, src: '/bow-ribbon-svgrepo-com.svg', size: 'w-16 h-16', top: '10%', left: '10%', delay: 0 },
        { id: 2, src: '/butterfly-svgrepo-com.svg', size: 'w-12 h-12', top: '20%', left: '80%', delay: 1 },
        { id: 3, src: '/fairy-svgrepo-com.svg', size: 'w-20 h-20', top: '60%', left: '5%', delay: 2 },
        { id: 4, src: '/bow-ribbon-svgrepo-com.svg', size: 'w-10 h-10', top: '75%', left: '85%', delay: 1.5 },
        { id: 5, src: '/butterfly-svgrepo-com.svg', size: 'w-14 h-14', top: '40%', left: '15%', delay: 0.5 },
        { id: 6, src: '/fairy-svgrepo-com.svg', size: 'w-16 h-16', top: '85%', left: '40%', delay: 2.5 },
        { id: 7, src: '/butterfly-svgrepo-com.svg', size: 'w-10 h-10', top: '5%', left: '50%', delay: 3 },
    ];

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {floatingItems.map((item) => (
                <motion.img
                    key={item.id}
                    src={item.src}
                    alt={`floating element ${item.id}`}
                    className={`absolute ${item.size} opacity-40`}
                    style={{ top: item.top, left: item.left }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 15, 0],
                        rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: item.delay,
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingSVGs;
