import { CompanyInfo, ServiceItem, B2BBenefit, VisaServiceItem } from '../types';
import heroBanner from '../assets/images/goodtour_hero_banner_1788266553298.jpg';
import miceTourImg from '../assets/images/mice_academic_tour_1788266572976.jpg';
import themeTourImg from '../assets/images/custom_theme_tour_1788266590067.jpg';
import b2bBusinessImg from '../assets/images/b2b_business_travel_1788267449453.jpg';
import packageTourImg from '../assets/images/package_travel_tour_1788269669263.jpg';
import corporateIncentiveImg from '../assets/images/corporate_incentive_tour_1788269689586.jpg';

export const COMPANY_INFO: CompanyInfo = {
  nameKr: '좋은여행사',
  nameEn: 'GOOD TOUR',
  legalName: '(주)좋은여행사',
  establishedDate: '2013년 8월 26일',
  ceo: '서진경',
  headOffice: {
    address: '서울특별시 서초구 논현로31길 14, 일성빌딩 4층',
    tel: '02-451-1024',
    email: 'goodtour1@naver.com',
  },
  branches: [
    {
      id: 'seoul',
      name: '서울 본사 (Head Office)',
      role: '총괄 본부 / B2B 기업출장 · 비자센터 / MICE & 학회 총괄',
      address: '서울특별시 서초구 논현로31길 14, 일성빌딩 4층',
      description: '기업 업무 출장 전담 관리, 각국 상용비자 신속 대행, MICE 학회 및 법인 정산 총괄',
      tag: '본사',
    },
    {
      id: 'busan',
      name: '부산 지사 (Busan Branch)',
      role: '영남권 기업 및 공공기관 출장·MICE 지원',
      address: '부산광역시 연제구 토곡로 40, 좋은빌딩',
      description: '영남권 기업 고객사를 위한 1:1 전담 출장 배정, 항공권/비자/호텔 원스톱 케어',
      tag: '지사',
    },
    {
      id: 'danang',
      name: '베트남 다낭 지사 (Da Nang Global Office)',
      role: '동남아 현지 출장 지원 & 직영 오퍼레이션',
      address: '405 Đ. Lê Văn Hiến, Hoà Hải, Ngũ Hành Sơn, Đà Nẵng 550000 Vietnam',
      description: '동남아 비즈니스 출장자 현지 차량/통역 지원, 긴급 케어 및 현지 의전 네트워크',
      tag: '글로벌 지사',
    },
  ],
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'b2b-corporate',
    title: '기업 업무 출장 (전세계 항공권 매니지먼트)',
    subtitle: '법인 항공권 수배부터 국가별 비자 발급, 사후 정산까지 전담 케어',
    category: 'B2B Corporate Travel & Visa',
    badge: 'B2B 핵심 역량',
    description:
      '글로벌 비즈니스의 성공을 위해 기업 임직원 업무 출장 전담 매니저를 1:1로 배정합니다. 스카이팀·스타얼라이언스 등 최적의 비즈니스 항공 스케줄 수배, 각국 상용·전자 비자 신속 발급, 긴급 일정 변경 대응 및 법인 세금계산서 일괄 정산 솔루션을 제공합니다.',
    highlights: [
      '전세계 기업 상용 항공권 최적 노선 수배 및 좌석 블록 사전 확보',
      '미국(ESTA), 캐나다(eTA), 호주(ETA), 중국/베트남 상용비자 등 각국 비자 원스톱 대행',
      '기업 출장 전담 매니저 1:1 배정 & 24시간 긴급 일정 변경/재발권 지원',
      '법인 후불 정산, 부가세 세금계산서 발행 및 출장비 항목별 상세 리포트 제공',
    ],
    imageSrc: b2bBusinessImg,
  },
  {
    id: 'flight-package',
    title: '전세계 항공권 수배 & 항공 얼라이언스',
    subtitle: '스카이팀·스타얼라이언스 전세계 최적 운임 및 비즈니스 좌석 확보',
    category: 'Global Flight & Alliance',
    badge: '전세계 항공권',
    description:
      '대한항공(스카이팀), 아시아나항공(스타얼라이언스)을 비롯한 전세계 주요 항공사의 상용 할인 항공권을 신속하게 수배하고, 기업 출장자 및 여행객을 위한 최적의 스케줄과 합리적인 운임을 제공합니다.',
    highlights: [
      '스카이팀(SkyTeam) & 스타얼라이언스(Star Alliance) 전세계 할인항공권 수배',
      '기업 상용 고객을 위한 비즈니스/이코노미 블록 좌석 우선 확보',
      '출장 일정 변경, 구간 추가, 스톱오버 및 긴급 재발권 24시간 대응',
      '28년 경력 베테랑 항공 발권 전문가의 1:1 맞춤 견적 및 케어',
    ],
    imageSrc: heroBanner,
  },
  {
    id: 'mice',
    title: 'MICE & 해외학회·글로벌 심포지엄',
    subtitle: '전문성이 검증된 의학/학술대회 및 산업 엑스포 투어',
    category: 'MICE & Academic Symposium',
    badge: '학회·연수 특화',
    description:
      '대한안과학회, 대한정형외과학회 등 권위 있는 의학 학술대회는 물론 CES, 글로벌 메디컬 심포지엄, 대학교 해외 인턴십까지 빈틈없는 일정과 맞춤 의전을 책임집니다.',
    highlights: [
      '국내외 의학/학술 학회 및 심포지엄 전담 기획 및 숙박/항공 블록 운영',
      'CES, MWC, Medica 등 글로벌 산업 엑스포 및 박람회 참가단 운영',
      '대학교 해외 인턴십 및 글로벌 아카데미 연수 프로그램',
      '학회 VIP 연자 및 임원진을 위한 맞춤형 현지 의전 케어',
    ],
    imageSrc: miceTourImg,
  },
  {
    id: 'package-tour',
    title: '패키지 여행 (하나·모두·한진·롯데 제휴)',
    subtitle: '대한민국 대표 메이저 여행사 공식 제휴 상품 맞춤 예약 및 혜택',
    category: 'Major Package Travel',
    badge: '메이저 공식 제휴',
    description:
      '하나투어, 모두투어, 한진관광, 롯데관광 등 대한민국 1등 대형 여행사들의 정품 패키지 상품을 공식 제휴가로 안내하며, 28년 여행 노하우로 고객 일정과 예산에 최적화된 상품을 비교·추천해 드립니다.',
    highlights: [
      '하나투어, 모두투어, 한진관광, 롯데관광 공식 제휴 대리점',
      '전세계 프리미엄 패키지부터 실속형 패키지까지 실시간 비교 예약',
      '가족 여행, 친목 단체, 골프 패키지 맞춤 일정 컨설팅',
      '공식 프로모션 할인 혜택 및 전담 매니저의 신속한 예약·안내 케어',
    ],
    imageSrc: packageTourImg,
  },
  {
    id: 'corporate-incentive',
    title: '기업 인센티브 투어 & 맞춤 워크샵',
    subtitle: '임직원 사기 진작과 결속력을 극대화하는 맞춤형 포상관광 솔루션',
    category: 'Corporate Incentive & Workshop',
    badge: '기업 포상관광',
    description:
      '기업 및 기관의 임직원 포상관광(Incentive Tour), 해외 우수사원 연수, 전략 워크샵, 글로벌 팀빌딩 행사를 전문 기획합니다. 기업의 목적과 예산에 맞춘 전용 일정, 프리미엄 호텔, 만찬 행사 및 VIP 의전을 원스톱으로 책임집니다.',
    highlights: [
      '기업 맞춤형 포상관광(Incentive) & 해외 워크샵 전담 기획',
      '전용 단독 차량, 한국인 전문 가이드 & VIP 의전 케어',
      '갈라 디너, 단독 연회장 대관 및 팀빌딩 프로그램 운영',
      '법인 맞춤 예산 설계, 세금계산서 발행 및 사후 정산 리포트',
    ],
    imageSrc: corporateIncentiveImg,
  },
  {
    id: 'theme',
    title: '시그니처 테마여행 & 버킷리스트 50',
    subtitle: '단순 관광을 넘어선 품격 있는 문화·미식·예술 탐방',
    category: 'Signature Theme',
    badge: '차별화 기획',
    description:
      '세계 3대 박물관·미술관 투어, 아이비리그 탐방, 미슐랭 식도락 기행, 유명 인플루언서 동행 위드(WITH) 투어 등 좋은여행사만의 독창적인 테마 여행을 실현합니다.',
    highlights: [
      '세계 3대 박물관 및 미술관 도슨트 투어 기획',
      '세계 식도락 기행 (미슐랭 레스토랑 & 로컬 야시장 탐방)',
      '미국 아이비리그(Ivy League) 및 명문대 탐방 캠프',
      '직장인을 위한 주말 밤도깨비 Refresh 투어 (일본/대만/홍콩)',
      'BBC 선정 죽기 전에 가봐야 할 50곳 버킷리스트 시리즈',
    ],
    imageSrc: themeTourImg,
  },
];

