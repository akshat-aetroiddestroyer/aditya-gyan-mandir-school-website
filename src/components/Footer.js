import { schoolData } from '../data/schoolData.js';
import { footerQuickLinks } from '../data/navigation.js';

export function renderFooter() {
  const quickLinksHtml = footerQuickLinks.map(link => `
    <li>
      <a 
        href="${link.href}" 
        class="text-slate-600 hover:text-[#7D0A14] text-sm transition-colors inline-flex items-center gap-1.5 group py-1"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#7D0A14] transition-colors"></span>
        <span>${link.label}</span>
      </a>
    </li>
  `).join('');

  const phoneLinksHtml = schoolData.contact.phones.map(p => `
    <li>
      <a 
        href="tel:${p.raw}" 
        class="text-slate-700 hover:text-[#7D0A14] font-semibold text-sm transition-colors inline-flex items-center gap-2"
      >
        <svg class="w-3.5 h-3.5 text-amber-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
        <span>${p.formatted}</span>
      </a>
    </li>
  `).join('');

  return `
    <footer id="site-footer" class="bg-white border-t border-slate-200/90 pt-16 pb-12 relative text-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Main Footer Columns -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-200/80">
          
          <!-- Column 1: Brand & Identity (4 cols) -->
          <div class="lg:col-span-4 flex flex-col justify-between">
            <div>
              <a href="#hero" class="flex items-center gap-3.5 group mb-5" aria-label="${schoolData.name}">
                <div class="w-12 h-12 rounded-full overflow-hidden shadow-sm ring-2 ring-amber-500/30 group-hover:ring-amber-500/60 transition-all flex items-center justify-center bg-white shrink-0">
                  <img 
                    src="src/assets/images/agms-logo.png" 
                    alt="${schoolData.name} Logo" 
                    class="w-full h-full object-contain p-0.5"
                    loading="lazy"
                  />
                </div>
                <div>
                  <span class="font-extrabold text-[18px] text-slate-900 leading-tight block group-hover:text-[#7D0A14] transition-colors">
                    ${schoolData.name}
                  </span>
                  <span class="text-[11px] font-semibold text-slate-500 tracking-[0.14em] uppercase block mt-0.5">
                    ${schoolData.shortName} • ${schoolData.affiliation}
                  </span>
                </div>
              </a>

              <p class="text-slate-600 text-sm leading-relaxed mb-6 max-w-sm">
                Little learners. Big possibilities. A caring community empowering young minds through quality education, practical learning, and character building since 1997.
              </p>
            </div>

            <!-- Official Instagram Profile Link -->
            <div class="pt-2">
              <span class="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">Follow Our Journey</span>
              <a 
                href="${schoolData.contact.instagram}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-100 hover:bg-pink-50 text-slate-700 hover:text-pink-700 border border-slate-200/80 hover:border-pink-300 text-xs font-bold transition-all shadow-sm"
                aria-label="Follow AGMS on Instagram"
              >
                <!-- Official Instagram SVG Icon -->
                <svg class="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram: ${schoolData.contact.instagramHandle}</span>
                <span class="text-slate-400">↗</span>
              </a>
            </div>
          </div>

          <!-- Column 2: Quick Links (3 cols) -->
          <div class="lg:col-span-3">
            <h4 class="text-xs font-bold uppercase tracking-[0.14em] text-slate-900 mb-4 pb-2 border-b border-slate-100">
              EXPLORE OUR SCHOOL
            </h4>
            <ul class="space-y-1">
              ${quickLinksHtml}
            </ul>
          </div>

          <!-- Column 3: Contact & Visiting Information (5 cols) -->
          <div class="lg:col-span-5 space-y-5">
            <div>
              <h4 class="text-xs font-bold uppercase tracking-[0.14em] text-slate-900 mb-4 pb-2 border-b border-slate-100">
                SAY HELLO • VISIT OUR CAMPUS
              </h4>
              
              <!-- Address -->
              <div class="mb-4">
                <span class="text-xs font-bold uppercase text-slate-400 block mb-1">Campus Location</span>
                <a 
                  href="${schoolData.contact.mapsSearchUrl}" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="text-slate-700 hover:text-[#7D0A14] text-sm leading-relaxed inline-flex items-start gap-2 group transition-colors"
                >
                  <svg class="w-4 h-4 text-amber-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <span>${schoolData.contact.address} <span class="text-xs text-[#7D0A14] font-semibold underline block group-hover:no-underline">Open Directions in Maps ↗</span></span>
                </a>
              </div>

              <!-- Phone Numbers -->
              <div class="mb-4">
                <span class="text-xs font-bold uppercase text-slate-400 block mb-1.5">Official Telephones</span>
                <ul class="space-y-1.5">
                  ${phoneLinksHtml}
                </ul>
              </div>

              <!-- Email -->
              <div class="mb-4">
                <span class="text-xs font-bold uppercase text-slate-400 block mb-1">Email Administration</span>
                <a 
                  href="mailto:${schoolData.contact.email}" 
                  class="text-slate-700 hover:text-[#7D0A14] font-semibold text-sm inline-flex items-center gap-2 transition-colors"
                >
                  <svg class="w-3.5 h-3.5 text-amber-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <span>${schoolData.contact.email}</span>
                </a>
              </div>

              <!-- Office Hours -->
              <div>
                <span class="text-xs font-bold uppercase text-slate-400 block mb-1">Visiting Hours</span>
                <p class="text-xs text-slate-600">
                  ${schoolData.contact.officeHours}
                </p>
              </div>

            </div>
          </div>

        </div>

        <!-- Bottom Legal Bar -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p class="font-medium text-slate-600 text-center sm:text-left">
            © 2026 Aditya Gyan Mandir School. All Rights Reserved.
          </p>
          <div class="flex items-center gap-6">
            <span>Krishna Nagar, Karond, Bhopal (M.P.)</span>
            <a href="#hero" class="text-slate-600 hover:text-[#7D0A14] font-semibold transition-colors">
              Back to Top ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  `;
}

