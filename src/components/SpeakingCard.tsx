"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { Speaking } from "@/data/speaking";

interface SpeakingCardProps {
  talk: Speaking;
}

export default function SpeakingCard({ talk }: SpeakingCardProps) {
  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const hasMultiple = talk.images.length > 1;

  const next = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setCurrent((prev) => (prev + 1) % talk.images.length);
    },
    [talk.images.length]
  );

  const prev = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setCurrent((prev) => (prev - 1 + talk.images.length) % talk.images.length);
    },
    [talk.images.length]
  );

  const goTo = useCallback(
    (index: number, e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setCurrent(index);
    },
    []
  );

  const openLightbox = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(true);
  }, []);

  const closeLightbox = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeLightbox();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeLightbox]);

  const Wrapper = talk.link ? "a" : "div";
  const linkProps = talk.link
    ? { href: talk.link, target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <>
      <Wrapper
        {...linkProps}
        className="group block overflow-hidden rounded-xl border border-zinc-800/60 bg-zinc-900/50 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900 hover:shadow-lg hover:shadow-violet-500/5"
      >
        {/* Image Carousel */}
        <div 
          onClick={openLightbox}
          className="relative aspect-video overflow-hidden bg-zinc-800 cursor-zoom-in"
        >
          {/* Images */}
          <div className="relative h-full w-full">
            {talk.images.map((src, i) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  i === current ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={src}
                  alt={`${talk.title} — photo ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />

          {/* Event badge */}
          <div className="absolute bottom-3 left-3 z-10">
            <span className="rounded-md bg-violet-600/90 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm shadow-sm">
              {talk.event}
            </span>
          </div>

          {/* Carousel Controls (only if multiple images) */}
          {hasMultiple && (
            <>
              {/* Prev / Next arrows */}
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-zinc-950/60 text-white opacity-0 backdrop-blur-md transition-all hover:bg-zinc-950/90 hover:scale-110 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-zinc-950/60 text-white opacity-0 backdrop-blur-md transition-all hover:bg-zinc-950/90 hover:scale-110 group-hover:opacity-100"
                aria-label="Next image"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>

              {/* Dots */}
              <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                {talk.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => goTo(i, e)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === current
                        ? "w-5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                        : "w-1.5 bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Image counter badge */}
          {hasMultiple && (
            <div className="absolute right-3 top-3 z-10 rounded-md bg-zinc-950/60 px-2 py-1 text-[10px] font-medium tracking-wider text-white backdrop-blur-md">
              {current + 1} / {talk.images.length}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="text-xs font-medium text-zinc-500">{talk.date}</p>
          <h3 className="mt-2 text-lg font-semibold tracking-tight text-white transition-colors group-hover:text-violet-400">
            {talk.title}
          </h3>
          {talk.description && (
            <p className="mt-3 line-clamp-2 text-sm text-zinc-400 leading-relaxed">
              {talk.description}
            </p>
          )}
          {talk.link && (
            <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-violet-400 transition-colors group-hover:text-violet-300">
              View talk details
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          )}
        </div>
      </Wrapper>

      {/* Lightbox Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex animate-in fade-in duration-200 items-center justify-center bg-zinc-950/95 backdrop-blur-xl"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button 
            className="absolute right-6 top-6 z-50 rounded-full bg-white/10 p-2 text-white/70 backdrop-blur-md transition-all hover:scale-110 hover:bg-white/20 hover:text-white"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Main Image Container */}
          <div 
            className="relative flex h-[85vh] w-[90vw] max-w-6xl flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative h-full w-full">
              <Image
                src={talk.images[current]}
                alt={`${talk.title} — photo ${current + 1} full view`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            
            {/* Modal Controls */}
            {hasMultiple && (
              <>
                <button
                  onClick={prev}
                  className="absolute -left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-white/20 md:-left-12"
                  aria-label="Previous image"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                
                <button
                  onClick={next}
                  className="absolute -right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-white/20 md:-right-12"
                  aria-label="Next image"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>

                {/* Lightbox Status */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-sm font-medium text-zinc-400">
                  {current + 1} of {talk.images.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
