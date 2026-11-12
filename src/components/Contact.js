import { schoolData } from '../data/schoolData.js';

export function renderContact() {
  const phonesHtml = schoolData.contact.phones.map(phone => `
    <a 
      href="tel:${phone.raw}" 
      class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200/90 text-slate-800 font-bold text-sm sm:text-base hover:text-[#7D0A14] hover:border-[#7D0A14] hover:shadow-sm transition-all group"
    >
      <svg class="w-4 h-4 text-amber-500 group-hover:text-[#7D0A14] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
      <span>${phone.formatted}</span>
    </a>
  `).join('');

  return `
    <!-- CONTACT US SECTION -->
    <section id="contact" class="py-24 bg-[#FAF9F6] border-b border-slate-200/80 relative overflow-hidden">
      
      <!-- Subtle ambient background accents -->
      <div class="absolute top-0 right-1/4 w-96 h-96 bg-red-50/60 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-50/60 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Section Header -->
        <div class="max-w-3xl mb-16">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100/60 border border-red-200 text-[#7D0A14] text-xs font-bold tracking-[0.14em] uppercase mb-4">
            <span class="w-1.5 h-1.5 rounded-full bg-[#7D0A14]"></span>
            <span>GET IN TOUCH • A HELPING HAND</span>
          </div>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
            Let's start with a <span class="font-serif-italic font-normal text-[#7D0A14] lowercase">conversation.</span>
          </h2>
          <p class="text-slate-600 text-base sm:text-lg leading-relaxed">
            Have a question, need guidance, or want to plan a personal school visit? Connect with our administration team at <strong class="text-slate-900 font-semibold">${schoolData.name}</strong>.
          </p>
        </div>

        <!-- Contact Grid: Left Information Cards + Right Google Maps -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          <!-- Left Column: Official Contact Cards (7 cols) -->
          <div class="lg:col-span-7 space-y-6">
            
            <!-- Contact Numbers Card -->
            <div class="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all">
              <div class="flex items-start gap-4 mb-4">
                <div class="w-12 h-12 rounded-2xl bg-red-50 text-[#7D0A14] border border-red-200/60 flex items-center justify-center shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <div>
                  <span class="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-0.5">DIRECT TELEPHONE LINES</span>
                  <h3 class="text-xl font-extrabold text-slate-900">Call Our Main Office</h3>
                </div>
              </div>
              <p class="text-slate-600 text-sm mb-5">
                Our staff is available during office hours to answer your questions regarding admissions, academics, and visits:
              </p>
              <div class="flex flex-wrap gap-2.5 sm:gap-3">
                ${phonesHtml}
              </div>
              <div class="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span><strong>Office Hours:</strong> ${schoolData.contact.officeHours}</span>
              </div>
            </div>

            <!-- Email & Instagram 2-Column Row -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <!-- Official Email Card -->
              <div class="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div class="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center mb-4">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <span class="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">OFFICIAL EMAIL</span>
                  <h4 class="text-base font-extrabold text-slate-900 mb-2">Send Us an Email</h4>
                  <p class="text-xs text-slate-500 mb-4">
                    For written enquiries, admissions paperwork, and administrative queries:
                  </p>
                </div>
                <a 
                  href="mailto:${schoolData.contact.email}" 
                  class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#7D0A14] hover:text-red-900 break-all transition-colors group"
                >
                  <span>${schoolData.contact.email}</span>
                  <svg class="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>

              <!-- Official Instagram Card -->
              <div class="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div class="w-10 h-10 rounded-xl bg-pink-50 text-pink-700 border border-pink-200 flex items-center justify-center mb-4">
                    <!-- Official Instagram SVG Icon -->
                    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <span class="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">OFFICIAL SOCIAL PROFILE</span>
                  <h4 class="text-base font-extrabold text-slate-900 mb-2">Connect on Instagram</h4>
                  <p class="text-xs text-slate-500 mb-4">
                    Follow school updates, events, celebrations, and student initiatives:
                  </p>
                </div>
                <a 
                  href="${schoolData.contact.instagram}" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-pink-700 hover:text-pink-900 transition-colors group"
                >
                  <span>${schoolData.contact.instagramHandle}</span>
                  <svg class="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>

            </div>

            <!-- School Address Card (Clickable with Directions) -->
            <div class="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all">
              <div class="flex items-start justify-between gap-4">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center shrink-0">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <span class="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-0.5">CAMPUS ADDRESS</span>
                    <h3 class="text-xl font-extrabold text-slate-900 mb-1.5">${schoolData.name}</h3>
                    <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
                      ${schoolData.contact.address}
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
                <a 
                  href="${schoolData.contact.mapsSearchUrl}" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="btn-primary-maroon px-5 py-2 rounded-full text-xs sm:text-sm font-semibold inline-flex items-center gap-1.5 shadow-sm"
                >
                  <span>Open Directions in Google Maps</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <span class="text-xs text-slate-400">Karond, Bhopal (M.P.)</span>
              </div>
            </div>

          </div>

          <!-- Right Column: Interactive Google Maps Embed (5 cols) -->
          <div class="lg:col-span-5">
            <div class="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-all">
              <div class="flex items-center justify-between mb-3 px-2">
                <div class="flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span class="text-xs font-bold uppercase tracking-wider text-slate-700">CAMPUS LOCATION</span>
                </div>
                <a 
                  href="${schoolData.contact.mapsSearchUrl}" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="text-xs font-semibold text-[#7D0A14] hover:underline inline-flex items-center gap-1"
                >
                  <span>Enlarge Map</span>
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>

              <!-- Google Maps Iframe -->
              <div class="relative w-full h-[380px] sm:h-[440px] rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100">
                <iframe
                  title="Aditya Gyan Mandir School Location Map"
                  src="${schoolData.contact.mapsEmbedUrl}"
                  class="w-full h-full border-0"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  allowfullscreen
                ></iframe>
              </div>

              <div class="p-3 text-center">
                <p class="text-xs text-slate-500">
                  Located conveniently in Krishna Nagar, Karond, Bhopal. Accessible via main city transit routes.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}

