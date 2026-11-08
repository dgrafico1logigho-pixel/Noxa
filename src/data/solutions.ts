import { SolutionItem } from '../types';

export const PUBLISHER_SOLUTIONS: SolutionItem[] = [
  {
    id: 'header-bidding',
    title: 'Header Bidding & Yield Algorítmico',
    description: 'Subastas simultáneas en microsegundos entre más de 45 DSPs y ad exchanges de primer nivel. Nuestro algoritmo predictivo de Machine Learning ajusta dinámicamente los pisos de subasta (price floors) para maximizar cada impresión.',
    iconName: 'Cpu',
    badge: 'Máximo Ingreso',
    statsMetric: '+38.5%',
    statsLabel: 'Incremento promedio en eCPM',
    tags: ['Prebid.js v8.x', 'Google MCM', 'Dynamic Floors', 'Multi-SSP']
  },
  {
    id: 'fast-payouts',
    title: 'Pagos Rápidos Multidivisa y Cripto',
    description: 'Liquidez garantizada cuando la necesitas. Elige entre calendarios Net-7, Net-15 o Net-30 con retiros automáticos a través de USDT (TRC20/ERC20), Bitcoin, Wire Transfer bancario, PayPal y Paxum.',
    iconName: 'CreditCard',
    badge: 'Sin Retrasos',
    statsMetric: 'Net-7',
    statsLabel: 'Disponibilidad semanal',
    tags: ['USDT (TRC20)', 'Wire Internacional', 'PayPal', 'Paxum', 'Capitalist']
  },
  {
    id: 'anti-adblock',
    title: 'Tecnología Anti-AdBlock Integrada',
    description: 'Recupera hasta el 35% de los ingresos perdidos por usuarios con extensiones de bloqueo de anuncios. Nuestro script inteligente elude filtros sin alterar la navegación ni violar las políticas de los navegadores.',
    iconName: 'ShieldCheck',
    badge: 'Recuperación Activa',
    statsMetric: '+28-35%',
    statsLabel: 'Inventario adicional recuperado',
    tags: ['Cero latencia', 'Inmune a AdBlock Plus/uBlock', 'DNS Cloaking']
  },
  {
    id: 'dedicated-support',
    title: 'Account Manager Dedicado 24/7',
    description: 'Olvídate de bots de soporte impersonal. Te asignamos un especialista de monetización experimentado con contacto directo vía Telegram, Skype o WhatsApp para optimizar tus tags y resolver cualquier duda.',
    iconName: 'Headphones',
    badge: 'Soporte VIP',
    statsMetric: '< 15 min',
    statsLabel: 'Tiempo medio de respuesta',
    tags: ['Telegram VIP', 'Skype', 'Auditoría SEO/UX', 'Asesoría técnica']
  },
  {
    id: 'lightweight-tag',
    title: 'Script Ultraligero & Core Web Vitals',
    description: 'Un tag asíncrono universal de menos de 5KB que no congela el hilo principal del navegador. Preserva tu calificación de velocidad en Google PageSpeed y mantiene una experiencia fluida.',
    iconName: 'Zap',
    badge: 'Alta Velocidad',
    statsMetric: '< 5 KB',
    statsLabel: 'Peso total del script',
    tags: ['Async Load', 'Green PageSpeed', 'Zero CLS', 'CDN Cloudflare']
  },
  {
    id: 'content-control',
    title: 'Filtro Granular de Creatividades',
    description: 'Control absoluto sobre qué anuncios se muestran en tu portal. Bloquea categorías no deseadas, anunciantes específicos o define filtros estrictos de seguridad de marca con un solo clic.',
    iconName: 'Sliders',
    badge: 'Brand Safety',
    statsMetric: '100%',
    statsLabel: 'Protección de imagen editorial',
    tags: ['Filtros por Nicho', 'Bloqueo de Competencia', 'IAB Category Filters']
  }
];

