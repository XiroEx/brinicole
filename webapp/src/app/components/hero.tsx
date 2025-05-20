'use client'

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Hero() {
    const [hovered, setHovered] = useState(false);
    const [active, setActive] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const overlay = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLSpanElement>(null);
    const scrollY = useRef(0);

    useEffect(() => {
        setIsTouchDevice(
            typeof window !== "undefined" &&
            ("ontouchstart" in window || navigator.maxTouchPoints > 0)
        );
    }, []);

    // Update hero transform on scroll without React state, with debounce for "scrollend"
    useEffect(() => {
        const element = overlay.current;
        if (!element) return;

        let timeoutId: NodeJS.Timeout | null = null;

        const handleScroll = () => {
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                scrollY.current = element.scrollTop;
                if (active && heroRef.current) {
                    heroRef.current.style.transform = `scale(2) translateY(-${scrollY.current}px)`;
                }
            }, 50); // 50ms debounce
        };

        element.addEventListener("scroll", handleScroll);
        return () => {
            element.removeEventListener("scroll", handleScroll);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [active]);

    // Reset transform when not active
    useEffect(() => {
        if (!active && heroRef.current) {
            heroRef.current.style.transform = "";
        }
    }, [active]);

    // Lock body scroll when overlay is active
    useEffect(() => {
        document.body.style.overflow = active ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [active]);

    return (
        <>
            <div
                className={`fixed top-0 bottom-0 left-0 right-0 bg-[var(--color-bg-dark)] max-h-screen ${hovered || active ? 'z-1' : 'opacity-0 z-[-1]'} transition-opacity duration-500 ease-in-out pt-[416px] md:pt-108 px-12 overflow-auto`}
                ref={overlay}
                onClick={() => setActive(!active)}
            >
                <div className={`${hovered || active ? '' : 'hidden'} grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto`}>
                    {/* Pictures! */}
                    <Image src="/brinicole.jpg" alt="Bri Nicole" width={500} height={500} className="rounded-4xl mt-4 mb-4 pop-huge mx-auto" />
                    
                    <Image src="/brinicole2.jpg" alt="Bri Nicole" width={500} height={500} className="rounded-4xl mt-4 mb-4 pop-huge mx-auto" />
                    
                    <Image src="/brinicole.jpg" alt="Bri Nicole" width={500} height={500} className="rounded-4xl mt-4 mb-4 pop-huge mx-auto" />
                    
                </div>
                <p className={`text-xl text-[var(--color-accent)] max-w-6xl mx-auto mb-6 md:mb-0 pop-big ${hovered || active ? '' : 'hidden'}`}>
                    Bri is an emerging R&B artist with roots deeply embedded in the heart of Long Island, New York. Born and raised in a close-knit suburban environment, she found her early musical inspiration right at home with her parents and brother. From a tender age, Bri was drawn to the captivating melodies and heartfelt lyrics of R&B classics, a genre that would go on to define her own musical identity. Influenced by contemporary R&B luminaries like H.E.R, SZA, Summer Walker, and Kiana Lede, her music beautifully blends the soulful essence of the old-school R&B she grew up loving with a fresh, modern twist.
                    <br />
                    <br />
                    Bri’s music is an emotional journey that resonates with listeners on a profound level. Her soulful sound is the conduit through which she explores universal themes of love, heartbreak, and the sheer pleasure of living life to the fullest. Her songs are more than just melodies; they are relatable stories that touch the heart and speak to the soul. Through her music, she aims to create a genuine connection with her audience, allowing them to not only hear but feel the emotions she pours into every note and lyric.
                </p>
            </div>
            <span
                ref={heroRef}
                className={`items-center justify-center flex flex-col z-2 ${!active ? '' : 'mt-18'} transition-all duration-500 ease-in-out cursor-pointer ${(!isTouchDevice && (hovered && !active)) ? 'scale-200' : ''}`}
                onClick={!isTouchDevice ? () => setActive(!active) : undefined}
                onMouseEnter={!isTouchDevice ? () => setHovered(true) : undefined}
                onMouseLeave={!isTouchDevice ? () => setHovered(false) : undefined}
                onTouchEnd={isTouchDevice ? () => setActive(!active) : undefined}
                style={active ? { transform: `scale(2) translateY(-${scrollY.current}px)` } : {}}
            > 
                <div className="relative w-40 h-40 mb-2 rounded-full overflow-hidden border-4 border-[var(--color-secondary)] shadow-lg animate-pop-in">
                    <Image
                        src="/photos/profile-picture.png"
                        alt="Bri Nicole"
                        fill
                        priority
                        className={` cursor-pointer`}
                    />
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-primary)] mb-2 tracking-tight animate-pop-in">
                    Bri Nicole
                </h1>
            </span>
            <span className="animate-pop-in">
                {hovered == false && (
                    <p className="text-lg text-[var(--color-accent)] mb-6 italic pop-big">
                        Caribbean body & soul, music that moves you.
                    </p>
                )}
            </span>
        </>
    );
}