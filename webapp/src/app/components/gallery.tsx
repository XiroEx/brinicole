import Image from "next/image";
import React from "react";

export interface GalleryProps {
    active: boolean;
    setActive: (active: boolean) => void;
    overlay: React.RefObject<HTMLDivElement>;
}

export default function Gallery({ active, setActive, overlay }: GalleryProps) {
    return (
        <div
            className={`fixed top-0 bottom-0 left-0 right-0 bg-[var(--color-bg-dark)] max-h-screen transition-opacity duration-500 ease-in-out pt-[416px] md:pt-124 px-12 pb-8 overflow-auto
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