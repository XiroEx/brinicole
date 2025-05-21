import Hero from "./components/hero";
import Socials from "./components/socials";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[var(--color-bg-dark)] to-[var(--color-bg-light)] flex flex-col items-center justify-center ">
      {/* Hero Section */}
      <section className="w-full max-w-6xl px-6 pt-8 flex flex-col items-center text-center">
          <Hero/>
          <div className="w-full grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="pop-big">
              <iframe
                width="100%"
                height="250"
                src="https://www.youtube.com/embed/9A3ogR1k0Ns?si=SRds7rDvO0P6FZJq"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-lg w-full aspect-video max-w-md border-[var(--color-accent)] border-2 shadow-lg  mx-auto animate-slide-in-left"
              ></iframe>
            </div>
            <div className="pop-big">  
              <p className="text-center md:text-left text-lg text-[var(--color-accent)] max-w-4xl mb-6 md:mb-0 animate-slide-in-right">
                Born to the rhythm of two islands, Bri Nicole is a Dominican-Jamaican singer/songwriter blending R&B soul with Afro-Caribbean rhythm. She creates music that’s soulful, grounded, and unmistakably hers. Her sound marries sensual melodies with rich Caribbean textures, while her lyrics open emotional doors. Whether she’s performing live, recording, or dropping visuals, Bri’s aura stays real, radiant, and raw.
              </p>
            </div>
          </div>
      </section>

      {/* Music Section */}
      <section className="w-full max-w-6xl px-6 pb-8 md:py-8 flex flex-col items-center">
        <Socials />
      </section>

      {/* About Section */}
      <section className="w-full max-w-6xl px-6 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 items-stretch animate-slide-in-top">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-4 pop text-center">About</h2>
              <p className="text-base text-[var(--color-accent)] max-w-xl text-center pop">
                Bri is an emerging R&B artist with roots deeply embedded in the heart of Long Island, New York. Born and raised in a close-knit suburban environment, she found her early musical inspiration right at home with her parents and brother. From a tender age, Bri was drawn to the captivating melodies and heartfelt lyrics of R&B classics, a genre that would go on to define her own musical identity. Influenced by contemporary R&B luminaries like H.E.R, SZA, Summer Walker, and Kiana Lede, her music beautifully blends the soulful essence of the old-school R&B she grew up loving with a fresh, modern twist.
    
              </p>
            </div>
            <div className="flex justify-between gap-2 mt-4 px-12">
              <button className="px-4 py-2 bg-[var(--color-secondary)] text-white rounded-lg hover:bg-[var(--color-primary)] transition duration-300 pop">
                <a href="/biography">Full Bio</a>
              </button>
              <button className="px-4 py-2 bg-[var(--color-secondary)] text-white rounded-lg hover:bg-[var(--color-primary)] transition duration-300 pop ml-auto">
                <a href="/press-kit">Press Kit</a>
              </button>
            </div>
          </div>
          <div className="h-full" id="contact">
            <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-4 pop text-center">Contact</h2>
            <p className="text-base text-[var(--color-accent)] max-w-xl text-center mb-4 pop">
              Reach out and connect with Bri to experience the power of her music. For press inquiries and interview requests, please contact her:
            </p>
            <form className="flex flex-col gap-4 pop" >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="px-4 py-2 border border-[var(--color-secondary)] rounded-lg focus:outline-none focus:border-[var(--color-primary)] bg-[var(--color-secondary)] text-white"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="px-4 py-2 border border-[var(--color-secondary)] rounded-lg focus:outline-none focus:border-[var(--color-primary)] bg-[var(--color-secondary)] text-white"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={2}
                className="px-4 py-2 border border-[var(--color-secondary)] rounded-lg focus:outline-none focus:border-[var(--color-primary)] bg-[var(--color-secondary)] text-white"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[var(--color-secondary)] text-white rounded-lg hover:bg-[var(--color-primary)] transition duration-300 pop"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="w-full max-w-3xl px-6 py-8 flex flex-col items-center">
        <span className="text-xs text-[var(--color-secondary)]">&copy; {new Date().getFullYear()} Bri Nicole</span>
      </footer>
    </main>
  );
}

