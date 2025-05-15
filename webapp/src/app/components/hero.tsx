'use client'

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
    const [hovered, setHovered] = useState(false);
    const [active, setActive] = useState(false);
    const [scrolled, setScrolled] = useState(0);
    const overlay = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = overlay.current;
        if (!element) return;

        const handleScroll = () => {
            // Set scrolled to the current scrollTop value
            setScrolled(element.scrollTop);
        };

        element.addEventListener("scroll", handleScroll);

        // Clean up
        return () => {
            element.removeEventListener("scroll", handleScroll);
        };
    }, [overlay]);

    // Lock body scroll when overlay is active
    useEffect(() => {
        if (active) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        // Clean up on unmount
        return () => {
            document.body.style.overflow = "";
        };
    }, [active]);


    return (<>
        <div className={`fixed top-0 bottom-0 left-0 right-0 bg-red-100 max-h-screen  ${hovered || active ? 'z-1' : 'opacity-0 z-[-1]'} transition-opacity duration-500 ease-in-out pt-[416px] md:pt-108 px-12 overflow-auto`} ref={overlay}
        onClick={() => setActive(!active)}>
            <div className={`${hovered || active ? '' : 'hidden'} grid grid-cols-1 md:grid-cols-3 gap-4`}>
                {/* Pictures! */}
                <Image src="/brinicole.jpg" alt="Bri Nicole" width={500} height={500} className="rounded-4xl mt-4 mb-4" />
                <Image src="/brinicole2.jpg" alt="Bri Nicole" width={500} height={500} className="rounded-4xl mt-4 mb-4" />
                <Image src="/brinicole.jpg" alt="Bri Nicole" width={500} height={500} className="rounded-4xl mt-4 mb-4" />
            </div>
            <p className={`text-xl text-[#7c6f57] max-w-6xl mx-auto mb-6 md:mb-0 pop-big ${hovered || active ? '' : 'hidden'}`}>
            Bri is an emerging R&B artist with roots deeply embedded in the heart of Long Island, New York. Born and raised in a close-knit suburban environment, she found her early musical inspiration right at home with her parents and brother. From a tender age, Bri was drawn to the captivating melodies and heartfelt lyrics of R&B classics, a genre that would go on to define her own musical identity. Influenced by contemporary R&B luminaries like H.E.R, SZA, Summer Walker, and Kiana Lede, her music beautifully blends the soulful essence of the old-school R&B she grew up loving with a fresh, modern twist.
            <br />
            <br />
            Bri’s music is an emotional journey that resonates with listeners on a profound level. Her soulful sound is the conduit through which she explores universal themes of love, heartbreak, and the sheer pleasure of living life to the fullest. Her songs are more than just melodies; they are relatable stories that touch the heart and speak to the soul. Through her music, she aims to create a genuine connection with her audience, allowing them to not only hear but feel the emotions she pours into every note and lyric.
            </p>
        </div>
        <span
            className={`items-center justify-center flex flex-col z-2 ${active ? 'scale-200 mt-16' : 'md:pop-huge hover:mt-16'} transition-all duration-500 ease-in-out cursor-pointer`}
            {...(active ? { style: { transform: `translateY(-${scrolled}px)` } } : {})}
            onClick={() => setActive(!active)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onTouchStart={() => setHovered(true)}
            onTouchEnd={() => setHovered(false)}
            onTouchCancel={() => setHovered(false)}
            onTouchMove={() => setHovered(false)}
        >
            <div className="relative w-40 h-40 mb-4 rounded-full overflow-hidden border-4 border-[#a98467] shadow-lg animate-pop-in">
                <Image
                    src="/briprofile.jpg"
                    alt="Bri Nicole"
                    fill
                    priority
                    className={` cursor-pointer`}
                />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#6c584c] mb-2 tracking-tight animate-pop-in">
                Bri Nicole
            </h1>
        </span>
        <span className="animate-pop-in">
            {hovered == false && (
                <p className="text-lg text-[#7c6f57] mb-12 italic pop-big">
                    Caribbean body & soul, music that moves you.
                </p>
            )}
        </span>
        
    </>)
}