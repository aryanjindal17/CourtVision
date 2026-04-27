interface TestimonialCardProps {
  name: string
  level: string
  quote: string
  result?: string
}

export default function TestimonialCard({ name, level, quote, result }: TestimonialCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all">
      {/* Quote */}
      <div className="mb-4">
        <svg className="w-8 h-8 text-primary/20 mb-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-slate-700 leading-relaxed">
          "{quote}"
        </p>
      </div>

      {/* Result Badge */}
      {result && (
        <div className="mb-4 inline-flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          {result}
        </div>
      )}

      {/* Author */}
      <div className="border-t border-slate-100 pt-4">
        <div className="font-semibold text-slate-900">{name}</div>
        <div className="text-sm text-slate-500">{level}</div>
      </div>
    </div>
  )
}
