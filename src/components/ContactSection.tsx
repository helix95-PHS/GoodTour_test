import React, { useState } from 'react';
import { Phone, Mail, Send, CheckCircle2, MessageSquare, Clock, MapPin, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ContactSectionProps {
  prefilledService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledService }) => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    phone: '',
    email: '',
    serviceType: prefilledService || 'MICE 및 학회/심포지엄 투어',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      organization: '',
      phone: '',
      email: '',
      serviceType: 'MICE 및 학회/심포지엄 투어',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Consultation & Inquiry</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            맞춤 여행 및 <span className="text-[#0f3b5c]">상담 문의</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            학회 MICE, 단체 연수, 맞춤형 테마여행 등 귀사의 목적에 가장 최적화된 여행 일정을 제안해 드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Info Card */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="inline-block text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded-full mb-4">
                빠른 유선 및 이메일 상담
              </div>
              <h3 className="text-xl font-bold mb-2">
                (주)좋은여행사 고객센터
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-8 leading-relaxed">
                25년 이상의 고객상담 및 여행 기획 전문가가 친절하고 신속하게 맞춤 상담을 도와드립니다.
              </p>

              <div className="space-y-5">
                <a
                  href={`tel:${COMPANY_INFO.headOffice.tel}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 transition-colors border border-slate-700/60 group"
                >
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">대표 전화</span>
                    <span className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {COMPANY_INFO.headOffice.tel}
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.headOffice.email}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 transition-colors border border-slate-700/60 group"
                >
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">이메일</span>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-blue-300 transition-colors break-all">
                      {COMPANY_INFO.headOffice.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/40 border border-slate-800">
                  <div className="p-2.5 rounded-lg bg-slate-700/50 text-slate-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">본사 주소</span>
                    <span className="text-xs sm:text-sm text-slate-200">
                      {COMPANY_INFO.headOffice.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                평일 09:00 ~ 18:00 (주말/공휴일 휴무)
              </span>
            </div>
          </div>

          {/* Consultation Form Card */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-12 px-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  문의가 성공적으로 접수되었습니다
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                  보내주신 소중한 상담 내용을 확인 후, 담당 전문 플래너가 빠른 시일 내에 연락드리겠습니다.
                </p>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 bg-[#0f3b5c] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#0b2b44] transition-colors cursor-pointer"
                >
                  추가 문의 작성하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 pb-2 border-b border-slate-200">
                  온라인 상담 및 견적 신청서
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      담당자 성함 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="홍길동"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      소속 단체 / 기업명
                    </label>
                    <input
                      type="text"
                      placeholder="학회명 또는 회사명"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      연락처 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="010-0000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      이메일 주소 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="example@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    관심 분야 / 서비스 종류
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  >
                    <option value="기업 업무 출장 원스톱 서비스 (항공·호텔·렌터카 통합)">기업 업무 출장 원스톱 서비스 (항공 · 호텔 · 렌터카 통합 솔루션)</option>
                    <option value="국가별 상용·전자 비자 신속 대행">국가별 상용·전자 비자 신속 대행 (미국/중국/베트남 등)</option>
                    <option value="전세계 항공권 수배 (스카이팀·스타얼라이언스)">전세계 항공권 수배 (스카이팀·스타얼라이언스)</option>
                    <option value="전 세계 호텔 예약 & 비즈니스 법인 특가">전 세계 호텔 예약 & 비즈니스 법인 특가</option>
                    <option value="글로벌 렌터카 예약 & 모빌리티 (Avis, Hertz)">글로벌 렌터카 예약 & 모빌리티 (Avis, Hertz)</option>
                    <option value="MICE 및 해외학회/심포지엄 투어">MICE 및 해외학회/심포지엄 투어</option>
                    <option value="패키지 여행 (하나·모두·한진·롯데 제휴)">패키지 여행 (하나·모두·한진·롯데 제휴)</option>
                    <option value="기업 인센티브 투어 & 맞춤 워크샵">기업 인센티브 투어 & 맞춤 워크샵</option>
                    <option value="시그니처 테마여행 & 버킷리스트 50">시그니처 테마여행 & 버킷리스트 50</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    문의 내용 (예상 인원, 일정, 희망 국가 등)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="희망하시는 여행 일정, 인원 수, 목적(학회 참가, 테마 연수 등)을 자유롭게 적어주시면 더욱 정확한 견적을 안내해 드립니다."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0f3b5c] hover:bg-[#0b2b44] text-white font-semibold py-3 px-6 rounded-lg shadow-sm transition-all active:scale-[0.99] cursor-pointer"
                >
                  <Send className="w-4 h-4 text-emerald-400" />
                  <span>맞춤 상담 신청하기</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
