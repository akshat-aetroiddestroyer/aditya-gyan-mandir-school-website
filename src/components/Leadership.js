import { leadershipData } from '../data/leadershipData.js';

export function renderLeadership() {
  const cardsHtml = leadershipData.leaders.map(leader => {
    const paragraphsHtml = leader.message.map(p => `
      <p class="text-slate-700 text-[15px] sm:text-base leading-relaxed font-normal">
        ${p}
      </p>
    `).join('');

    return `
      <div class="bg-[#FAF9F6] rounded-3xl p-7 sm:p-10 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group">
        
        <!-- Top Colored Accent Line -->
        <div class="absolute top-0 left-0 right-0 h-1.5" style="background-color: ${leader.accentColor};"></div>

        <div>
          <!-- Header Profile Bar -->
          <div class="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 mb-8 pb-6 border-b border-slate-200/70">
            
            <!-- Authentic Portrait Image -->
            <div class="relative shrink-0">
              <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl sm:rounded-full overflow-hidden ring-4 ring-white shadow-md bg-slate-100 group-hover:scale-[1.02] transition-transform">
                <img 
                  src="${leader.image}" 
                  alt="${leader.name} - ${leader.role}" 
                  class="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <span class="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center text-[10px] text-amber-600 border border-amber-300">
                ★
              </span>
            </div>

            <!-- Leader Identity -->
            <div class="flex flex-col">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${leader.badgeColor} border w-fit mb-2">
                <span>${leader.role}'s Message</span>
              </span>
              <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight group-hover:text-[#7D0A14] transition-colors">
                ${leader.name}
              </h3>
              <p class="text-slate-500 text-xs sm:text-sm font-semibold tracking-wide uppercase mt-1">
                ${leader.title}
              </p>
            </div>

          </div>

          <!-- Message Body with Subtle Quotation Style -->
          <div class="relative">
            <!-- Decorative quotation icon -->
            <div class="text-slate-300/60 select-none font-serif text-5xl leading-none absolute -top-5 -left-2 pointer-events-none">
              “
            </div>
            <div class="relative z-10 space-y-4 pl-3 sm:pl-4 border-l-2 border-amber-400/40">
              ${paragraphsHtml}
            </div>
          </div>
        </div>

        <!-- Bottom Highlight Tag -->
        <div class="mt-8 pt-5 border-t border-slate-200/80 flex items-center justify-between text-xs">
          <span class="text-slate-500 font-medium">Aditya Gyan Mandir School</span>
          <span class="font-bold uppercase tracking-wider text-amber-800 bg-amber-100/60 px-3 py-1 rounded-full text-[11px]">
            ${leader.highlightPill}
          </span>
        </div>

      </div>
    `;
  }).join('');

  return `
    <section id="leadership" class="py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
      
      <!-- Subtle Ambient Glow -->
      <div class="absolute top-1/2 -left-40 w-80 h-80 bg-red-50/50 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute top-1/2 -right-40 w-80 h-80 bg-amber-50/50 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Section Header -->
        <div class="max-w-3xl mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100/60 border border-red-200 text-[#7D0A14] text-xs font-bold tracking-[0.14em] uppercase mb-4">
            <span class="w-1.5 h-1.5 rounded-full bg-[#7D0A14]"></span>
            <span>${leadershipData.sectionTag}</span>
          </div>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
            ${leadershipData.title} <span class="font-serif-italic font-normal text-[#7D0A14] lowercase">${leadershipData.titleHighlight}</span>
          </h2>
          <p class="text-slate-600 text-base sm:text-lg leading-relaxed">
            ${leadershipData.subtitle}
          </p>
        </div>

        <!-- Leadership Cards Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          ${cardsHtml}
        </div>

      </div>
    </section>
  `;
}

