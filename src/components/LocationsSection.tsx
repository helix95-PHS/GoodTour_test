import React, { useState } from 'react';
import { MapPin, Phone, Mail, Copy, Check, Navigation, Building2, Globe } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { BranchOffice } from '../types';

export const LocationsSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyAddress = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="locations" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Navigation className="w-3.5 h-3.5" />
            <span>Locations & Global Network</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            본사 및 <span className="text-[#0f3b5c]">국내외 지사 안내</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            서울 본사를 중심으로 부산 지사 및 베트남 다낭 현지 직영망을 통해 빈틈없는 고객 서비스를 제공합니다.
          </p>
        </div>

        {/* 3 Offices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMPANY_INFO.branches.map((branch) => {
            const isCopied = copiedId === branch.id;
            const isHeadOffice = branch.id === 'seoul';

            return (
              <div
                key={branch.id}
                className={`bg-white rounded-2xl border p-6 flex flex-col justify-between transition-all ${
                  isHeadOffice
                    ? 'border-emerald-500/80 shadow-sm ring-1 ring-emerald-500/20'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                        isHeadOffice
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {branch.tag}
                    </span>
                    {branch.id === 'danang' ? (
                      <Globe className="w-4 h-4 text-slate-400" />
                    ) : (
                      <Building2 className="w-4 h-4 text-slate-400" />
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {branch.name}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-700 mb-4">
                    {branch.role}
                  </p>

                  <div className="space-y-3 pt-3 border-t border-slate-100 text-sm">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-600 leading-relaxed font-medium">
                        {branch.address}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      {branch.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => handleCopyAddress(branch.id, branch.address)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600 font-semibold">복사완료</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>주소 복사</span>
                      </>
                    )}
                  </button>

                  {isHeadOffice && (
                    <a
                      href={`tel:${COMPANY_INFO.headOffice.tel}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#0f3b5c] hover:underline"
                    >
                      <Phone className="w-3 h-3" />
                      <span>{COMPANY_INFO.headOffice.tel}</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
