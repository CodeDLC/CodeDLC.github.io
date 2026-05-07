/* ============================================================
   VORTEX CLIENT — MAIN SCRIPT  v4.0
   ============================================================ */

'use strict';

/* ── STATE ── */
let currentLang = CONFIG.defaultLanguage;

/* ════════════════════════════════════════
   INIT
════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  applyColors();
  buildLangDropdown();
  setLanguage(currentLang);   // внутри вызывает buildFeatures + buildPricing
  buildScreenshots();
  populateContact();
  setupNavScroll();
  setupReveal();
  setupCursorGlow();
  setupSmoothLinks();

  // Видео из конфига — показываем сразу без участия пользователя
  if (CONFIG.video.url) embedVideo(CONFIG.video.url);

  // Закрытие модалей по Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeAllModals();
  });
});

/* ════════════════════════════════════════
   COLORS → CSS Variables
════════════════════════════════════════ */
function applyColors() {
  const c = CONFIG.colors;
  const s = document.documentElement.style;
  s.setProperty('--primary',       c.primary);
  s.setProperty('--primary-light', c.primaryLight);
  s.setProperty('--primary-dark',  c.primaryDark);
  s.setProperty('--secondary',     c.secondary);
  s.setProperty('--bg',            c.bg);
  s.setProperty('--bg-card',       c.bgCard);
  s.setProperty('--bg-card-hover', c.bgCardHover);
  s.setProperty('--text',          c.text);
  s.setProperty('--text-muted',    c.textMuted);
  s.setProperty('--border',        c.border);
  s.setProperty('--success',       c.success);
  s.setProperty('--glow',          c.glow);
}

/* ════════════════════════════════════════
   CURSOR GLOW
════════════════════════════════════════ */
function setupCursorGlow() {
  const glow = document.getElementById('cursorGlow');
  if (!glow || window.matchMedia('(hover: none)').matches) {
    if (glow) glow.style.display = 'none';
    return;
  }

  let mx = -9999, my = -9999;
  let cx = -9999, cy = -9999;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  (function tick() {
    cx += (mx - cx) * 0.07;
    cy += (my - cy) * 0.07;
    glow.style.left = cx + 'px';
    glow.style.top  = cy + 'px';
    requestAnimationFrame(tick);
  })();
}

/* ════════════════════════════════════════
   NAVBAR SCROLL EFFECT
════════════════════════════════════════ */
function setupNavScroll() {
  const nav = document.getElementById('navbar');
  const toggle = () => nav.classList.toggle('scrolled', window.scrollY > 36);
  window.addEventListener('scroll', toggle, { passive: true });
  toggle();
}

/* ════════════════════════════════════════
   SMOOTH SCROLL LINKS
════════════════════════════════════════ */
function setupSmoothLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ════════════════════════════════════════
   REVEAL ON SCROLL (IntersectionObserver)
════════════════════════════════════════ */
let revealObs = null;

function setupReveal() {
  revealObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObs.unobserve(entry.target); // наблюдаем только один раз
      }
    });
  }, { threshold: 0.07, rootMargin: '0px 0px -20px 0px' });

  observeRevealElements();
}

function observeRevealElements() {
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObs?.observe(el));
}

/* ════════════════════════════════════════
   LANGUAGE SYSTEM
════════════════════════════════════════ */
function buildLangDropdown() {
  const dropdown = document.getElementById('langDropdown');
  dropdown.innerHTML = CONFIG.languages.map(l => `
    <div class="lang-option ${l.code === currentLang ? 'active' : ''}" onclick="setLanguage('${l.code}')">
      <span class="lang-flag">${l.flag}</span>
      <span>${l.full}</span>
      <span class="lang-code-badge">${l.label}</span>
    </div>
  `).join('');
}

function toggleLangDropdown() {
  document.getElementById('langBtn').classList.toggle('open');
  document.getElementById('langDropdown').classList.toggle('open');
}

