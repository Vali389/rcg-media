import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ExternalLink,
  Music,
  Play,
  X,
  Youtube,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

interface SongItem {
  id: string;
  number: string;
  title: string;
  category: string;
  videoId: string;
  youtubeUrl: string;
}

const songs: SongItem[] = [
  {
    id: "neelaveni",
    number: "01",
    title: "Neelaveni — Charminar Bangula",
    category: "Telangana Mass Folk Song",
    videoId: "Km-3eWKIuWU",
    youtubeUrl: "https://www.youtube.com/watch?v=Km-3eWKIuWU",
  },
  {
    id: "charminar-bangula",
    number: "02",
    title: "Charminar Bangula — Hit Track",
    category: "GalGal Music Hit Track",
    videoId: "3GHeUjQ5vRg",
    youtubeUrl: "https://www.youtube.com/watch?v=3GHeUjQ5vRg",
  },
  {
    id: "puttala-yellamma",
    number: "03",
    title: "Puttala Yellamma — Bonalu Special",
    category: "Telangana Bonalu Festival Folk",
    videoId: "qm5DSt6PR8k",
    youtubeUrl: "https://www.youtube.com/watch?v=qm5DSt6PR8k",
  },
  {
    id: "galgal-playlist",
    number: "04",
    title: "GalGal Music — Hit Songs Playlist",
    category: "Official Folk & Festival Hits",
    videoId: "JPuoENM1qnI",
    youtubeUrl:
      "https://www.youtube.com/watch?v=JPuoENM1qnI&list=PLBF7Vmjzf9Xb4Hl0yVvnkFGG_Zv0ANd71",
  },
];

export function OurSongsShowcase() {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      {/* Header */}
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
            <Music className="h-3.5 w-3.5 text-accent" />
            Our Songs & Music Productions
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Our Songs & <span className="gold-text italic">Music Productions</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
            Explore our latest regional folk music videos, festival specials, and original songs released on{" "}
            <a
              href="https://youtube.com/@galgalmusic16"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent hover:underline"
            >
              GalGal Music (@galgalmusic16)
            </a>
            .
          </p>
        </div>
      </Reveal>

      {/* 4 Songs in a Single Row */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {songs.map((song, idx) => (
          <Reveal key={song.id} delay={idx * 80}>
            <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-card shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/10">
              {/* YouTube Thumbnail with Play Button Overlay */}
              <div className="relative aspect-16/10 w-full overflow-hidden bg-black">
                <img
                  src={`https://img.youtube.com/vi/${song.videoId}/hqdefault.jpg`}
                  alt={song.title}
                  loading="lazy"
                  width={640}
                  height={360}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-black/30 to-transparent" />

                {/* Track Number Badge */}
                <span className="absolute top-3 left-3 rounded-full border border-primary/40 bg-background/85 px-2.5 py-0.5 text-[10px] font-bold text-primary backdrop-blur-md">
                  {song.number}
                </span>

                {/* Center Play Button Overlay */}
                <button
                  type="button"
                  onClick={() => setPlayingVideoId(song.videoId)}
                  aria-label={`Play ${song.title}`}
                  className="absolute inset-0 m-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-600/90 text-white shadow-xl shadow-red-950/60 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-red-600"
                >
                  <Play className="h-5 w-5 fill-white ml-0.5" />
                </button>
              </div>

              {/* Card Details */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
                    {song.category}
                  </span>
                  <h3 className="mt-1.5 font-display text-sm font-bold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {song.title}
                  </h3>
                </div>

                {/* Actions: Watch on YouTube or Play Here */}
                <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3 text-xs">
                  <button
                    type="button"
                    onClick={() => setPlayingVideoId(song.videoId)}
                    className="inline-flex items-center gap-1 font-semibold text-accent hover:underline"
                  >
                    <Play className="h-3 w-3 fill-current" />
                    Play Video
                  </button>

                  <a
                    href={song.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-red-500/40 bg-red-950/20 px-3 py-1 font-bold text-red-300 transition-all hover:bg-red-600 hover:text-white"
                  >
                    <Youtube className="h-3.5 w-3.5 fill-current" />
                    YouTube
                    <ExternalLink className="h-2.5 w-2.5 opacity-70" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Clean Bottom Footer Bar */}
      <Reveal delay={250}>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-center">
          <a
            href="https://youtube.com/@galgalmusic16"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-950/30 px-6 py-2.5 text-xs font-bold text-red-200 transition-all hover:bg-red-600 hover:text-white hover:shadow-lg hover:shadow-red-950/40"
          >
            <Youtube className="h-4 w-4 fill-current" />
            Visit Official Channel @galgalmusic16
            <ExternalLink className="h-3 w-3" />
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-2.5 text-xs font-bold text-accent-foreground shadow-md transition-all hover:scale-105"
          >
            Plan Your Music Video / Song <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </Reveal>

      {/* Video Modal Player (When Play is clicked) */}
      {playingVideoId && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          onClick={() => setPlayingVideoId(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-accent/40 bg-black p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setPlayingVideoId(null)}
              aria-label="Close video player"
              className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/80 text-white hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative aspect-16/9 w-full overflow-hidden rounded-2xl bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${playingVideoId}?autoplay=1&rel=0`}
                title="RCG Media — Music Production"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
