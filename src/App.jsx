import React, { useState, useEffect, useRef } from 'react';
import config from './config';
import confetti from 'canvas-confetti';

// Import All Components
import HeroSection from './components/HeroSection';
import TimelineSection from './components/TimelineSection';
import MemoryVault from './components/MemoryVault';
import GiftSection from './components/GiftSection';
import LoveNoteGenerator from './components/LoveNoteGenerator';
import ReasonsCounter from './components/ReasonsCounter';
import FavPicsSection from './components/FavPicsSection';
import FinalMessage from './components/FinalMessage';
import FloatingSVGs from './components/FloatingSVGs';

function App() {
    const [showMainContent, setShowMainContent] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        if (showMainContent && audioRef.current) {
            audioRef.current.volume = 0.5; // Optional: lower volume
            audioRef.current.play().catch(e => console.log("Auto-play prevented", e));
        }
    }, [showMainContent]);

    // Midnight Confetti Logic
    useEffect(() => {
        const checkMidnight = () => {
            const now = new Date();
            const target = new Date(config.targetDate);

            // If it's exactly the target date (or within first minute of it)
            if (
                now.getFullYear() === target.getFullYear() &&
                now.getMonth() === target.getMonth() &&
                now.getDate() === target.getDate() &&
                now.getHours() === 0 &&
                now.getMinutes() === 0
            ) {
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#F8C8DC', '#DCC6F0', '#FFD700']
                });

                // Custom simple alert for midnight
                setTimeout(() => {
                    alert("Happy Birthday, my love! 👑✨");
                }, 1000);
            }
        };

        // Check every minute
        const interval = setInterval(checkMidnight, 60000);
        // Check initially
        checkMidnight();

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen relative selection:bg-princess-pink/30">

            {/* Floating SVGs and Background gradients */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <FloatingSVGs />
                {/* Background gradients */}
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-princess-pink/20 blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-princess-lavender/20 blur-[120px]" />
            </div>

            {/* Hidden Audio Player */}
            <audio ref={audioRef} src="/Perfect.mp3" loop />

            {/* Hero Overlay (Blocks main content until opened) */}
            {!showMainContent && (
                <HeroSection onOpen={() => setShowMainContent(true)} />
            )}

            {/* Main Flow Content */}
            <main className={`relative z-10 flex flex-col items-center w-full transition-opacity duration-1000 ${showMainContent ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'}`}>

                <div className="w-full flex flex-col items-center gap-24 py-12">
                    <TimelineSection />
                    <MemoryVault />
                    <GiftSection />
                    <LoveNoteGenerator />
                    <ReasonsCounter />
                    <FavPicsSection />
                </div>

                <footer className="w-full pb-16 pt-10 text-center z-10">
                    <p className="text-slate-400 font-serif text-sm md:text-base tracking-wide flex items-center justify-center gap-2">
                        Made with <span className="text-red-500 animate-pulse text-lg">❤️</span> for my wifey
                    </p>
                </footer>

                <FinalMessage />
            </main>

        </div>
    );
}

export default App;
