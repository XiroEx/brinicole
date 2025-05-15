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
        <hr className="w-1/3 border-t-1 border-[#7c6f57] mb-8 mt-2" />
          <div className="w-full grid md:grid-cols-2 gap-8 items-center justify-center">
            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/9A3ogR1k0Ns?si=SRds7rDvO0P6FZJq"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg w-full aspect-video max-w-md pop border-[#7c6f57] border-2 shadow-lg  mx-auto"
            ></iframe>
            <p className="text-left text-lg text-[#7c6f57] max-w-4xl mb-6 md:mb-0 pop-big">
              Born to the rhythm of two islands, Bri Nicole is a Dominican-Jamaican singer/songwriter blending R&B soul with Afro-Caribbean rhythm. She creates music that’s soulful, grounded, and unmistakably hers. Her sound marries sensual melodies with rich Caribbean textures, while her lyrics open emotional doors. Whether she’s performing live, recording, or dropping visuals, Bri’s aura stays real, radiant, and raw.
            </p>
          </div>

      </section>

      {/* Music Section */}
      <section className="w-full max-w-3xl px-6 py-10 flex flex-col items-center">
        <div>
          <h2 className="text-2xl font-semibold text-[#6c584c] mb-4 pop text-center">Listen, Watch, Follow</h2>
          {/* Add Spotify/Apple Music links
              https://music.apple.com/us/artist/bri-nicole/1805199700
              https://open.spotify.com/artist/04E0v9f6E9Rw9nd1w11TUr?si=kDbj32DKRCGmeiTPYIXVtw
          */}
          <div className="flex gap-6 mb-2">
            <a href="https://music.apple.com/us/artist/bri-nicole/1805199700" target="_blank" rel="noopener noreferrer" className="text-[#a98467] hover:text-[#6c584c] text-2xl pop-big">
              <span className="sr-only">Apple Music</span>
              {/* Replace with an Apple Music SVG or icon */}
              {appleMusicIcon}
            </a>
            <a href="https://open.spotify.com/artist/04E0v9f6E9Rw9nd1w11TUr?si=kDbj32DKRCGmeiTPYIXVtw" target="_blank" rel="noopener noreferrer" className="text-[#a98467] hover:text-[#6c584c] text-2xl pop-big">
              <span className="sr-only">Spotify</span>
              {/* Replace with a Spotify SVG or icon */}
              {spotifyIcon}
            </a>
            <a href="https://www.youtube.com/@ms.brinicole" target="_blank" rel="noopener noreferrer" className="text-[#a98467] hover:text-[#6c584c] text-2xl pop-big">
              <span className="sr-only">YouTube</span>
              {/* Replace with a YouTube SVG or icon */}
              {youtubeIcon}
            </a>
            <a href="https://tiktok.com/@ms.brinicole" target="_blank" rel="noopener noreferrer" className="text-[#a98467] hover:text-[#6c584c] text-2xl pop-big">
              <span className="sr-only">TikTok</span>
              {/* Replace with a TikTok SVG or icon */}
              {tiktokIcon}
            </a>
          </div>
        </div>
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
        <span className="text-xs text-[#a98467]">&copy; {new Date().getFullYear()} Bri Nicole</span>
      </footer>
    </main>
  );
}


const spotifyIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="2.5em" // Increased size
    height="2.5em" // Increased size
    aria-hidden="true"
  >
    <title>Spotify</title>
    <circle cx="12" cy="12" r="12" />
    <path
      d="M17.6 16.1a.75.75 0 0 1-1.03.25c-2.82-1.73-6.39-2.12-10.59-1.15a.75.75 0 1 1-.33-1.46c4.56-1.04 8.48-.6 11.6 1.26a.75.75 0 0 1 .25 1.1zm1.47-3.08a.94.94 0 0 1-1.29.31c-3.23-2-8.16-2.57-11.98-1.39a.94.94 0 1 1-.54-1.8c4.23-1.27 9.57-.64 13.23 1.56.44.27.57.85.31 1.32zm.13-3.18C15.5 7.8 8.5 7.6 5.2 8.6a1.13 1.13 0 1 1-.65-2.17c3.77-1.13 11.36-.9 15.06 1.37a1.13 1.13 0 0 1-1.18 1.95z"
      fill="#fff"
    />
  </svg>
)

const appleMusicIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="2.5em" // Increased size
    height="2.5em" // Increased size
    aria-hidden="true"
  >
    <title>Apple Music</title>
    <circle cx="12" cy="12" r="12" />
    <g>
      <path
        d="M16.5 7.1c-.2-.2-.5-.2-.7-.2l-5.2 1.1c-.4.1-.6.4-.6.8v6.1c-.3-.1-.7-.2-1.1-.2-1.2 0-2.2.7-2.2 1.7s1 1.7 2.2 1.7 2.2-.7 2.2-1.7v-4.9l4.2-.9v4.1c-.3-.1-.7-.2-1.1-.2-1.2 0-2.2.7-2.2 1.7s1 1.7 2.2 1.7 2.2-.7 2.2-1.7V7.7c0-.2-.1-.4-.3-.6z"
        fill="#fff"
      />
    </g>
  </svg>
)

const youtubeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="2.5em"
    height="2.5em"
    aria-hidden="true"
  >
    <title>YouTube</title>
    <circle cx="12" cy="12" r="12" /> {/* No fill, uses currentColor like others */}
    <polygon points="10,8.5 16,12 10,15.5" fill="#fff" />
  </svg>
)

const tiktokIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="2.5em"
    height="2.5em"
    aria-hidden="true"
  >
    <title>TikTok</title>
    <circle cx="12" cy="12" r="12" /> {/* No fill, uses currentColor like others */}
    <path
      d="M16.5 10.5v1.1a3.6 3.6 0 0 1-2.1-.7v3.1a3.5 3.5 0 1 1-3.5-3.5c.2 0 .4 0 .6.1v1.3a2.2 2.2 0 1 0 2.2 2.2v-7.1h1.3c.1 1.1 1 2 2.1 2.2z"
      fill="#fff"
    />
  </svg>
)