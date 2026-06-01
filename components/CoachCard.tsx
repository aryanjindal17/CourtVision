import Image from 'next/image'

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
      {/* Coach Photo */}
      <div className="aspect-square relative overflow-hidden">
        <Image
          src={image}
          alt={`${name} - ${role}`}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
        />
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
