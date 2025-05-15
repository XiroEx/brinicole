import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f5eee6] to-[#c8b6a6] flex flex-col items-center justify-center ">
      {/* Hero Section */}
      <section className="w-full max-w-6xl px-6 pt-16 flex flex-col items-center text-center">
        <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-[#a98467] shadow-lg pop-huge">
          <Image
            src="/briprofile.jpg" // Replace with actual image in public/
            alt="Bri Nicole"
            fill
            priority
            className="pop cursor-pointer"
          />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#6c584c] mb-2 tracking-tight pop-big">
          Bri Nicole
        </h1>
        <p className="text-lg text-[#7c6f57] mb-4 italic pop-big">
          Caribbean body & soul, music that moves you.
        </p>
          <div className="w-full grid md:grid-cols-2 gap-8 items-center justify-center">
            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/9A3ogR1k0Ns?si=SRds7rDvO0P6FZJq"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg w-full aspect-video max-w-md pop border-[#7c6f57] border-2 shadow-lg"
            ></iframe>
            <p className="text-left text-lg text-[#7c6f57] max-w-4xl mb-6 md:mb-0 pop-big">
              Born to the rhythm of two islands, Bri Nicole is a Dominican-Jamaican singer/songwriter blending R&B soul with Afro-Caribbean rhythm. She creates music that’s soulful, grounded, and unmistakably hers. Her sound marries sensual melodies with rich Caribbean textures, while her lyrics open emotional doors. Whether she’s performing live, recording, or dropping visuals, Bri’s aura stays real, radiant, and raw.
            </p>
          </div>

      </section>

      {/* Music Section */}
      <section className="w-full max-w-3xl px-6 py-10 flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-[#6c584c] mb-4 pop">Listen</h2>
        {/* Add Spotify/Apple Music embeds here if available */}
        
      </section>

      {/* About Section */}
      <section className="w-full max-w-3xl px-6 py-10 flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-[#6c584c] mb-4 pop">About</h2>
        <p className="text-base text-[#7c6f57] max-w-xl text-center pop">
          Bri Nicole is a rising artist with roots in the Dominican Republic and Jamaica, bringing a fresh Caribbean vibe to the city. Her music is a celebration of culture, beauty, and authenticity. Stay tuned for new releases and live performances.
        </p>
      </section>

      {/* Social Links */}
      <footer className="w-full max-w-3xl px-6 py-8 flex flex-col items-center">
        <div className="flex gap-6 mb-2">
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-[#a98467] hover:text-[#6c584c] text-2xl">
            <span className="sr-only">Instagram</span>
            {/* Replace with an Instagram SVG or icon */}
            IG
          </a>
          <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="text-[#a98467] hover:text-[#6c584c] text-2xl">
            <span className="sr-only">YouTube</span>
            YT
          </a>
          {/* Add more socials as needed */}
        </div>
        <span className="text-xs text-[#a98467]">&copy; {new Date().getFullYear()} Bri Nicole</span>
      </footer>
    </main>
  );
}
