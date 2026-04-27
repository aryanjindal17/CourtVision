import CoachCard from '@/components/CoachCard'
import CTASection from '@/components/CTASection'

const coaches = [
  {
    name: 'Sarah Martinez',
    role: 'Lead Performance Coach',
    bio: 'Former D1 setter at UCLA with 8+ years coaching experience. Specializes in game IQ development and decision-making under pressure.',
    credentials: [
      'NCAA Division I Player (UCLA)',
      'USA Volleyball CAP Level II Certified',
      'Coached 15+ players to collegiate programs',
      'Former U.S. Junior National Team member'
    ],
    image: '/coaches/sarah.jpg' // Placeholder
  },
  {
    name: 'Marcus Chen',
    role: 'Technical Skills Specialist',
    bio: 'Professional beach volleyball player and biomechanics expert. Focuses on technique optimization and injury prevention through proper form.',
    credentials: [
      'AVP Professional Tour Player',
      'B.S. in Kinesiology, Stanford University',
      'CSCS Certified Strength & Conditioning Specialist',
      'Video analysis expert with 1000+ sessions completed'
    ],
    image: '/coaches/marcus.jpg' // Placeholder
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
            Learn from elite athletes and certified coaches who combine high-level playing experience with proven teaching expertise.
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
