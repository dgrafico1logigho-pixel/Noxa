# NOXA Ads — Plataforma Global de Monetización Publicitaria & Programmatic RTB

Frontend completo y responsivo de alto rendimiento para la red publicitaria y ecosistema de monetización digital **NOXA Ads** (inspirada en la arquitectura y propuesta de valor de *adselect.net*). Diseñada para conectar a más de 15,000 editores y anunciantes de escala global con tecnología de **Header Bidding en tiempo real**, **100% Fill Rate**, tecnología **Anti-AdBlock** y tráfico verificado libre de fraude.

---

## 🌟 Características Principales

- **Sistema de Diseño Dark Mode Enterprise:** Paleta grafito/azul oscuro profundo (`#070a12`, `#0b0f19`) con acentos vibrantes cian (`#06B6D4`), esmeralda (`#10B981`) y púrpura (`#8B5CF6`).
- **Efectos Glassmorphism & Microinteracciones:** Paneles translúcidos con desenfoque (`backdrop-blur`), bordes sutiles con degradados y efectos de resplandor dinámicos (`glow`).
- **Selector Bilingüe (Español / Inglés):** Conmutación instantánea de idiomas en toda la plataforma.
- **Conmutador de Segmentación:** Alternancia fluida entre soluciones para **Editores (Publishers)** y **Anunciantes (Advertisers)** en barra de navegación y cuerpo de página.
- **Simulador en Vivo de Header Bidding:** Elemento interactivo en el Hero que simula subastas OpenRTB 3.0 milisegundo a milisegundo con postores reales (Google AdX, Magnite, PubMatic, Xandr).
- **Catálogo de 5 Formatos Publicitarios con Sandbox Interactivo:**
  1. *Popunder / OnClick:* Tráfico masivo sin interrumpir la lectura del usuario.
  2. *Native Ads Widgets:* Widgets de recomendación contextual con mimetización CSS.
  3. *In-Page Push & Web Push:* Notificaciones emergentes con alta tasa de CTR.
  4. *Banners Display IAB:* Formatos estándar (300x250, 728x90, 320x50, 160x600) con refresco inteligente.
  5. *Video Outstream & Interstitial:* Reproductores VAST 4.2 de alto impacto y eCPMs de hasta $28.00.
  - *Cada formato incluye botón **"Probar Formato"** que abre un sandbox interactivo con vista previa en dispositivos de escritorio y móviles.*
- **Dashboard Demostrativo y Analíticas:** Vista previa interactiva de panel administrativo con selector de rangos de fechas (Hoy, 7D, 30D, Año), gráficos SVG de tendencia de ingresos/eCPM y desglose de los principales países (Top Geos).
- **Calculadora de Ingresos Estimados:** Slider interactivo de páginas vistas mensuales (50K a 10M+) y selección de nivel de tráfico geográfico (Tier 1, Tier 2, Tier 3) con proyección en tiempo real.
- **Guía de Integración Técnica en 3 Pasos:** Con generador de snippets de código interactivo (Universal JS Tag <5kb, adaptador Prebid.js 8.x y endpoint OpenRTB) con botón de 1 clic para copiar al portapapeles.
- **Módulo de Preguntas Frecuentes (FAQ Accordion):** Preguntas críticas con filtros dinámicos por categoría (Editores, Anunciantes, Pagos y Tecnología).
- **Formulario de Captación de Leads y Registro:** Validación de campos en tiempo real (correo corporativo, URL/presupuesto, formatos de interés) y feedback de confirmación de envío.
- **Modal de Autenticación / Registro:** Formulario interactivo con tabs para ingreso rápido y creación de cuenta.

---

## 🛠️ Stack Tecnológico

