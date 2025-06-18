# ServiceWize Landing Page

A modern, mobile-friendly landing page for ServiceWize - a field service management SaaS tool for small service businesses (plumbing, HVAC, electrical).

## 🚀 Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom ServiceWize colors
- **Forms**: React Hook Form with validation
- **Deployment**: Vercel-ready setup
- **Analytics**: Placeholder for Google Analytics/Mixpanel

## ✨ Features

- **🎯 Hero Section**: Bold branding with ServiceWize tagline and CTA
- **📱 Responsive Design**: Mobile-first approach with Tailwind CSS
- **🎨 Modern UI**: Clean, professional styling with smooth animations
- **📧 Email Capture**: React Hook Form with validation, ready for API integration
- **🔧 Reusable Components**: Modular architecture with TypeScript
- **📊 Analytics Ready**: Placeholder analytics functions for tracking
- **🔍 SEO Optimized**: Meta tags, Open Graph, and structured data

## 🏗️ Project Structure

```
ServiceWize/
├── components/           # Reusable React components
│   ├── Hero.tsx         # Hero section with CTA
│   ├── FeatureCard.tsx  # Feature display cards
│   ├── TestimonialCard.tsx # Customer testimonial
│   └── EmailForm.tsx    # Waitlist signup form
├── pages/               # Next.js pages
│   ├── _app.tsx        # Global app configuration
│   ├── _document.tsx   # HTML document structure
│   └── index.tsx       # Homepage
├── lib/                 # API and utility functions
│   └── api.ts          # API integration (Supabase ready)
├── utils/               # Helper utilities
│   └── analytics.ts    # Analytics tracking functions
├── types/               # TypeScript type definitions
│   └── index.ts        # Global types
├── styles/              # Global styles
│   └── globals.css     # Tailwind CSS and custom styles
└── public/             # Static assets
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect repository to Vercel**
2. **Deploy automatically** - Vercel will detect Next.js and configure automatically
3. **Environment variables** - Add any required environment variables in Vercel dashboard

### Manual Deployment

```bash
npm run build
# Deploy the .next folder to your hosting provider
```

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=ServiceWize

# Future API Integration
# NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
# CONVERTKIT_API_KEY=your_convertkit_key
```

### Tailwind Colors

Custom ServiceWize brand colors are configured in `tailwind.config.js`:

- **Primary**: `#2563eb` (Blue)
- **Secondary**: `#f59e0b` (Yellow/Orange)

## 📧 Form Integration

The email capture form is ready for integration with:

### Supabase (Recommended)

1. Uncomment Supabase code in `lib/api.ts`
2. Add environment variables
3. Create `waitlist` table in Supabase

### ConvertKit

1. Uncomment ConvertKit code in `lib/api.ts`
2. Add API key and form ID
3. Configure webhook endpoint

### Custom API

The form submission handler in `EmailForm.tsx` can be easily modified to work with any API endpoint.

## 📊 Analytics Integration

Analytics tracking is ready for:

- **Google Analytics**: Uncomment GA code in `utils/analytics.ts`
- **Mixpanel**: Uncomment Mixpanel code in `utils/analytics.ts`
- **Custom Analytics**: Modify `trackEvent` function

## 🎨 Customization

### Branding

- Update colors in `tailwind.config.js`
- Modify content in `pages/index.tsx`
- Replace placeholder images in `public/`

### Components

All components are modular and easily customizable:

- `Hero.tsx` - Main hero section
- `FeatureCard.tsx` - Service features
- `TestimonialCard.tsx` - Customer testimonials
- `EmailForm.tsx` - Waitlist signup

## 📱 Mobile Optimization

- Responsive design with Tailwind CSS
- Touch-friendly buttons and forms
- Optimized loading and performance
- Mobile-first development approach

## 🔍 SEO Features

- Meta tags and Open Graph
- Structured data ready
- Semantic HTML structure
- Optimized page titles and descriptions

## 🧪 Testing

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build test
npm run build
```

## 📝 License

© 2025 ServiceWize • Built by WozWize

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Ready to launch ServiceWize? 🚀**

This landing page is production-ready and optimized for conversions. Simply deploy to Vercel and start collecting signups! 