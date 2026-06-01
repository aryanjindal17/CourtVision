'use client'

import { useState } from 'react'

interface TestimonialCardProps {
  name: string
  position?: string
  quote: string
  videoSrc?: string
  thumbSrc?: string
}

export default function TestimonialCard({ name, position, quote, videoSrc, thumbSrc }: TestimonialCardProps) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-primary hover:shadow-lg transition-all">
      {/* Video */}
      {videoSrc && (
        <div className="relative h-52 bg-slate-900">
          {playing ? (
            <video
              key="playing"
              src={videoSrc}
              poster={thumbSrc}
              autoPlay
              controls
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div
              className="absolute inset-0 flex items-center justify-center cursor-pointer group bg-gradient-to-br from-slate-800 to-slate-900"
              style={thumbSrc ? { backgroundImage: `url(${thumbSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
              onClick={() => setPlaying(true)}
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-slate-900 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          )}
        </div>
      )}

      <div className="p-6">
        {/* Quote */}
        <div className="mb-4">
          <svg className="w-7 h-7 text-primary/20 mb-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-slate-700 leading-relaxed">"{quote}"</p>
        </div>

        {/* Author */}
        <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
          <div>
            <div className="font-semibold text-slate-900">{name}</div>
            <div className="text-sm text-slate-500">{position}</div>
          </div>
          <div className="flex text-yellow-400 text-sm">★★★★★</div>
        </div>
      </div>
    </div>
  )
}
