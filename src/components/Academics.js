import { academicsData } from '../data/academicsData.js';

export function renderAcademics() {
  // Approaches Cards
  const approachesHtml = academicsData.approaches.map(item => `
    <div class="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
      <div>
        <div class="w-12 h-12 rounded-2xl bg-red-50 text-[#7D0A14] border border-red-200/60 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-[#7D0A14] group-hover:text-white transition-all">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
          </svg>
        </div>
        <h4 class="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#7D0A14] transition-colors">
          ${item.title}
        </h4>
        <p class="text-slate-600 text-sm leading-relaxed">
          ${item.desc}
        </p>
      </div>
    </div>
  `).join('');

  // Learning Environment Highlights
  const envHtml = academicsData.learningEnvironment.map((env, i) => `
    <div class="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm flex items-start gap-4 hover:border-amber-400/60 transition-colors">
      <div class="w-7 h-7 rounded-full bg-amber-500/15 text-amber-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
        ${i + 1}
      </div>
      <div>
        <h5 class="text-sm font-bold text-slate-900 mb-1">${env.title}</h5>
        <p class="text-xs text-slate-500 leading-relaxed">${env.desc}</p>
      </div>
    </div>
  `).join('');

  // Why AGMS 8-Point Cards
  const whyHtml = academicsData.whyAgms.map(w => `
    <div class="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all group">
      <span class="text-xs font-extrabold text-[#7D0A14] bg-red-50 border border-red-200/60 px-2.5 py-1 rounded-full inline-block mb-3">
        FEATURE ${w.num}
      </span>
      <h4 class="text-base font-extrabold text-slate-900 mb-2 group-hover:text-[#7D0A14] transition-colors">
        ${w.title}
      </h4>
      <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
        ${w.desc}
      </p>
    </div>
  `).join('');

  return `
    <!-- ACADEMICS SECTION -->
    <section id="academics" class="py-24 bg-[#FAF9F6] border-b border-slate-200/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="max-w-3xl mb-16">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100/60 border border-red-200 text-[#7D0A14] text-xs font-bold tracking-[0.14em] uppercase mb-4">
            <span class="w-1.5 h-1.5 rounded-full bg-[#7D0A14]"></span>
            <span>${academicsData.sectionTag}</span>
          </div>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
            ${academicsData.title} <span class="font-serif-italic font-normal text-[#7D0A14] lowercase">${academicsData.titleHighlight}</span>
          </h2>
          <p class="text-slate-600 text-base sm:text-lg leading-relaxed">
            ${academicsData.subtitle}
          </p>
        </div>

        <!-- Academic Approach Pillars Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          ${approachesHtml}
        </div>

        <!-- LEARNING ENVIRONMENT SECTION (Educational Philosophy) -->
        <div class="bg-gradient-to-br from-slate-900 to-[#141D2B] rounded-3xl p-8 sm:p-12 text-white mb-20 shadow-xl relative overflow-hidden">
          <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div class="relative z-10 max-w-2xl mb-10">
            <span class="inline-block text-amber-300 text-xs font-bold tracking-[0.15em] uppercase mb-2">
              EDUCATIONAL PHILOSOPHY
            </span>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              A Positive & Nurturing Learning Environment
            </h3>
            <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
              Curriculum practices at AGMS are tailored to inspire a love of learning in a balanced, joyful, and encouraging atmosphere.
            </p>
          </div>

          <div class="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            ${envHtml}
          </div>
        </div>

        <!-- WHY AGMS SECTION -->
        <div id="why-agms" class="pt-4">
          <div class="max-w-2xl mb-12">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/70 border border-amber-200 text-amber-900 text-xs font-bold tracking-[0.14em] uppercase mb-3">
              <span>OUR DISTINCT STRENGTHS</span>
            </div>
            <h3 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Choose <span class="text-[#7D0A14]">AGMS?</span>
            </h3>
            <p class="text-slate-600 text-sm sm:text-base mt-2">
              Dedicated infrastructure and caring teachers working together to provide high educational standards.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            ${whyHtml}
          </div>
        </div>

      </div>
    </section>
  `;
}

