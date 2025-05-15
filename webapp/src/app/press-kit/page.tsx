import Header from "../components/header";


export default function PressKit() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-[var(--color-bg-light)] to-[var(--color-bg-dark)] flex flex-col items-center justify-center ">
        <section className="w-full max-w-6xl px-6 flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-primary)] mb-2 tracking-tight">
            Press Kit
          </h1>
          <p className="text-lg text-[var(--color-accent)] mb-6 italic pop-big">
            Caribbean body & soul, music that moves you.
          </p>
            {`Rising R&B Sensation Bri Set to Debut with Captivating Single “Tonight” – A Fusion of Caribbean Vibes and Soulful Rhythms

      Long Island’s own emerging R&B artist, Bri, is poised to make waves in the music industry with her highly anticipated debut single, “Tonight.” With influences deeply rooted in the heart of classic R&B and a contemporary twist that embraces Afrobeat inspirations, Bri’s music promises to resonate with audiences worldwide.

      “Tonight” is more than just a song; it’s a sonic journey that transports listeners to a world of vibrant rhythms and heartfelt emotions. The track, set to release on May 24th, is a collaboration between Bri and acclaimed engineer Mvrkbeatz, along with the talented producer Ramoon. Together, they’ve crafted a mesmerizing melody that captures the essence of a spontaneous connection and the thrill of newfound attraction.

      At the heart of “Tonight” lies a standout hook that serves as the song’s emotional core: “feel you staring from across the room.” This poignant lyric sets the stage for a narrative that explores the irresistible pull between two individuals, drawing listeners into a world of anticipation and desire.

      Reflecting on the inspiration behind “Tonight,” Bri shares, “The track represents a Caribbean vibe and something you could dance to. It explains when you see someone that you’re just so attracted to and feel safe with. It’s almost like an inevitable outcome for you to gravitate toward each other when you’re at a party or somewhere. I feel like a lot of people can relate to that.”

      In addition to its infectious rhythms and soulful melodies, “Tonight” also showcases Bri’s versatility as an artist. Drawing from her diverse musical influences, Bri seamlessly blends elements of R&B, Afrobeat, and Caribbean music to create a sound that is uniquely her own.

      As Bri prepares to make her mark on the music scene, she remains committed to her craft and passionate about connecting with her audience on a deeper level. With “Tonight” serving as her introduction to the world, Bri is poised to leave a lasting impression with her heartfelt lyrics and undeniable talent.

      Fans of artists like Rihanna, Tyla, and Kiana Ledé are sure to be drawn to the irresistible charm of “Tonight.” With its infectious beats and soulful vocals, this debut single is destined to become a staple on playlists everywhere.

      For more information about Bri and updates on her musical journey, follow her on Instagram @ms.brinicole.`.split('\n').map((line, idx) =>
            line.trim() !== '' ? (
              <p key={idx} className="text-lg text-[var(--color-accent)] max-w-4xl text-left pop mb-4">
              {line}
              </p>
            ) : null
            )}
        </section>
      </main>
    </>
  );
}