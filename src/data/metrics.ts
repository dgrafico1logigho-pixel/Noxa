import { MetricItem, GeoStat, AuctionBid } from '../types';

export const HERO_METRICS: MetricItem[] = [
  {
    id: 'impressions',
    label: 'Impresiones Mensuales',
    value: '+2.5B',
    subtext: 'Tráfico global verificado y monetizado en más de 195 países',
    highlight: '+18.4% este trimestre',
    iconName: 'Eye'
  },
  {
    id: 'fillrate',
    label: 'Fill Rate Global',
    value: '100%',
    subtext: 'Cobertura total de inventario sin inventario desperdiciado',
    highlight: 'Tier 1, 2 y 3 garantizado',
    iconName: 'Activity'
  },
  {
    id: 'publishers',
    label: 'Editores y Afiliados Activos',
    value: '+15,000',
    subtext: 'Desde blogs de nicho hasta grandes grupos editoriales de medios',
    highlight: 'Escalabilidad comprobada',
    iconName: 'Users'
  },
  {
    id: 'payouts',
    label: 'Pagos Semanales Puntuales',
    value: 'Net-7 / Net-15',
    subtext: 'Múltiples pasarelas sin comisiones ocultas ni retrasos',
    highlight: '0 demoras históricas',
    iconName: 'CreditCard'
  }
];

export const TOP_GEOS: GeoStat[] = [
  { country: 'Estados Unidos', code: 'US', flag: '🇺🇸', impressions: '840M', ecpm: 8.42, revenue: '$7,072.80', share: 34 },
  { country: 'Alemania', code: 'DE', flag: '🇩🇪', impressions: '410M', ecpm: 6.95, revenue: '$2,849.50', share: 18 },
  { country: 'Reino Unido', code: 'GB', flag: '🇬🇧', impressions: '380M', ecpm: 7.20, revenue: '$2,736.00', share: 15 },
  { country: 'España', code: 'ES', flag: '🇪🇸', impressions: '290M', ecpm: 4.80, revenue: '$1,392.00', share: 11 },
  { country: 'Brasil', code: 'BR', flag: '🇧🇷', impressions: '340M', ecpm: 3.45, revenue: '$1,173.00', share: 9 },
  { country: 'México', code: 'MX', flag: '🇲🇽', impressions: '220M', ecpm: 3.10, revenue: '$682.00', share: 7 },
  { country: 'Francia', code: 'FR', flag: '🇫🇷', impressions: '190M', ecpm: 5.85, revenue: '$1,111.50', share: 6 },
];

export const INITIAL_AUCTION_BIDS: AuctionBid[] = [
  { partner: 'Google AdX / Open Bidding', bid: 5.84, latencyMs: 64, status: 'won', tier: 'Tier 1 Global' },
  { partner: 'Magnite SSP', bid: 5.42, latencyMs: 82, status: 'outbid', tier: 'Programmatic RTB' },
  { partner: 'PubMatic Media', bid: 5.15, latencyMs: 91, status: 'outbid', tier: 'Header Bidding' },
  { partner: 'Xandr (Microsoft)', bid: 4.90, latencyMs: 78, status: 'outbid', tier: 'DSP Direct' },
  { partner: 'Index Exchange', bid: 4.65, latencyMs: 104, status: 'outbid', tier: 'Private Marketplace' },
];

export const TRUST_PARTNERS = [
  { name: 'Google MCM Certified', logo: 'Google MCM', tag: 'Partner' },
  { name: 'Prebid.js Certified', logo: 'Prebid', tag: 'Standard' },
  { name: 'IAB Tech Lab Member', logo: 'IAB Lab', tag: 'Compliant' },
  { name: 'TAG Platinum Shield', logo: 'TAG Certified', tag: 'Anti-Fraud' },
  { name: 'FraudScore AI', logo: 'FraudScore', tag: 'Bot Shield' },
  { name: 'OpenRTB 3.0 Protocol', logo: 'OpenRTB', tag: 'Real-Time' },
];
