import { schoolData } from '../data/schoolData.js';
import { navigationItems, headerAction } from '../data/navigation.js';

export function renderMobileDrawer() {
  const drawerLinksHtml = navigationItems.map(item => `
    <li class="border-b border-slate-100 last:border-b-0">
      <a 
        href="${item.href}" 
        class="mobile-nav-link flex items-center justify-between py-4 px-2 text-slate-800 hover:text-[#7D0A14] font-semibold text-[17px] transition-colors"
      >
        <span>${item.label}</span>
        <svg class="w-4 h-4 text-slate-400 group-hover:text-[#7D0A14]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </a>
    </li>
  `).join('');

  return `
    <div 
      id="mobile-drawer" 
      class="fixed inset-0 z-40 bg-white pt-24 pb-8 px-6 flex flex-col justify-between overflow-y-auto drawer-closed md:hidden"
      aria-hidden="true"
    >
      <div class="flex flex-col">
        <ul class="divide-y divide-slate-100">
          ${drawerLinksHtml}
        </ul>

        <div class="mt-8">
          <a 
            href="${headerAction.href}" 
            class="btn-primary-maroon flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-[15px] font-semibold shadow-md"
          >
            <span>${headerAction.label}</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Drawer Footer Info -->
      <div class="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-500 space-y-1.5">
        <p class="font-semibold text-slate-700">${schoolData.contact.officeHours}</p>
        <p>${schoolData.contact.location}</p>
        <p class="text-slate-400 pt-2">© 2026 ${schoolData.name}. All rights reserved.</p>
      </div>
    </div>
  `;
}

