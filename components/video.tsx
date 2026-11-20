"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Muted looping background video.
 * - "auto": plays on load (skipped when the visitor prefers reduced motion)
 * - "hover": shows the poster, plays while hovered
 */
export function Video({
  src,
  mode = "auto",
  pauseButton = false,
  className = "",
}: {
  src: string; // e.g. "/videos/hero" — .mp4 and .jpg poster share the name
  mode?: "auto" | "hover";
  pauseButton?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (mode !== "auto") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    ref.current?.play().catch(() => {});
  }, [mode]);

  const hover =
    mode === "hover"
      ? {
          onMouseEnter: () => ref.current?.play().catch(() => {}),
          onMouseLeave: () => ref.current?.pause(),
        }
      : {};

  return (
    <>
      <video
        ref={ref}
        src={`${src}.mp4`}
        poster={`${src}.jpg`}
        muted
        loop
        playsInline
        preload={mode === "auto" ? "auto" : "none"}
        aria-hidden="true"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className={`absolute inset-0 h-full w-full object-cover brightness-[0.7] ${className}`}
        {...hover}
      />
      {pauseButton && (
        <button
          type="button"
          onClick={() => (playing ? ref.current?.pause() : ref.current?.play())}
          className="caps absolute bottom-6 right-6 z-20 text-ivory/60 hover:text-ivory transition-colors"
          aria-label={playing ? "Pause background video" : "Play background video"}
        >
          {playing ? "Pause" : "Play"}
        </button>
      )}
    </>
  );
}
