# Punithan Drone Pilot Website - Setup Guide

A premium, modern website for DGCA Approved Drone Pilot Services in Ahmedabad, Gujarat.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd punithan-drone-website
npm install
```

### 2. Configure Environment Variables

Copy the example environment file and fill in your values:

```bash
cp .env.example .env.local
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Required API Keys & Services

### 1. Supabase (Database)

1. Create account at [supabase.com](https://supabase.com)
2. Create a new project
3. Go to **Settings > API** to get:
   - `NEXT_PUBLIC_SUPABASE_URL` - Project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Anon/Public key
   - `SUPABASE_SERVICE_ROLE_KEY` - Service role key (keep secret!)
4. Run the SQL from `supabase-setup.sql` in SQL Editor

### 2. Resend (Email)

1. Create account at [resend.com](https://resend.com)
2. Go to **API Keys** and create a new key
3. Get `RESEND_API_KEY`
4. Verify your domain for sending emails

### 3. Google reCAPTCHA v3

1. Go to [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. Register a new site (choose reCAPTCHA v3)
3. Get:
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` - Site key
   - `RECAPTCHA_SECRET_KEY` - Secret key

### 4. Twilio (Optional - WhatsApp)

1. Create account at [twilio.com](https://twilio.com)
2. Set up WhatsApp sandbox
3. Get:
   - `TWILIO_ACCOUNT_SID`
   - `TWILIO_AUTH_TOKEN`
   - `TWILIO_WHATSAPP_FROM` (e.g., whatsapp:+14155238886)
   - `TWILIO_WHATSAPP_TO` (your WhatsApp number)

---

## 📁 Project Structure

```
punithan-drone-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API Routes
│   │   │   └── consultation/  # Form submission endpoint
│   │   ├── privacy/           # Privacy Policy page
│   │   ├── terms/             # Terms of Service page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/
│   │   ├── sections/          # Page sections
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Industries.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Consultation.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/                # Reusable UI components
│   │   │   ├── AnimatedCounter.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   ├── WhatsAppButton.tsx
│   │   │   └── CookieConsent.tsx
│   │   └── providers/         # Context providers
│   │       └── RecaptchaProvider.tsx
│   ├── lib/                   # Utility functions
│   │   ├── constants.ts       # Site data & content
│   │   ├── supabase.ts        # Supabase client
│   │   ├── resend.ts          # Email functions
│   │   ├── utils.ts           # Helper functions
│   │   └── validations.ts     # Zod schemas
│   └── types/                 # TypeScript types
│       ├── database.ts        # Supabase types
│       └── index.ts           # Shared types
├── public/
│   ├── images/               # Image assets
│   └── videos/               # Video assets
├── .env.example              # Environment template
├── supabase-setup.sql        # Database schema
├── tailwind.config.ts        # Tailwind configuration
├── next.config.mjs           # Next.js configuration
└── package.json              # Dependencies
```

---

## 🎨 Customization

### Update Contact Information

Edit `src/lib/constants.ts`:

```typescript
export const CONTACT_INFO = {
  phone: "+91 98765 43210",
  email: "contact@yourdomain.com",
  whatsapp: "+919876543210",
  address: "Your City, State, India",
  dgcaLicense: "DGCA-XXXXX-XXXX",
};
```

### Update Services

Edit the `SERVICES` array in `src/lib/constants.ts`

### Update Portfolio Projects

Edit the `PROJECTS` array in `src/lib/constants.ts`

### Change Colors

Edit `tailwind.config.ts` to modify the gold accent color:

```typescript
colors: {
  gold: {
    400: "#YOUR_COLOR",
  },
},
```

---

## 📦 Required Assets

Place these files in the `/public` directory:

### Images
- `/images/hero-poster.jpg` - Hero section fallback image
- `/images/og-image.jpg` - Open Graph image (1200x630px)
- `/images/logo.png` - Logo image

### Videos
- `/videos/drone-hero.mp4` - Hero background video

### Favicons
- `/favicon.ico`
- `/apple-touch-icon.png`

---

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

### Other Platforms

Build the production version:

```bash
npm run build
npm start
```

---

## 🔒 Security Features

- ✅ HTTPS headers configured
- ✅ XSS protection
- ✅ CSRF protection via reCAPTCHA
- ✅ Input validation with Zod
- ✅ SQL injection protection via Supabase
- ✅ Environment variables for secrets
- ✅ Row Level Security on database

---

## 📝 Environment Variables Summary

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Yes | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes | Supabase public key |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes | Supabase admin key |
| `RESEND_API_KEY` | Yes | Resend email API key |
| `NOTIFICATION_EMAIL` | Yes | Email for notifications |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Yes | reCAPTCHA site key |
| `RECAPTCHA_SECRET_KEY` | Yes | reCAPTCHA secret key |
| `TWILIO_ACCOUNT_SID` | No | Twilio account SID |
| `TWILIO_AUTH_TOKEN` | No | Twilio auth token |
| `TWILIO_WHATSAPP_FROM` | No | Twilio WhatsApp number |
| `TWILIO_WHATSAPP_TO` | No | Your WhatsApp number |
| `NEXT_PUBLIC_SITE_URL` | No | Production URL |
| `NEXT_PUBLIC_PHONE` | No | Display phone number |
| `NEXT_PUBLIC_EMAIL` | No | Display email |
| `NEXT_PUBLIC_WHATSAPP` | No | WhatsApp number |
| `NEXT_PUBLIC_ADDRESS` | No | Display address |
| `NEXT_PUBLIC_DGCA_LICENSE` | No | DGCA license number |

---

## 🆘 Support

For issues or questions:
- Create an issue in the repository
- Contact the developer

---

**Built with ❤️ using Next.js 14, Tailwind CSS, and Framer Motion**
