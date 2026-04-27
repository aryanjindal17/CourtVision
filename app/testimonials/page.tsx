import TestimonialCard from '@/components/TestimonialCard'
import VideoTestimonial from '@/components/VideoTestimonial'
import CTASection from '@/components/CTASection'

const testimonials = [
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
    quote: 'I was stuck in the same rotation for months. One session analyzing my approach footwork changed everything. Now I\'m starting and my kill percentage doubled.',
    result: 'Kill % increased from 22% to 44%'
  },
  {
    name: 'Taylor R.',
    level: 'Club Middle Blocker',
    quote: 'The personalized feedback was eye-opening. They caught technical issues my club coach never noticed. My blocking efficiency went up 30% in one season.',
    result: '30% improvement in blocking'
  },
  {
    name: 'Morgan S.',
    level: 'High School Captain',
    quote: 'Best investment I made in my game. The Zoom sessions felt like having a personal coach review every detail. I finally understood my decision-making patterns.',
    result: 'Named team captain'
  },
  {
    name: 'Riley P.',
    level: 'U16 Defensive Specialist',
    quote: 'My parents were skeptical at first, but after seeing my stats improve every tournament, they\'re believers. The coaches genuinely care about your development.',
    result: 'Dig average improved 40%'
  }
]

const videoTestimonials = [
  {
    name: 'Casey Johnson',
    level: 'Committed to Penn State',
    thumbnailUrl: '/testimonials/casey-thumb.jpg',
    videoUrl: '/testimonials/casey-video.mp4'
  },
  {
    name: 'Devon Williams',
    level: 'U18 National Team Tryout',
    thumbnailUrl: '/testimonials/devon-thumb.jpg',
    videoUrl: '/testimonials/devon-video.mp4'
  }
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
          <div className="grid md:grid-cols-2 gap-8">
            {videoTestimonials.map((video, index) => (
              <VideoTestimonial key={index} {...video} />
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
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