- **Framework:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler:** [Vite 5](https://vitejs.dev/) con configuración optimizada y `base: './'` para despliegues estáticos universales.
- **Estilos:** [Tailwind CSS 3.4](https://tailwindcss.com/) con configuración personalizada de temas, bordes y animaciones.
- **Iconografía:** [Lucide React](https://lucide.dev/)
- **Deploy:** GitHub Pages (con GitHub Actions automático) y compatible con Vercel, Netlify o Cloudflare Pages.

---

## 📁 Estructura del Proyecto

```text
Noxa/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Pipeline automático de despliegue en GitHub Pages
├── public/                       # Favicon e imágenes estáticas
├── src/
│   ├── components/
│   │   ├── Modals/
│   │   │   ├── AdFormatModal.tsx # Simulador interactivo en vivo de formatos publicitarios
│   │   │   └── AuthModal.tsx     # Modal de inicio de sesión y registro de usuarios
│   │   ├── ui/
│   │   │   ├── Badge.tsx         # Insignias con soporte para pulsos lumínicos
│   │   │   ├── Button.tsx        # Botones con gradientes, variantes y estados de carga
│   │   │   └── GlassCard.tsx     # Contenedor glassmorphism con bordes y glows
│   │   ├── Footer.tsx            # Footer corporativo con compliance legal y pasarelas
│   │   └── Navbar.tsx            # Barra fija/flotante con toggles y menú móvil
│   ├── data/
│   │   ├── adFormats.ts          # Datos técnicos de los 5 formatos publicitarios
│   │   ├── faq.ts                # Preguntas frecuentes categorizadas
│   │   ├── metrics.ts            # Métricas globales, Top Geos y postores OpenRTB
│   │   ├── solutions.ts          # Propuesta de valor profunda para Publishers y Advertisers
│   │   └── translations.ts       # Diccionarios de internacionalización (ES / EN)
│   ├── sections/
│   │   ├── AdFormatsSection.tsx  # Grid de catálogo de formatos
│   │   ├── DemoDashboardSection.tsx # Simulación de dashboard y gráfico dinámico
│   │   ├── FaqSection.tsx        # Acordeón de preguntas frecuentes con filtros
│   │   ├── HeroSection.tsx       # Hero con subastas de Header Bidding en vivo
│   │   ├── IntegrationSection.tsx# 3 pasos de integración y selector de código
│   │   ├── LeadCaptureSection.tsx# Formulario de captura y validación
│   │   ├── RevenueCalculator.tsx # Calculadora interactiva de eCPMs e ingresos
│   │   ├── SolutionsSection.tsx  # Pestañas segmentadas Publishers vs. Advertisers
│   │   └── StatsBar.tsx          # Barra de 4 métricas clave
│   ├── types/
│   │   └── index.ts              # Tipos e interfaces de TypeScript
│   ├── App.tsx                   # Composición principal de la aplicación
│   ├── index.css                 # Directivas de Tailwind y utilidades glassmorphism
│   └── main.tsx                  # Punto de entrada de React
├── index.html                    # Documento HTML principal con fuentes Plus Jakarta Sans
├── package.json                  # Dependencias y scripts
├── tailwind.config.js            # Configuración de colores, sombras y animaciones
├── tsconfig.json                 # Configuración de compilación TypeScript
└── vite.config.ts                # Configuración de Vite
```

---

## 🚀 Puesta en Marcha Local

### Prerrequisitos
- Node.js versión 18 o superior.
- Administrador de paquetes `npm`.

### Instalación y Ejecución

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo con Hot Module Replacement (HMR):**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

3. **Compilar para producción:**
   ```bash
   npm run build
   ```
   Genera los archivos estáticos optimizados en el directorio `/dist`.

4. **Probar la versión de producción localmente:**
   ```bash
   npm run preview
   ```

---

## 🌐 Instrucciones de Despliegue en GitHub

### Opción A: Despliegue Automático mediante GitHub Pages (Recomendado)
El proyecto incluye un flujo de trabajo listo en `.github/workflows/deploy.yml`.

1. Sube los cambios al repositorio de GitHub:
   ```bash
   git add .
   git commit -m "feat: complete modern AdTech platform frontend ready for deployment"
   git push origin main
   ```
2. En tu repositorio en GitHub, dirígete a: **Settings > Pages**.
3. En **Build and deployment > Source**, selecciona **GitHub Actions**.
4. ¡Listo! En aproximadamente 1 minuto tu sitio estará publicado y actualizado automáticamente ante cada `push`.

### Opción B: Despliegue en Vercel
1. Conecta tu repositorio de GitHub a tu cuenta de [Vercel](https://vercel.com).
2. Vercel detectará automáticamente que es un proyecto de **Vite**.
3. Haz clic en **Deploy**. Todas las rutas y optimizaciones funcionarán al 100%.

---

## 🔒 Cumplimiento y Normativas de Privacidad
- Totalmente alineado con los estándares del **Interactive Advertising Bureau (IAB)** y el protocolo **TCF 2.2**.
- Cumplimiento de **GDPR** (Reglamento General de Protección de Datos de la UE) y **CCPA** (California Consumer Privacy Act).
- Tecnología de verificación de inventario humano libre de fraude certificada por estándares de **TAG Platinum** y **Google Multiple Customer Management (MCM)**.
