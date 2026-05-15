import StepCard from '@/components/StepCard'
import CTASection from '@/components/CTASection'

const steps = [
  {
    number: 1,
    title: 'Book Your Free Intro Call',
    description: 'Schedule a 15-minute consultation where we learn about your goals, current level, and what you want to improve. No commitment required.',
    details: [
      'Discuss your volleyball background and goals',
      'Learn about our process and what to expect',
      'Determine if CourtVision is right for you',
      'Get answers to any questions'
    ]
  },
  {
    number: 2,
    title: 'Submit Your Game Film',
    description: 'Send us footage from a recent game or practice. We accept any format - phone recordings, Hudl, YouTube links, or professional footage.',
    details: [
      'Film can be from games, tournaments, or practices',
      'Any camera angle or quality works',
      '20-40 minutes of footage recommended',
      'Highlight specific plays or moments you want reviewed'
    ]
  },
  {
    number: 3,
    title: 'We Analyze & Break Down',
    description: 'Our coaches study your film in detail, tracking stats, identifying patterns, and preparing personalized feedback tailored to your position and goals.',
    details: [
      'Frame-by-frame technical analysis',
      'Statistical tracking (hitting %, efficiency, etc.)',
      'Pattern recognition in decision-making',
      'Preparation of specific drills and corrections'
    ]
  },
  {
    number: 4,
    title: 'Live Zoom Coaching Session',
    description: 'Join a 60-minute live session where we walk through your film together, answer questions in real-time, and create an actionable improvement plan.',
    details: [
      'Screen share with annotated film breakdown',
      'Ask questions and get instant clarification',
      'Receive a custom training plan',
      'Get measurable metrics to track progress'
    ]
  },
  {
    number: 5,
    title: 'Track Your Improvement',
    description: 'Continue with follow-up sessions to measure progress, refine techniques, and level up your game with data-driven coaching.',
    details: [
      'Compare stats session-over-session',
      'Adjust training based on results',
      'Build a development timeline',
      'Prepare for tryouts, recruiting, or next level'
    ]
  }
]

export default function HowItWorksPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            How CourtVision Works
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A simple, proven process that turns your game footage into actionable feedback and measurable improvement.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>
      </section>

      {/* Why This Works */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Why Film Analysis Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Personalized to You</h3>
              <p className="text-slate-600">
                Generic drills don't fix specific problems. We analyze YOUR footage to identify YOUR patterns and create solutions tailored to YOUR game.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4">See What You Can't See</h3>
              <p className="text-slate-600">
                It's impossible to watch yourself play in real-time. Film reveals habits, footwork issues, and decision-making patterns you'd never notice on your own.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Measurable Progress</h3>
              <p className="text-slate-600">
                We track real metrics session-over-session so you can see concrete improvement. No guesswork, just data-driven development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Common Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                What if my film quality isn't great?
              </h3>
              <p className="text-slate-600">
                No problem! We've worked with everything from professional broadcast footage to parent phone recordings. As long as we can see you play, we can provide valuable feedback.
              </p>
            </div>
            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                How long does the whole process take?
              </h3>
              <p className="text-slate-600">
                From submitting film to your live session is typically 3-5 days. The intro call can usually be scheduled within 24-48 hours.
              </p>
            </div>
            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Do I need to commit to multiple sessions?
              </h3>
              <p className="text-slate-600">
                Not at all. Many players start with one session to see if it's a good fit. Most continue because they see results, but there's no requirement.
              </p>
            </div>
            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                What positions do you coach?
              </h3>
              <p className="text-slate-600">
                All of them. Whether you're a setter, libero, outside, or middle, we tailor the breakdown to your role on the court.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
