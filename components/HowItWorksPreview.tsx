import Link from 'next/link'

const steps = [
  {
    number: 1,
    title: 'Send Your Film',
    description: 'Upload game or practice footage from any device. Phone recordings, Hudl, or pro footage all work.'
  },
  {
    number: 2,
    title: 'We Analyze & Stat',
    description: 'Our coaches break down your performance, track metrics, and identify patterns you can\'t see on your own.'
  },
  {
    number: 3,
    title: 'Live Zoom Breakdown',
    description: 'Get actionable feedback in a personalized 60-min session with measurable improvement goals.'
  }
]

export default function HowItWorksPreview() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A simple 3-step process to transform your game with personalized coaching
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-200 z-0" />
              )}

              {/* Card */}
              <div className="relative bg-white p-6 rounded-xl border border-slate-200 hover:border-primary hover:shadow-lg transition-all group">
                <div className="flex flex-col items-center text-center">
                  {/* Number Badge */}
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 group-hover:scale-110 transition-transform z-10">
                    {step.number}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/how-it-works"
            className="inline-flex items-center text-primary hover:text-primary-dark font-semibold group"
          >
            See the full process
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
