import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { WaitlistFormData } from '@/types';
import { submitWaitlistForm } from '@/lib/api';
import { trackFormSubmission } from '@/utils/analytics';

interface EmailFormProps {
  title?: string;
  description?: string;
  className?: string;
}

export default function EmailForm({ 
  title = "Ready to Grow Your Service Business?",
  description = "Join our waitlist and be the first to experience the future of field service management.",
  className = ""
}: EmailFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<WaitlistFormData>();

  const onSubmit = async (data: WaitlistFormData) => {
    setIsSubmitting(true);
    setSubmitMessage(null);
    
    try {
      const result = await submitWaitlistForm(data);
      
      if (result.success) {
        setSubmitMessage(result.message || 'Thank you for joining our waitlist!');
        trackFormSubmission('waitlist', data);
        reset();
      } else {
        setSubmitMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`section-padding bg-blue-600 ${className}`}>
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {description}
          </p>
          
          {submitMessage && (
            <div className={`mb-6 p-4 rounded-lg ${
              submitMessage.includes('Thank you') || submitMessage.includes('Success')
                ? 'bg-green-100 text-green-800 border border-green-200'
                : 'bg-red-100 text-red-800 border border-red-200'
            }`}>
              {submitMessage}
            </div>
          )}
          
          <form 
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-lg p-6 lg:p-8 shadow-lg"
          >
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { 
                    required: 'Name is required',
                    minLength: { value: 2, message: 'Name must be at least 2 characters' }
                  })}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.name ? 'border-red-300' : 'border-gray-300'
                  }`}
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.email ? 'border-red-300' : 'border-gray-300'
                  }`}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
            </button>
            
            <p className="text-sm text-gray-500 mt-4">
              We'll never spam you. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
} 