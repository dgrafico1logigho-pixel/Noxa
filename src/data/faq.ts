import { FaqItem } from '../types';

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'publishers',
    question: '¿Cuáles son los requisitos mínimos de tráfico para registrarme como Editor?',
    answer: 'No exigimos un mínimo estricto de millones de visitas mensuales para comenzar. Aceptamos sitios web que cuenten con tráfico legítimo, orgánico y de calidad. Revisamos cada dominio para asegurarnos de que cumpla con los estándares de seguridad de marca (sin contenido ilícito, malware o fuentes de tráfico bot artificial).'
  },
  {
    id: 'faq-2',
    category: 'payments',
    question: '¿Cuáles son los métodos de pago disponibles y los umbrales mínimos?',
    answer: 'Pagamos puntualmente mediante USDT (TRC-20 y ERC-20), Bitcoin (BTC), Transferencia Bancaria Internacional (Wire), PayPal y Paxum. El umbral mínimo de retiro es de solo $50 para criptomonedas y Paxum, y $500 para transferencias bancarias internacionales. Ofrecemos ciclos de facturación Net-7 (semanal) y Net-15 según el volumen de tu cuenta.'
  },
  {
    id: 'faq-3',
    category: 'publishers',
    question: '¿Puedo utilizar NOXA Ads junto con Google AdSense u otras redes publicitarias?',
    answer: 'Sí, absolutamente. Nuestros formatos como Popunder, In-Page Push y Native Ads son 100% compatibles con las políticas de Google AdSense y no interfieren con sus bloques de anuncios. De hecho, muchos de nuestros editores aumentan sus ingresos totales entre un 40% y 80% al monetizar con NOXA Ads en conjunto con AdSense.'
  },
  {
    id: 'faq-4',
    category: 'tech',
    question: '¿Cómo funciona la tecnología Anti-Adblock de NOXA?',
    answer: 'Utilizamos un sistema propietario de distribución de scripts con rotación dinámica de nombres de dominio y ofuscación de código. Esto permite que los anuncios se carguen de manera imperceptible para los bloqueadores de publicidad convencionales (como AdBlock Plus, uBlock Origin y Brave Shield), recuperando entre el 25% y el 35% de impresiones que de otro modo se perderían.'
  },
  {
    id: 'faq-5',
    category: 'tech',
    question: '¿Qué mecanismos utilizan para proteger a los anunciantes contra el fraude y los bots?',
    answer: 'Implementamos una arquitectura multicapa de detección de fraude: validamos huellas de navegación (browser fingerprinting), patrones de interacción del cursor, tiempos de residencia, comportamiento de red y listas negras de IPs comerciales y proxies sospechosos con certificación TAG Platinum y algoritmos de FraudScore. Todo tráfico no humano es bloqueado antes de que se cobre al anunciante.'
  },
  {
    id: 'faq-6',
    category: 'advertisers',
    question: '¿Qué modelos de cobro y presupuesto mínimo manejan para Anunciantes?',
    answer: 'Puedes crear campañas bajo modelos CPM (costo por mil impresiones), CPC (costo por clic) y CPA / SmartCPA (costo por acción o adquisición validada). El depósito mínimo inicial para comenzar a pautar es de $100 USD, lo que te permite testear múltiples creatividades y fuentes de tráfico con total control presupuestario.'
  },
  {
    id: 'faq-7',
    category: 'tech',
    question: '¿Cómo se realiza la integración técnica del Tag o SDK en mi sitio web?',
    answer: 'La integración toma menos de 2 minutos. En tu panel administrativo generas un tag JavaScript asíncrono universal de 1 sola línea de código y lo pegas antes de la etiqueta </head> o </body> de tu web. También disponemos de adaptadores oficiales para Prebid.js y APIs REST/OpenRTB para integraciones programáticas avanzadas.'
  },
  {
    id: 'faq-8',
    category: 'advertisers',
    question: '¿Qué verticales de ofertas tienen mejor rendimiento en la red?',
    answer: 'Nuestra red destaca por un rendimiento excepcional en verticales como eCommerce, Aplicaciones Móviles y FinTech, Criptomonedas, Juegos (Gaming/iGaming), Utilidades de Software, Suscripciones digitales y Entretenimiento general, tanto en mercados Tier 1 (US, UK, DE, CA, AU) como en mercados emergentes de rápido crecimiento (LATAM, SEA, MENA).'
  }
];
