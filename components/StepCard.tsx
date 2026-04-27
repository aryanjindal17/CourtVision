interface StepCardProps {
  number: number
  title: string
  description: string
  details: string[]
}

export default function StepCard({ number, title, description, details }: StepCardProps) {
  return (
    <div className="relative bg-white border border-slate-200 rounded-xl p-8 hover:border-primary hover:shadow-lg transition-all group">
      {/* Step Number */}
      <div className="flex items-start space-x-6">
        <div className="flex-shrink-0 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform">
          {number}
        </div>

        <div className="flex-1">
          {/* Title & Description */}
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            {title}
          </h3>
          <p className="text-slate-600 mb-6 leading-relaxed">
            {description}
          </p>

          {/* Details List */}
          <ul className="space-y-2">
            {details.map((detail, index) => (
              <li key={index} className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-600 text-sm">
                  {detail}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