export const B2B_SERVICES = [
  {
    step: '01',
    title: '법인 전담 매니저 배정',
    desc: '기업별 전담 담당자가 배정되어 임직원 출장 규정 및 선호 항공/호텔에 맞춘 최적의 여정을 제안합니다.',
  },
  {
    step: '02',
    title: '상용 항공권 & 호텔 예약',
    desc: '스카이팀·스타얼라이언스 전세계 네트워크를 활용하여 합리적인 운임과 유연한 스케줄 좌석을 우선 확보합니다.',
  },
  {
    step: '03',
    title: '신속 비자 & 입국서류 대행',
    desc: '미국 ESTA, 중국/베트남 상용비자, 인도·사우디 e-비자 등 복잡한 비자 서류 및 초청장 검토를 대행합니다.',
  },
  {
    step: '04',
    title: '현지 의전 & 통역/차량 연계',
    desc: '해외 바이어 미팅, 공항 픽업 전용 차량, 현지 통역원 섭외 등 출장 현장에서 필요한 의전 인프라를 지원합니다.',
  },
  {
    step: '05',
    title: '법인 맞춤 정산 & 리포트',
    desc: '세금계산서 일괄 발행, 월 단위 후불 결제 및 출장비 항목별 상세 정산 내역서를 제공하여 행정 업무를 줄여드립니다.',
  },
];