// Закрыть при клике вне
document.addEventListener('click', e => {
  const sel = document.getElementById('langSelector');
  if (sel && !sel.contains(e.target)) closeLangDropdown();
});

function closeLangDropdown() {
  document.getElementById('langBtn')?.classList.remove('open');
  document.getElementById('langDropdown')?.classList.remove('open');
}

function setLanguage(lang) {
  currentLang = lang;

  const t   = CONFIG.i18n[lang];
  const nav = CONFIG.nav.links[lang];
  const found = CONFIG.languages.find(l => l.code === lang);

  // Обновить кнопку языка
  document.getElementById('langLabel').textContent = found?.label ?? lang.toUpperCase();
  document.getElementById('langFlag').textContent  = found?.flag  ?? '';

  // Активный язык в дропдауне
  document.querySelectorAll('.lang-option').forEach((el, i) => {
    el.classList.toggle('active', CONFIG.languages[i]?.code === lang);
  });

  // Все элементы [data-i18n]
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (/^nav\d+$/.test(key)) {
      const idx = parseInt(key.slice(3));
      if (nav[idx] !== undefined) el.textContent = nav[idx];
    } else if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  // Мобильное меню
  document.querySelectorAll('[data-mob-i18n]').forEach(el => {
    const key = el.getAttribute('data-mob-i18n');
    if (/^nav\d+$/.test(key)) {
      const idx = parseInt(key.slice(3));
      if (nav[idx] !== undefined) el.textContent = nav[idx];
    }
  });

  // Hero
  const taglineEl = document.getElementById('heroTagline');
  const quoteEl   = document.getElementById('heroQuote');
  const hintEl    = document.getElementById('heroVideoHint');
  if (taglineEl) taglineEl.textContent = CONFIG.clientTagline[lang] ?? CONFIG.clientTagline.ru;
  if (quoteEl)   quoteEl.textContent   = CONFIG.heroQuote[lang]     ?? CONFIG.heroQuote.ru;
  if (hintEl)    hintEl.textContent    = CONFIG.video.placeholder[lang] ?? CONFIG.video.placeholder.ru;

  // Кнопки в hero
  const heroBtnBuy = document.getElementById('heroBtnBuy');
  if (heroBtnBuy) heroBtnBuy.innerHTML = `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 01-8 0"/>
    </svg>
    ${t.buyNowHero}
  `;
  const heroBtnLearn = document.getElementById('heroBtnLearn');
  if (heroBtnLearn) heroBtnLearn.textContent = t.learnMore;

  // Footer
  const footerTagline = document.getElementById('footerTagline');
  const footerCopy    = document.getElementById('footerCopy');
  if (footerTagline) footerTagline.textContent = CONFIG.clientTagline[lang] ?? CONFIG.clientTagline.ru;
  if (footerCopy)    footerCopy.textContent    = t.footerCopy;

  // Video section placeholder
  const vpt = document.getElementById('videoPlaceholderText');
  if (vpt) vpt.textContent = CONFIG.video.placeholder[lang] ?? CONFIG.video.placeholder.ru;

  // html lang attr
  document.documentElement.lang = lang;

  closeLangDropdown();

  // Перестроить динамические секции
  buildFeatures();
  buildPricing();
}

/* ════════════════════════════════════════
   FEATURES — иконки и карточки
════════════════════════════════════════ */
const FEATURE_ICONS = [
  // Красивый интерфейс
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="3"/>
    <path d="M3 9h18M9 21V9"/>
  </svg>`,
  // Гибкая настройка
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
  </svg>`,
  // Оптимизация
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
  </svg>`,
  // Обновления
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="23,4 23,10 17,10"/>
    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/>
  </svg>`,
  // Поддержка
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
  </svg>`,
  // Обход античита
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9,12 11,14 15,10"/>
  </svg>`
];

