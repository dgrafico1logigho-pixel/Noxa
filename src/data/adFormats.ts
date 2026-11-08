import { AdFormat } from '../types';

export const AD_FORMATS: AdFormat[] = [
  {
    id: 'popunder',
    name: 'Popunder / OnClick',
    category: 'Alto Volumen',
    tagline: 'Monetización masiva con impacto zero en el contenido principal',
    badge: 'Mayor eCPM Global',
    description: 'Se activa sutilmente en una nueva pestaña detrás de la ventana activa tras la interacción del usuario. Garantiza máxima atención sin interrumpir la experiencia de navegación.',
    ctr: '2.8% - 4.2%',
    ecpmRange: '$3.50 - $14.20',
    devices: ['desktop', 'mobile', 'tablet'],
    iabSpecs: 'Full Screen / Tab-Under compatible',
    benefits: [
      '100% Fill Rate en más de 195 países',
      'Tecnología Anti-AdBlock integrada',
      'Filtros de frecuencia personalizables (1/24h, 3/24h)',
      'Optimización de carga asíncrona ultrarrápida'
    ],
    previewType: 'popunder',
    accentColor: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'native',
    name: 'Native Ads Widgets',
    category: 'Contextual',
    tagline: 'Integración orgánica que mimetiza el estilo editorial',
    badge: 'Máxima Aceptación de Usuario',
    description: 'Bloques de recomendación de contenido y anuncios patrocinados que se adaptan automáticamente a la tipografía, colores y retícula de tu sitio web.',
    ctr: '4.5% - 8.9%',
    ecpmRange: '$2.80 - $9.50',
    devices: ['desktop', 'mobile', 'tablet'],
    iabSpecs: 'Multi-grid, Feed In-Article, Under-Article',
    benefits: [
      'Mimetización CSS automática con IA',
      'Sin penalizaciones de SEO ni de Core Web Vitals',
      'Contenido editorial y ofertas de alta calidad verificadas',
      'Totalmente compatible con políticas de Google AdSense'
    ],
    previewType: 'native',
    accentColor: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'push',
    name: 'In-Page Push & Web Push',
    category: 'Alta Interacción',
    tagline: 'Notificaciones flotantes directas de máximo click-through',
    badge: 'CTR Superior a la Media',
    description: 'Mensajes ligeros que aparecen sutilmente en la interfaz del usuario simulando notificaciones del sistema operativo en iOS, Android, Windows y macOS sin requerir suscripción previa en In-Page.',
    ctr: '6.2% - 12.4%',
    ecpmRange: '$4.20 - $16.80',
    devices: ['mobile', 'desktop', 'tablet'],
    iabSpecs: 'iOS Floating Pill / Android Top Banner / Native Push API',
    benefits: [
      'Funciona en iOS Safari donde el Web Push tradicional falla',
      'Tasa de respuesta inmediata y clics calificados',
      'Diseños personalizables con avatares y llamadas a la acción',
      'Perfecto para ofertas de eCommerce, FinTech y Gaming'
    ],
    previewType: 'push',
    accentColor: 'from-purple-500 to-indigo-600'
  },
  {
    id: 'display',
    name: 'Banners Display IAB',
    category: 'Formatos Estándar',
    tagline: 'Formatos clásicos certificados con demanda Header Bidding',
    badge: 'Estándar Programático',
    description: 'Inventario publicitario tradicional compatible con los estándares de la IAB. Conectado a más de 45 DSPs de nivel global mediante Prebid.js y OpenRTB con refresco inteligente.',
    ctr: '1.2% - 3.4%',
    ecpmRange: '$1.80 - $7.20',
    devices: ['desktop', 'mobile', 'tablet'],
    iabSpecs: '300x250, 728x90, 320x50, 160x600, 970x250, 300x600',
    benefits: [
      'Lazy loading y Viewability >75% garantizada',
      'Auto-refresco inteligente según tiempo en pantalla activa',
      'Subastas simultáneas entre Google AdX, Xandr y Magnite',
      'Creatividades livianas en HTML5 y WebP'
    ],
    previewType: 'banner',
    accentColor: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'video',
    name: 'Video Outstream & Interstitial',
    category: 'Premium Video',
    tagline: 'Experiencias audiovisuales inmersivas para audiencias modernas',
    badge: 'eCPMs Más Altos del Mercado',
    description: 'Reproductores de video ultraligeros que se despliegan suavemente entre párrafos de contenido o en pausas naturales de navegación, reproduciendo en silencio con audio al clic.',
    ctr: '8.5% - 18.2%',
    ecpmRange: '$6.50 - $28.00',
    devices: ['mobile', 'desktop', 'tablet'],
    iabSpecs: 'VAST 4.2 / VPAID 2.0 / VMAP Compliance',
    benefits: [
      'Reproducción automática silenciosa con baja carga en CPU',
      'Formatos verticales para TikTok/Reels traffic y horizontales 16:9',
      'Subastas con los mayores agregadores de marcas del mundo',
      'Puntuación de completitud de video (VCR) superior al 68%'
    ],
    previewType: 'video',
    accentColor: 'from-fuchsia-500 to-pink-600'
  }
];
