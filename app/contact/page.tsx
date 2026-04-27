'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    playerLevel: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', playerLevel: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Level Up Your Game?
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Book your free intro call and take the first step toward personalized coaching that gets results.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-lg">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Thanks for reaching out!</h2>
                <p className="text-slate-600">We'll get back to you within 24 hours to schedule your free intro call.</p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Book Your Free Intro Call</h2>
                  <p className="text-slate-600">Fill out the form below and we'll reach out to schedule your session.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="playerLevel" className="block text-sm font-semibold text-slate-900 mb-2">
                      Player Level *
                    </label>
                    <select
                      id="playerLevel"
                      name="playerLevel"
                      required
                      value={formData.playerLevel}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition bg-white"
                    >
                      <option value="">Select your level</option>
                      <option value="middle-school">Middle School Club</option>
                      <option value="high-school">High School Club</option>
                      <option value="u15">U15 Club</option>
                      <option value="u16">U16 Club</option>
                      <option value="u17">U17 Club</option>
                      <option value="u18">U18 Club</option>
                      <option value="high-school-varsity">High School Varsity</option>
                      <option value="aspiring-college">Aspiring College Player</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                      Tell us about your goals
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                      placeholder="What do you want to improve? Any specific challenges you're facing? (optional)"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-8 rounded-lg transition-colors shadow-lg shadow-primary/25"
                  >
                    Book My Free Intro Call
                  </button>

                  <p className="text-sm text-slate-500 text-center">
                    We'll reach out within 24 hours to schedule your session. No commitment required.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            What Happens Next?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">We'll Reach Out</h3>
              <p className="text-slate-600 text-sm">
                Within 24 hours, you'll receive an email to schedule your free 15-minute intro call.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Intro Call</h3>
              <p className="text-slate-600 text-sm">
                We'll discuss your goals, answer questions, and explain our process in detail.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Get Started</h3>
              <p className="text-slate-600 text-sm">
                If it's a fit, you'll submit film and book your first coaching session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Prefer to Email or Call?
          </h2>
          <div className="space-y-4">
            <p className="text-lg">
              <span className="font-semibold text-slate-900">Email:</span>{' '}
              <a href="mailto:hello@courtvision.com" className="text-primary hover:text-primary-dark transition">
                hello@courtvision.com
              </a>
            </p>
            <p className="text-lg">
              <span className="font-semibold text-slate-900">Phone:</span>{' '}
              <a href="tel:+15551234567" className="text-primary hover:text-primary-dark transition">
                (555) 123-4567
              </a>
            </p>
            <p className="text-slate-600 text-sm mt-6">
              Available Monday - Friday, 9am - 6pm PST
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
