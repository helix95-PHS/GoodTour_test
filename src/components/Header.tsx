import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeaderProps {
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Utility Bar with Official Headletter details */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              {COMPANY_INFO.headOffice.address}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.headOffice.tel}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              T. {COMPANY_INFO.headOffice.tel}
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <a
              href={`mailto:${COMPANY_INFO.headOffice.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors hidden sm:flex"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              {COMPANY_INFO.headOffice.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar with Good Tour Identity */}
      <nav
        className={`px-4 lg:px-8 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3.5 border-b border-slate-200'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo - Modeled directly from Good Tour Headletter */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3.5 text-left group cursor-pointer focus:outline-none"
            aria-label="Good Tour 홈으로 이동"
          >
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#0f3b5c] font-sans">
                  GOOD TOUR
                </span>
                <span className="text-sm sm:text-base font-bold text-[#1e824c]">
                  (주)좋은여행사
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium tracking-wider uppercase">
                Global Travel & MICE Solution
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('b2b-travel')}
              className="text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-md transition-colors cursor-pointer"
            >
              B2B 출장 & 비자
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm font-semibold text-slate-700 hover:text-emerald-700 transition-colors cursor-pointer"
            >
              전세계 항공권
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-semibold text-slate-700 hover:text-emerald-700 transition-colors cursor-pointer"
            >
              회사 소개
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm font-semibold text-slate-700 hover:text-emerald-700 transition-colors cursor-pointer"
            >
              주요 사업 & 특화 분야
            </button>
            <button
              onClick={() => scrollToSection('partners')}
              className="text-sm font-semibold text-slate-700 hover:text-emerald-700 transition-colors cursor-pointer"
            >
              글로벌 파트너십
            </button>
            <button
              onClick={() => scrollToSection('locations')}
              className="text-sm font-semibold text-slate-700 hover:text-emerald-700 transition-colors cursor-pointer"
            >
              오시는 길
            </button>
          </div>

          {/* CTA Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 bg-[#0f3b5c] hover:bg-[#0b2b44] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all shadow-sm hover:shadow active:scale-[0.98] cursor-pointer"
            >
              <span>상담 및 견적 문의</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-slate-200 pb-4 space-y-2">
            <button
              onClick={() => scrollToSection('b2b-travel')}
              className="block w-full text-left px-3 py-2.5 rounded-md text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100"
            >
              B2B 기업 출장 & 비자
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-3 py-2.5 rounded-md text-sm font-medium text-slate-800 hover:bg-slate-50"
            >
              전세계 항공권
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2.5 rounded-md text-sm font-medium text-slate-800 hover:bg-slate-50"
            >
              회사 소개
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-3 py-2.5 rounded-md text-sm font-medium text-slate-800 hover:bg-slate-50"
            >
              주요 사업 & 특화 분야
            </button>
            <button
              onClick={() => scrollToSection('partners')}
              className="block w-full text-left px-3 py-2.5 rounded-md text-sm font-medium text-slate-800 hover:bg-slate-50"
            >
              글로벌 파트너십
            </button>
            <button
              onClick={() => scrollToSection('locations')}
              className="block w-full text-left px-3 py-2.5 rounded-md text-sm font-medium text-slate-800 hover:bg-slate-50"
            >
              오시는 길
            </button>
            <div className="pt-2 px-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#0f3b5c] text-white px-4 py-3 rounded-lg text-sm font-medium"
              >
                <span>상담 및 견적 문의</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
