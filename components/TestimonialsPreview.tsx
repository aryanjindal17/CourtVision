'use client'

import Link from 'next/link'
import TestimonialCard from './TestimonialCard'
import { useState, useEffect, useRef } from 'react'

const featuredTestimonials = [
  {
    name: 'Zak',
    quote: 'I never left a single session without a notepad full of things that I needed to work on.',
    videoSrc: '/videos/testimonial-1.mp4',
  },
  {
    name: 'Knuts',
    quote: "I've had coaches in my life that haven't paid as much attention to me as these two have.",
    videoSrc: '/videos/testimonial-2.mp4',
  },
  {
    name: 'Josh',
    quote: "They've both helped me develop my skills all around as a player.",
    videoSrc: '/videos/testimonial-3.mp4',
  },
]

export default function TestimonialsPreview() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const observers: IntersectionObserver[] = []

    cardRefs.current.forEach((card, i) => {
      if (!card) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(i)
        },
        { root: container, threshold: 0.5 }
      )
      observer.observe(card)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  const scrollToCard = (index: number) => {
    const container = scrollRef.current
    const card = cardRefs.current[index]
    if (!container || !card) return
    container.scrollTo({
      left: container.scrollLeft + card.getBoundingClientRect().left - container.getBoundingClientRect().left,
      behavior: 'smooth',
    })
  }

  return (
    <section id="testimonials" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Real Players, Real Results
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See how film analysis has helped players break through and reach their goals
          </p>
        </div>

        {/* Testimonials — mobile: swipeable carousel; desktop: 3-col grid */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-3 -mx-4 px-4 pb-2 no-scrollbar mb-4 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:mx-0 md:px-0 md:mb-12"
        >
          {featuredTestimonials.map((t, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el }}
              className="snap-start flex-shrink-0 min-w-[82%] md:min-w-0"
            >
              <TestimonialCard name={t.name} quote={t.quote} videoSrc={t.videoSrc} />
            </div>
          ))}
        </div>

        {/* Dot indicators — mobile only */}
        <div className="flex justify-center gap-2 mb-8 md:hidden">
          {featuredTestimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'w-6 bg-primary' : 'w-2 bg-slate-300'
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center text-primary hover:text-primary-dark font-semibold group"
          >
            Read more success stories
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
