import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface MarketingLayoutProps {
  children: ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
} 