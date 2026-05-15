'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    name: "Zak",
    quote: "I never left a single session without a notepad full of things that I needed to work on.",
    videoSrc: "/videos/testimonial-1.mp4",
  },
  {
    name: "Knuts",
    quote: "I've had coaches in my life that haven't paid as much attention to me as these two have.",
    videoSrc: "/videos/testimonial-2.mp4",
    thumbSize: "85%",
    thumbPosition: "center center",
  },
  {
    name: "Josh — Div 2 Player, UK",
    quote: "They've both helped me develop my skills all around as a player.",
    videoSrc: "/videos/testimonial-3.mp4",
    thumbSize: "85%",
    thumbPosition: "center 65%",
  },
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [thumbnails, setThumbnails] = useState<Record<number, string>>({})

  useEffect(() => {
    testimonials.forEach((t, i) => {
      if (!t.videoSrc) return
      const video = document.createElement('video')
      video.src = t.videoSrc
      video.currentTime = 1
      video.addEventListener('seeked', () => {
        const canvas = document.createElement('canvas')
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight
        const ctx = canvas.getContext('2d')
        if (ctx) {
          ctx.drawImage(video, 0, 0)
          setThumbnails(prev => ({ ...prev, [i]: canvas.toDataURL() }))
        }
      })
      video.load()
    })
  }, [])

  const goTo = (i: number) => {
    setCurrent(i)
    setPlaying(false)
  }

  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length)
  const next = () => goTo((current + 1) % testimonials.length)

  const testimonial = testimonials[current]

  return (
    <section className="relative bg-black text-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Gradient Overlays */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full"></div>
      </div>

      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Elevate Your Volleyball Game with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light mt-2">
                Personalized Film Coaching
              </span>
            </h1>

            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
              Send us your game footage and we&apos;ll watch it with you, breaking down every play, rep, and decision together on Zoom so you know exactly what to fix.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 group"
              >
                Book a Free Intro Call
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column - Video Testimonial Carousel */}
          <div className="hidden lg:block">
            <p className="text-xs text-primary font-bold uppercase tracking-widest mb-3">Real Players. Real Results.</p>

            {/* Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              {/* Video Area */}
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
                    style={thumbnails[current] ? { backgroundImage: `url(${thumbnails[current]})`, backgroundSize: testimonial.thumbSize ?? 'cover', backgroundPosition: testimonial.thumbPosition ?? 'center' } : {}}
                    onClick={() => testimonial.videoSrc && setPlaying(true)}
                  >
                    {/* Play Button */}
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

              {/* Quote + Info */}
              <div className="p-6">
                <div className="flex text-yellow-400 mb-3 text-sm">★★★★★</div>
                <p className="text-white text-base font-medium leading-relaxed mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                  </div>
                  <div className="text-xs text-primary font-semibold border border-primary/30 bg-primary/10 rounded-full px-3 py-1">
                    Verified Player
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-between mt-4 px-1">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === current ? 'bg-primary w-6' : 'bg-white/20 w-2 hover:bg-white/40'
                    }`}
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
