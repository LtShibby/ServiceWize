import Head from 'next/head';
import MarketingLayout from '@/components/MarketingLayout';

export default function GDPR() {
  return (
    <>
      <Head>
        <title>GDPR Compliance - ServiceWize</title>
        <meta name="description" content="ServiceWize GDPR compliance information and your data protection rights." />
      </Head>

      <MarketingLayout>
        <main className="bg-gray-50">
          <section className="bg-white py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  GDPR Compliance
                </h1>
                <p className="text-xl text-gray-600">
                  Your data protection rights under GDPR
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  Last updated: [Date]
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="bg-gray-50 rounded-lg p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights Under GDPR</h2>
                  <p className="text-gray-600">
                    ServiceWize is committed to complying with the General Data Protection Regulation 
                    (GDPR) and ensuring that your personal data is protected. This page outlines your 
                    rights and how we handle your personal information in accordance with GDPR.
                  </p>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Right to Information</h3>
                    <p className="text-gray-600">
                      You have the right to know what personal data we collect, how we use it, 
                      how long we store it, and who we share it with. Our Privacy Policy provides 
                      detailed information about our data processing activities.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Right of Access</h3>
                    <p className="text-gray-600">
                      You have the right to request access to your personal data and receive a copy 
                      of the personal information we hold about you. We will provide this information 
                      in a structured, commonly used, and machine-readable format.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Right to Rectification</h3>
                    <p className="text-gray-600">
                      If your personal data is inaccurate or incomplete, you have the right to have 
                      it corrected or completed. You can update most of your personal information 
                      directly through your account settings.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Right to Erasure</h3>
                    <p className="text-gray-600">
                      Also known as the "right to be forgotten," you can request that we delete 
                      your personal data under certain circumstances. We will honor such requests 
                      unless we have legitimate grounds for retaining the data.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Portability</h3>
                    <p className="text-gray-600">
                      You have the right to receive your personal data in a structured format 
                      and transmit it to another data controller. We provide export functionality 
                      to help you exercise this right.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Exercising Your Rights</h3>
                    <p className="text-gray-600">
                      To exercise any of your GDPR rights, please contact us through our contact form. 
                      We will respond to your request within one month and provide clear information 
                      about the actions we have taken.
                    </p>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-500 text-center">
                    This is a placeholder GDPR compliance page. Complete GDPR compliance 
                    documentation will be implemented before the public launch of ServiceWize.
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