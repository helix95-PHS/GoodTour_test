import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Compass, Award, Globe, Building2, CheckCircle2 } from 'lucide-react';
import heroBanner from '../assets/images/goodtour_hero_banner_1788266553298.jpg';
import { COMPANY_HIGHLIGHTS } from '../data/companyData';

interface HeroProps {
  onOpenContact: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onExploreServices }) => {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      {/* Background Hero Image with Deep Contrast Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Good Tour 글로벌 여행 배경"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse-slow brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-slate-900/60" />
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="max-w-3xl">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <Compass className="w-4 h-4 text-emerald-400" />
            <span>B2B 기업 출장 · 상용 비자 & MICE 전문 여행사</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-extrabold tracking-tight leading-tight text-white mb-6"
          >
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-100 font-bold mb-1.5 sm:mb-2 whitespace-nowrap">
              성공적인 비즈니스와 글로벌 여정을 위한
            </span>
            <span className="text-3xl sm:text-4xl lg:text-5xl text-emerald-400">
              B2B 기업 출장 & 맞춤 여행
            </span>{' '}
            <span className="text-3xl sm:text-4xl lg:text-5xl">파트너</span>
          </motion.h1>

          {/* Subtitle description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 max-w-2xl"
          >
            <strong className="text-white font-semibold">(주)좋은여행사 (GOOD TOUR)</strong>는
            B2B 기업 출장 & 비자 대행부터 전세계 항공권, MICE 학회, 패키지 여행, 기업 인센티브, 시그니처 테마여행까지 <br className="hidden sm:inline" />
            원스톱으로 제공합니다.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
            >
              <span>B2B 출장 & 비자 상담 신청</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onExploreServices}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium px-6 py-3.5 rounded-lg backdrop-blur-sm transition-all cursor-pointer"
            >
              <span>주요 특화 사업 보기</span>
            </button>
          </motion.div>
        </div>

        {/* Highlights Row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {COMPANY_HIGHLIGHTS.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800/70 border border-slate-700/60 rounded-xl p-4 sm:p-5 backdrop-blur-sm hover:border-emerald-500/40 transition-colors"
            >
              <div className="flex items-baseline gap-1 mb-1.5">
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400">
                  {item.number}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-300">
                  {item.unit}
                </span>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white mb-1">
                {item.label}
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-400 line-clamp-2">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
