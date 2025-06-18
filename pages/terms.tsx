import Head from 'next/head';
import MarketingLayout from '@/components/MarketingLayout';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service - ServiceWize</title>
        <meta name="description" content="ServiceWize terms of service - the terms and conditions for using our platform." />
      </Head>

      <MarketingLayout>
        <main className="bg-gray-50">
          <section className="bg-white py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Terms of Service
                </h1>
                <p className="text-xl text-gray-600">
                  The terms and conditions for using ServiceWize
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  Last updated: [Date]
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="bg-gray-50 rounded-lg p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to ServiceWize</h2>
                  <p className="text-gray-600">
                    These Terms of Service govern your use of ServiceWize's platform and services. 
                    By using our services, you agree to be bound by these terms. Please read them 
                    carefully.
                  </p>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Acceptance of Terms</h3>
                    <p className="text-gray-600">
                      By accessing and using ServiceWize, you accept and agree to be bound by 
                      the terms and provision of this agreement. If you do not agree to abide 
                      by the above, please do not use this service.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Description</h3>
                    <p className="text-gray-600">
                      ServiceWize provides a cloud-based platform for service businesses to manage 
                      their operations, including scheduling, customer management, and invoicing. 
                      We strive to provide reliable and secure services to help grow your business.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">User Responsibilities</h3>
                    <p className="text-gray-600">
                      You are responsible for maintaining the confidentiality of your account 
                      credentials and for all activities that occur under your account. You agree 
                      to use the service in compliance with all applicable laws and regulations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Availability</h3>
                    <p className="text-gray-600">
                      We strive to maintain high availability of our services, but we cannot 
                      guarantee uninterrupted access. We may perform maintenance, updates, or 
                      modifications that may temporarily affect service availability.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Information</h3>
                    <p className="text-gray-600">
                      If you have any questions about these Terms of Service, please contact us 
                      through our contact form. We're committed to providing clear communication 
                      about our terms and policies.
                    </p>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-500 text-center">
                    This is a placeholder terms of service. Complete terms will be 
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