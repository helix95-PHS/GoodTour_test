import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, CheckCircle2, ChevronRight, Sparkles, Building, Plane, Luggage, Award, Compass, Hotel, Car } from 'lucide-react';
import { CORE_SERVICES } from '../data/companyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForInquiry?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForInquiry }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(CORE_SERVICES[0].id);

  const activeService = CORE_SERVICES.find((s) => s.id === selectedServiceId) || CORE_SERVICES[0];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'b2b-corporate':
        return <Briefcase className="w-5 h-5" />;
      case 'flight-package':
        return <Plane className="w-5 h-5" />;
      case 'hotel-booking':
        return <Hotel className="w-5 h-5" />;
      case 'car-rental':
        return <Car className="w-5 h-5" />;
      case 'mice':
        return <Building className="w-5 h-5" />;
      case 'package-tour':
        return <Luggage className="w-5 h-5" />;
      case 'corporate-incentive':
        return <Award className="w-5 h-5" />;
      case 'theme':
        return <Sparkles className="w-5 h-5" />;
      default:
        return <Briefcase className="w-5 h-5" />;
    }
  };

  const getShortTabTitle = (service: ServiceItem) => {
    switch (service.id) {
      case 'b2b-corporate':
        return '기업 업무 출장';
      case 'flight-package':
        return '국내외 항공 예약 및 발권';
      case 'hotel-booking':
        return '국내외 호텔 예약';
      case 'car-rental':
        return '렌터카 예약';
      case 'mice':
        return 'MICE & 학회';
      case 'package-tour':
        return '국내외 패키지 여행';
      case 'corporate-incentive':
        return '기업 인센티브';
      case 'theme':
        return '시그니처 테마';
      default:
        return service.title.split('&')[0].trim();
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0f3b5c] text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Key Business & Specialties</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            좋은여행사만의 <span className="text-[#1e824c]">핵심 업무 및 특화 사업</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed break-keep">
            (주)좋은여행사는 B2B 기업 출장 &amp; 비자 대행부터 국내외 항공권 및 호텔 예약, MICE 학회, <br className="hidden sm:inline" />
            국내외 패키지 여행 및 기업 인센티브, 시그니처 테마여행까지 원스톱으로 제공해 드립니다.
          </p>
        </div>

        {/* Tab Selection Bar: 4 per row, 2 rows total with comfortable enlarged sizing */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-3.5 lg:gap-4 max-w-6xl mx-auto mb-12">
          {CORE_SERVICES.map((service) => {
            const isSelected = service.id === selectedServiceId;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedServiceId(service.id)}
                className={`flex items-center gap-3 sm:gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl text-left transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-[#0f3b5c] text-white border-[#0f3b5c] shadow-md ring-2 ring-[#0f3b5c]/20 font-semibold'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 hover:shadow-xs font-medium'
                }`}
              >
                <div
                  className={`p-2 sm:p-2.5 rounded-xl shrink-0 transition-colors ${
                    isSelected ? 'bg-white/10 text-emerald-400' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {getServiceIcon(service.id)}
                </div>
                <div className="overflow-hidden min-w-0 flex-1" title={getShortTabTitle(service)}>
                  <div
                    className={`text-[11px] sm:text-xs font-medium truncate mb-0.5 ${
                      isSelected ? 'text-emerald-300' : 'text-slate-400'
                    }`}
                  >
                    {service.id === 'b2b-corporate' ? '통합 출장 솔루션' : service.badge}
                  </div>
                  <div
                    className={`text-[13px] sm:text-sm lg:text-[15px] font-bold truncate tracking-tight ${
                      isSelected ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {getShortTabTitle(service)}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Featured Service Detail Display Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Image Col */}
            <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-[420px] bg-slate-100">
              {activeService.imageSrc && (
                <img
                  src={activeService.imageSrc}
                  alt={activeService.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              )}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-full">
                  <Sparkles className="w-3.5 h-3.5" />
                  {activeService.badge}
                </span>
              </div>
            </div>

            {/* Content Col */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase">
                  {activeService.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1 mb-2">
                  {activeService.id === 'b2b-corporate' ? (
                    <>
                      <span>기업 업무 출장 원스톱 서비스</span>{' '}
                      <br className="hidden sm:inline" />
                      <span className="text-lg sm:text-xl text-[#0f3b5c] font-bold">
                        (항공 · 호텔 · 렌터카 통합 솔루션)
                      </span>
                    </>
                  ) : (
                    activeService.title
                  )}
                </h3>
                <p className="text-sm font-medium text-slate-500 mb-5">
                  {activeService.subtitle}
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  {activeService.description}
                </p>

                {/* Key Highlights Checklist */}
                <div className="space-y-2.5 mb-8">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    주요 수행 역량 및 서비스 특징
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeService.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
                <div className="text-xs text-slate-500">
                  맞춤 일정 기획 및 단체 전담 견적 상담 가능
                </div>
                {onSelectServiceForInquiry && (
                  <button
                    onClick={() => onSelectServiceForInquiry(activeService.title)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0f3b5c] hover:text-emerald-700 transition-colors cursor-pointer"
                  >
                    <span>이 분야 문의하기</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 4 Cards Overview for Instant Scannability */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CORE_SERVICES.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedServiceId(item.id)}
              className={`p-5 rounded-xl border bg-white transition-all cursor-pointer ${
                item.id === selectedServiceId
                  ? 'border-emerald-500 shadow-sm ring-1 ring-emerald-500'
                  : 'border-slate-200 hover:border-slate-300 hover:shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                  {item.badge}
                </span>
                <span className="text-emerald-600">{getServiceIcon(item.id)}</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1.5">
                {item.title}
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
