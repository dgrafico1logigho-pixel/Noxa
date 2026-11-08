export type AudienceType = 'publishers' | 'advertisers';
export type Language = 'es' | 'en';

export interface AdFormat {
  id: string;
  name: string;
  category: string;
  tagline: string;
  badge: string;
  description: string;
  ctr: string;
  ecpmRange: string;
  devices: ('desktop' | 'mobile' | 'tablet')[];
  iabSpecs?: string;
  benefits: string[];
  previewType: 'popunder' | 'native' | 'push' | 'banner' | 'video';
  accentColor: string;
}

export interface MetricItem {
  id: string;
  label: string;
  value: string;
  subtext: string;
  highlight: string;
  iconName: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
  statsMetric: string;
  statsLabel: string;
  tags: string[];
}

export interface FaqItem {
  id: string;
  category: 'publishers' | 'advertisers' | 'payments' | 'tech';
  question: string;
  answer: string;
}

export interface LeadFormData {
  fullName: string;
  email: string;
  role: 'publisher' | 'advertiser';
  websiteOrBudget: string;
  selectedFormats: string[];
  message: string;
  agreedTerms: boolean;
}

export interface AuctionBid {
  partner: string;
  bid: number;
  latencyMs: number;
  status: 'won' | 'bidding' | 'outbid';
  tier: string;
}

export interface GeoStat {
  country: string;
  code: string;
  flag: string;
  impressions: string;
  ecpm: number;
  revenue: string;
  share: number;
}
