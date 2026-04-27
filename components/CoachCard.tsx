interface CoachCardProps {
  name: string
  role: string
  bio: string
  credentials: string[]
  image: string
}

export default function CoachCard({ name, role, bio, credentials, image }: CoachCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-primary hover:shadow-xl transition-all group">
      {/* Image Placeholder */}
      <div className="aspect-square bg-gradient-to-br from-slate-200 to-slate-300 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-24 h-24 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Name & Role */}
        <h3 className="text-2xl font-bold text-slate-900 mb-1">
          {name}
        </h3>
        <p className="text-primary font-semibold mb-4">
          {role}
        </p>

        {/* Bio */}
        <p className="text-slate-600 mb-6 leading-relaxed">
          {bio}
        </p>

        {/* Credentials */}
        <div className="space-y-2">
          <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wide">
            Credentials
          </h4>
          <ul className="space-y-2">
            {credentials.map((credential, index) => (
              <li key={index} className="flex items-start space-x-2">
                <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-slate-600">
                  {credential}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
