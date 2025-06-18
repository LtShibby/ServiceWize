import Image from 'next/image';
import { trackButtonClick } from '@/utils/analytics';

interface HeroProps {
  onCTAClick?: () => void;
}

export default function Hero({ onCTAClick }: HeroProps) {
  const handleCTAClick = () => {
    trackButtonClick('join_waitlist', 'hero');
    window.open('https://wozwize.com/contact', '_blank');
  };

  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-5xl lg:text-7xl font-bold mb-4">ServiceWize</h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded"></div>
          </div>
          
          {/* Tagline */}
          <h2 className="text-xl lg:text-3xl font-light mb-8 text-blue-100">
            Smart Scheduling & Job Management for Service Pros
          </h2>
          
          {/* Description */}
          <p className="text-lg lg:text-xl mb-12 text-blue-100 max-w-2xl mx-auto">
            Streamline your service business with intelligent scheduling, customer management, and instant invoicing. Perfect for plumbing, HVAC, electrical, and more.
          </p>
          
          {/* CTA Button */}
          <button 
            onClick={handleCTAClick}
            className="btn-secondary"
          >
            Contact Us to Get Started
          </button>
          
          {/* Dashboard Preview */}
          <div className="mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 lg:p-8 max-w-4xl mx-auto">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/dashboardPreview.png"
                  alt="ServiceWize Dashboard Preview - Smart scheduling and job management interface"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              <p className="text-center text-blue-100 mt-4 text-sm lg:text-base">
                See ServiceWize in action - streamlined scheduling, customer management, and invoicing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 