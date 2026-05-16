// ============================================================
//                  КОНФИГУРАЦИЯ VORTEX CLIENT
//          Все настройки — в одном месте. Просто меняй.
// ============================================================

const CONFIG = {

  // ─── ОСНОВНАЯ ИНФОРМАЦИЯ ────────────────────────────────
  clientName: "Vortex Client",
  clientTagline: {
    ru: "Превосходство. Скорость. Победа.",
    en: "Supremacy. Speed. Victory.",
    uk: "Перевага. Швидкість. Перемога.",
    pl: "Wyższość. Prędkość. Zwycięstwo.",
    tr: "Üstünlük. Hız. Zafer."
  },
  heroQuote: {
    ru: "Мы не просто клиент — мы стиль игры.",
    en: "We are not just a client — we are a playstyle.",
    uk: "Ми не просто клієнт — ми стиль гри.",
    pl: "Nie jesteśmy tylko klientem — jesteśmy stylem gry.",
    tr: "Biz sadece bir istemci değiliz — biz bir oyun tarzıyız."
  },

  // ─── ЦВЕТА ───────────────────────────────────────────────
  // Меняй hex — всё обновится автоматически через CSS-переменные
  colors: {
    primary:      "#2563EB",              // Основной акцент (синий)
    primaryLight: "#60A5FA",              // Светлый акцент
    primaryDark:  "#1D4ED8",              // Тёмный акцент
    secondary:    "#38BDF8",              // Второстепенный
    bg:           "#08090D",              // Фон страницы
    bgCard:       "#0D1017",              // Фон карточек
    bgCardHover:  "#111827",              // Фон карточек при hover
    text:         "#E8EAED",              // Основной текст
    textMuted:    "#64748B",              // Серый/приглушённый текст
    border:       "#1E2433",              // Цвет границ
    success:      "#22C55E",              // Зелёный (галочки)
    glow:         "rgba(37,99,235,0.3)"   // Синее свечение кнопок
  },

  // ─── НАВИГАЦИЯ ───────────────────────────────────────────
  nav: {
    links: {
      ru: ["Главная", "Функции", "Видеообзор", "Купить", "Поддержка"],
      en: ["Home",    "Features", "Video",      "Buy",   "Support"],
      uk: ["Головна", "Функції",  "Відео",      "Купити","Підтримка"],
      pl: ["Główna",  "Funkcje",  "Wideo",      "Kup",  "Wsparcie"],
      tr: ["Ana",     "Özellikler","Video",     "Satın Al","Destek"]
    },
    anchors: ["#hero", "#features", "#video", "#pricing", "#support"]
  },

  // ─── КОНТАКТЫ ────────────────────────────────────────────
  contact: {
    email:   "ntfhelp@mail.ru",             // Email поддержки
    hours:   "ПН–ПТ 10:00–18:00 МСК",      // Часы работы
    discord: "https://discord.gg/XXXXXXX",  // ← Вставьте ссылку Discord
    telegram:"https://t.me/XXXXXXX"         // ← Вставьте ссылку Telegram
  },

  // ─── ВИДЕО ───────────────────────────────────────────────
  // Вставьте ссылку на YouTube: https://www.youtube.com/watch?v=XXXXXXXXXXX
  // Поддерживаются: watch?v=, youtu.be/, shorts/, embed/
  video: {
    url: "",   // ← Вставьте ссылку сюда. Оставьте "" — покажется красивый плейсхолдер.
    placeholder: {
      ru: "Видео скоро появится",
      en: "Video coming soon",
      uk: "Відео незабаром",
      pl: "Film wkrótce",
      tr: "Video yakında"
    }
  },

  // ─── СКРИНШОТЫ ───────────────────────────────────────────
  // [0] — широкий главный скриншот, [1][2] — два поменьше рядом
  // Замените url на реальные ссылки на изображения
  screenshots: [
    {
      url: "https://placehold.co/1280x640/0D1017/2563EB?text=Vortex+Client",
      alt: "Vortex Client — главный скриншот"
    },
    {
      url: "https://placehold.co/800x450/0D1017/2563EB?text=Screenshot+2",
      alt: "Vortex Client — скриншот 2"
    },
    {
      url: "https://placehold.co/800x450/0D1017/2563EB?text=Screenshot+3",
      alt: "Vortex Client — скриншот 3"
    }
  ],

  // ─── ФУНКЦИИ (FEATURES) ──────────────────────────────────
  features: {
    ru: [
      { title: "Красивый интерфейс",  desc: "Большое количество визуальных функций, которые сделают вашу игру красочнее. Настройте оформление клиента полностью под себя." },
      { title: "Гибкая настройка",    desc: "Настройте практически любую функцию, используйте конфигурации других пользователей и получайте максимум от клиента." },
      { title: "Высокая оптимизация", desc: "Постоянно улучшаем производительность клиента и самой игры. Стабильный FPS даже на слабых компьютерах." },
      { title: "Частые обновления",   desc: "Регулярно добавляем новые функции и совершенствуем существующие. Преимущества под все актуальные сервера." },
      { title: "Лучшая поддержка",    desc: "Наша поддержка разбирается в своём деле и поможет по любому вопросу. Быстрый ответ 24/7." },
      { title: "Обход античита",      desc: "Передовые технологии обхода популярных античит-систем. Играйте уверенно на любых серверах." }
    ],
    en: [
      { title: "Beautiful Interface", desc: "A large number of visual features to make your game more vibrant. Customize the client appearance entirely to your liking." },
      { title: "Deep Customization",  desc: "Configure almost any feature, use other users' configs and get the most out of the client." },
      { title: "Top Optimization",    desc: "Constantly improving performance. Stable FPS even on weak computers." },
      { title: "Frequent Updates",    desc: "Regularly adding new features and improving existing ones. Advantages for all relevant servers." },
      { title: "Best Support",        desc: "Our support knows their craft and will help with any question. Fast response 24/7." },
      { title: "Anti-cheat Bypass",   desc: "Advanced technologies to bypass popular anti-cheat systems. Play confidently on any servers." }
    ],
    uk: [
      { title: "Гарний інтерфейс",      desc: "Велика кількість візуальних функцій. Налаштуйте оформлення клієнта повністю під себе." },
      { title: "Гнучке налаштування",   desc: "Налаштуйте майже будь-яку функцію, використовуйте конфігурації інших користувачів." },
      { title: "Висока оптимізація",    desc: "Постійно покращуємо продуктивність. Стабільний FPS навіть на слабких комп'ютерах." },
      { title: "Часті оновлення",       desc: "Регулярно додаємо нові функції та вдосконалюємо наявні." },
      { title: "Найкраща підтримка",    desc: "Наша підтримка допоможе з будь-яким питанням. Швидка відповідь 24/7." },
      { title: "Обхід античіту",        desc: "Передові технології обходу популярних античіт-систем." }
    ],
    pl: [
      { title: "Piękny interfejs",      desc: "Duża liczba funkcji wizualnych. Dostosuj wygląd klienta w pełni do siebie." },
      { title: "Pełna konfiguracja",    desc: "Skonfiguruj prawie każdą funkcję, używaj konfiguracji innych użytkowników." },
      { title: "Wysoka optymalizacja",  desc: "Stale ulepszamy wydajność. Stabilny FPS nawet na słabych komputerach." },
      { title: "Częste aktualizacje",   desc: "Regularnie dodajemy nowe funkcje i doskonalimy istniejące." },
      { title: "Najlepsze wsparcie",    desc: "Nasze wsparcie pomoże w każdej kwestii. Szybka odpowiedź 24/7." },
      { title: "Obejście antycheat",    desc: "Zaawansowane technologie omijania systemów antycheat." }
    ],
    tr: [
      { title: "Güzel Arayüz",          desc: "Çok sayıda görsel özellik. İstemcinin görünümünü tamamen kendinize göre özelleştirin." },
      { title: "Derin Özelleştirme",    desc: "Neredeyse her özelliği yapılandırın, diğer kullanıcıların konfigürasyonlarını kullanın." },
      { title: "Yüksek Optimizasyon",   desc: "Performansı sürekli geliştiriyoruz. Zayıf bilgisayarlarda bile stabil FPS." },
      { title: "Sık Güncellemeler",     desc: "Düzenli olarak yeni özellikler ekliyoruz ve mevcut olanları geliştiriyoruz." },
      { title: "En İyi Destek",         desc: "Destek ekibimiz her konuda yardımcı olur. Hızlı yanıt 24/7." },
      { title: "Anti-hile Bypass",      desc: "Popüler anti-hile sistemlerini atlatmak için gelişmiş teknolojiler." }
    ]
  },

  // ─── ТАРИФЫ ──────────────────────────────────────────────
  pricing: {
    currency: "$",        // Символ валюты ($ / € / ₽ и т.д.)
    badge: {              // Надпись на популярном тарифе
      ru: "Популярно", en: "Popular", uk: "Популярно", pl: "Popularny", tr: "Popüler"
    },
    plans: [
      {
        id: "month",
        duration: { ru:"1 Месяц",   en:"1 Month",   uk:"1 Місяць",  pl:"1 Miesiąc", tr:"1 Ay"      },
        price:    9.99,             // ← Цена (число)
        popular:  false,
        features: {
          ru: ["Все функции клиента", "Базовая поддержка", "Обновления включены"],
          en: ["All client features", "Basic support",     "Updates included"],
          uk: ["Всі функції клієнта", "Базова підтримка",  "Оновлення включені"],
          pl: ["Wszystkie funkcje",   "Podstawowe wsparcie","Aktualizacje wliczone"],
          tr: ["Tüm özellikler",      "Temel destek",       "Güncellemeler dahil"]
        }
      },
      {
        id: "3months",
        duration: { ru:"3 Месяца",  en:"3 Months",  uk:"3 Місяці",  pl:"3 Miesiące", tr:"3 Ay"     },
        price:    24.99,
        popular:  true,             // ← true = выделить как лучший вариант
        features: {
          ru: ["Все функции клиента", "Приоритетная поддержка", "Обновления включены", "Доступ к бета-версиям"],
          en: ["All client features", "Priority support",        "Updates included",    "Beta access"],
          uk: ["Всі функції клієнта", "Пріоритетна підтримка",   "Оновлення включені",  "Доступ до бета"],
          pl: ["Wszystkie funkcje",   "Wsparcie priorytetowe",   "Aktualizacje wliczone","Dostęp do beta"],
          tr: ["Tüm özellikler",      "Öncelikli destek",        "Güncellemeler dahil",  "Beta erişimi"]
        }
      },
      {
        id: "6months",
        duration: { ru:"6 Месяцев", en:"6 Months",  uk:"6 Місяців", pl:"6 Miesięcy",  tr:"6 Ay"     },
        price:    39.99,
        popular:  false,
        features: {
          ru: ["Все функции клиента", "Приоритетная поддержка", "Обновления включены", "Доступ к бета-версиям", "Скидка 33%"],
          en: ["All client features", "Priority support",        "Updates included",    "Beta access",           "33% off"],
          uk: ["Всі функції клієнта", "Пріоритетна підтримка",   "Оновлення включені",  "Доступ до бета",         "Знижка 33%"],
          pl: ["Wszystkie funkcje",   "Wsparcie priorytetowe",   "Aktualizacje wliczone","Dostęp do beta",         "33% zniżki"],
          tr: ["Tüm özellikler",      "Öncelikli destek",        "Güncellemeler dahil",  "Beta erişimi",           "%33 indirim"]
        }
      },
      {
        id: "lifetime",
        duration: { ru:"Lifetime",  en:"Lifetime",  uk:"Назавжди",  pl:"Na zawsze",  tr:"Ömür boyu" },
        price:    79.99,
        popular:  false,
        features: {
          ru: ["Все функции клиента", "VIP поддержка 24/7", "Все обновления навсегда", "Ранний доступ", "Эксклюзивный ранг"],
          en: ["All client features", "VIP support 24/7",   "All updates forever",     "Early access",   "Exclusive rank"],
          uk: ["Всі функції клієнта", "VIP підтримка 24/7", "Всі оновлення назавжди",  "Ранній доступ",  "Ексклюзивний ранг"],
          pl: ["Wszystkie funkcje",   "VIP wsparcie 24/7",  "Wszystkie aktualizacje",  "Wczesny dostęp", "Ekskluzywna ranga"],
          tr: ["Tüm özellikler",      "VIP destek 24/7",    "Tüm güncellemeler",        "Erken erişim",   "Özel Discord rolü"]
        }
      }
    ]
  },

  // ─── СИСТЕМА ОПЛАТЫ ──────────────────────────────────────
  // Когда пользователь нажимает "Купить", вызывается handleBuy().
  // Выберите ОДИН из вариантов ниже и раскомментируйте нужный.
  payment: {

    // ── ВАРИАНТ 1: Перенаправление на внешнюю страницу оплаты ──────────────
    // Укажите URL вашего магазина / платёжной страницы для каждого тарифа.
    // Если useRedirect = true — при клике "Купить" откроется эта ссылка.
    useRedirect: false,                  // ← Поставьте true чтобы включить
    redirectUrls: {
      month:    "https://your-shop.com/buy/month",    // ← URL для 1 месяца
      "3months":"https://your-shop.com/buy/3months",  // ← URL для 3 месяцев
      "6months":"https://your-shop.com/buy/6months",  // ← URL для 6 месяцев
      lifetime: "https://your-shop.com/buy/lifetime"  // ← URL для Lifetime
    },

    // ── ВАРИАНТ 2: Открытие всплывающего окна с реквизитами ────────────────
    // Если usePopup = true — при клике "Купить" появится окно с инструкцией.
    usePopup: false,                     // ← Поставьте true чтобы включить
    popupContact: "https://t.me/XXXXXXX", // ← Куда писать для оплаты (Telegram/Discord)

    // ── ВАРИАНТ 3: Кастомная функция (для разработчиков) ───────────────────
    // Оставьте useRedirect и usePopup = false.
    // Напишите свою логику прямо в функции handleBuy() в script.js.
    // Пример: интеграция Stripe, LiqPay, WebMoney и т.д.
  },

  // ─── ПЕРЕВОДЫ UI ─────────────────────────────────────────
  i18n: {
    ru: {
      navBuy:               "Купить",
      sectionFeatures:      "Наши преимущества",
      featuresSubtitle:     "Всё, что вы гарантированно получите после покупки нашего клиента.",
      sectionVideo:         "Видеообзор",
      videoSubtitle:        "Посмотрите на реальный геймплей с нашим клиентом.",
      sectionScreenshots:   "Скриншоты",
      screenshotsSubtitle:  "Несколько снимков прямо из игры с нашим клиентом.",
      sectionPricing:       "Тарифы",
      pricingSubtitle:      "Выберите подходящий план. Все планы включают полный доступ к функционалу.",
      btnBuy:               "Купить сейчас",
      perPeriod:            "за период",
      sectionSupport:       "Поддержка",
      supportSubtitle:      "Есть вопросы? Мы всегда рады помочь.",
      supportEmail:         "Почта для связи",
      supportHours:         "Часы работы",
      supportDiscord:       "Discord",
      supportTelegram:      "Telegram",
      footerNav:            "Навигация",
      footerLegal:          "Документы",
      footerPrivacy:        "Обработка персональных данных",
      footerTerms:          "Пользовательское соглашение",
      footerRules:          "Правила пользования",
      footerCopy:           `© ${new Date().getFullYear()} Vortex Client. Все права защищены.`,
      scrollDown:           "Прокрутите вниз",
      buyNowHero:           "Купить сейчас",
      learnMore:            "Узнать больше",
      videoBullet1:         "Реальный геймплей без монтажа",
      videoBullet2:         "Демонстрация всех ключевых функций",
      videoBullet3:         "Настройки интерфейса в деталях",
      modalPlaceholderTitle:"Документ в разработке",
      modalPrivacyDesc:     "Политика обработки персональных данных будет опубликована в ближайшее время. Для вопросов — обратитесь в поддержку.",
      modalTermsDesc:       "Пользовательское соглашение будет опубликовано в ближайшее время.",
      modalRulesDesc:       "Правила пользования сервисом будут опубликованы в ближайшее время.",
      paymentPopupTitle:    "Оформление покупки",
      paymentPopupText:     "Для оформления покупки свяжитесь с нами:",
      paymentPopupClose:    "Закрыть",
      videoHint:            "Видео скоро появится здесь"
    },
    en: {
      navBuy:               "Buy",
      sectionFeatures:      "Our Advantages",
      featuresSubtitle:     "Everything you're guaranteed to get after purchasing our client.",
      sectionVideo:         "Video Review",
      videoSubtitle:        "Watch real gameplay footage with our client.",
      sectionScreenshots:   "Screenshots",
      screenshotsSubtitle:  "A few shots straight from the game with our client.",
      sectionPricing:       "Pricing",
      pricingSubtitle:      "Choose a suitable plan. All plans include full access to features.",
      btnBuy:               "Buy Now",
      perPeriod:            "per period",
      sectionSupport:       "Support",
      supportSubtitle:      "Have questions? We're always happy to help.",
      supportEmail:         "Contact email",
      supportHours:         "Working hours",
      supportDiscord:       "Discord",
      supportTelegram:      "Telegram",
      footerNav:            "Navigation",
      footerLegal:          "Documents",
      footerPrivacy:        "Privacy Policy",
      footerTerms:          "Terms of Service",
      footerRules:          "Usage Rules",
      footerCopy:           `© ${new Date().getFullYear()} Vortex Client. All rights reserved.`,
      scrollDown:           "Scroll down",
      buyNowHero:           "Buy Now",
      learnMore:            "Learn more",
      videoBullet1:         "Real gameplay without editing",
      videoBullet2:         "Demonstration of all key features",
      videoBullet3:         "Interface settings in detail",
      modalPlaceholderTitle:"Document in progress",
      modalPrivacyDesc:     "Privacy policy will be published soon. For questions — contact support.",
      modalTermsDesc:       "Terms of service will be published soon.",
      modalRulesDesc:       "Usage rules will be published soon.",
      paymentPopupTitle:    "Purchase",
      paymentPopupText:     "To complete your purchase, contact us:",
      paymentPopupClose:    "Close",
      videoHint:            "Video coming soon"
    },
    uk: {
      navBuy:               "Купити",
      sectionFeatures:      "Наші переваги",
      featuresSubtitle:     "Все, що ви гарантовано отримаєте після покупки нашого клієнта.",
      sectionVideo:         "Відеоогляд",
      videoSubtitle:        "Перегляньте реальний геймплей з нашим клієнтом.",
      sectionScreenshots:   "Скріншоти",
      screenshotsSubtitle:  "Кілька знімків прямо з гри з нашим клієнтом.",
      sectionPricing:       "Тарифи",
      pricingSubtitle:      "Оберіть відповідний план. Всі плани включають повний доступ.",
      btnBuy:               "Купити зараз",
      perPeriod:            "за період",
      sectionSupport:       "Підтримка",
      supportSubtitle:      "Є питання? Ми завжди раді допомогти.",
      supportEmail:         "Пошта для зв'язку",
      supportHours:         "Години роботи",
      supportDiscord:       "Discord",
      supportTelegram:      "Telegram",
      footerNav:            "Навігація",
      footerLegal:          "Документи",
      footerPrivacy:        "Обробка персональних даних",
      footerTerms:          "Угода користувача",
      footerRules:          "Правила користування",
      footerCopy:           `© ${new Date().getFullYear()} Vortex Client. Всі права захищені.`,
      scrollDown:           "Гортайте вниз",
      buyNowHero:           "Купити зараз",
      learnMore:            "Дізнатись більше",
      videoBullet1:         "Реальний геймплей без монтажу",
      videoBullet2:         "Демонстрація всіх ключових функцій",
      videoBullet3:         "Налаштування інтерфейсу в деталях",
      modalPlaceholderTitle:"Документ в розробці",
      modalPrivacyDesc:     "Політика обробки персональних даних буде опублікована найближчим часом.",
      modalTermsDesc:       "Угода користувача буде опублікована найближчим часом.",
      modalRulesDesc:       "Правила користування будуть опубліковані найближчим часом.",
      paymentPopupTitle:    "Оформлення покупки",
      paymentPopupText:     "Для оформлення покупки зв'яжіться з нами:",
      paymentPopupClose:    "Закрити",
      videoHint:            "Відео незабаром з'явиться тут"
    },
    pl: {
      navBuy:               "Kup",
      sectionFeatures:      "Nasze zalety",
      featuresSubtitle:     "Wszystko, co gwarantujemy po zakupie naszego klienta.",
      sectionVideo:         "Recenzja wideo",
      videoSubtitle:        "Obejrzyj prawdziwą rozgrywkę z naszym klientem.",
      sectionScreenshots:   "Zrzuty ekranu",
      screenshotsSubtitle:  "Kilka zdjęć prosto z gry z naszym klientem.",
      sectionPricing:       "Cennik",
      pricingSubtitle:      "Wybierz odpowiedni plan. Wszystkie plany obejmują pełny dostęp.",
      btnBuy:               "Kup teraz",
      perPeriod:            "za okres",
      sectionSupport:       "Wsparcie",
      supportSubtitle:      "Masz pytania? Zawsze chętnie pomożemy.",
      supportEmail:         "E-mail kontaktowy",
      supportHours:         "Godziny pracy",
      supportDiscord:       "Discord",
      supportTelegram:      "Telegram",
      footerNav:            "Nawigacja",
      footerLegal:          "Dokumenty",
      footerPrivacy:        "Polityka prywatności",
      footerTerms:          "Regulamin",
      footerRules:          "Zasady użytkowania",
      footerCopy:           `© ${new Date().getFullYear()} Vortex Client. Wszelkie prawa zastrzeżone.`,
      scrollDown:           "Przewiń w dół",
      buyNowHero:           "Kup teraz",
      learnMore:            "Dowiedz się więcej",
      videoBullet1:         "Prawdziwa rozgrywka bez edycji",
      videoBullet2:         "Demonstracja wszystkich kluczowych funkcji",
      videoBullet3:         "Ustawienia interfejsu w szczegółach",
      modalPlaceholderTitle:"Dokument w opracowaniu",
      modalPrivacyDesc:     "Polityka prywatności zostanie opublikowana wkrótce.",
      modalTermsDesc:       "Regulamin zostanie opublikowany wkrótce.",
      modalRulesDesc:       "Zasady użytkowania zostaną opublikowane wkrótce.",
      paymentPopupTitle:    "Zakup",
      paymentPopupText:     "Aby sfinalizować zakup, skontaktuj się z nami:",
      paymentPopupClose:    "Zamknij",
      videoHint:            "Film pojawi się tutaj wkrótce"
    },
    tr: {
      navBuy:               "Satın Al",
      sectionFeatures:      "Avantajlarımız",
      featuresSubtitle:     "Müşterimizi satın aldıktan sonra garanti ettiğimiz her şey.",
      sectionVideo:         "Video İnceleme",
      videoSubtitle:        "Müşterimizle gerçek oynanışı izleyin.",
      sectionScreenshots:   "Ekran Görüntüleri",
      screenshotsSubtitle:  "Müşterimizle oyundan birkaç görüntü.",
      sectionPricing:       "Fiyatlandırma",
      pricingSubtitle:      "Uygun bir plan seçin. Tüm planlar tam erişim içerir.",
      btnBuy:               "Şimdi Satın Al",
      perPeriod:            "dönem başına",
      sectionSupport:       "Destek",
      supportSubtitle:      "Sorularınız mı var? Her zaman yardım etmekten mutluluk duyarız.",
      supportEmail:         "İletişim e-postası",
      supportHours:         "Çalışma saatleri",
      supportDiscord:       "Discord",
      supportTelegram:      "Telegram",
      footerNav:            "Navigasyon",
      footerLegal:          "Belgeler",
      footerPrivacy:        "Gizlilik Politikası",
      footerTerms:          "Hizmet Şartları",
      footerRules:          "Kullanım Kuralları",
      footerCopy:           `© ${new Date().getFullYear()} Vortex Client. Tüm hakları saklıdır.`,
      scrollDown:           "Aşağı kaydır",
      buyNowHero:           "Şimdi Satın Al",
      learnMore:            "Daha fazla bilgi",
      videoBullet1:         "Düzenleme olmadan gerçek oynanış",
      videoBullet2:         "Tüm temel özelliklerin gösterimi",
      videoBullet3:         "Arayüz ayarları detaylı olarak",
      modalPlaceholderTitle:"Belge hazırlanıyor",
      modalPrivacyDesc:     "Gizlilik politikası yakında yayınlanacak.",
      modalTermsDesc:       "Hizmet şartları yakında yayınlanacak.",
      modalRulesDesc:       "Kullanım kuralları yakında yayınlanacak.",
      paymentPopupTitle:    "Satın Alma",
      paymentPopupText:     "Satın alma işlemi için bizimle iletişime geçin:",
      paymentPopupClose:    "Kapat",
      videoHint:            "Video yakında burada görünecek"
    }
  },

  // ─── ЯЗЫКИ ───────────────────────────────────────────────
  languages: [
    { code: "ru", label: "RU", full: "Русский",    flag: "🇷🇺" },
    { code: "en", label: "EN", full: "English",    flag: "🇬🇧" },
    { code: "uk", label: "UA", full: "Українська", flag: "🇺🇦" },
    { code: "pl", label: "PL", full: "Polski",     flag: "🇵🇱" },
    { code: "tr", label: "TR", full: "Türkçe",     flag: "🇹🇷" }
  ],
  defaultLanguage: "ru",   // ← Язык по умолчанию при открытии сайта

  // ─── ЮРИДИЧЕСКИЕ ДОКУМЕНТЫ ───────────────────────────────
  // Вставьте текст документа в поле ниже.
  // Если оставить пустым — покажется красивый плейсхолдер "скоро появится".
  legal: {
    privacy: "",   // ← Политика обработки персональных данных
    terms:   "",   // ← Пользовательское соглашение
    rules:   ""    // ← Правила пользования
  }

};
