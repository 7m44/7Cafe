/**
 * 7Cafe - Interactive Landing Page Logic & Bilingual Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initTranslations();
  initNavbarScroll();
  initMobileNav();
  initSystemWorkflow();
  initScrollReveal();
  initClientPanel();
  initFAQ();
  initModals();
});

/* ==========================================================================
   1. Bilingual Translation Engine (Arabic & English)
   ========================================================================== */
const translations = {
  ar: {
    "page_title": "7Cafe - Cyber Cafe Management",
    // Nav
    "nav_features": "المميزات",
    "nav_tour": "طريقة العمل",
    "nav_client": "واجهة العميل",
    "nav_pricing": "الأسعار",
    "nav_faq": "الأسئلة الشائعة",
    "nav_download": "تحميل البرنامج",
    "nav_trial": "تجربة مجانية 7 أيام",
    
    // Hero
    "hero_tag": "⚡ برنامج Windows لإدارة السيبرات ومراكز الألعاب",
    "hero_title": "طريقتك الأسهل، الأرخص، <span class='gradient-text'>والأكثر تميزاً</span> لإدارة <span class='gradient-text'>السيبر</span>",
    "hero_subtitle": "برنامج 7Cafe لإدارة السيبر ومقاهي الإنترنت بدون أي إعدادات معقدة، وخالٍ 100% من الإعلانات، مع نقطة بيع POS مدمجة والمزيد بأرخص سعر في السوق.",
    "hero_btn_trial": "تجربة مجانية 7 أيام",
    "hero_btn_download": "تحميل برنامج 7Cafe",
    "hero_btn_telegram": "تواصل معنا تيليجرام",
    
    // Hero Highlights
    "highlight_no_limit": "عدد أجهزة غير محدود",
    "highlight_no_ip": "ربط تلقائي بدون IP",
    "highlight_no_ads": "خالٍ 100% من الإعلانات",
    "highlight_pos": "نقطة بيع ومخزون متكامل",
    "highlight_consoles": "دعم كامل للبلايستيشن",
    
    // Badges
    "badge_active_title": "18 جهاز متصل",
    "badge_active_sub": "ربط تلقائي عبر الشبكة",
    "badge_save_title": "14 جلسة نشطة",
    "badge_save_sub": "كاشير ومبيعات فورية",
    
    // Comparison
    "comp_tag": "المقارنة العادلة",
    "comp_title": "لماذا يفضل أصحاب السيبرات 7Cafe؟",
    "comp_desc": "مقارنة حقيقية بين البرامج القديمة المعقدة والمليئة بالإعلانات، وبين نظام 7Cafe المصمم بأحدث التقنيات لراحتك.",
    "comp_bad_title": "البرامج التقليدية القديمة",
    "comp_bad_1": "إعدادات شبكة و IP معقدة تتطلب مهندساً لكل تحديث.",
    "comp_bad_2": "إعلانات ونوافذ منبثقة مزعجة تظهر على شاشات الزبائن.",
    "comp_bad_3": "اشتراكات شهرية باهظة ورسوم تصاعدية لكل جهاز (PC Limits).",
    "comp_bad_4": "واجهات قديمة تفتقر للمظهر العصري وتبطئ الأجهزة.",
    "comp_bad_5": "عدم وجود نظام دقيق لحسابات الكونسول والبلايستيشن.",
    
    "comp_good_title": "نظام 7Cafe الحديث",
    "comp_good_1": "تسطيب سريع في دقائق بدون إعدادات IP معقدة.",
    "comp_good_2": "خالٍ تماماً 100% من أي إعلانات أو إشعارات مزعجة.",
    "comp_good_3": "أرخص سعر في السوق: مدى الحياة بـ 30$ وبلا حدود لعدد الأجهزة (No PC Limit).",
    "comp_good_4": "واجهة زبائن بريميوم راقية وخفيفة جداً على موارد الأجهزة.",
    "comp_good_5": "إدارة كاملة للبلايستيشن والكونسول مع الكافتيريا في فاتورة واحدة.",

    // Features
    "feat_tag": "مميزات البرنامج",
    "feat_title": "كل ما تحتاجه لإدارة السيبر في مكان واحد",
    "feat_desc": "صُمم 7Cafe بعناية فائقة ليلبي كل تفاصيل العمل اليومي داخل مراكز الألعاب ومقاهي الإنترنت بدون أي تعقيد.",
    
    "feat_unlimited_title": "عدد أجهزة غير محدود (No PC Limit)",
    "feat_unlimited_desc": "رخصة واحدة تشمل جميع أجهزتك بلا استثناء! لا توجد أي حدود أو اشتراكات تصاعدية على عدد الحواسيب وشاشات الكونسول في صالتك، مهما كبر حجم مشروعك أو زاد عدد أجهزتك.",
    "feat_unlimited_badge": "No PC Limit ∞",

    "feat_1_title": "تسطيب فوري بدون إعداد IP معقد",
    "feat_1_desc": "ودّع ضبط العناوين الثابتة والبورتات المعقدة. يقوم النظام باكتشاف الأجهزة والربط التلقائي عبر الشبكة بكل سلاسة وأمان.",
    "feat_1_badge": "Plug & Play",

    "feat_2_title": "الأرخص في السوق بلا منافس",
    "feat_2_desc": "نوفر لك أفضل عائد استثماري؛ باقة مدى الحياة بـ 30$ فقط أو سنة بـ 15$ أو شهر بـ 4$، مع فترة تجربة مجانية 7 أيام كاملة.",
    "feat_2_badge": "أفضل سعر",

    "feat_3_title": "خالٍ تماماً من الإعلانات المزعجة",
    "feat_3_desc": "لا نوافذ منبثقة، لا بانرات تجارية، ولا استهلاك لباقة الإنترنت. برنامج نظيف ومحترف بنسبة 100% لك ولزبائنك.",
    "feat_3_badge": "100% Ad-Free",

    "feat_4_title": "نقطة مبيعات POS ونظام حسابات",
    "feat_4_desc": "إدارة كاملة للمشروبات والوجبات ومستلزمات الجيمنج، مع نظام كاشير سريع وجرد مخزون دقيق وحساب تكلفة الأوردرات.",
    "feat_4_badge": "كاشير & جرد",

    "feat_5_title": "إدارة أجهزة الكونسول والبلايستيشن",
    "feat_5_desc": "إدارة غرف وأجهزة البلايستيشن (فردي وزوجي)، مع حساب دقيق للوقت والوجبات وإمكانية ربطها بفاتورة موحدة.",
    "feat_5_badge": "Console Support",

    "feat_6_title": "واجهة بريميوم فاخرة لأجهزة العملاء",
    "feat_6_desc": "شريط عائم فخم وعصري على شاشة الزبون يوضح الوقت المتبقي، مع إمكانية تصفح القائمة وطلب المأكولات والمشروبات ونداء الكاشير.",
    "feat_6_badge": "تجربة عميل VIP",

    // How It Works / Workflow
    "tour_tag": "طريقة عمل البرنامج",
    "tour_title": "كيف يدير 7Cafe صالتك اليومية؟",
    "tour_desc": "استعراض عملي ومباشر لشاشات النظام وكيفية إدارة الأجهزة والمبيعات والمخزون وحسابات الشفتات.",

    // Screen 1: Dashboard
    "wf_1_tag": "لوحة التحكم المركزية",
    "wf_1_title": "نظرة شاملة وسجل عمليات لحظي",
    "wf_1_desc": "متابعة فورية للأجهزة المتصلة والشاغرة والمغلقة، تنبيهات فلاشات USB، وإشعارات نداء الكاشير مع سجل زمني مباشر لكل حركة في الصالة.",
    "wf_1_b1": "عَدّادات فورية للأجهزة المتصلة والمتاحة والمغلقة",
    "wf_1_b2": "إجراءات سريعة: بدء جلسة جديدة، إضافة رصيد، وتصدير التقارير",
    "wf_1_b3": "سجل أحداث حي لمراقبة اتصالات الأجهزة والمبيعات لحظة بلحظة",

    // Screen 2: Active Computers
    "wf_2_tag": "مراقبة المحطات",
    "wf_2_title": "إدارة جميع أجهزة عملائك في مكان واحد",
    "wf_2_desc": "واجهة سهلة وسلسة الاستخدام لإدارة ومتابعة جميع أجهزة العملاء وجلساتهم في شاشة واحدة.",
    "wf_2_b1": "مراقبة فورية للوقت وشريط التقدم المئوي لكل جهاز",
    "wf_2_b2": "تشغيل الأجهزة عن بعد بنقرة واحدة (Wake-on-LAN)",
    "wf_2_b3": "حساب تلقائي دقيق للمبالغ المستحقة دون أي خطأ",

    // Screen 3: POS Checkout
    "wf_3_tag": "نقطة البيع والكاشير",
    "wf_3_title": "نقطة بيع مدمجة (Built-in POS)",
    "wf_3_desc": "إدارة شاملة لجميع مبيعاتك وطلباتك في مكان واحد بكل سهولة.",
    "wf_3_b1": "كتالوج بصري للمشروبات والوجبات وتأجير الأدوات",
    "wf_3_b2": "إمكانية إضافة الطلب مباشرة إلى حساب جهاز الزبون",
    "wf_3_b3": "تأكيد المبيعات وإصدار الفاتورة بضغطة واحدة",

    // Screen 4: Inventory
    "wf_4_tag": "المخزن والمستودع",
    "wf_4_title": "إدارة المنتجات والمخزون",
    "wf_4_desc": "إضافة وحذف المنتجات، ومتابعة النواقص والكميات المنخفضة من خلال صفحة واحدة سهلة الاستخدام.",
    "wf_4_b1": "تحديد سعر التكلفة والبيع لحساب هامش الربح بدقة",
    "wf_4_b2": "تحديث المخزون بنقرة واحدة عند وصول شحنات جديدة",
    "wf_4_b3": "تصنيفات مرنة: مشروبات، مأكولات، أدوات جيمنج، وخدمات",

    // Screen 5: Shifts
    "wf_5_tag": "الحسابات والدرج المالي",
    "wf_5_title": "متابعة الحسابات المالية وإدارة الموظفين",
    "wf_5_desc": "منع التلاعب المالي ومطابقة الدرج تلقائياً مع تتبع الشفتات: تسجيل عهدة البداية، فصل إيرادات الجلسات عن مبيعات الكافتيريا لحظياً، ومطابقة الرصيد الفعلي بدقة.",
    "wf_5_b1": "فتح وإغلاق الشفتات وتعيين الموظف المسؤول بسهولة",
    "wf_5_b2": "حساب الفارق بين النقد المتوقع والفعلي تلقائياً",
    "wf_5_b3": "تصدير سجل الشفتات بالكامل لملفات إكسل CSV بنقرة واحدة",

    // Client Simulator Section
    "client_tag": "تجربة العميل",
    "client_title": "تجربة عميل ترتقي بمستوى السيبر",
    "client_desc": "امنح عملاءك تجربة ألعاب فريدة، مع وصول سهل للألعاب وقائمة الطلبات دون الحاجة لمغادرة مقاعدهم.",
    "client_feat_1_title": "متابعة الوقت والتكلفة بدقة تامة",
    "client_feat_1_desc": "عرض فوري للوقت المستهلك والمتبقي وتكلفة الجلسة سواء كانت مسبقة الدفع (Prepaid) أو لاحقة (Postpaid).",
    "client_feat_2_title": "طلب الأوردرات من مكان الزبون",
    "client_feat_2_desc": "يمكن للاعب اختيار المشروبات والوجبات من قائمة الكافتيريا لترسل فوراً إلى شاشة الكاشير لتحضيرها.",
    "client_feat_3_title": "زر نداء الكاشير السريع",
    "client_feat_3_desc": "تنبيه فوري لمسؤول الصالة في حال احتاج الزبون مساعدة دون الحاجة لمغادرة مقعده.",
    "client_sim_order_btn": "طلب مشروب / وجبة",
    "client_sim_call_btn": "نداء الكاشير",
    "client_tab_sim": "⚡ المحاكي الحي التفاعلي",
    "client_tab_real": "📸 صورة الواجهة الحقيقية",

    // Pricing
    "pricing_tag": "خطط الأسعار",
    "pricing_title": "أسعار لا تُقارن.. واختر ما يناسبك",
    "pricing_desc": "شفافية مطلقة بدون أي رسوم خفية، مع دعم فني مستمر.",
    "pricing_trial_banner_title": "🎁 جرّب مجاناً لمدة 7 أيام بكامل الصلاحيات!",
    "pricing_trial_banner_sub": "حمّل البرنامج واختبر جميع المزايا في صالتك قبل دفع أي قرش. لا يتطلب بطاقة ائتمان.",
    "pricing_btn_claim_trial": "تفعيل التجربة المجانية",
    
    "plan_month_name": "باقة الشهر",
    "plan_month_desc": "مثالية للتجربة أو الأنشطة الموسمية",
    "plan_month_period": "/ شهرياً",

    "plan_year_name": "باقة السنة",
    "plan_year_desc": "الخيار الأوفر للاشتراك السنوي",
    "plan_year_period": "/ سنوياً",

    "plan_lifetime_name": "باقة مدى الحياة",
    "plan_lifetime_desc": "ادفع مرة واحدة فقط وامتلك البرنامج للأبد!",
    "plan_lifetime_period": "دفعة واحدة فقط",
    "plan_lifetime_badge": "🔥 الخيار الأفضل والأكثر طلباً",

    "plan_feat_pcs": "عدد أجهزة غير محدود (No PC Limit)",
    "plan_feat_no_ads": "بدون إعلانات 100%",
    "plan_feat_dev_support": "دعم من المطور",
    "plan_feat_lifetime_special": "ترخيص دائم مدى الحياة بدون تجديد",

    "plan_btn_buy": "اختر هذه الباقة الآن",

    // FAQ
    "faq_tag": "إجابات لاستفساراتك",
    "faq_title": "الأسئلة الأكثر شيوعاً",
    "faq_q1": "كيف أبدأ الفترة المجانية لمدة 7 أيام؟",
    "faq_a1": "كل ما عليك هو التواصل معنا عبر تيليجرام t.me/blank12x وطلب كود التفعيل التجريبي، وسنقوم بتزويدك بكود التفعيل التجريبي فوراً لتبدأ تجربتك لمدة 7 أيام كاملة المزايا.",
    "faq_q2": "هل أحتاج لمعرفة تقنية أو إعداد أرقام IP للأجهزة؟",
    "faq_a2": "إطلاقاً! هذا هو أحد أكبر مميزات 7Cafe. البرنامج مصمم بتقنية الاكتشاف التلقائي عبر الشبكة المحلية، مما يعني أن الأجهزة ستتصل بالسيرفر بمجرد تشغيلها دون الحاجة لضبط IPs أو بورتات.",
    "faq_q_limit": "هل يوجد حد أقصى لعدد الأجهزة أو الحواسيب المسموح بها في الصالة؟ (PC Limit)",
    "faq_a_limit": "لا يوجد أي حد على الإطلاق (No PC Limit)! رخصة 7Cafe تمنحك الحق في تشغيل وربط أي عدد تريده من أجهزة الكمبيوتر وشاشات الكونسول في صالتك، سواء كانت صالتك تحتوي على 10 أجهزة أو 100+ جهاز، دون دفع أي تكاليف إضافية لكل محطة.",
    "faq_q3": "هل يدعم البرنامج أجهزة البلايستيشن وشاشات الكونسول؟",
    "faq_a3": "نعم بالتأكيد! يحتوي البرنامج على قسم مخصص للكونسول يسمح لك ببدء الجلسات وحساب وقت اللعب وإضافة الطلبات من الكافتيريا وحساب الفاتورة النهائية بدقة متناهية.",
    "faq_q4": "هل البرنامج خالٍ من الإعلانات حقاً؟",
    "faq_a4": "نعم، خالٍ تماماً 100% من الإعلانات والنوافذ المزعجة وأدوات التتبع. صممنا البرنامج ليقدم أعلى أداء بدون تشتيت لزبائنك وبدون استهلاك للإنترنت في إعلانات غير مرغوبة.",

    // CTA Bottom
    "cta_title": "جاهز لتطوير صالتك؟",
    "cta_desc": "حمّل 7Cafe، فعّل نسختك التجريبية، جرّب واحكم بنفسك",
    "cta_btn_trial": "ابدأ تجربتك المجانية 7 أيام الآن",
    "cta_btn_telegram": "تواصل على تيليجرام t.me/blank12x",

    // Footer
    "footer_desc": "منصة متكاملة لإدارة مقاهي الإنترنت وصالات الألعاب والجيمنج.",
    "footer_quick_links": "روابط سريعة",
    "footer_contact": "التواصل والدعم",
    "footer_rights": "جميع الحقوق محفوظة © 2026 7Cafe Server.",
    "footer_dev": "برمجة وتطوير @7m44"
  },

  en: {
    "page_title": "7Cafe - Cyber Cafe Management",
    // Nav
    "nav_features": "Features",
    "nav_tour": "How It Works",
    "nav_client": "Client Panel",
    "nav_pricing": "Pricing",
    "nav_faq": "FAQ",
    "nav_download": "Download App",
    "nav_trial": "7-Day Free Trial",

    // Hero
    "hero_tag": "⚡ Windows Cyber Cafe & Gaming Lounge Platform",
    "hero_title": "Your Easiest, Cheapest, <span class='gradient-text'>Premium way</span> to manage your <span class='gradient-text'>Cyber Cafe</span>",
    "hero_subtitle": "7Cafe is a Cyber Cafe management Software with no complicated setup and 100% ad-free, built-in POS checkout and much more at the cheapest price",
    "hero_btn_trial": "Start 7-Day Free Trial",
    "hero_btn_download": "Download 7Cafe",
    "hero_btn_telegram": "Contact on Telegram",

    // Hero Highlights
    "highlight_no_limit": "Unlimited Stations (No PC Limit)",
    "highlight_no_ip": "Auto Network Sync (Zero IP Setup)",
    "highlight_no_ads": "100% Ad-Free Experience",
    "highlight_pos": "Integrated POS & Stock",
    "highlight_consoles": "Full Console / PS5 Support",

    // Badges
    "badge_active_title": "18 Stations Connected",
    "badge_active_sub": "Auto network discovery",
    "badge_save_title": "14 Active Sessions",
    "badge_save_sub": "Instant POS & cashier sales",

    // Comparison
    "comp_tag": "The Fair Comparison",
    "comp_title": "Why Cyber Cafe Owners Prefer 7Cafe?",
    "comp_desc": "A realistic side-by-side comparison between legacy, bloated cyber tools vs the modern, clean power of 7Cafe.",
    "comp_bad_title": "Legacy Cyber Cafe Software",
    "comp_bad_1": "Painful network & static IP setup requiring manual tuning.",
    "comp_bad_2": "Intrusive ads & popups cluttering customer screens.",
    "comp_bad_3": "High recurring monthly subscriptions & fees per PC cap.",
    "comp_bad_4": "Outdated clunky interfaces that slow down PC performance.",
    "comp_bad_5": "No unified console & PlayStation billing integration.",

    "comp_good_title": "Modern 7Cafe Platform",
    "comp_good_1": "Instant install in minutes without touching complex IP settings.",
    "comp_good_2": "100% free of ads, banners, or annoying popups.",
    "comp_good_3": "Lowest price on earth: Lifetime license for just $30 with No PC Limit.",
    "comp_good_4": "Sleek, VIP client floating widget that feels premium.",
    "comp_good_5": "Integrated PlayStation time tracking & cafe billing on one ticket.",

    // Features
    "feat_tag": "Core Features",
    "feat_title": "Everything You Need to Run Your Cyber Cafe in One Place",
    "feat_desc": "Meticulously engineered to cover every operational detail of modern internet cafes and gaming centers without complexity.",

    "feat_unlimited_title": "Unlimited Stations (No PC Limit)",
    "feat_unlimited_desc": "One single license covers all your stations without exception! Zero caps or tiered pricing on PCs or console setups in your lounge, no matter how large your venue grows.",
    "feat_unlimited_badge": "No PC Limit ∞",

    "feat_1_title": "Zero IP Hassle & Plug-and-Play",
    "feat_1_desc": "Forget about manual static IPs and router port forwarding. 7Cafe automatically discovers and connects client stations securely across the local network.",
    "feat_1_badge": "Plug & Play",

    "feat_2_title": "Unbeatable Market Pricing",
    "feat_2_desc": "Get the maximum ROI: $30 Lifetime, $15 Yearly, or $4 Monthly. All plans come with a 7-day unconditional free trial.",
    "feat_2_badge": "Best Value",

    "feat_3_title": "100% Free of Annoying Ads",
    "feat_3_desc": "No popups, no third-party adware, and zero bandwidth wasted on ads. A pristine, professional interface for you and your players.",
    "feat_3_badge": "100% Ad-Free",

    "feat_4_title": "Built-in POS & Shift Accounting",
    "feat_4_desc": "Manage snacks, beverages, and gaming gear. Complete cashier sales, inventory tracking, and staff shift balance reconciliations in real-time.",
    "feat_4_badge": "POS & Stock",

    "feat_5_title": "Console & PlayStation Management",
    "feat_5_desc": "Track individual and multiplayer sessions on PS5/Xbox consoles. Merge snacks and console playtime into a single invoice.",
    "feat_5_badge": "Console Support",

    "feat_6_title": "Sleek Customer Floating Bar",
    "feat_6_desc": "A modern, floating client panel showing remaining time, letting players order food and summon cashiers without closing their games.",
    "feat_6_badge": "VIP Experience",

    // How It Works / Workflow
    "tour_tag": "How 7Cafe Works",
    "tour_title": "How 7Cafe Powers Your Daily Lounge Operations",
    "tour_desc": "A direct walkthrough of the core system screens to manage your stations, POS orders, inventory, and shift drawer.",

    // Screen 1: Dashboard
    "wf_1_tag": "Central Telemetry",
    "wf_1_title": "Live Overview & Real-Time Event Log",
    "wf_1_desc": "Instant 360-degree telemetry of your entire venue: available vs occupied PCs, USB security alerts, and cashier call notifications with live event logging.",
    "wf_1_b1": "Real-time live counters for online, available, and offline PCs",
    "wf_1_b2": "Quick shortcuts: start new session, add time, and export reports",
    "wf_1_b3": "Live operations log tracking connections, USB alerts, and checkout events",

    // Screen 2: Active Computers
    "wf_2_tag": "Station Control",
    "wf_2_title": "Manage all your clients PCs in one place",
    "wf_2_desc": "An easy user friendly interface to manage and see all your clients PCs and sessions",
    "wf_2_b1": "Live progress bar showing elapsed and remaining station time",
    "wf_2_b2": "Broadcast messages to all PCs or trigger remote Wake-on-LAN",
    "wf_2_b3": "Automated billing calculation with zero discrepancies",

    // Screen 3: POS Checkout
    "wf_3_tag": "POS & Checkout",
    "wf_3_title": "Built in POS",
    "wf_3_desc": "manage all your sales, orders all in one place",
    "wf_3_b1": "Visual catalog for drinks, snacks, and pro gaming gear rentals",
    "wf_3_b2": "Seamlessly append orders to the customer's active station bill",
    "wf_3_b3": "One-click sale confirmation and instant receipt calculation",

    // Screen 4: Inventory
    "wf_4_tag": "Stock & Inventory",
    "wf_4_title": "Product Management",
    "wf_4_desc": "add products, remove products, track low stock products with one easy to use page",
    "wf_4_b1": "Track cost vs retail prices to measure profit margins accurately",
    "wf_4_b2": "One-click stock adjustments when new inventory arrives",
    "wf_4_b3": "Flexible categories: Beverages, Drinks, Snacks, Food, Gear",

    // Screen 5: Shifts
    "wf_5_tag": "Cash Drawer & Shifts",
    "wf_5_title": "Track your financial and manage employee",
    "wf_5_desc": "Eliminate cash discrepancies with automated shift tracking. Monitor opening float, break down session revenue vs. retail POS sales in real time, and verify drawer balances",
    "wf_5_b1": "Open and close cashier shifts with assigned staff credentials",
    "wf_5_b2": "Automated reconciliation comparing expected vs actual cash",
    "wf_5_b3": "Export detailed historical shift records to CSV with one click",

    // Client Simulator Section
    "client_tag": "Customer Experience",
    "client_title": "A Customer Experience That Elevate Your Cyber Cafe",
    "client_desc": "Provide your client's unique gaming experience, easy games access and orders menu without them leaving their seats",
    "client_feat_1_title": "Real-time Time & Cost Tracking",
    "client_feat_1_desc": "Clear display of elapsed time, remaining duration, and billing whether on prepaid or postpaid sessions.",
    "client_feat_2_title": "In-Seat Snack & Drink Ordering",
    "client_feat_2_desc": "Gamers can browse the menu and order refreshments instantly to the cashier screen without leaving their seats.",
    "client_feat_3_title": "One-Click Cashier Call Button",
    "client_feat_3_desc": "Instant alert to the front desk when a customer requires hardware support or refills.",
    "client_sim_order_btn": "Place Order",
    "client_sim_call_btn": "Call Cashier",
    "client_tab_sim": "⚡ Live Interactive Simulator",
    "client_tab_real": "📸 Real App Screenshot",

    // Pricing
    "pricing_tag": "Transparent Pricing",
    "pricing_title": "Unmatched Rates.. Pick What Suits You Best",
    "pricing_desc": "No hidden fees, no forced renewals, and dedicated developer support.",
    "pricing_trial_banner_title": "🎁 Get a 7-Day Unrestricted Free Trial!",
    "pricing_trial_banner_sub": "Test all features on your floor before paying a single cent. No credit card required.",
    "pricing_btn_claim_trial": "Claim 7-Day Free Trial",

    "plan_month_name": "Monthly Plan",
    "plan_month_desc": "Great for testing and seasonal events",
    "plan_month_period": "/ month",

    "plan_year_name": "Yearly Plan",
    "plan_year_desc": "Cost-effective annual savings",
    "plan_year_period": "/ year",

    "plan_lifetime_name": "Lifetime Plan",
    "plan_lifetime_desc": "Pay once and own the software forever!",
    "plan_lifetime_period": "one-time payment",
    "plan_lifetime_badge": "🔥 Most Popular & Best Value",

    "plan_feat_pcs": "Unlimited Stations (No PC Limit)",
    "plan_feat_no_ads": "100% ad-free",
    "plan_feat_dev_support": "Developer Support",
    "plan_feat_lifetime_special": "Permanent license with zero renewals",

    "plan_btn_buy": "Choose This Plan",

    // FAQ
    "faq_tag": "Got Questions?",
    "faq_title": "Frequently Asked Questions",
    "faq_q1": "How do I claim my 7-day free trial?",
    "faq_a1": "Simply contact us on Telegram at t.me/blank12x to request your trial activation code. We will provide you with an instant 7-day full-feature trial license.",
    "faq_q2": "Do I need technical skills or static IP configurations?",
    "faq_a2": "Not at all! 7Cafe uses automatic local network discovery. Client stations automatically connect to the server without configuring static IPs or modifying router ports.",
    "faq_q_limit": "Is there a limit on the number of PC stations supported? (PC Limit)",
    "faq_a_limit": "None at all! 7Cafe comes with No PC Limit. You can connect and manage any number of PCs and consoles across your lounge — whether you run 10 stations or 100+ — at the same flat rate with zero extra fees.",
    "faq_q3": "Does it support PlayStation and gaming consoles?",
    "faq_a3": "Yes! The system includes a dedicated console module supporting hourly billing and combining cafe orders into a single check.",
    "faq_q4": "Is it genuinely 100% ad-free?",
    "faq_a4": "Yes, absolutely zero popups, zero trackers, banners, or adware. Your players enjoy a distraction-free gaming experience and your bandwidth remains pristine.",

    // CTA Bottom
    "cta_title": "Ready to Upgrade Your Cafe?",
    "cta_desc": "Download 7Cafe, Claim your trial, try and judge it",
    "cta_btn_trial": "Claim Your 7-Day Free Trial",
    "cta_btn_telegram": "Chat on Telegram t.me/blank12x",

    // Footer
    "footer_desc": "All-in-one management platform for cyber cafes and gaming lounges.",
    "footer_quick_links": "Quick Links",
    "footer_contact": "Contact & Support",
    "footer_rights": "All rights reserved © 2026 7Cafe Server.",
    "footer_dev": "Crafted with ❤️ by @7m44"
  }
};

