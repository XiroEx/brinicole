export default function Socials() {

    return (
      <div className="animate-slide-in-up">
        <h2 className="text-2xl font-semibold text-[#6c584c] mb-4 pop text-center">Listen, Watch, Follow</h2>
        <div className="grid grid-cols-3 gap-6 sm:grid-cols-5 sm:flex sm:gap-6">
          <a href="https://music.apple.com/us/artist/bri-nicole/1805199700" target="_blank" rel="noopener noreferrer" className="text-[#a98467] hover:text-[#6c584c] text-2xl pop-big flex justify-center">
            <span className="sr-only">Apple Music</span>
            {appleMusicIcon}
          </a>
          <a href="https://open.spotify.com/artist/04E0v9f6E9Rw9nd1w11TUr?si=kDbj32DKRCGmeiTPYIXVtw" target="_blank" rel="noopener noreferrer" className="text-[#a98467] hover:text-[#6c584c] text-2xl pop-big flex justify-center">
            <span className="sr-only">Spotify</span>
            {spotifyIcon}
          </a>
          <a href="https://www.youtube.com/@ms.brinicole" target="_blank" rel="noopener noreferrer" className="text-[#a98467] hover:text-[#6c584c] text-2xl pop-big flex justify-center">
            <span className="sr-only">YouTube</span>
            {youtubeIcon}
          </a>
          <a href="https://tiktok.com/@ms.brinicole" target="_blank" rel="noopener noreferrer" className="text-[#a98467] hover:text-[#6c584c] text-2xl pop-big flex justify-center">
            <span className="sr-only">TikTok</span>
            {tiktokIcon}
          </a>
          <a href="https://www.instagram.com/ms.brinicole/" target="_blank" rel="noopener noreferrer" className="text-[#a98467] hover:text-[#6c584c] text-2xl pop-big flex justify-center">
            <span className="sr-only">Instagram</span>
            {instaIcon}
          </a>
        </div>
      </div>
    )
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

const instaIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="2.5em"
    height="2.5em"
    aria-hidden="true"
  >
    <title>Instagram</title>
    <circle cx="12" cy="12" r="12" />
    <g>
      <rect x="7" y="7" width="10" height="10" rx="3" fill="#fff" />
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
      <circle cx="15.2" cy="8.8" r="0.8" fill="currentColor" />
    </g>
  </svg>
)