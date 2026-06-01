import TestimonialCard from '@/components/TestimonialCard'
import CTASection from '@/components/CTASection'

const videoTestimonials = [
  {
    name: 'Zak',
    quote: 'I never left a single session without a notepad full of things that I needed to work on.',
    videoSrc: '/videos/testimonial-1.mp4',
    thumbSrc: '/videos/testimonial-1-thumb.jpg',
  },
  {
    name: 'Knuts',
    quote: "I've had coaches in my life that haven't paid as much attention to me as these two have.",
    videoSrc: '/videos/testimonial-2.mp4',
    thumbSrc: '/videos/testimonial-2-thumb.jpg',
  },
  {
    name: 'Josh',
    quote: "They've both helped me develop my skills all around as a player.",
    videoSrc: '/videos/testimonial-3.mp4',
    thumbSrc: '/videos/testimonial-3-thumb.jpg',
  },
]

const writtenTestimonials = [
  {
    name: 'Dante W.',
    position: 'Setter',
    quote: "I've never had someone pay that close attention to my decision-making before. It changed how I see the game.",
  },
  {
    name: 'Priya N.',
    position: 'Opposite',
    quote: 'Two sessions in and I already knew more about my attacking patterns than I had learned in two years of club.',
  },
  {
    name: 'Cam O.',
    position: 'Defensive Specialist',
    quote: "They don't sugarcoat anything, which is exactly what I needed. Honest, specific, and actually useful feedback.",
  },
  {
    name: 'Marcus R.',
    position: 'Outside Hitter',
    quote: 'The way they break down film made me see my approach footwork in a way no coach ever had before.',
  },
  {
    name: 'Sofia M.',
    position: 'Libero',
    quote: "I had no idea how many small positioning habits were costing me until we sat down and watched the film together.",
  },
  {
    name: 'Tyler B.',
    position: 'Middle Blocker',
    quote: 'Every session I walked away with a clear list of things to fix. The detail they go into is something else.',
  },
]

export default function TestimonialsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Real Players, Real Results
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            See how personalized film analysis has helped players break through plateaus and reach their goals.
          </p>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Player Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {videoTestimonials.map((t, index) => (
              <TestimonialCard key={index} name={t.name} quote={t.quote} videoSrc={t.videoSrc} thumbSrc={t.thumbSrc} />
            ))}
          </div>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            What Players Are Saying
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {writtenTestimonials.map((t, index) => (
              <TestimonialCard key={index} name={t.name} position={t.position} quote={t.quote} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