let currentLang = 'ar';

function initTranslations() {
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  const savedLang = langParam || localStorage.getItem('7cafe_lang') || 'ar';
  setLanguage(savedLang);

  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const newLang = currentLang === 'ar' ? 'en' : 'ar';
      setLanguage(newLang);
    });
  }
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('7cafe_lang', lang);
  document.documentElement.lang = lang;
  document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  document.title = (translations[lang] && translations[lang]['page_title']) || '7Cafe - Cyber Cafe Management';

  // Update text of elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update language toggle button label
  const toggleLabel = document.getElementById('lang-toggle-text');
  if (toggleLabel) {
    toggleLabel.textContent = lang === 'ar' ? 'English' : 'العربية';
  }
}

/* ==========================================================================
   2. Navbar Scroll Behavior
   ========================================================================== */
function initNavbarScroll() {
  const navbar = document.getElementById('main-navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* ==========================================================================
   3. Mobile Navigation Toggle
   ========================================================================== */
function initMobileNav() {
  const toggle = document.getElementById('mobile-nav-toggle');
  const links = document.getElementById('nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('mobile-open');
    });

    // Close on link click
    links.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        links.classList.remove('mobile-open');
      });
    });
  }
}

/* ==========================================================================
   4. System Workflow Screenshots Lightbox
   ========================================================================== */
