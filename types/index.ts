// Form Types
export interface WaitlistFormData {
  name: string;
  email: string;
}

// Feature Types
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: any; // React component type
  iconBgColor: string;
  iconColor: string;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
    avatar?: string;
  };
}

// SEO Types
export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

// API Response Types
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Analytics Event Types
export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
}

// Environment Variables
export interface EnvConfig {
  baseUrl: string;
  appName: string;
  isDevelopment: boolean;
  isProduction: boolean;
} 