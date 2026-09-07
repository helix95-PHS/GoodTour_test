import React from 'react';
import { Plane, ShieldCheck, Handshake, Globe2 } from 'lucide-react';
import { ALLIANCE_PARTNERS } from '../data/companyData';

export const PartnersSection: React.FC = () => {
  return (
    <section id="partners" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Global Alliances & Partners</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            전세계 항공사 및 대형 여행사 <span className="text-[#0f3b5c]">파트너십</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            글로벌 항공 얼라이언스 및 국내 최고 여행사들과의 제휴를 통해 최상의 조건과 안전한 여정을 보장합니다.
          </p>
        </div>

        {/* 4 Major Korean Tour Agencies Card Row */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Handshake className="w-4 h-4 text-emerald-600" />
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
              주요 패키지 제휴사
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ALLIANCE_PARTNERS.majorAgencies.map((agency, index) => (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-center hover:border-emerald-500/50 transition-colors"
              >
                <div className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                  {agency.name}
                </div>
                <span className="inline-block text-xs font-semibold text-emerald-700 bg-emerald-100/60 px-2.5 py-0.5 rounded">
                  {agency.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Airline Alliances Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* SkyTeam Card */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-7">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <Plane className="w-5 h-5 text-blue-600" />
                <h4 className="text-base font-bold text-slate-900">
                  스카이팀 (SkyTeam) 제휴 항공사
                </h4>
              </div>
              <span className="text-xs font-medium text-slate-500">할인 항공권 발권</span>
            </div>
            <p className="text-xs text-slate-600 mb-4">
              대한항공, 델타항공, 에어프랑스 등 스카이팀 얼라이언스 전세계 노선 최적 운임 수배
            </p>
            <div className="flex flex-wrap gap-2">
              {ALLIANCE_PARTNERS.skyteam.map((airline, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-white text-slate-700 px-2.5 py-1 rounded-md border border-slate-200 font-medium"
                >
                  {airline}
                </span>
              ))}
            </div>
          </div>

          {/* Star Alliance Card */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-7">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <Plane className="w-5 h-5 text-emerald-600" />
                <h4 className="text-base font-bold text-slate-900">
                  스타얼라이언스 (Star Alliance) 제휴 항공사
                </h4>
              </div>
              <span className="text-xs font-medium text-slate-500">할인 항공권 발권</span>
            </div>
            <p className="text-xs text-slate-600 mb-4">
              아시아나항공, 유나이티드항공, 루프트한자 등 스타얼라이언스 전세계 글로벌 네트워크 연계
            </p>
            <div className="flex flex-wrap gap-2">
              {ALLIANCE_PARTNERS.starAlliance.map((airline, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-white text-slate-700 px-2.5 py-1 rounded-md border border-slate-200 font-medium"
                >
                  {airline}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