function initSystemWorkflow() {
  const zoomFrames = document.querySelectorAll('.workflow-image-frame');
  zoomFrames.forEach(frame => {
    frame.addEventListener('click', () => {
      const imgSrc = frame.getAttribute('data-zoom-src');
      const imgTitle = frame.getAttribute('data-zoom-title');
      if (imgSrc) {
        openLightbox(imgSrc, imgTitle || '7Cafe Screen');
      }
    });
  });
}

/* ==========================================================================
   5. Client Panel Screenshot & Zoom Lightbox
   ========================================================================== */
function initClientPanel() {
  const clientRealFrame = document.getElementById('client-real-frame');
  if (clientRealFrame) {
    clientRealFrame.addEventListener('click', () => {
      openLightbox('assets/client_floating_panel.png', currentLang === 'ar' ? 'واجهة العميل العائمة' : '7Cafe Client Floating Interface');
    });
  }
}



/* ==========================================================================
   7. FAQ Accordion
   ========================================================================== */
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
}

/* ==========================================================================
   8. Modals System (Lightbox)
   ========================================================================== */
function initModals() {
  // Lightbox Modal
  const lightboxModal = document.getElementById('lightbox-modal');

  // Close triggers
  document.querySelectorAll('.modal-close-btn, .modal-backdrop').forEach(closer => {
    closer.addEventListener('click', (e) => {
      if (e.target === closer || closer.classList.contains('modal-close-btn') || closer.closest('.modal-close-btn')) {
        closeAllModals();
      }
    });
  });

  // Prevent click on modal card from closing
  document.querySelectorAll('.modal-card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });

  // Hero image zoom trigger
  const heroImgFrame = document.getElementById('hero-image-frame');
  if (heroImgFrame) {
    heroImgFrame.addEventListener('click', () => {
      openLightbox('assets/hero_dashboard.png', currentLang === 'ar' ? 'لوحة تحكم سيرفر 7Cafe' : '7Cafe Server Live Dashboard');
    });
  }

  // Lightbox image click to close
  const lightboxImg = document.getElementById('lightbox-img');
  if (lightboxImg) {
    lightboxImg.style.cursor = 'pointer';
    lightboxImg.addEventListener('click', () => {
      closeAllModals();
    });
  }

  // Escape key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });
}

function openModal(modal) {
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeAllModals() {
  document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('open'));
  document.body.style.overflow = '';
}

function openLightbox(imgSrc, title) {
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  if (lightboxModal && lightboxImg) {
    lightboxImg.src = imgSrc;
    lightboxImg.alt = title || '7Cafe Screenshot';
    openModal(lightboxModal);
  }
}

/* ==========================================================================
   8. Scroll-Triggered Slide Animation for Workflow Steps
   ========================================================================== */
function initScrollReveal() {
  const animatedElements = document.querySelectorAll('.workflow-item, .client-interactive-grid, .pricing-grid');
  if (!animatedElements.length) return;

  // Mark document ready so CSS initial offsets activate cleanly
  document.body.classList.add('scroll-reveal-init');

  // Fallback for browsers without IntersectionObserver
  if (!('IntersectionObserver' in window)) {
    animatedElements.forEach(item => item.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  animatedElements.forEach(item => {
    observer.observe(item);
  });
}

