import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      {/* Upper Main Footer Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Company Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-white tracking-tight">
                GOOD TOUR
              </span>
              <span className="text-sm font-bold text-emerald-400">
                (주)좋은여행사
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              28년의 전문 운영 노하우와 고객 중심의 기획력으로 최상의 MICE, 해외학술대회, 특화 테마여행 및 글로벌 항공 서비스를 제공합니다.
            </p>
            <div className="flex items-center gap-2 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-[11px]">관광사업자 정식 등록 법인</span>
            </div>
          </div>

          {/* Contact & Address Column (Directly matching official headletter) */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
              본사 및 고객센터
            </h4>
            <p className="flex items-start gap-2 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.headOffice.address}</span>
            </p>
            <p className="flex items-center gap-2 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span>T. {COMPANY_INFO.headOffice.tel}</span>
            </p>
            <p className="flex items-center gap-2 text-slate-300">
              <Mail className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span>E. {COMPANY_INFO.headOffice.email}</span>
            </p>
          </div>

          {/* Legal and Network Summary */}
          <div className="md:col-span-3 space-y-2 text-slate-400">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
              사업자 정보 및 네트워크
            </h4>
            <p>상호명: {COMPANY_INFO.legalName}</p>
            <p>영문 상호명: {COMPANY_INFO.nameEn}</p>
            <p>대표자: {COMPANY_INFO.ceo}</p>
            <p>설립연월일: {COMPANY_INFO.establishedDate}</p>
            <p className="text-[11px] text-slate-500 pt-1">
              지사: 부산 사무소 · 베트남 다낭 현지 지사
            </p>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="mt-10 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} (주)좋은여행사 GOOD TOUR. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>맨 위로 가기</span>
            <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
