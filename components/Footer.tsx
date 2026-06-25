import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.png" alt="VolleyFilm" className="h-36 w-auto" />
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              Elite volleyball coaching through personalized film analysis. Level up your game with expert feedback and measurable results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-sm hover:text-white transition">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/coaches" className="text-sm hover:text-white transition">
                  Coaches
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-sm hover:text-white transition">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Get Started</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm hover:text-white transition">
                  Book Free Call
                </Link>
              </li>
              <li>
                <a href="mailto:aryan@volleyfilm.com" className="text-sm hover:text-white transition">
                  aryan@volleyfilm.com
                </a>
              </li>
              <li>
                <a href="tel:+14255331417" className="text-sm hover:text-white transition">
                  425-533-1417
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-400">
              &copy; {currentYear} VolleyFilm. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-sm text-slate-400 hover:text-white transition">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-slate-400 hover:text-white transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
