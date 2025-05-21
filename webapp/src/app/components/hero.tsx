'use client'

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Hero() {
    // Remove hovered state
    // const [hovered, setHovered] = useState(false);
    const [active, setActive] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const overlay = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
    const heroRef = useRef<HTMLSpanElement>(null);
    const scrollY = useRef(0);

    useEffect(() => {
        setIsTouchDevice(
            typeof window !== "undefined" &&
            ("ontouchstart" in window || navigator.maxTouchPoints > 0)
        );
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
        }
    }, []);

    useEffect(() => {
        function checkTouch() {
            setIsTouchDevice(typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches);
        }
        checkTouch();
        window.addEventListener("resize", checkTouch);
        return () => window.removeEventListener("resize", checkTouch);
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
            <Overlay {...{ active, setActive, overlay }} /> 
            <span
                ref={heroRef}
                className={`items-center justify-center flex flex-col z-40 ${active ? 'mt-18' : ''} transition-all duration-500 ease-in-out cursor-pointer`}
                onMouseEnter={
                    !isTouchDevice
                        ? () => { if (!active) setActive(true); }
                        : undefined
                }
                onClick={
                    !isTouchDevice
                        ? () => { if (active) setActive(false); }
                        : undefined
                }
                onTouchEnd={
                    isTouchDevice
                        ? () => setActive(!active)
                        : undefined
                }
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
                {!active && (
                    <p className="text-lg text-[var(--color-accent)] mb-6 italic pop-big">
                        Caribbean body & soul, music that moves you.
                    </p>
                )}
            </span>
        </>
    );
}

interface OverlayProps {
    active: boolean;
    setActive: (active: boolean) => void;
    overlay: React.RefObject<HTMLDivElement>;
}

function Overlay({ active, setActive, overlay }: OverlayProps) {
    return (
        <div
            className={`fixed top-0 bottom-0 left-0 right-0 bg-[var(--color-bg-dark)] max-h-screen transition-opacity duration-500 ease-in-out pt-[416px] md:pt-124 px-12 overflow-auto
                ${active ? 'z-30 opacity-100 pointer-events-auto' : 'opacity-0 z-[-10] pointer-events-none'}`}
            ref={overlay}
            onClick={e => {
                if (e.target === overlay.current) setActive(false);
            }}
        >
            <div
                className={`
                    ${active ? '' : 'hidden'}
                    grid
                    grid-cols-1
                    md:grid-cols-3
                    gap-y-6
                    gap-x-4
                    md:gap-y-8
                    md:gap-x-8
                    max-w-7xl
                    mx-auto
                    px-2
                    sm:px-4
                    md:px-0
                `}
            >
                {Array.from({ length: 15 }, (_, i) => (
                    <div
                        key={i + 1}
                        className={`
                            rounded-4xl overflow-hidden
                            aspect-[4/5] w-full
                            bg-[var(--color-bg-dark)]
                            flex items-center justify-center
                            md:h-[400px]
                        `}
                    >
                        <Image
                            src={`/photos/Bri${i + 1}.JPG`}
                            alt="Bri Nicole"
                            width={500}
                            height={625}
                            className="object-cover w-full h-full"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                            priority={i < 3}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}