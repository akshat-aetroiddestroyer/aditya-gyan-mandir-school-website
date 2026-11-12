import { schoolData } from '../data/schoolData.js';

export function renderHero() {
  const statsHtml = schoolData.heroStats.map((stat, index) => {
    let iconSvg = '';
    if (stat.icon === 'users') {
      iconSvg = `
        <svg class="w-5 h-5 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
        </svg>
      `;
    } else if (stat.icon === 'calendar') {
      iconSvg = `
        <svg class="w-5 h-5 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>
      `;
    } else {
      iconSvg = `
        <svg class="w-5 h-5 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      `;
    }

    return `
      <div class="flex items-center gap-3 ${index !== 0 ? 'border-t sm:border-t-0 sm:border-l border-white/15 pt-2.5 sm:pt-0 sm:pl-5' : ''}">
        ${iconSvg}
        <div>
          <div class="text-white font-bold text-[15px] sm:text-[16px] leading-tight tracking-tight">${stat.value}</div>
          <div class="text-slate-300/80 text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase mt-0.5">${stat.subtext}</div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <section id="hero" class="relative min-h-[90vh] lg:min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-32 pb-10 sm:pb-14 overflow-hidden bg-slate-950">
      
      <!-- Background Classroom Photo: Sharp, Natural, and Clearly Visible -->
      <div class="absolute inset-0 z-0">
        <img 
          src="src/assets/images/hero-bg.png" 
          alt="Aditya Gyan Mandir School Classroom" 
          class="w-full h-full object-cover object-center"
          loading="eager"
        />
        <!-- Smooth horizontal dark gradient concentrated on the left behind text, fully transparent on right -->
        <div class="absolute inset-0 hero-gradient-overlay pointer-events-none"></div>
      </div>

      <!-- Main Hero Content (Left Aligned matching target reference) -->
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div class="max-w-2xl">
          
          <!-- Eyebrow Pill Badge -->
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-amber-400/30 backdrop-blur-md mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-[#E5A823]"></span>
            <span class="text-[11px] sm:text-[12px] font-bold text-amber-300 tracking-[0.14em] uppercase">
              • A TRADITION OF EXCELLENCE • A WORLD OF POSSIBILITY
            </span>
          </div>

          <!-- Single Main Heading with Dual Font Styling -->
          <h1 class="text-4xl sm:text-6xl lg:text-[72px] font-extrabold text-white tracking-tight leading-[1.08] mb-5">
            Where bright <br />
            futures <span class="font-serif-italic font-normal text-[#E5A823] lowercase">begin.</span>
          </h1>

          <!-- Introductory Paragraph -->
          <p class="text-slate-200/90 text-base sm:text-[17px] leading-relaxed font-normal max-w-xl mb-8">
            Big ideas start with young learners. Welcome to <strong class="text-white font-semibold">${schoolData.name}</strong> — a caring community where every child is known, supported, and inspired to grow.
          </p>

          <!-- Call to Action Buttons -->
          <div class="flex flex-row items-center gap-3.5">
            <a 
              href="#about" 
              class="btn-primary-maroon inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full text-[14px] sm:text-[15px] font-semibold tracking-tight shadow-md hover:shadow-lg transition-all"
            >
              <span>Discover our school</span>
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>

            <a 
              href="#contact" 
              class="btn-ghost-white inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-full text-[14px] sm:text-[15px] font-semibold tracking-tight"
            >
              <span>Plan a visit</span>
            </a>
          </div>

        </div>
      </div>

      <!-- Refined Bottom Statistics Strip: Translucent Left-Aligned Pill (Matching Target Reference) -->
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 sm:mt-12">
        <div class="inline-block bg-black/45 backdrop-blur-md border border-white/15 rounded-2xl px-5 py-3.5 shadow-xl max-w-full sm:max-w-2xl">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-6">
            ${statsHtml}
          </div>
        </div>
      </div>

    </section>
  `;
}
