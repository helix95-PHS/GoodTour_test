import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Briefcase,
  FileCheck,
  PlaneTakeoff,
  Receipt,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Globe2,
  CreditCard,
  UserCheck,
  ArrowRight,
  Sparkles,
  AlertCircle,
  FileText,
  Hotel,
  Luggage,
  Layers
} from 'lucide-react';
import { B2B_SERVICES, VISA_SERVICES, B2B_CORPORATE_BENEFITS } from '../data/companyData';
import planeImg from '../assets/images/b2b_airplane_flight_1788309424901.jpg';
import passportVisaImg from '../assets/images/passport_visa_stamps_1788309408574.jpg';
import airportImg from '../assets/images/airport_business_terminal_1788309439234.jpg';
import hotelImg from '../assets/images/hotel_business_executive_1788309452067.jpg';

// Overseas Business Travel Omnibus Visual Scenes (1:1 Ratio)
const OMNIBUS_TRAVEL_STEPS = [
  {
    id: 'flight',
    tag: '항공권 출도착',
    title: '전세계 항공권 수배',
    desc: '상용 노선 실시간 발권',
    icon: PlaneTakeoff,
    image: planeImg,
    alt: '비즈니스 항공기 출도착 및 비행'
  },
  {
    id: 'visa',
    tag: '비자 신속 발급',
    title: '상용·전자 비자 대행',
    desc: '여권 사증 & 공식 스탬프 승인',
    icon: FileCheck,
    image: passportVisaImg,
    alt: '세계 지도 위 펼쳐진 여권과 입국 사증 및 출입국 도장'
  },
  {
    id: 'airport',
    tag: '공항 출국 수속',
    title: '패스트트랙 & 보딩',
    desc: '탑승 수속 및 라운지 연계',
    icon: Luggage,
    image: airportImg,
    alt: '국제공항 출국 탑승 수속 및 비즈니스 출장'
  },
  {
    id: 'hotel',
    tag: '호텔 체크인',
    title: '특급 비즈니스 호텔',
    desc: '행사장 인접 숙소 예약',
    icon: Hotel,
    image: hotelImg,
    alt: '해외 특급 비즈니스 호텔 룸 및 체크인'
  }
];

interface B2BCorporateSectionProps {
  onOpenContact: (serviceType?: string) => void;
}

