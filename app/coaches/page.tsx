import CoachCard from '@/components/CoachCard'
import CTASection from '@/components/CTASection'

const coaches = [
  {
    name: 'Aryan',
    role: 'Head Coach',
    bio: 'Current U17 head coach with experience coaching both boys and girls programs. Brings a deep understanding of player development at the club level and a sharp eye for film analysis.',
    credentials: [
      'Current U17 Head Coach',
      'Coaches both boys and girls programs',
      'Specializes in film-based player development',
      'Experienced in identifying and correcting technical habits'
    ],
    image: '/coaches/aryan.jpg'
  },
  {
    name: 'Halle',
    role: 'Skills Coach',
    bio: 'Former college volleyball player who has trained alongside Olympic-level athletes. Brings high-level technical knowledge and a player-first approach to every session.',
    credentials: [
      'Former college volleyball player',
      'Trained with Olympic-level athletes',
      'Deep understanding of high-level technique',
      'Focused on position-specific skill development'
    ],
    image: '/coaches/halle.jpg'
  }
]

export default function CoachesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Meet Your Coaches
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Coaches who have played and coached at competitive levels and are passionate about helping players improve through personalized film analysis.
          </p>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {coaches.map((coach, index) => (
              <CoachCard key={index} {...coach} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
