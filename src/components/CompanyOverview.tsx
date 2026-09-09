import React from 'react';
import { motion } from 'motion/react';
import { Building2, Calendar, User, MapPin, Sparkles, HeartHandshake, ShieldCheck, Target, Layers } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const CompanyOverview: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>About GOOD TOUR</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            신뢰와 차별화된 기획으로 완성하는 <br className="hidden sm:inline" />
            <span className="text-[#0f3b5c]">(주)좋은여행사</span>를 소개합니다
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            (주)좋은여행사(GOOD TOUR)는 2013년 설립 이래, 30년 여행업 노하우를 가진 베테랑 인력들이 <br className="hidden sm:inline" />
            고객 중심의 고품격 MICE, 특화 테마여행, 법인 및 개인 맞춤 솔루션을 원스톱으로 제공하고 있습니다.
          </p>
        </div>

        {/* 2-Column Grid: Company Specs Card & Value Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Company Specification Card */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-3 pb-5 border-b border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-[#0f3b5c] text-white flex items-center justify-center font-bold text-lg">
                  G
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    주식회사 좋은여행사
                  </h3>
                  <p className="text-xs font-semibold text-[#1e824c] tracking-wide">
                    GOOD TOUR Co., Ltd.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3 text-sm">
                  <Calendar className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-700">설립일: </span>
                    <span className="text-slate-600">2013년 8월 26일 (10년 이상 신뢰 구축)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <User className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-700">대표이사: </span>
                    <span className="text-slate-600">서진경 (고객상담 및 CS 30년 전문 경력)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <Building2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-700">주요 사업분야: </span>
                    <span className="text-slate-600 leading-snug">
                      B2B 기업 출장 관리, 전세계 항공권 수배 및 비자 대행, 기업 인센티브 &amp; 테마투어, MICE 학회, 장애인 국가대표 선수단 및 스포츠단 전담 케어
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-700">본사 소재지: </span>
                    <span className="text-slate-600">{COMPANY_INFO.headOffice.address}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
              <span>관광사업 등록업체 (국내·국외여행업)</span>
              <span className="font-semibold text-emerald-700">파트너십 보유</span>
            </div>
          </div>

          {/* Right: 3 Core Mission Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-emerald-400/80 transition-all shadow-xs group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    01. 고객 만족과 믿음직한 여정
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    단순한 이동을 넘어, 다시 찾고 싶은 감동을 선사합니다. 30년간 축적된 여행사 운영 경험과 30년 CS 전문가의 섬세한 케어로 처음부터 끝까지 믿을 수 있는 서비스를 제공합니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-emerald-400/80 transition-all shadow-xs group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0f3b5c] flex items-center justify-center shrink-0 group-hover:bg-[#0f3b5c] group-hover:text-white transition-colors">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    02. 차별화된 시그니처 테마 기획
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    세계 3대 박물관 투어, 미슐랭 식도락 기행, 아이비리그 탐방, 주말 밤도깨비 투어 등 기존 획일적인 패키지와 차별화된 독창적인 테마 여행을 설계합니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-emerald-400/80 transition-all shadow-xs group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    03. 글로벌 직영망과 안전 인프라
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    서울 본사 및 베트남 다낭 현지 지사를 직접 연결하여 현지 사정을 가장 잘 알고 신속하게 대응할 수 있는 안전한 글로벌 네트워크를 갖추고 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
