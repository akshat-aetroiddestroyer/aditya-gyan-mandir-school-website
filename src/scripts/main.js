import { renderHeader } from '../components/Header.js';
import { renderMobileDrawer } from '../components/MobileDrawer.js';
import { renderHero } from '../components/Hero.js';
import { renderAbout } from '../components/About.js';
import { renderLeadership } from '../components/Leadership.js';
import { renderAcademics } from '../components/Academics.js';
import { renderFacilities } from '../components/Facilities.js';
import { renderContact } from '../components/Contact.js';
import { renderFooter } from '../components/Footer.js';

function initApp() {
  const appContainer = document.getElementById('app');
  if (!appContainer) return;

  // If app is not pre-rendered, inject components
  if (!document.getElementById('hero')) {
    appContainer.innerHTML = `
      ${renderHeader()}
      ${renderMobileDrawer()}
      <main>
        ${renderHero()}
        ${renderAbout()}
        ${renderLeadership()}
        ${renderAcademics()}
        ${renderFacilities()}
        ${renderContact()}
      </main>
      ${renderFooter()}
    `;
  }

  initNavigationEvents();
  initHeaderScrollEffect();
}

function initNavigationEvents() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');

  if (!toggleBtn || !drawer) return;

  let isOpen = false;

  const toggleDrawer = (forceState) => {
    isOpen = typeof forceState === 'boolean' ? forceState : !isOpen;
    
    if (isOpen) {
      drawer.classList.remove('drawer-closed');
      drawer.classList.add('drawer-open');
      drawer.setAttribute('aria-hidden', 'false');
      toggleBtn.setAttribute('aria-expanded', 'true');
      if (hamburgerIcon) hamburgerIcon.classList.add('hidden');
      if (closeIcon) closeIcon.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    } else {
      drawer.classList.remove('drawer-open');
      drawer.classList.add('drawer-closed');
      drawer.setAttribute('aria-hidden', 'true');
      toggleBtn.setAttribute('aria-expanded', 'false');
      if (hamburgerIcon) hamburgerIcon.classList.remove('hidden');
      if (closeIcon) closeIcon.classList.add('hidden');
      document.body.style.overflow = '';
    }
  };

  toggleBtn.onclick = () => toggleDrawer();

  // Close drawer on clicking any mobile nav link
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.onclick = () => toggleDrawer(false);
  });

  // Close on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) {
      toggleDrawer(false);
    }
  });
}

function initHeaderScrollEffect() {
  const header = document.getElementById('site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('shadow-md', 'bg-white/98');
      header.classList.remove('bg-white/95');
    } else {
      header.classList.remove('shadow-md', 'bg-white/98');
      header.classList.add('bg-white/95');
    }
  }, { passive: true });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
