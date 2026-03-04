import React from 'react';
import config from '../config';
import GiftBox from './GiftBox';

const GiftSection = () => {
    return (
        <section className="py-20 w-full max-w-5xl px-4 relative flex flex-col items-center">
            <h2 className="text-4xl text-center text-princess-pink font-bold mb-4 drop-shadow-sm flex items-center gap-4">
                <span>✨</span> Birthday Surprises <span>🎁</span>
            </h2>
            <p className="text-slate-500 mb-12 text-center max-w-md">
                Some gifts can only be opened when the stars perfectly align...
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {config.gifts.map((gift) => (
                    <GiftBox key={gift.id} gift={gift} />
                ))}
            </div>
        </section>
    );
};

export default GiftSection;
