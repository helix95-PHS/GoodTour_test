import React, { useState } from 'react';
import { Phone, Mail, Send, CheckCircle2, MessageSquare, Clock, MapPin, Building2, Loader2, AlertCircle } from 'lucide-react';
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('https://formspree.io/f/myeynqyn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          organization: formData.organization || '미기재',
          phone: formData.phone,
          email: formData.email,
          serviceType: formData.serviceType,
          message: formData.message || '상담 요청',
          _subject: `[좋은여행사 상담신청] ${formData.name}님 (${formData.serviceType})`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json().catch(() => null);
        const errorText =
          data?.errors?.map((err: { message: string }) => err.message).join(', ') ||
          '상담 신청 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주시거나 직통 전화(02-451-1024)로 문의 바랍니다.';
        setErrorMessage(errorText);
      }
    } catch (err) {
      console.error('Formspree submission error:', err);
      setErrorMessage('네트워크 연결 문제로 전송에 실패했습니다. 잠시 후 다시 시도하시거나 대표번호(02-451-1024)로 연락해 주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrorMessage(null);
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
                30년 이상의 고객상담 및 여행 기획 전문가가 친절하고 신속하게 맞춤 상담을 도와드립니다.
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
              <form
                id="contact-consultation-form"
                action="https://formspree.io/f/myeynqyn"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <h3 className="text-lg font-bold text-slate-900 pb-2 border-b border-slate-200">
                  온라인 상담 및 견적 신청서
                </h3>

                {errorMessage && (
                  <div
                    id="contact-form-error"
                    className="p-3.5 rounded-lg bg-red-50 border border-red-200 flex items-start gap-2.5 text-xs text-red-700"
                  >
                    <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-semibold mb-0.5">상담 전송에 실패했습니다</p>
                      <p>{errorMessage}</p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1">
                      담당자 성함 <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      disabled={isSubmitting}
                      placeholder="홍길동"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors disabled:bg-slate-100 disabled:text-slate-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-org" className="block text-xs font-semibold text-slate-700 mb-1">
                      소속 단체 / 기업명
                    </label>
                    <input
                      id="contact-org"
                      name="organization"
                      type="text"
                      disabled={isSubmitting}
                      placeholder="학회명 또는 회사명"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors disabled:bg-slate-100 disabled:text-slate-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                      연락처 <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      required
                      disabled={isSubmitting}
                      placeholder="010-0000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors disabled:bg-slate-100 disabled:text-slate-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 mb-1">
                      이메일 주소 <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      disabled={isSubmitting}
                      placeholder="example@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors disabled:bg-slate-100 disabled:text-slate-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-service" className="block text-xs font-semibold text-slate-700 mb-1">
                    관심 분야 / 서비스 종류
                  </label>
                  <select
                    id="contact-service"
                    name="serviceType"
                    disabled={isSubmitting}
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors disabled:bg-slate-100 disabled:text-slate-500"
                  >
                    <option value="기업 업무 출장 원스톱 서비스 (항공·호텔·렌터카 통합)">기업 업무 출장 원스톱 서비스 (항공 · 호텔 · 렌터카 통합 솔루션)</option>
                    <option value="국가별 상용·전자 비자 신속 대행">국가별 상용·전자 비자 신속 대행 (미국/중국/베트남 등)</option>
                    <option value="전세계 항공권 수배 (스카이팀·스타얼라이언스)">전세계 항공권 수배 (스카이팀·스타얼라이언스)</option>
                    <option value="전 세계 호텔 예약 & 비즈니스 법인 특가">전 세계 호텔 예약 & 비즈니스 법인 특가</option>
                    <option value="글로벌 렌터카 예약 & 모빌리티 (Avis, Hertz)">글로벌 렌터카 예약 & 모빌리티 (Avis, Hertz)</option>
                    <option value="장애인 국가대표 선수단 및 스포츠단 전담 케어">장애인 국가대표 선수단 및 스포츠단 전담 케어 (국제대회 & 전지훈련)</option>
                    <option value="MICE 및 해외학회/심포지엄 투어">MICE 및 해외학회/심포지엄 투어</option>
                    <option value="패키지 여행 (하나·모두·한진·롯데 제휴)">패키지 여행 (하나·모두·한진·롯데 제휴)</option>
                    <option value="기업 인센티브 & 시그니처 테마여행">기업 인센티브 & 시그니처 테마여행 (맞춤 워크샵 · 테마 기행)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 mb-1">
                    문의 내용 (예상 인원, 일정, 희망 국가 등)
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    disabled={isSubmitting}
                    placeholder="희망하시는 여행 일정, 인원 수, 목적(학회 참가, 테마 연수 등)을 자유롭게 적어주시면 더욱 정확한 견적을 안내해 드립니다."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors disabled:bg-slate-100 disabled:text-slate-500"
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0f3b5c] hover:bg-[#0b2b44] text-white font-semibold py-3 px-6 rounded-lg shadow-sm transition-all active:scale-[0.99] cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 text-emerald-400 animate-spin" />
                      <span>상담 내용 전송 중...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-emerald-400" />
                      <span>맞춤 상담 신청하기</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