export const ADVERTISER_SOLUTIONS: SolutionItem[] = [
  {
    id: 'rtb-traffic',
    title: 'Tráfico Directo & Programmatic RTB',
    description: 'Accede a miles de millones de impresiones exclusivas en publishers verificados. Compra inventario mediante nuestra intuitiva plataforma self-serve o conecta tu propio DSP a través de OpenRTB 2.5 y 3.0.',
    iconName: 'Layers',
    badge: 'Volumen Global',
    statsMetric: '2.5B+',
    statsLabel: 'Impresiones diarias disponibles',
    tags: ['OpenRTB 3.0', 'Self-Serve DSP', 'Direct Deals PMP', 'PMP Deals']
  },
  {
    id: 'smart-targeting',
    title: 'Segmentación Ultraprecisa por Datos',
    description: 'Apunta con exactitud milimétrica a tu comprador ideal. Filtra por Geo (País/Ciudad), Tipo de Dispositivo, Sistema Operativo, Operador Móvil (Carrier), Conexión WiFi/4G/5G, Idioma y Franjas Horarias.',
    iconName: 'Target',
    badge: 'Alta Conversión',
    statsMetric: '35+',
    statsLabel: 'Parámetros de segmentación',
    tags: ['Carrier / ISP', 'OS & Browser', 'Geo-Fencing', 'Dayparting', 'Device Model']
  },
  {
    id: 'anti-fraud',
    title: 'Filtrado Estricto Anti-Bot en Tiempo Real',
    description: 'Cero tolerancia al tráfico falso. Cada clic e impresión es analizado por motores de aprendizaje automático y validado con FraudScore y TAG Platinum para garantizar usuarios 100% humanos y de alta intención.',
    iconName: 'ShieldAlert',
    badge: 'Tráfico Limpio',
    statsMetric: '0.01%',
    statsLabel: 'Tasa residual de bot traffic',
    tags: ['FraudScore AI', 'TAG Certified', 'IP Blacklist Global', 'Click-Shield']
  },
  {
    id: 'pricing-models',
    title: 'Modelos de Cobro Flexibles (CPM, CPC, CPA)',
    description: 'Paga únicamente por los resultados que interesan a tu modelo de negocio. Admite campañas de visibilidad a CPM, clics calificados a CPC o conversiones verificadas a CPA con SmartCPA auto-bidding.',
    iconName: 'BarChart3',
    badge: 'ROI Óptimo',
    statsMetric: '3.4x',
    statsLabel: 'Retorno de inversión promedio',
    tags: ['Smart CPM', 'Cost Per Click', 'CPA Goal', 'CPL Lead Gen']
  },
  {
    id: 'postback-tracking',
    title: 'Tracking Avanzado & Postbacks S2S',
    description: 'Integración inmediata con los principales trackers del mercado (Voluum, Binom, RedTrack, AppsFlyer, Adjust). Optimiza en vivo basándote en eventos reales de conversión y valor de vida del cliente.',
    iconName: 'Webhook',
    badge: 'Integración Fácil',
    statsMetric: '< 100ms',
    statsLabel: 'Latencia de webhook postback',
    tags: ['Voluum', 'Binom', 'RedTrack', 'S2S Webhooks', 'API Reporting']
  },
  {
    id: 'auto-optimization',
    title: 'Reglas de Optimización Automatizadas',
    description: 'Configura reglas lógicas "si ocurre X, haz Y": pausa automáticamente fuentes de tráfico que no conviertan, ajusta pujas según la hora del día o escala presupuestos en los publishers más rentables sin intervención manual.',
    iconName: 'Sparkles',
    badge: 'Inteligencia Artificial',
    statsMetric: '-42%',
    statsLabel: 'Ahorro de presupuesto desperdiciado',
    tags: ['Auto-Blacklisting', 'Smart Bid Adjustment', 'Campañas 24/7 Autónomas']
  }
];
