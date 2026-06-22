import Link from 'next/link'
import TestimonialCard from './TestimonialCard'

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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {featuredTestimonials.map((t, index) => (
            <TestimonialCard key={index} name={t.name} quote={t.quote} videoSrc={t.videoSrc} />
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
