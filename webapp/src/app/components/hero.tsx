'use client'

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Gallery from "./gallery";

export default function Hero() {
    const [active, setActive] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [showHint, setShowHint] = useState(false); // Start hidden
    const overlay = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
    const heroRef = useRef<HTMLSpanElement>(null);
    const scrollY = useRef(0);
    const hoverTimer = useRef<NodeJS.Timeout | null>(null);

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

    // Hide hint when active is set
    useEffect(() => {
        if (active) setShowHint(false);
    }, [active]);

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;
        if (!active) {
            timer = setTimeout(() => setShowHint(true), 5000);
        } else {
            setShowHint(false);
        }
        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [active]);

    // Handler for mouse enter with delay
    const handleMouseEnter = () => {
        if (!isTouchDevice && !active) {
            hoverTimer.current = setTimeout(() => {
                setActive(true);
            }, 250); // 250ms delay
        }
    };

    // Handler for mouse leave, clears timer and closes if open
    const handleMouseLeave = () => {
        if (hoverTimer.current) {
            clearTimeout(hoverTimer.current);
            hoverTimer.current = null;
        }
    };

    return (
        <>
            <Gallery active={active} setActive={setActive} overlay={overlay} /> 
            <span
                ref={heroRef}
                className={`relative items-center justify-center flex flex-col z-40 ${active ? 'mt-18' : ''} transition-all duration-500 ease-in-out cursor-pointer`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
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
                {/* HINT ARROW - now outside the image div, pointing left */}
                {showHint && (
                    <span
                        className="absolute left-[200px] top-1/3 -translate-y-1/2 flex items-center animate-bounce-x z-50 pointer-events-none"
                        aria-label="Interact with the image"
                    >
                        {/* Hand-drawn style arrow SVG */}
                        {arrowSVG}
                    </span>
                )}
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


const arrowSVG = (
    <svg
        width="60"
        height="48"
        viewBox="0 0 375.01 375.01"
        fill="var(--color-primary)"
        stroke="var(--color-primary)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ filter: "drop-shadow(1px 1px 0 #0001)" }}
        transform="scale(-1,1)"
    >
        <path d="M330.254,210.966c-56.916,1.224-110.16,25.704-167.076,28.764c-16.524,0.612-33.048-1.224-45.9-8.568 c23.256-4.283,45.288-12.239,61.812-27.54c17.749-15.911,19.584-45.287,8.568-66.095c-10.404-19.584-36.72-20.196-55.08-15.3 C89.125,132.63,59.75,184.65,84.229,221.369c-26.928,1.836-53.856,0-80.172,1.225c-5.508,0.611-5.508,8.567,0.612,8.567 c26.928,1.836,59.364,4.284,91.188,2.448c1.836,1.225,3.672,3.061,5.508,4.284c64.872,45.288,159.732-11.628,229.5-13.464 C338.821,223.817,338.821,210.354,330.254,210.966z M89.737,196.277c-6.732-25.091,15.3-46.511,35.496-56.916 c20.196-10.404,48.96-10.404,55.692,15.912c7.956,30.6-18.36,48.959-43.452,56.916c-11.628,3.672-22.644,6.12-34.272,7.344 C96.47,213.413,92.186,206.069,89.737,196.277z"></path> <path d="M371.869,211.577c-8.567-5.508-16.523-11.016-24.479-16.523c-6.732-4.896-13.464-10.404-21.42-12.24 c-6.12-1.836-12.24,7.344-6.732,11.627c6.732,4.896,14.076,9.18,20.809,13.464c4.896,3.061,9.792,6.732,14.075,9.792 c-4.896,2.448-9.792,4.284-14.688,6.732c-3.672,1.836-7.956,3.672-11.628,5.508c-1.224,0.612-2.448,1.836-3.061,3.06 c-1.836,2.448-0.611,1.225,0,0.612c-2.447,1.836-2.447,7.956,1.837,7.344l0,0c1.224,0.612,2.447,0.612,4.283,0.612 c4.284-1.224,9.181-3.06,13.464-4.896c9.181-3.673,18.36-7.345,26.929-12.24C376.153,220.758,376.153,214.025,371.869,211.577z"></path>
    </svg>
)