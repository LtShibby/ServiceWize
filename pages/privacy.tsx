import Head from 'next/head';
import MarketingLayout from '@/components/MarketingLayout';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - ServiceWize</title>
        <meta name="description" content="ServiceWize privacy policy - how we collect, use, and protect your personal information." />
      </Head>

      <MarketingLayout>
        <main className="bg-gray-50">
          <section className="bg-white py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Privacy Policy
                </h1>
                <p className="text-xl text-gray-600">
                  How we collect, use, and protect your information
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  Last updated: [Date]
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="bg-gray-50 rounded-lg p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy Matters</h2>
                  <p className="text-gray-600">
                    At ServiceWize, we are committed to protecting your privacy and ensuring the security 
                    of your personal information. This Privacy Policy explains how we collect, use, 
                    and safeguard your data when you use our services.
                  </p>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Information We Collect</h3>
                    <p className="text-gray-600">
                      We collect information that you provide directly to us, such as when you create 
                      an account, use our services, or contact us for support. This may include your 
                      name, email address, phone number, and business information.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">How We Use Your Information</h3>
                    <p className="text-gray-600">
                      We use the information we collect to provide, maintain, and improve our services, 
                      communicate with you, and ensure the security of our platform. We do not sell 
                      or rent your personal information to third parties.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Security</h3>
                    <p className="text-gray-600">
                      We implement appropriate technical and organizational measures to protect your 
                      personal information against unauthorized access, alteration, disclosure, or 
                      destruction. Your data is encrypted both in transit and at rest.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h3>
                    <p className="text-gray-600">
                      If you have any questions about this Privacy Policy or our data practices, 
                      please contact us through our contact form. We're here to help and ensure 
                      your privacy is protected.
                    </p>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-500 text-center">
                    This is a placeholder privacy policy. A complete privacy policy will be 
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