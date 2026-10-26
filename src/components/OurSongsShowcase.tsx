import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ExternalLink,
  Headphones,
  Mic,
  Music,
  Play,
  Sparkles,
  Youtube,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

interface SongItem {
  id: string;
  number: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  videoId?: string;
  youtubeUrl: string;
  singer?: string;
  producer: string;
  label: string;
}

const songs: SongItem[] = [
  {
    id: "ad-film-anthem",
    number: "01",
    title: "Commercial Ad Film & Brand Production",
    category: "Commercial Film & Original Score",
    subtitle: "Full-scale cinematic ad film with original music direction",
    description:
      "A 60-second cinema-grade commercial ad film — concept scripting, casting, multi-location shooting, and 4K editing by RCG Media.",
    videoId: "H-u0eo9KHGI",
    youtubeUrl: "https://youtu.be/H-u0eo9KHGI",
    producer: "Anusha Sathapathy",
    label: "RCG Media & GalGal Music",
  },
  {
    id: "mahila-mahila",
    number: "02",
    title: "Mahila Mahila Maharanive — Official Song",
    category: "Women Empowerment Anthem",
    subtitle: "Inspirational anthem celebrating womanhood & resilience",
    description:
      "A powerful Telugu women's empowerment anthem celebrating courage and leadership. Produced by Anusha Sathapathy on GalGal Music.",
    youtubeUrl: "https://youtube.com/@galgalmusic16",
    singer: "Srikrishna (Vocals: Sai Bhavana & Keerthi)",
    producer: "Anusha Sathapathy",
    label: "GalGal Music (@galgalmusic16)",
  },
  {
    id: "neelaveni",
    number: "03",
    title: "Neelaveni — Official Folk Music Video",
    category: "Cinematic Folk Melody",
    subtitle: "Vibrant regional folk melody with cinematic visuals",
    description:
      "A soulful Telugu folk track capturing authentic cultural heritage, rhythmic beats, and rural traditions.",
    youtubeUrl: "https://youtube.com/@galgalmusic16",
    producer: "Anusha Sathapathy / GalGal Music",
    label: "GalGal Music (@galgalmusic16)",
  },
  {
    id: "puttintiki-rakhi",
    number: "04",
    title: "Puttintiki Velle Panduga Rakhi",
    category: "Cultural Festival Special",
    subtitle: "Festive celebration song honoring family traditions",
    description:
      "A heartwarming celebration of family bonds and traditional Telugu festivals, produced with authentic musical composition.",
    youtubeUrl: "https://youtube.com/@galgalmusic16",
    producer: "Anusha Sathapathy / GalGal Music",
    label: "GalGal Music (@galgalmusic16)",
  },
];

