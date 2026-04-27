# CourtVision - Elite Volleyball Film Analysis

A modern, high-converting website for CourtVision, a volleyball coaching service that provides personalized 1-on-1 film analysis through live Zoom sessions.

## Tech Stack

- **Next.js 14** (App Router)
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- Fully responsive, mobile-first design

## Project Structure

```
CourtVision/
├── app/
│   ├── page.tsx              # Home page
│   ├── coaches/page.tsx      # Meet the coaches
│   ├── testimonials/page.tsx # Success stories
│   ├── how-it-works/page.tsx # Process breakdown
│   ├── contact/page.tsx      # Contact form
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── HowItWorksPreview.tsx
│   ├── ValueProps.tsx
│   ├── TestimonialsPreview.tsx
│   ├── CTASection.tsx
│   ├── StepCard.tsx
│   ├── TestimonialCard.tsx
│   ├── CoachCard.tsx
│   └── VideoTestimonial.tsx
└── tailwind.config.ts        # Tailwind configuration
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Features

### Pages

1. **Home (/)** - Hero, how it works preview, value props, testimonials, CTA
2. **Coaches (/coaches)** - Coach profiles with credentials
3. **Testimonials (/testimonials)** - Success stories with stats
4. **How It Works (/how-it-works)** - Detailed process breakdown with FAQ
5. **Contact (/contact)** - Lead capture form

### Design Highlights

- Clean, athletic, modern aesthetic
- Dark slate + bright blue accent color scheme
- Smooth hover animations and transitions
- Mobile-first responsive design
- Conversion-optimized CTAs throughout
- Social proof and trust indicators

### Key Components

- **Navbar** - Sticky navigation with mobile menu
- **Footer** - Links and contact info
- **HeroSection** - High-impact hero with stats
- **StepCard** - Process step with details
- **TestimonialCard** - Player quote with result badge
- **CoachCard** - Coach profile with credentials
- **CTASection** - Reusable call-to-action block

## Color Palette

- **Primary Blue**: `#0EA5E9` (sky-500)
- **Dark Background**: `#0F172A` (slate-900)
- **Light Background**: `#F8FAFC` (slate-50)

## Next Steps

1. Add real images for coaches and testimonials
2. Integrate with a form backend (e.g., Formspree, Basin, or custom API)
3. Add video testimonial functionality
4. Set up analytics (Google Analytics, Plausible, etc.)
5. Deploy to Vercel or similar platform

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

## License

Private project for CourtVision.
