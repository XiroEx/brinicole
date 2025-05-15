'use client'

import Image from "next/image";
import { useState } from "react";

export default function Hero() {
    const [hovered, setHovered] = useState(false);

    return (<>
        <div className={`fixed top-0 bottom-0 left-0 right-0 bg-red-100  ${hovered ? '' : 'opacity-0 z-[-1]'} transition-opacity 
        duration-500 ease-in-out pt-[416px] md:pt-128 px-12`}>
            <p className={`text-xl text-[#7c6f57] max-w-6xl mx-auto mb-6 md:mb-0 pop-big ${hovered ? '' : 'hidden'}`}>
            Bri is an emerging R&B artist with roots deeply embedded in the heart of Long Island, New York. Born and raised in a close-knit suburban environment, she found her early musical inspiration right at home with her parents and brother. From a tender age, Bri was drawn to the captivating melodies and heartfelt lyrics of R&B classics, a genre that would go on to define her own musical identity. Influenced by contemporary R&B luminaries like H.E.R, SZA, Summer Walker, and Kiana Lede, her music beautifully blends the soulful essence of the old-school R&B she grew up loving with a fresh, modern twist.
            <br />
            <br />
            Bri’s music is an emotional journey that resonates with listeners on a profound level. Her soulful sound is the conduit through which she explores universal themes of love, heartbreak, and the sheer pleasure of living life to the fullest. Her songs are more than just melodies; they are relatable stories that touch the heart and speak to the soul. Through her music, she aims to create a genuine connection with her audience, allowing them to not only hear but feel the emotions she pours into every note and lyric.
            </p>
        </div>
        <span className="items-center justify-center flex flex-col pop-huge"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
            <div className="relative w-40 h-40 mb-4 rounded-full overflow-hidden border-4 border-[#a98467] shadow-lg">
            <Image
                src="/briprofile.jpg" // Replace with actual image in public/
                alt="Bri Nicole"
                fill
                priority
                className="pop cursor-pointer"
            />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#6c584c] mb-2 tracking-tight">
            Bri Nicole
            </h1>
        </span>
        <p className="text-lg text-[#7c6f57] mb-12 italic pop-big">
          Caribbean body & soul, music that moves you.
        </p>
        
        
    </>)
}