import Link from 'next/link'
import TestimonialCard from './TestimonialCard'

const featuredTestimonials = [
  {
    name: 'Emma L.',
    level: 'U17 Club Player',
    quote: 'After just 3 sessions, I went from inconsistent passing to starting libero. The film breakdown showed me exactly what I was doing wrong with my platform angle.',
    result: 'Made varsity starting lineup'
  },
  {
    name: 'Jordan M.',
    level: 'High School Setter',
    quote: 'CourtVision helped me get recruited to my dream D2 school. The coaches gave me specific metrics to improve and tracked my progress over 6 months.',
    result: 'Committed to D2 program'
  },
  {
    name: 'Alex K.',
    level: 'U15 Outside Hitter',
    quote: 'I was stuck in the same rotation for months. One session analyzing my approach footwork changed everything.',
    result: 'Kill % increased 22% → 44%'
  }
]

export default function TestimonialsPreview() {
  return (
    <section className="py-20 px-4 bg-white">
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
          {featuredTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
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
