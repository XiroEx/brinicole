'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const path = usePathname();
    const isBio = path === "/biography";
    const isPressKit = path === "/press-kit";
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between bg-[#f5eee6] shadow-md">
        <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
            <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-[#6c584c] pop">
                Bri Nicole
                </Link>
            </div>
            <nav className="flex space-x-4 text-lg">
                {!isBio && <Link href="/biography" className="text-[#7c6f57] hover:text-[#6c584c] pop">
                Bio
                </Link>}
                {!isPressKit && <Link href="/press-kit" className="text-[#7c6f57] hover:text-[#6c584c] pop">
                Press Kit
                </Link>}
                <Link href="/#contact" className="text-[#7c6f57] hover:text-[#6c584c] pop">
                Contact
                </Link>
            </nav>
        </div>
    </header>
  );
}