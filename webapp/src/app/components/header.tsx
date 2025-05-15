'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const path = usePathname();
    const isBio = path === "/biography";
    const isPressKit = path === "/press-kit";
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between bg-[var(--color-bg-light)] shadow-md">
        <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
            <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-[var(--color-primary)] pop">
                Bri Nicole
                </Link>
            </div>
            <nav className="flex space-x-4 text-lg">
                {!isBio && <Link href="/biography" className="text-[var(--color-accent)] hover:text-[var(--color-primary)] pop">
                Bio
                </Link>}
                {!isPressKit && <Link href="/press-kit" className="text-[var(--color-accent)] hover:text-[var(--color-primary)] pop">
                Press Kit
                </Link>}
                <Link href="/#contact" className="text-[var(--color-accent)] hover:text-[var(--color-primary)] pop">
                Contact
                </Link>
            </nav>
        </div>
    </header>
  );
}