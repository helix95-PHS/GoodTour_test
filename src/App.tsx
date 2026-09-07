import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CompanyOverview } from './components/CompanyOverview';
import { B2BCorporateSection } from './components/B2BCorporateSection';
import { ServicesSection } from './components/ServicesSection';
import { PartnersSection } from './components/PartnersSection';
import { LocationsSection } from './components/LocationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [inquiryService, setInquiryService] = useState<string | undefined>(undefined);

  const scrollToContact = (serviceType?: string) => {
    if (serviceType) {
      setInquiryService(serviceType);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesElem = document.getElementById('services');
    if (servicesElem) {
      servicesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForInquiry = (serviceTitle: string) => {
    setInquiryService(serviceTitle);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-emerald-500 selection:text-white">
      {/* Header with Navigation & Official Headletter Address/Contact */}
      <Header onOpenContact={() => scrollToContact()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenContact={() => scrollToContact('기업 업무 출장 원스톱 서비스 (항공·호텔·렌터카 통합)')}
          onExploreServices={scrollToServices}
        />
        <CompanyOverview />
        <B2BCorporateSection onOpenContact={scrollToContact} />
        <ServicesSection onSelectServiceForInquiry={handleSelectServiceForInquiry} />
        <PartnersSection />
        <LocationsSection />
        <ContactSection prefilledService={inquiryService} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