function buildFeatures() {
  const grid  = document.getElementById('featuresGrid');
  const items = CONFIG.features[currentLang] ?? CONFIG.features.ru;

  grid.innerHTML = items.map((f, i) => `
    <div class="feature-card reveal reveal-d${(i % 6) + 1}">
      <div class="feature-icon-wrap">
        ${FEATURE_ICONS[i] ?? FEATURE_ICONS[0]}
      </div>
      <div class="feature-title">${f.title}</div>
      <div class="feature-desc">${f.desc}</div>
    </div>
  `).join('');

  observeRevealElements();
}

/* ════════════════════════════════════════
   SCREENSHOTS
════════════════════════════════════════ */
function buildScreenshots() {
  const grid  = document.getElementById('screenshotsGrid');
  const shots = CONFIG.screenshots;

  grid.innerHTML = shots.map((s, i) => `
    <div class="screenshot-item ${i === 0 ? 'screenshot-main' : ''} reveal reveal-d${i + 1}">
      <img
        src="${s.url}"
        alt="${s.alt}"
        loading="lazy"
        onerror="this.closest('.screenshot-item').style.display='none'"
      />
    </div>
  `).join('');

  observeRevealElements();
}

/* ════════════════════════════════════════
   PRICING
════════════════════════════════════════ */
function buildPricing() {
  const grid  = document.getElementById('pricingGrid');
  const t     = CONFIG.i18n[currentLang];
  const cur   = CONFIG.pricing.currency;
  const badge = CONFIG.pricing.badge[currentLang] ?? CONFIG.pricing.badge.ru;

  grid.innerHTML = CONFIG.pricing.plans.map((plan, i) => {
    const dur   = plan.duration[currentLang] ?? plan.duration.ru;
    const feats = plan.features[currentLang] ?? plan.features.ru;

    return `
      <div class="pricing-card ${plan.popular ? 'popular' : ''} reveal reveal-d${i + 1}">
        ${plan.popular ? `<div class="pricing-badge">${badge}</div>` : ''}
        <div class="pricing-duration">${dur}</div>
        <div class="pricing-price">
          <span class="currency">${cur}</span>${plan.price.toFixed(2)}
        </div>
        <div class="pricing-period">${t.perPeriod}</div>
        <ul class="pricing-features">
          ${feats.map(f => `
            <li>
              <span class="check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <polyline points="20,6 9,17 4,12"/>
                </svg>
              </span>
              ${f}
            </li>
          `).join('')}
        </ul>
        <button
          class="btn ${plan.popular ? 'btn-primary' : 'btn-outline'}"
          style="width:100%;"
          onclick="handleBuy('${plan.id}', '${dur}', '${cur}${plan.price.toFixed(2)}')"
        >
          ${t.btnBuy}
        </button>
      </div>
    `;
  }).join('');

  observeRevealElements();
}

/* ════════════════════════════════════════
   ПОКУПКА — логика из config.js → payment
════════════════════════════════════════ */
function handleBuy(planId, duration, price) {
  const pay = CONFIG.payment;
  const t   = CONFIG.i18n[currentLang];

  // ── Вариант 1: Редирект на внешнюю страницу ──────────────
  if (pay.useRedirect) {
    const url = pay.redirectUrls?.[planId];
    if (url) {
      window.open(url, '_blank', 'noopener');
    } else {
      showToast('URL не задан в config.js → payment.redirectUrls', 'error');
    }
    return;
  }

  // ── Вариант 2: Попап с контактом для оплаты ──────────────
  if (pay.usePopup) {
    showPaymentPopup(planId, duration, price);
    return;
  }

  // ── Вариант 3: Кастомная логика (для разработчика) ────────
  // Пример: showToast(`${duration} — ${price}`, 'success');
  // Здесь можно подключить Stripe, LiqPay, WebMoney и т.д.
  showToast(`${duration} — ${price}`, 'success');
}

