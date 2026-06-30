'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

const testimonials = [
  {
    name: "Zak",
    quote: "I never left a single session without a notepad full of things that I needed to work on.",
    videoSrc: "/videos/testimonial-1.mp4",
    thumbSrc: "/videos/testimonial-1-thumb.jpg",
  },
  {
    name: "Knuts",
    quote: "I've had coaches in my life that haven't paid as much attention to me as these two have.",
    videoSrc: "/videos/testimonial-2.mp4",
    thumbSrc: "/videos/testimonial-2-thumb.jpg",
  },
  {
    name: "Josh — Div 2 Player, UK",
    quote: "They've both helped me develop my skills all around as a player.",
    videoSrc: "/videos/testimonial-3.mp4",
    thumbSrc: "/videos/testimonial-3-thumb.jpg",
  },
]

export default function HeroSection() {
  // Desktop carousel state
  const [current, setCurrent] = useState(0)
  const [playing, setPlaying] = useState(false)

  // Mobile carousel state
  const [mobileActive, setMobileActive] = useState(0)
  const [mobilePlayingIndex, setMobilePlayingIndex] = useState<number | null>(null)
  const mobileScrollRef = useRef<HTMLDivElement>(null)
  const mobileCardRefs = useRef<(HTMLDivElement | null)[]>([])

  const goTo = (i: number) => { setCurrent(i); setPlaying(false) }
  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length)
  const next = () => goTo((current + 1) % testimonials.length)
  const testimonial = testimonials[current]

  useEffect(() => {
    const container = mobileScrollRef.current
    if (!container) return
    const observers: IntersectionObserver[] = []
    mobileCardRefs.current.forEach((card, i) => {
      if (!card) return
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setMobileActive(i) },
        { root: container, threshold: 0.5 }
      )
      observer.observe(card)
      observers.push(observer)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  const scrollToMobileCard = (index: number) => {
    const container = mobileScrollRef.current
    const card = mobileCardRefs.current[index]
    if (!container || !card) return
    container.scrollTo({
      left: container.scrollLeft + card.getBoundingClientRect().left - container.getBoundingClientRect().left,
      behavior: 'smooth',
    })
  }

  return (
    <section className="relative bg-black text-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Gradient Overlays */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Elevate Your Volleyball Game with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light mt-2">
                Personalized Film Coaching
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-400 mb-7 md:mb-10 leading-relaxed">
              Send us your game footage and we&apos;ll watch it with you, breaking down every play, rep, and decision together on Zoom so you know exactly what to fix.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 lg:mb-0">
              <Link
                href="https://calendly.com/aryanjindal17/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 group"
              >
                Book a Free Intro Call
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* ── Mobile-only testimonial video strip ── */}
            <div className="lg:hidden mt-2">
              {/* Eyebrow */}
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-3">
                Real Players · Real Results
              </p>

              {/* Swipeable portrait cards */}
              <div
                ref={mobileScrollRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-3 -mx-4 sm:-mx-6 px-4 sm:px-6 pb-1 no-scrollbar"
              >
                {testimonials.map((t, index) => (
                  <div
                    key={index}
                    ref={(el) => { mobileCardRefs.current[index] = el }}
                    className="snap-start flex-shrink-0 min-w-[78%] sm:min-w-[60%]"
                  >
                    <div className="relative h-72 rounded-2xl overflow-hidden bg-slate-900 border border-white/10">

                      {mobilePlayingIndex === index ? (
                        <video
                          key={`mobile-${index}-playing`}
                          src={t.videoSrc}
                          autoPlay
                          playsInline
                          controls
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      ) : (
                        <>
                          {/* Thumbnail */}
                          <div
                            className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"
                            style={t.thumbSrc ? {
                              backgroundImage: `url(${t.thumbSrc})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                            } : {}}
                          />

                          {/* Bottom scrim for overlay legibility */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                          {/* Verified badge */}
                          <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/40 backdrop-blur-sm border border-primary/40 rounded-full px-2.5 py-1">
                            <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-[10px] font-bold text-primary tracking-wide">Verified</span>
                          </div>

                          {/* Play button */}
                          <button
                            onClick={() => t.videoSrc && setMobilePlayingIndex(index)}
                            className="absolute inset-0 flex items-center justify-center group"
                            aria-label={`Play ${t.name}'s testimonial`}
                          >
                            <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl ring-1 ring-white/40 group-active:scale-95 transition-transform duration-150">
                              <svg className="w-5 h-5 text-slate-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </button>

                          {/* Bottom info overlay */}
                          <div className="absolute bottom-0 left-0 right-0 px-4 pt-10 pb-4 pointer-events-none">
                            <div className="flex text-yellow-400 text-xs mb-1.5">★★★★★</div>
                            <p className="text-white text-sm font-medium leading-snug line-clamp-2 mb-1.5">
                              &ldquo;{t.quote}&rdquo;
                            </p>
                            <p className="text-white/50 text-xs font-semibold tracking-wide">{t.name}</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Dot indicators */}
              <div className="flex gap-1.5 mt-3 pl-0.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToMobileCard(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === mobileActive
                        ? 'w-5 bg-primary shadow-sm shadow-primary/50'
                        : 'w-1.5 bg-white/25 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
            {/* ── end mobile strip ── */}
          </div>

          {/* Right Column — Desktop only */}
          <div className="hidden lg:block">
            <p className="text-xs text-primary font-bold uppercase tracking-widest mb-3">Real Players. Real Results.</p>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              <div className="h-80 relative bg-slate-900">
                {playing && testimonial.videoSrc ? (
                  <video
                    key={`${current}-playing`}
                    src={testimonial.videoSrc}
                    autoPlay
                    controls
                    className="absolute inset-0 w-full h-full object-cover bg-black"
                  />
                ) : (
                  <div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer group bg-gradient-to-br from-slate-800 to-slate-900"
                    style={testimonial.thumbSrc ? { backgroundImage: `url(${testimonial.thumbSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
                    onClick={() => testimonial.videoSrc && setPlaying(true)}
                  >
                    <div className={`w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform ${testimonial.videoSrc ? 'group-hover:scale-110' : 'opacity-40'}`}>
                      <svg className="w-4 h-4 text-slate-900 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    {!testimonial.videoSrc && (
                      <span className="absolute bottom-4 text-white/40 text-xs">Video coming soon</span>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex text-yellow-400 mb-3 text-sm">★★★★★</div>
                <p className="text-white text-base font-medium leading-relaxed mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <div className="text-xs text-primary font-semibold border border-primary/30 bg-primary/10 rounded-full px-3 py-1">
                    Verified Player
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4 px-1">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`h-2 rounded-full transition-all ${i === current ? 'bg-primary w-6' : 'bg-white/20 w-2 hover:bg-white/40'}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center transition-all"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  className="w-9 h-9 rounded-full bg-primary hover:bg-primary-dark flex items-center justify-center transition-all shadow-lg shadow-primary/25"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
