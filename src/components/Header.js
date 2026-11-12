import { schoolData } from '../data/schoolData.js';
import { navigationItems, headerAction } from '../data/navigation.js';

export function renderHeader() {
  const navLinksHtml = navigationItems.map(item => `
    <li>
      <a href="${item.href}" class="nav-link text-slate-700 hover:text-red-900 font-medium text-[15px] tracking-tight px-1 py-1">
        ${item.label}
      </a>
    </li>
  `).join('');

  return `
    <header id="site-header" class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          
          <!-- School Logo & Branding (Left) -->
          <a href="#" class="flex items-center gap-3.5 group focus:outline-none" aria-label="${schoolData.name}">
            <div class="relative w-12 h-12 rounded-full overflow-hidden shadow-sm ring-2 ring-amber-500/30 group-hover:ring-amber-500/60 transition-all flex items-center justify-center bg-white">
              <img 
                src="src/assets/images/agms-logo.png" 
                alt="${schoolData.name} Official Logo" 
                class="w-full h-full object-contain p-0.5"
                loading="eager"
              />
            </div>
            <div class="flex flex-col">
              <span class="font-extrabold text-[19px] leading-tight text-slate-900 tracking-tight group-hover:text-[#7D0A14] transition-colors">
                ${schoolData.name}
              </span>
              <span class="text-[11px] font-semibold text-slate-500 tracking-[0.14em] uppercase">
                ${schoolData.shortName} • ${schoolData.affiliation}
              </span>
            </div>
          </a>

          <!-- Desktop Navigation Links (Center) -->
          <nav class="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            <ul class="flex items-center gap-7">
              ${navLinksHtml}
            </ul>
          </nav>

          <!-- Desktop CTA Action (Right) -->
          <div class="hidden md:flex items-center">
            <a 
              href="${headerAction.href}" 
              class="btn-primary-maroon inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[14px] font-semibold tracking-tight shadow-md hover:shadow-lg transition-all"
            >
              <span>${headerAction.label}</span>
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>

          <!-- Mobile Controls (Right) -->
          <div class="flex md:hidden items-center gap-2.5">
            <a 
              href="${headerAction.href}" 
              class="btn-primary-maroon inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[13px] font-semibold"
            >
              <span>${headerAction.label}</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>

            <!-- Mobile Hamburger Button -->
            <button 
              id="mobile-menu-toggle" 
              type="button" 
              class="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#7D0A14]"
              aria-label="Toggle navigation menu"
              aria-expanded="false"
            >
              <svg id="hamburger-icon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              </svg>
              <svg id="close-icon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </header>
  `;
}