/* Попап оплаты (Вариант 2) */
function showPaymentPopup(planId, duration, price) {
  const t = CONFIG.i18n[currentLang];
  const link = CONFIG.payment.popupContact;

  const overlay = document.getElementById('modalPayment');
  const title   = document.getElementById('paymentPopupTitle');
  const body    = document.getElementById('paymentPopupBody');
  const linkEl  = document.getElementById('paymentPopupLink');

  if (!overlay) return;

  if (title) title.textContent = `${t.paymentPopupTitle} — ${duration} (${price})`;
  if (body)  body.textContent  = t.paymentPopupText;
  if (linkEl) linkEl.href = link;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* ════════════════════════════════════════
   VIDEO EMBED (только через config.js)
   Пользователь сайта НЕ вводит ссылку —
   только владелец в CONFIG.video.url
════════════════════════════════════════ */
function embedVideo(url) {
  const videoId = extractYouTubeId(url);
  if (!videoId) return;

  const src = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&color=white`;
  const iframe = `<iframe
    src="${src}"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    loading="lazy"
    title="Vortex Client — Gameplay"
  ></iframe>`;

  const heroFrame     = document.getElementById('heroVideoFrame');
  const sectionEmbed  = document.getElementById('videoContainer');
  if (heroFrame)    heroFrame.innerHTML    = iframe;
  if (sectionEmbed) sectionEmbed.innerHTML = iframe;
}

function extractYouTubeId(url) {
  if (!url) return null;
  const patterns = [
    /[?&]v=([a-zA-Z0-9_-]{11})/,
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /embed\/([a-zA-Z0-9_-]{11})/,
    /shorts\/([a-zA-Z0-9_-]{11})/,
    /^([a-zA-Z0-9_-]{11})$/
  ];
  for (const re of patterns) {
    const m = url.match(re);
    if (m) return m[1];
  }
  return null;
}

/* ════════════════════════════════════════
   CONTACTS
════════════════════════════════════════ */
function populateContact() {
  const { email, hours, discord, telegram } = CONFIG.contact;

  const emailCard = document.getElementById('supportEmailCard');
  if (emailCard) emailCard.href = `mailto:${email}`;

  const emailVal = document.getElementById('supportEmailVal');
  if (emailVal) emailVal.textContent = email;

  const hoursVal = document.getElementById('supportHoursVal');
  if (hoursVal) hoursVal.textContent = hours;

  const discordCard = document.getElementById('supportDiscordCard');
  if (discordCard) discordCard.href = discord;

  const tgCard = document.getElementById('supportTelegramCard');
  if (tgCard) tgCard.href = telegram;

  const footerDiscord  = document.getElementById('footerDiscord');
  const footerTelegram = document.getElementById('footerTelegram');
  if (footerDiscord)  footerDiscord.href  = discord;
  if (footerTelegram) footerTelegram.href = telegram;
}

/* ════════════════════════════════════════
   MOBILE MENU
════════════════════════════════════════ */
function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('open');
}
function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}

/* ════════════════════════════════════════
   LEGAL MODALS
════════════════════════════════════════ */
const MODAL_IDS = {
  privacy: 'modalPrivacy',
  terms:   'modalTerms',
  rules:   'modalRules',
  payment: 'modalPayment'
};

function openModal(key) {
  closeAllModals();
  const id = MODAL_IDS[key];
  if (!id) return;
  document.getElementById(id)?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(key) {
  const id = MODAL_IDS[key];
  if (!id) return;
  document.getElementById(id)?.classList.remove('open');
  document.body.style.overflow = '';
}

function closeAllModals() {
  Object.values(MODAL_IDS).forEach(id => {
    document.getElementById(id)?.classList.remove('open');
  });
  document.body.style.overflow = '';
}

function closeModalOutside(event, modalId) {
  if (event.target.id === modalId) {
    document.getElementById(modalId)?.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* ════════════════════════════════════════
   TOAST NOTIFICATIONS
════════════════════════════════════════ */
let toastTimer = null;

function showToast(msg, type = 'success') {
  const toast    = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  toast.className = `toast ${type} show`;

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3500);
}
