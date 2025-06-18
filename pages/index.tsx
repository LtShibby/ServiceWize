import Head from 'next/head';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import EmailForm from '@/components/EmailForm';
import { Feature, Testimonial } from '@/types';

// Feature data
const features: Feature[] = [
  {
    id: 'scheduling',
    title: 'Easy Scheduling',
    description: 'Drag-and-drop scheduling with real-time updates. Optimize routes and manage your team\'s time efficiently.',
    icon: CalendarIcon,
    iconBgColor: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    id: 'crm',
    title: 'Customer CRM',
    description: 'Keep detailed customer records, service history, and communication logs all in one place.',
    icon: UsersIcon,
    iconBgColor: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    id: 'invoicing',
    title: 'Instant Invoicing',
    description: 'Generate professional invoices on-site and get paid faster with integrated payment processing.',
    icon: DocumentIcon,
    iconBgColor: 'bg-yellow-100',
    iconColor: 'text-yellow-600'
  }
];

// Testimonial data
const testimonial: Testimonial = {
  id: 'mike-rodriguez',
  quote: 'ServiceWize has completely transformed how we manage our plumbing business. What used to take hours of paperwork now takes minutes. Our customers love the professional invoices and we\'re booking 30% more jobs!',
  author: {
    name: 'Mike Rodriguez',
    title: 'Owner',
    company: 'Rodriguez Plumbing Services'
  }
};

// Icon components
function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

export default function Home() {
  const seoData = {
    title: 'ServiceWize - Smart Scheduling & Job Management for Service Pros',
    description: 'Streamline your service business with intelligent scheduling, customer management, and instant invoicing. Perfect for plumbing, HVAC, electrical, and more.',
    keywords: 'field service management, scheduling software, service business, plumbing software, HVAC software, electrical contractor software',
    url: 'https://servicewize.com',
    image: 'https://servicewize.com/og-image.jpg'
  };

  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.url} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.image} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={seoData.url} />
        <meta property="twitter:title" content={seoData.title} />
        <meta property="twitter:description" content={seoData.description} />
        <meta property="twitter:image" content={seoData.image} />

        <link rel="canonical" href={seoData.url} />
      </Head>

      <main className="bg-gray-50">
        {/* Hero Section */}
        <Hero onCTAClick={scrollToWaitlist} />

        {/* Features Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Everything You Need to Run Your Service Business
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Powerful tools designed specifically for field service professionals
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature) => (
                <FeatureCard key={feature.id} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section
        <section className="section-padding bg-gray-100">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <TestimonialCard testimonial={testimonial} />
            </div>
          </div>
        </section> */}

        {/* Email Capture Form */}
        <div id="waitlist">
          <EmailForm />
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="container-custom text-center">
            <p className="text-gray-400">
              © 2025 ServiceWize • Built by WozWize
            </p>
          </div>
        </footer>
      </main>
    </>
  );
} 