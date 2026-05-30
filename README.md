# 🚁 Punithan Drone Pilot — Professional Drone Services

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/punithanae/dronesite)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?logo=typescript)](https://www.typescriptlang.org/)

> **DGCA Approved Drone Pilot Services** — Aerial Photography, Cinematic Videography, Survey & Mapping, Industrial Inspection, Construction Monitoring & Real Estate Marketing.

🌐 **Live Site**: [punithanfly.com](https://punithanfly.com)

---

## ✨ Features

- 🎨 **Modern UI** — Premium design with Tailwind CSS & Framer Motion animations
- 📱 **Fully Responsive** — Optimized for mobile, tablet & desktop
- 🚀 **Lightning Fast** — Static pages with Next.js 14 App Router
- 📧 **Email Notifications** — Automated consultation emails via Resend
- 🗄️ **Database** — Supabase for storing consultation requests
- 🔒 **Secure** — reCAPTCHA v3, input validation with Zod, HTTPS headers
- 💬 **WhatsApp Integration** — Floating WhatsApp button for instant contact
- 🍪 **Cookie Consent** — GDPR-compliant cookie banner
- 🔍 **SEO Optimized** — Meta tags, Open Graph, structured data

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| [Next.js 14](https://nextjs.org/) | React framework with App Router |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Supabase](https://supabase.com/) | Database & Auth |
| [Resend](https://resend.com/) | Transactional emails |
| [Zod](https://zod.dev/) | Form validation |
| [Lucide React](https://lucide.dev/) | Icons |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/punithanae/dronesite.git
cd dronesite

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your API keys

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   │   ├── consultation/  # Form submission endpoint
│   │   └── placeholder/   # Dynamic placeholder images
│   ├── privacy/           # Privacy Policy
│   ├── terms/             # Terms of Service
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with SEO
│   └── page.tsx           # Home page
├── components/
│   ├── sections/          # Page sections (Hero, About, etc.)
│   ├── ui/                # Reusable UI components
│   └── providers/         # Context providers
├── lib/                   # Utilities & configurations
│   ├── constants.ts       # Site content & data
│   ├── supabase.ts        # Database client
│   ├── resend.ts          # Email templates
│   ├── utils.ts           # Helper functions
│   └── validations.ts     # Zod schemas
└── types/                 # TypeScript type definitions
```

---

## 🔑 Environment Variables

See [`.env.example`](.env.example) for all required variables.

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | ✅ | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | ✅ | Supabase public key |
| `SUPABASE_SERVICE_ROLE_KEY` | ✅ | Supabase admin key |
| `RESEND_API_KEY` | ✅ | Email service API key |
| `NOTIFICATION_EMAIL` | ✅ | Email for form notifications |

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Punithan** — DGCA Approved Drone Pilot  
📍 Chennai, Tamil Nadu, India  
📧 contact@punithanfly.com  
🌐 [punithanfly.com](https://punithanfly.com)

---

<p align="center">
  Built with ❤️ using Next.js 14, Tailwind CSS & Framer Motion
</p>
