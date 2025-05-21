'use client'

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Gallery from "./gallery";

export default function Hero() {
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
            }, 50);
        };

        element.addEventListener("scroll", handleScroll);
        return () => {
            element.removeEventListener("scroll", handleScroll);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [active]);

    useEffect(() => {
        if (!active && heroRef.current) {
            heroRef.current.style.transform = "";
        }
    }, [active]);

    useEffect(() => {
        document.body.style.overflow = active ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [active]);

    return (
        <>
            <Gallery active={active} setActive={setActive} overlay={overlay} /> 
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