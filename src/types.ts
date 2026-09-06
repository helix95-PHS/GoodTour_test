export interface CompanyInfo {
  nameKr: string;
  nameEn: string;
  legalName: string;
  establishedDate: string;
  ceo: string;
  headOffice: {
    address: string;
    tel: string;
    email: string;
  };
  branches: BranchOffice[];
}

export interface BranchOffice {
  id: string;
  name: string;
  role: string;
  address: string;
  description: string;
  tag: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  description: string;
  highlights: string[];
  imageSrc?: string;
}

export interface PartnerCategory {
  categoryName: string;
  description: string;
  partners: string[];
}

export interface B2BBenefit {
  title: string;
  subtitle: string;
  description: string;
  badge: string;
}

export interface VisaServiceItem {
  country: string;
  types: string;
  period: string;
  features: string[];
}