export const VISA_SERVICES: VisaServiceItem[] = [
  {
    country: '미국 (USA)',
    types: 'ESTA 전자여행허가 / B1/B2 상용비자',
    period: 'ESTA 당일~24시간 내 승인 / B1/B2 인터뷰 서류 코칭',
    features: ['신속 온라인 등록 대행', '거절 이력 및 복합 케이스 상담', '출장 목적 소명 서류 검토'],
  },
  {
    country: '중국 (China)',
    types: '상용(M) 비자 / 복수비자 / 관광(L) 비자',
    period: '보통 4박5일 / 급행 2박3일 / 특급 당일 처리',
    features: ['중국 현지 초청장 규격 검토', '초청장 작성 가이드 제공', '여권 및 지문등록 대행 안내'],
  },
  {
    country: '베트남 (Vietnam)',
    types: '상용비자(DN) / 도착 전자비자(E-Visa)',
    period: '전자비자 2~3영업일 / 급행 당일 발급 지원',
    features: ['다낭 현지 지사 연계 신속 지원', '노동허가 및 상용 초청 지원', '장기 체류 및 복수 비자 수배'],
  },
  {
    country: '캐나다 / 호주 / 뉴질랜드',
    types: '캐나다 eTA / 호주 ETA / 뉴질랜드 NZeTA',
    period: '신청 후 즉시~24시간 이내 발급',
    features: ['단기 비즈니스 미팅 전용 전자허가', '여권 정보 정밀 검수', '출국 전 모바일 확인증 교부'],
  },
  {
    country: '기타 특수 국가',
    types: '인도 e-비자 / 사우디 상용 / 몽골 / 중동',
    period: '국가별 대사관 접수 일정에 따른 신속 진행',
    features: ['특수 국가 입국 요건 사전 브리핑', '영문 번역공증 및 아포스티유 연계', '대사관 공식 접수 대행'],
  },
];

