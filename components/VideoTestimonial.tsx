interface VideoTestimonialProps {
  name: string
  level: string
  thumbnailUrl: string
  videoUrl: string
}

export default function VideoTestimonial({ name, level, thumbnailUrl, videoUrl }: VideoTestimonialProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-primary hover:shadow-xl transition-all group">
      {/* Video Placeholder */}
      <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-700 relative overflow-hidden cursor-pointer">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Play Button */}
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-slate-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-1">
          {name}
        </h3>
        <p className="text-sm text-slate-500 mb-3">
          {level}
        </p>
        <div className="flex items-center text-primary text-sm font-semibold group-hover:text-primary-dark transition-colors">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Watch Story
        </div>
      </div>
    </div>
  )
}
