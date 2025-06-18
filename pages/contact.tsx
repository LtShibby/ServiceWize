import Head from 'next/head';
import MarketingLayout from '@/components/MarketingLayout';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - ServiceWize</title>
        <meta name="description" content="Get in touch with the ServiceWize team. We're here to help you transform your service business." />
      </Head>

      <MarketingLayout>
        <main className="bg-gray-50">
          {/* Hero Section */}
          <section className="bg-white py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Get In Touch
                </h1>
                <p className="text-xl text-gray-600">
                  Ready to transform your service business? We'd love to hear from you.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Let's Start a Conversation
                </h2>
                
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Whether you're interested in learning more about ServiceWize, need support, 
                  or want to discuss how we can help streamline your service business operations, 
                  we're here to help.
                </p>

                <div className="space-y-4 mb-8">
                  <p className="text-gray-600">
                    Questions about features, pricing, or implementation?
                  </p>
                  <p className="text-gray-600">
                    Need a demo or want to discuss your specific business needs?
                  </p>
                  <p className="text-gray-600">
                    Looking for technical support or have feedback to share?
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => window.open('https://wozwize.com/contact', '_blank')}
                    className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center justify-center"
                  >
                    Contact Us Now
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                  <a
                    href="/dashboard"
                    className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center justify-center"
                  >
                    Explore Dashboard
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </a>
                </div>

                <p className="text-sm text-gray-500 mt-4">
                  You'll be redirected to our contact form where you can share details about your needs.
                </p>
              </div>
            </div>
          </section>

          {/* Additional Info */}
          <section className="bg-white py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mx-auto mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Response</h3>
                  <p className="text-gray-600">We typically respond to inquiries within 24 hours</p>
                </div>

                <div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mx-auto mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Support</h3>
                  <p className="text-gray-600">Get help from our experienced team</p>
                </div>

                <div>
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 mx-auto mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No Obligation</h3>
                  <p className="text-gray-600">Free consultation and honest advice</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </MarketingLayout>
    </>
  );
} 