export const B2B_CORPORATE_BENEFITS: B2BBenefit[] = [
  {
    badge: 'Time Saving',
    title: '출장 준비 시간 80% 단축',
    subtitle: '항공·호텔·비자·보험을 원스톱으로',
    description: '여러 사이트를 비교할 필요 없이, 목적지와 일정만 전달하시면 최적의 비교 견적과 비자 발급까지 일괄 처리해 드립니다.',
  },
  {
    badge: 'Flexibility',
    title: '실시간 변경 & 24시 긴급 대응',
    subtitle: '일정 변경/취소 시 수수료 최소화',
    description: '비즈니스 현장의 급작스러운 미팅 일정 변경이나 항공편 지연/결항 시, 즉각적인 재발권 및 대체 편 확보를 지원합니다.',
  },
  {
    badge: 'Cost Efficiency',
    title: '기업 우대 운임 및 비용 절감',
    subtitle: '스카이팀·스타얼라이언스 제휴 혜택',
    description: '글로벌 항공 얼라이언스 및 대형사 파트너십을 통해 기업 출장에 최적화된 운임 구조와 마일리지 적립을 보장합니다.',
  },
  {
    badge: 'Accounting',
    title: '투명한 법인 정산 및 세금계산서',
    subtitle: '경영지원팀의 정산 업무 제로화',
    description: '월별 통합 정산, 법인카드 결제, 국세청 전자세금계산서 발행 및 출장 항목별 투명한 증빙 서류를 제공합니다.',
  },
];

export const ALLIANCE_PARTNERS = {
  skyteam: [
    '대한항공 (Korean Air)',
    '델타항공 (Delta)',
    '에어프랑스 (Air France)',
    'KLM 네덜란드항공',
    '베트남항공 (Vietnam Airlines)',
    '중화항공 (China Airlines)',
    '중국동방항공 (China Eastern)',
    '가루다 인도네시아',
    '에어로멕시코',
    '사우디아항공',
    '버진애틀랜틱',
  ],
  starAlliance: [
    '아시아나항공 (Asiana)',
    '유나이티드항공 (United)',
    '루프트한자 (Lufthansa)',
    '싱가포르항공 (Singapore Airlines)',
    '전일본공수 (ANA)',
    '에어캐나다 (Air Canada)',
    '에어차이나 (Air China)',
    '스위스국제항공 (SWISS)',
    '타이항공 (THAI)',
    '터키항공 (Turkish Airlines)',
  ],
  majorAgencies: [
    { name: '하나투어 (Hana Tour)', desc: '공식 인증 제휴 대리점' },
    { name: '모두투어 (Mode Tour)', desc: '공식 인증 제휴 대리점' },
    { name: '롯데관광 (Lotte Tour)', desc: '프리미엄 패키지 파트너' },
    { name: '한진관광 (Hanjin Travel)', desc: '고품격 여행상품 파트너' },
  ],
};

export const COMPANY_HIGHLIGHTS = [
  {
    number: 'B2B',
    unit: '전문',
    label: '기업 업무 출장 & 비자 전담',
    desc: '임직원 상용 항공권 발권부터 국가별 비자, 호텔, 정산까지 원스톱 관리',
  },
  {
    number: '28+',
    unit: '년',
    label: '여행업 운영 및 기획 노하우',
    desc: '오랜 신뢰와 전문성을 바탕으로 안전하고 완성도 높은 여정을 만듭니다.',
  },
  {
    number: '100%',
    unit: '맞춤형',
    label: 'MICE & 특화 학회 전담 플랜',
    desc: '의학 학술대회, 글로벌 박람회 및 기업 목적에 최적화된 원스톱 의전 서비스',
  },
  {
    number: '3개 거점',
    unit: '네트워크',
    label: '서울 본사 · 부산 · 베트남 다낭 지사',
    desc: '국내외 핵심 거점을 잇는 촘촘한 현지 관리 체계와 긴급 지원 시스템',
  },
];
