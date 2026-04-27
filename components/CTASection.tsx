import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="relative py-20 px-4 bg-black text-white overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-primary/5 blur-[100px]"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Elevate Your Performance?
        </h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Start with a free intro call and discover how personalized film analysis can transform your game.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 group"
          >
            Book Your Free Call
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/how-it-works"
            className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-lg transition-all border border-white/10 hover:border-white/20"
          >
            Learn More
          </Link>
        </div>
        <p className="text-sm text-gray-500 mt-6">
          No commitment required. Just a conversation to see if we're a good fit.
        </p>
      </div>
    </section>
  )
}
