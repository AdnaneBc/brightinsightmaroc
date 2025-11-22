# Bright Insight - Language Training Center Website

A modern, premium, conversion-optimized website for Bright Insight, a language training center located in Casablanca, Morocco.

## 🎨 Design Features

- **Premium & Trustworthy Design**: Clean, minimal aesthetic with professional branding
- **Modern 2025 Style**: Contemporary education brand design
- **Conversion-Optimized**: Strategic CTAs and persuasive content throughout
- **Fully Responsive**: Perfect mobile experience
- **Smooth Animations**: Subtle fade and slide animations for enhanced UX

## 🎨 Color Palette

- **Deep Blue**: `#0D1B4C` (Primary)
- **Gold**: `#E6B85C` (Accent)
- **White**: `#FFFFFF` (Background)
- **Light Grey**: `#F5F7FA` (Secondary Background)

## 📁 Project Structure

```
brightinsightschool/
├── app/
│   ├── page.tsx          # Homepage
│   ├── sessions/         # Sessions page
│   ├── methodes/         # Teaching methods page
│   ├── entreprise/       # B2B corporate page
│   ├── blog/             # Blog page
│   ├── contact/          # Contact page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Footer component
│   └── ui/               # shadcn/ui components
└── lib/
    └── utils.ts          # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📄 Pages

### Homepage (`/`)
- Hero section with compelling headline
- Statistics section
- About section
- Programs showcase
- Why choose us section
- Testimonials
- Instagram preview
- Final CTA

### Sessions (`/sessions`)
- Detailed session cards:
  - Listening
  - Speaking
  - Accent
  - ELA (English Language Acquisition)
  - Vocabulaire
  - Writing

### Méthodes (`/methodes`)
- Pedagogical approach sections:
  - Évaluation & Personnalisation
  - Immersion Progressive
  - Plateformes E-Learning
  - Suivi & Motivation
  - Pratique Quotidienne

### Entreprise (`/entreprise`)
- B2B corporate training page
- Specialized programs
- Flexible formats
- B2B advantages

### Blog (`/blog`)
- Modern grid layout
- Article previews
- Newsletter signup

### Contact (`/contact`)
- Contact form
- Contact information
- Google Maps integration (placeholder)
- WhatsApp CTA

## 🛠️ Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **shadcn/ui** - UI components
- **Lucide React** - Icons

## 📝 Customization

### Update Contact Information

Edit the contact details in:
- `components/Footer.tsx`
- `app/contact/page.tsx`

### Add Google Maps

Replace the placeholder map in `app/contact/page.tsx` with your Google Maps embed code.

### Update Colors

Modify the color variables in `app/globals.css`:
```css
--deep-blue: #0D1B4C;
--gold: #E6B85C;
--light-grey: #F5F7FA;
```

### Add Real Images

Replace placeholder images with actual photos:
- Hero section image
- Session cards images
- Blog post images
- Instagram feed images

## 🎯 Features

- ✅ Fully responsive design
- ✅ SEO optimized
- ✅ Accessible components
- ✅ Modern animations
- ✅ Conversion-focused CTAs
- ✅ Professional typography
- ✅ Clean code structure

## 📞 Support

For questions or support, contact: contact@brightinsight.ma

## 📄 License

Private project for Bright Insight Language Training Center.