export function OurSongsShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeSong = songs[activeIdx] || songs[0]!;

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 h-96 w-[700px] rounded-full bg-accent/10 blur-3xl" />

      {/* Header */}
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
            <Music className="h-3.5 w-3.5 text-accent" />
            Our Songs & Music Productions
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Our Songs & <span className="gold-text italic">GalGal Music Releases</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Original music productions, inspirational women empowerment anthems, and viral regional
            tracks produced by Anusha Sathapathy and RCG Media in association with our official YouTube
            channel{" "}
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

          {/* Official Channel Action Badge */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://youtube.com/@galgalmusic16"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full border border-red-500/40 bg-red-950/30 px-5 py-2.5 text-xs font-bold text-red-200 backdrop-blur-md transition-all hover:border-red-500 hover:bg-red-900/50 hover:text-white hover:shadow-lg hover:shadow-red-950/50"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-white shadow-sm">
                <Youtube className="h-3.5 w-3.5 fill-white" />
              </span>
              <span>Official Channel: @galgalmusic16</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-70 transition-transform group-hover:translate-x-0.5" />
            </a>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-4 py-2 text-xs font-semibold text-muted-foreground">
              <Sparkles className="h-3 w-3 text-accent" /> Produced by Anusha Sathapathy
            </span>
          </div>
        </div>
      </Reveal>

      {/* Integrated Single-Row Cinema Player & Playlist Showcase */}
      <Reveal delay={150}>
        <div className="mt-12 overflow-hidden rounded-4xl border border-accent/40 bg-card p-4 sm:p-6 shadow-2xl shadow-black/80">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left Column (7 cols): Cinema Video Player */}
            <div className="lg:col-span-7">
              <div className="relative aspect-16/9 w-full overflow-hidden rounded-3xl bg-black border border-border/80 shadow-2xl">
                {activeSong.videoId ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${activeSong.videoId}?rel=0&autoplay=0`}
                    title={activeSong.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full border-0"
                  />
                ) : (
                  <div className="relative flex h-full w-full flex-col items-center justify-center p-6 text-center">
                    <div className="absolute inset-0 bg-radial from-accent/20 via-card/90 to-background opacity-95" />
                    <div className="relative z-10 max-w-md">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent">
                        <Headphones className="h-3 w-3" />
                        {activeSong.category}
                      </span>
                      <h4 className="mt-4 font-display text-xl font-bold text-foreground">
                        {activeSong.title}
                      </h4>
                      <p className="mt-2 text-xs text-muted-foreground line-clamp-3">
                        {activeSong.description}
                      </p>
                      <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                        <a
                          href={activeSong.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-red-900/40 hover:bg-red-700 transition-all hover:scale-105"
                        >
                          <Youtube className="h-3.5 w-3.5 fill-white" />
                          Watch on YouTube @galgalmusic16
                        </a>
                        <button
                          type="button"
                          onClick={() => setActiveIdx(0)}
                          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-foreground hover:border-accent hover:text-accent transition-all"
                        >
                          <Play className="h-3 w-3 text-accent" />
                          Play Ad Film
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Player Caption */}
              <div className="mt-3 flex items-center justify-between px-2 text-xs">
                <span className="font-semibold text-foreground truncate max-w-sm">
                  Now Playing: <span className="text-accent">{activeSong.title}</span>
                </span>
                <a
                  href={activeSong.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-red-400 hover:text-red-300 font-semibold text-xs"
                >
                  <Youtube className="h-3.5 w-3.5" />
                  Open on YouTube
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Right Column (5 cols): Interactive Track List */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-border/80">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Featured Releases from @galgalmusic16
                </h4>
                <span className="text-[11px] text-accent font-semibold">Select to Play</span>
              </div>

              <div className="space-y-2.5">
                {songs.map((song, i) => {
                  const isActive = i === activeIdx;
                  return (
                    <div
                      key={song.id}
                      className={`group flex items-center justify-between rounded-2xl border p-3.5 transition-all duration-300 ${
                        isActive
                          ? "border-accent bg-accent/10 shadow-md shadow-accent/10"
                          : "border-border/70 bg-card hover:border-accent/40 hover:bg-card/90"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setActiveIdx(i)}
                        className="flex flex-1 items-center gap-3 text-left min-w-0"
                      >
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors ${
                            isActive
                              ? "bg-accent text-accent-foreground font-bold shadow-md"
                              : "bg-secondary text-muted-foreground group-hover:bg-accent group-hover:text-accent-foreground"
                          }`}
                        >
                          <Play className="h-3.5 w-3.5 fill-current ml-0.5" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="truncate font-display text-xs sm:text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                            {song.title}
                          </p>
                          <p className="truncate text-[10px] text-muted-foreground">
                            {song.producer} • {song.label}
                          </p>
                        </div>
                      </button>

                      {/* Direct YouTube Link for each song */}
                      <a
                        href={song.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Watch ${song.title} on YouTube`}
                        className="ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-red-500/30 bg-red-950/20 text-red-400 transition-all hover:bg-red-600 hover:text-white hover:scale-105"
                      >
                        <Youtube className="h-4 w-4 fill-current" />
                      </a>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2">
                <a
                  href="https://youtube.com/@galgalmusic16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600/90 py-2.5 text-xs font-bold text-white transition-all hover:bg-red-600 hover:shadow-lg hover:shadow-red-950/40"
                >
                  <Youtube className="h-4 w-4 fill-white" />
                  View All Songs on @galgalmusic16 Channel
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Single-Row 4-Card Grid with Direct YouTube Links (Requested by User) */}
      <Reveal delay={250}>
        <div className="mx-auto mt-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {songs.map((song, i) => {
              const isActive = i === activeIdx;
              return (
                <div
                  key={song.id}
                  className={`group relative flex flex-col justify-between rounded-2xl border p-4 text-left transition-all duration-300 ${
                    isActive
                      ? "border-accent bg-accent/10 shadow-lg shadow-accent/10 -translate-y-1"
                      : "border-border/80 bg-card hover:border-accent/50 hover:bg-card/90"
                  }`}
                >
                  <div>
                    {/* Top Row: Track Number & Direct YouTube Action */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-accent">{song.number}</span>
                      <a
                        href={song.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Watch ${song.title} on YouTube`}
                        className="inline-flex items-center gap-1 rounded-full border border-red-500/40 bg-red-950/30 px-2 py-0.5 text-[10px] font-bold text-red-300 transition-all hover:bg-red-600 hover:text-white"
                      >
                        <Youtube className="h-3 w-3 fill-current" />
                        YouTube
                      </a>
                    </div>

                    {/* Title & Category */}
                    <h5 className="mt-3 font-display text-sm font-bold text-foreground leading-snug line-clamp-2">
                      {song.title}
                    </h5>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                      {song.category}
                    </p>
                    <p className="mt-1.5 text-[11px] text-muted-foreground line-clamp-2">
                      {song.subtitle}
                    </p>
                  </div>

                  {/* Bottom Action: Play in Page or Open on YouTube */}
                  <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3">
                    <button
                      type="button"
                      onClick={() => setActiveIdx(i)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:underline"
                    >
                      <Play className="h-3 w-3 fill-current" />
                      {isActive ? "Selected" : "Preview"}
                    </button>
                    <a
                      href={song.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-semibold text-muted-foreground hover:text-red-400 flex items-center gap-1"
                    >
                      Listen <ExternalLink className="h-2.5 w-2.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>

      {/* Production Highlights Footer */}
      <Reveal delay={300}>
        <div className="mx-auto mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground">
            <Sparkles className="h-3.5 w-3.5 text-accent" /> Cinema 4K Direction
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground">
            <Music className="h-3.5 w-3.5 text-accent" /> Original Music Scoring & Audio
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground">
            <Mic className="h-3.5 w-3.5 text-accent" /> Boduppal Studio Facility
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/20 px-4 py-2 text-xs font-semibold text-red-200">
            <Youtube className="h-3.5 w-3.5 text-red-500" /> GalGal Music Official Channel
          </span>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2 text-xs font-bold text-accent-foreground shadow-md transition-all hover:scale-105"
          >
            Plan Your Music Video / Song <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
