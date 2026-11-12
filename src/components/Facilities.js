import { academicsData } from '../data/academicsData.js';

export function renderFacilities() {
  const facilityCardsHtml = academicsData.facilities.map(fac => `
    <div class="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div class="relative h-56 sm:h-60 overflow-hidden bg-slate-100">
          <img 
            src="${fac.image}" 
            alt="${fac.name}" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"></div>
          <span class="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#7D0A14] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
            ${fac.badge}
          </span>
        </div>

        <div class="p-6 sm:p-7">
          <h4 class="text-xl font-extrabold text-slate-900 mb-2.5 group-hover:text-[#7D0A14] transition-colors">
            ${fac.name}
          </h4>
          <p class="text-slate-600 text-sm leading-relaxed">
            ${fac.desc}
          </p>
        </div>
      </div>

      <div class="px-6 sm:px-7 pb-6 pt-2">
        <span class="text-xs font-semibold text-[#7D0A14] group-hover:text-red-900 inline-flex items-center gap-1.5">
          <span>Learn more about this facility</span>
          <svg class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </div>
    </div>
  `).join('');

  return `
    <!-- SCHOOL FACILITIES SECTION -->
    <section id="facilities" class="py-24 bg-white border-b border-slate-200/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="max-w-3xl mb-16">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100/60 border border-red-200 text-[#7D0A14] text-xs font-bold tracking-[0.14em] uppercase mb-4">
            <span class="w-1.5 h-1.5 rounded-full bg-[#7D0A14]"></span>
            <span>CAMPUS INFRASTRUCTURE</span>
          </div>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
            Spaces designed for curiosity & <span class="font-serif-italic font-normal text-[#7D0A14] lowercase">discovery.</span>
          </h2>
          <p class="text-slate-600 text-base sm:text-lg leading-relaxed">
            Our campus at Karond, Bhopal is carefully planned to support holistic education with dedicated spaces for reading, science, technology, group assemblies, and creative play.
          </p>
        </div>

        <!-- 8 Facilities Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          ${facilityCardsHtml}
        </div>

        <!-- Universal CTA Banner matching reference (desktop_04 & desktop_06) -->
        <div class="mt-20 bg-[#FAF9F6] border border-slate-200/80 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div class="w-12 h-12 mx-auto rounded-full bg-red-50 text-[#7D0A14] border border-red-200 flex items-center justify-center mb-5">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
          </div>
          <span class="text-xs font-bold uppercase tracking-[0.15em] text-[#7D0A14] block mb-2">
            WE'D LOVE TO HEAR FROM YOU
          </span>
          <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
            There's a place for your family at <span class="text-[#7D0A14]">AGMS.</span>
          </h3>
          <p class="text-slate-600 text-sm sm:text-base max-w-lg mx-auto mb-8">
            Have a question or want to visit our campus in Karond, Bhopal? Our friendly administration team is here to help your family.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact" 
              class="btn-primary-maroon px-8 py-3.5 rounded-full text-sm font-semibold inline-flex items-center gap-2"
            >
              <span>Get in touch</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  `;
}