export const B2BCorporateSection: React.FC<B2BCorporateSectionProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'flight-process' | 'visa-service'>('flight-process');
  const [selectedCountry, setSelectedCountry] = useState<string>(VISA_SERVICES[0].country);
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

  const activeVisa = VISA_SERVICES.find((v) => v.country === selectedCountry) || VISA_SERVICES[0];

  return (
    <section id="b2b-travel" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>B2B Corporate Travel & Visa Center</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-4">
            기업 업무 출장과 상용 비자를 한번에, <br className="hidden sm:inline" />
            <span className="text-emerald-400">좋은여행사 B2B 전담 솔루션</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            복잡한 출장 규정, 까다로운 입국 비자, 시시각각 변하는 비행 스케줄과 법인 정산까지 — <br className="hidden md:inline" />
            28년 노하우의 법인 전담 매니저가 귀사 임직원의 출장을 처음부터 끝까지 원스톱으로 책임집니다.
          </p>
        </div>

        {/* Section Switcher Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-xl bg-slate-800 border border-slate-700 max-w-lg w-full">
            <button
              onClick={() => setActiveTab('flight-process')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'flight-process'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <PlaneTakeoff className="w-4 h-4 shrink-0" />
              <span className="text-center leading-tight">
                기업 업무 출장
                <br />
                <span className="text-[11px] sm:text-xs font-normal opacity-90">(전세계 항공권 매니지먼트)</span>
              </span>
            </button>
            <button
              onClick={() => setActiveTab('visa-service')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'visa-service'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileCheck className="w-4 h-4 shrink-0" />
              <span className="text-center leading-tight">
                국가별 상용·전자 비자
                <br />
                <span className="text-[11px] sm:text-xs font-normal opacity-90">(신속 대행 발급 센터)</span>
              </span>
            </button>
          </div>
        </div>

        {/* Tab 1: Corporate Business Travel & 5-Step Process */}
        {activeTab === 'flight-process' && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-12"
          >
            {/* Top Showcase: Hero Card with Image */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xl">
              {/* Left: Overseas Business Travel 4-Stage Omnibus Collage (Equal 1:1 Grid) */}
              <div className="lg:col-span-5 relative p-3 sm:p-4 bg-slate-950/80 border-b lg:border-b-0 lg:border-r border-slate-700/70 flex flex-col justify-between">
                {/* Omnibus Header Badge */}
                <div className="flex items-center justify-between gap-2 px-1 py-1 mb-2.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                    <Layers className="w-3.5 h-3.5" />
                    <span>해외 출장 원스톱 여정 옴니버스</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium hidden sm:inline">
                    항공 · 비자 · 공항 · 호텔
                  </span>
                </div>

                {/* 2x2 Equal-Sized 1:1 Photo Mosaic Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  {OMNIBUS_TRAVEL_STEPS.map((step) => {
                    const IconComp = step.icon;
                    const isHovered = hoveredStep === step.id;

                    return (
                      <div
                        key={step.id}
                        onMouseEnter={() => setHoveredStep(step.id)}
                        onMouseLeave={() => setHoveredStep(null)}
                        className={`relative aspect-square rounded-xl overflow-hidden group cursor-pointer border transition-all duration-300 ${
                          isHovered
                            ? 'border-emerald-400 ring-2 ring-emerald-500/30 shadow-lg'
                            : 'border-slate-700/80 hover:border-slate-500'
                        }`}
                      >
                        <img
                          src={step.image}
                          alt={step.alt}
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        {/* Dark Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-slate-950/20 group-hover:from-slate-950/95 transition-colors" />

                        {/* Top Tag Badge */}
                        <div className="absolute top-2 left-2 z-10">
                          <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold px-1.5 py-0.5 rounded bg-slate-900/85 backdrop-blur-sm border border-slate-700/80 text-emerald-300 group-hover:border-emerald-400/80">
                            <IconComp className="w-3 h-3" />
                            {step.tag}
                          </span>
                        </div>

                        {/* Bottom Text */}
                        <div className="absolute bottom-2 left-2 right-2 z-10">
                          <div className="text-[11px] sm:text-xs font-bold text-white leading-tight group-hover:text-emerald-300 transition-colors">
                            {step.title}
                          </div>
                          <div className="text-[9px] sm:text-[10px] text-slate-300 font-normal truncate mt-0.5 opacity-85 group-hover:opacity-100">
                            {step.desc}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom One-line Guarantee */}
                <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 px-1">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    28년 법인 출장 전담 1:1 케어
                  </span>
                  <span className="text-[10px] text-emerald-400/90 font-medium">실시간 통합 수배</span>
                </div>
              </div>

              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Corporate Travel Specialist</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    기업의 시간과 비용을 아끼는 스마트 출장 파트너
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    스카이팀(대한항공, 델타 등), 스타얼라이언스(아시아나, 유나이티드 등)의 상용 노선 블록을 활용하여 출장 임직원에게 가장 유리한 비즈니스 스케줄을 제시합니다.
                    갑작스러운 미팅 연기나 일정 변경 시에도 신속한 재발권과 24시간 긴급 지원으로 업무 공백을 방지합니다.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <div className="bg-slate-900/70 p-3 rounded-xl border border-slate-700/60 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-white block">법인 우대 운임 및 좌석 배정</span>
                        <span className="text-[11px] text-slate-400">사전 좌석 지정, 수하물 규정 안내 및 마일리지 적립</span>
                      </div>
                    </div>
                    <div className="bg-slate-900/70 p-3 rounded-xl border border-slate-700/60 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-white block">투명한 세금계산서 & 후불 정산</span>
                        <span className="text-[11px] text-slate-400">출장 품의서용 비교 견적서 및 영수증 증빙 원클릭 제공</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700/80 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs text-slate-400">
                    전담 기업 등록 시 상시 우선 발권 및 할인 혜택 제공
                  </span>
                  <button
                    onClick={() => onOpenContact('B2B 기업 업무 출장 & 항공권')}
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>출장 견적 및 제휴 문의</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* 5-Step Process Row */}
            <div>
              <div className="text-center mb-6">
                <h4 className="text-lg font-bold text-white">
                  좋은여행사 B2B 업무 출장 원스톱 프로세스
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  견적 요청부터 출장 완료 정산서 발급까지 5단계 체계적 관리
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {B2B_SERVICES.map((step, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 flex flex-col justify-between hover:border-emerald-500/50 transition-colors relative"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-extrabold text-emerald-400 font-mono">
                          STEP {step.step}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                      </div>
                      <h5 className="text-xs sm:text-sm font-bold text-white mb-1.5">
                        {step.title}
                      </h5>
                      <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4 Corporate Benefits Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {B2B_CORPORATE_BENEFITS.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-5 hover:bg-slate-800/80 transition-all"
                >
                  <span className="inline-block text-[10px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded-full mb-3">
                    {benefit.badge}
                  </span>
                  <h4 className="text-sm font-bold text-white mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-xs font-medium text-slate-400 mb-2">
                    {benefit.subtitle}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tab 2: Visa Service Center */}
        {activeTab === 'visa-service' && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Country Selector Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
              {VISA_SERVICES.map((visa) => {
                const isSelected = visa.country === selectedCountry;
                return (
                  <button
                    key={visa.country}
                    onClick={() => setSelectedCountry(visa.country)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-600 border-emerald-500 text-white shadow-md font-semibold'
                        : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-600 font-medium'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <Globe2 className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-emerald-400'}`} />
                      {isSelected && <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded">선택됨</span>}
                    </div>
                    <div className="text-xs sm:text-sm font-bold truncate">
                      {visa.country}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Visa Detail Display */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2.5 py-1 rounded-full">
                      상용 / 전자 비자 전문 대행
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {activeVisa.country} 비즈니스 출장 및 상용 비자
                  </h3>

                  <div className="space-y-3 bg-slate-900/60 p-4 sm:p-5 rounded-xl border border-slate-700/60 text-xs sm:text-sm">
                    <div className="flex items-start gap-3">
                      <FileText className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white">주요 비자 종류: </strong>
                        <span className="text-slate-300">{activeVisa.types}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white">소요 기간 및 처리: </strong>
                        <span className="text-slate-300">{activeVisa.period}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                      좋은여행사 비자 서비스 강점
                    </h4>
                    <div className="space-y-2">
                      {activeVisa.features.map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-slate-900/90 border border-slate-700/80 rounded-xl p-5 sm:p-6 space-y-4">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>비자 신청 전 유의사항 사전 체크</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    여권 유효기간은 출국일 기준 <strong className="text-white">최소 6개월 이상</strong> 남아있어야 하며, 국가별 초청장 규격 및 사진 규격이 상이하므로 전문 플래너와 사전 서류 검토를 권장합니다.
                  </p>

                  <div className="pt-2 border-t border-slate-800 space-y-2">
                    <div className="text-[11px] text-slate-400">
                      • 임직원 단체 비자 일괄 접수 가능
                    </div>
                    <div className="text-[11px] text-slate-400">
                      • 긴급 출장용 특급/당일 비자 수배 지원
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenContact(`${activeVisa.country} 상용 비자 대행`)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold py-3 px-4 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>{activeVisa.country} 비자 신청 및 상담</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
