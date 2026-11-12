import { aboutData } from '../data/aboutData.js';

export function renderAbout() {
  const highlightsHtml = aboutData.highlights.map(item => `
    <div class="bg-white/5 border border-white/10 rounded-xl p-4 transition-all hover:bg-white/10">
      <div class="text-[#E5A823] font-bold text-lg sm:text-xl tracking-tight">${item.value}</div>
      <div class="text-white text-xs font-semibold uppercase tracking-wider mt-0.5">${item.label}</div>
      <div class="text-slate-400 text-xs mt-1 leading-snug">${item.desc}</div>
    </div>
  `).join('');

  const facilitiesHtml = aboutData.academicFacilities.map(fac => `
    <div class="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
      <div>
        <div class="w-16 h-16 rounded-full overflow-hidden mb-5 border-2 border-amber-400/30 p-0.5 bg-slate-50 group-hover:border-[#7D0A14] transition-colors">
          <img src="${fac.image}" alt="${fac.name}" class="w-full h-full object-cover rounded-full" />
        </div>
        <span class="inline-block text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2.5">
          ${fac.spec}
        </span>
        <h4 class="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#7D0A14] transition-colors">
          ${fac.name}
        </h4>
        <p class="text-slate-600 text-sm leading-relaxed">
          ${fac.desc}
        </p>
      </div>
    </div>
  `).join('');

  return `
    <!-- ABOUT SECTION 1: Rooted in Community (Dark Navy) -->
    <section id="about" class="relative py-24 bg-[#141D2B] text-white overflow-hidden">
      <!-- Subtle background radial highlight -->
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-[#7D0A14]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <!-- Left Column: Story & Information -->
          <div class="lg:col-span-7">
            
            <!-- Eyebrow Pill -->
            <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-[#E5A823] text-xs font-bold tracking-[0.15em] uppercase mb-6">
              <span class="w-1.5 h-1.5 rounded-full bg-[#E5A823]"></span>
              <span>${aboutData.sectionTag}</span>
            </div>

            <!-- Heading with Italic Accent -->
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6">
              ${aboutData.title} <br />
              A place to <span class="font-serif-italic font-normal text-[#E5A823] lowercase">${aboutData.titleHighlight}</span>
            </h2>

            <!-- Exact Brochure Information Narrative -->
            <p class="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              ${aboutData.aboutUsParagraph}
            </p>

            <!-- 4 Quick Fact Highlights -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-8">
              ${highlightsHtml}
            </div>

            <div class="pt-2">
              <a 
                href="#vision-mission" 
                class="inline-flex items-center gap-2 text-[#E5A823] hover:text-amber-300 font-semibold text-sm tracking-wide group transition-colors"
              >
                <span>Read our School Vision, Mission & Goals</span>
                <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>

          </div>

          <!-- Right Column: Visual Composite & Highlight Badge -->
          <div class="lg:col-span-5 relative">
            <div class="relative mx-auto max-w-md lg:max-w-none">
              
              <!-- Featured Campus Imagery Card -->
              <div class="rounded-3xl overflow-hidden border border-white/15 shadow-2xl relative bg-slate-800">
                <img 
                  src="src/assets/images/facility_library.jpg" 
                  alt="AGMS Library and Campus" 
                  class="w-full h-80 sm:h-96 object-cover filter brightness-[0.9] contrast-[1.05]"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div class="absolute bottom-6 left-6 right-6">
                  <span class="inline-block px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-semibold text-white mb-2">
                    Campus Library • 2,000+ Books
                  </span>
                  <p class="text-xs text-slate-300">
                    Nurturing inquiry, concentration, and analytical thinking in a calm environment.
                  </p>
                </div>
              </div>

              <!-- Floating Yellow Badge Card (matching reference design desktop_02) -->
              <div class="absolute -bottom-6 -left-4 sm:-left-8 bg-[#F6D062] text-slate-900 rounded-2xl p-4 sm:p-5 shadow-xl border-2 border-white/40 max-w-[270px] sm:max-w-[300px]">
                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-full bg-slate-900/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg class="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                    </svg>
                  </div>
                  <div>
                    <h5 class="text-sm font-extrabold leading-tight text-slate-950 mb-1">
                      Known by name. Encouraged every day.
                    </h5>
                    <p class="text-xs text-slate-800 leading-snug">
                      Fostering academic excellence and strong moral values in Bhopal since 1997.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ABOUT SECTION 2: School Vision, Mission & Goals (Authoritative Brochure Content) -->
    <section id="vision-mission" class="py-24 bg-[#FAF9F6] border-b border-slate-200/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="max-w-3xl mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100/60 border border-red-200 text-[#7D0A14] text-xs font-bold tracking-[0.14em] uppercase mb-4">
            <span>OUR GUIDING PRINCIPLES</span>
          </div>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
            Guided by purpose, inspiring every <span class="font-serif-italic font-normal text-[#7D0A14] lowercase">step.</span>
          </h2>
          <p class="text-slate-600 text-base sm:text-lg leading-relaxed">
            Our official Vision, Mission, and Goals form the cornerstone of every classroom discussion, laboratory discovery, and co-scholastic opportunity at Aditya Gyan Mandir School.
          </p>
        </div>

        <!-- 3 Authoritative Cards for Vision, Mission & Goals -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          <!-- Card 1: School Vision -->
          <div class="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between relative overflow-hidden group">
            <div class="absolute top-0 left-0 right-0 h-1.5 bg-[#D4AF37]"></div>
            <div>
              <div class="w-12 h-12 rounded-2xl bg-amber-50 text-[#D4AF37] border border-amber-200 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
              <span class="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
                ${aboutData.vision.tagline}
              </span>
              <h3 class="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-[#7D0A14] transition-colors">
                ${aboutData.vision.title}
              </h3>
              <!-- EXACT VISION TEXT FROM BROCHURE -->
              <p class="text-slate-700 text-[15px] leading-relaxed italic border-l-2 border-amber-300 pl-4 py-1">
                "${aboutData.vision.text}"
              </p>
            </div>
            <div class="mt-8 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-widest">
              Official School Vision
            </div>
          </div>

          <!-- Card 2: School Mission -->
          <div class="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between relative overflow-hidden group">
            <div class="absolute top-0 left-0 right-0 h-1.5 bg-[#7D0A14]"></div>
            <div>
              <div class="w-12 h-12 rounded-2xl bg-red-50 text-[#7D0A14] border border-red-200 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <span class="text-xs font-bold uppercase tracking-wider text-red-800 block mb-1">
                ${aboutData.mission.tagline}
              </span>
              <h3 class="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-[#7D0A14] transition-colors">
                ${aboutData.mission.title}
              </h3>
              <!-- EXACT MISSION TEXT FROM BROCHURE -->
              <p class="text-slate-700 text-[15px] leading-relaxed italic border-l-2 border-red-300 pl-4 py-1">
                "${aboutData.mission.text}"
              </p>
            </div>
            <div class="mt-8 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-widest">
              Official School Mission
            </div>
          </div>

          <!-- Card 3: School Goals -->
          <div class="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between relative overflow-hidden group">
            <div class="absolute top-0 left-0 right-0 h-1.5 bg-amber-600"></div>
            <div>
              <div class="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                </svg>
              </div>
              <span class="text-xs font-bold uppercase tracking-wider text-amber-800 block mb-1">
                ${aboutData.goals.tagline}
              </span>
              <h3 class="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-[#7D0A14] transition-colors">
                ${aboutData.goals.title}
              </h3>
              <!-- EXACT GOALS TEXT FROM BROCHURE -->
              <p class="text-slate-700 text-[15px] leading-relaxed italic border-l-2 border-amber-400 pl-4 py-1">
                "${aboutData.goals.text}"
              </p>
            </div>
            <div class="mt-8 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-widest">
              Official School Goals
            </div>
          </div>

        </div>

        <!-- Academic Facilities Highlight Row (from Brochure About Us) -->
        <div class="mt-16 pt-12 border-t border-slate-200">
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span class="text-xs font-bold uppercase tracking-[0.14em] text-slate-500 block mb-2">CAMPUS INFRASTRUCTURE</span>
              <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Well-Equipped Learning Environments
              </h3>
            </div>
            <p class="text-slate-600 text-sm max-w-md mt-2 md:mt-0">
              Supporting comprehensive curricula with dedicated facilities for science, technology, reading, and co-scholastic growth.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            ${facilitiesHtml}
          </div>
        </div>

      </div>
    </section>
  `;
}
