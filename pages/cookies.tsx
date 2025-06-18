import Head from 'next/head';
import MarketingLayout from '@/components/MarketingLayout';

export default function Cookies() {
  return (
    <>
      <Head>
        <title>Cookie Policy - ServiceWize</title>
        <meta name="description" content="ServiceWize cookie policy - how we use cookies and similar technologies." />
      </Head>

      <MarketingLayout>
        <main className="bg-gray-50">
          <section className="bg-white py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Cookie Policy
                </h1>
                <p className="text-xl text-gray-600">
                  How we use cookies and similar technologies
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  Last updated: [Date]
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="bg-gray-50 rounded-lg p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About Cookies</h2>
                  <p className="text-gray-600">
                    This Cookie Policy explains how ServiceWize uses cookies and similar technologies 
                    to recognize you when you visit our platform. It explains what these technologies 
                    are and why we use them, as well as your rights to control our use of them.
                  </p>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">What Are Cookies?</h3>
                    <p className="text-gray-600">
                      Cookies are small data files that are placed on your computer or mobile device 
                      when you visit a website. Cookies are widely used by website owners to make 
                      their websites work more efficiently and to provide reporting information.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">How We Use Cookies</h3>
                    <p className="text-gray-600">
                      We use cookies to improve your experience on our platform, remember your 
                      preferences, analyze how our service is used, and provide personalized content. 
                      This helps us deliver a better and more efficient service to you.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Types of Cookies We Use</h3>
                    <p className="text-gray-600">
                      We use essential cookies that are necessary for the operation of our service, 
                      as well as performance cookies that help us understand how you interact with 
                      our platform. We may also use functional cookies to remember your preferences.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Managing Cookies</h3>
                    <p className="text-gray-600">
                      You can control and/or delete cookies as you wish. Most web browsers 
                      automatically accept cookies, but you can modify your browser settings 
                      to decline cookies if you prefer. Please note that disabling cookies 
                      may affect the functionality of our service.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Questions About Cookies</h3>
                    <p className="text-gray-600">
                      If you have any questions about our use of cookies or other technologies, 
                      please contact us through our contact form. We're committed to transparency 
                      about how we use your data.
                    </p>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-500 text-center">
                    This is a placeholder cookie policy. A complete cookie policy will be 
                    implemented before the public launch of ServiceWize.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </MarketingLayout>
    </>
  );
} 