/**
 * -------------------------------------------------------------------
 * MASJID FALAH - JAVASCRIPT LOGIC (MODERN STATIC EDITION)
 * -------------------------------------------------------------------
 * This file handles the interactive parts of the site:
 * 1. Language switching & persistence (localStorage).
 * 2. Smart hiding/showing navbar on scroll.
 * 3. Side-drawer mobile menu behavior.
 * 4. Section fade-in animations as you scroll.
 */

/* 1. TRANSLATIONS DICTIONARY - Add or edit text here */
const translations = {
    en: {
        /* English Labels */
        masjidName: "Masjidul Falah",
        home: "Home",
        admin: "Administration",
        history: "History",
        gallery: "Gallery",
        madrasa: "Madrasa",
        service: "Public Service",
        edu: "Education / Culture",
        zakat: "Zakat Awareness",
        org: "Organization",
        contact: "Contact",
        masjid3d: "3D Masjid View",
        heroTitle: "Connecting Hearts, Building Faith",
        heroSubtitle: "Masjid Falah is more than just a place of worship; it is a center of excellence for spiritual growth and community development.",
        getInTouch: "Get in Touch",
        galleryTitle: "Mosque Gallery",
        gallery1: "Main Prayer Hall",
        gallery2: "Mosque Garden",
        gallery3: "Community Hall",
        gallery4: "Exterior View",
        adminTitle: "Masjid Administration",
        president: "President",
        presidentDesc: "Leading with vision and spiritual integrity for the betterment of our community members.",
        presidentName: "A.P Abdul Khader",
        secretary: "Secretary",
        secretaryDesc: "Managing operations and coordination for all mosque activities and public services.",
        secretaryName: "U. Jamaluddin (Madhu)",
        historyTitle: "Our History",
        hist1: "Foundation stone laid by the founding committee to establish a community center.",
        hist2: "Completion of the main prayer hall and inauguration for public services.",
        hist3: "Establishment of the modern Madrasa and educational wing.",
        hist4: "Implementing digital initiatives and community welfare programs.",
        madrasaTitle: "Madrasa Activities",
        madrasaCurr: "Curriculum",
        madrasaCurrDesc: "Comprehensive Islamic education covering Quran recitation, Hadith, and moral studies.",
        madrasaExtra: "Extracurricular",
        madrasaExtraDesc: "Islamic cultural competitions, arts, and physical education for student holistic development.",
        serviceTitle: "Public Service",
        charity: "Charity Works",
        charityDesc: "Welfare programs for the needy, medical aid assistance, and neighborhood support initiatives.",
        community: "Community Integration",
        communityDesc: "Building bonds between different groups through dialogue and joint social activities.",
        eduTitle: "Education & Culture",
        lectures: "Monthly Lectures",
        lecturesDesc: "Expert scholars discussing contemporary issues from an Islamic perspective.",
        library: "Masjid Library",
        libraryDesc: "A collection of classic and modern Islamic literature accessible to all parishioners.",
        zakatTitle: "Zakat Awareness",
        whatIsZakat: "The Importance of Zakat",
        zakatDesc: "Zakat is a mandatory charitable contribution, often considered a tax. It is the third pillar of Islam and serves to purify one's wealth and character by sharing with those in need.",
        zakatNotice: "Please contact our administrative office for information on how to calculate your Zakat obligations according to Shari'ah principles.",
        orgTitle: "Organization",
        mission: "Our Mission",
        missionDesc: "To establish a resilient and spiritually sound community grounded in logic, love, and service.",
        vision: "Our Vision",
        visionDesc: "To become a beacon of light for the entire region, showcasing the beauty of true Islamic values.",
        contactTitle: "Contact & Location",
        addressLabel: "Address",
        addressValue: "Masjidul Falah, 72R3+FQ5, Valiyaparamba, pulikkal, Kerala 673602",
        phoneLabel: "Phone",
        emailLabel: "Email",
        modelSoon: "3D Model Coming Soon",
        footerNote: "Promoting Spiritual Harmony & Excellence"
    },
    ml: {
        /* Malayalam Labels (Native Font: Anek Malayalam) */
        masjidName: "മസ്ജിദുൽ ഫലഹ്",
        home: "ഹോം",
        admin: "ഭരണം",
        history: "ചരിത്രം",
        gallery: "ഗാലറി",
        madrasa: "മദ്രസ",
        service: "ജന സേവനം",
        edu: "പഠനം / സംസ്കരണം",
        zakat: "സകാത്ത്",
        org: "പ്രസ്ഥാനം",
        contact: "ബന്ധപ്പെടുക",
        masjid3d: "മസ്ജിദ് 3D ദൃശ്യം",
        heroTitle: "ഹൃദയങ്ങളെ ബന്ധിപ്പിക്കുന്നു, വിശ്വാസം വളർത്തുന്നു",
        heroSubtitle: "മസ്ജിദ് ഫലഹ് കേവലം ഒരു ആരാധനാലയം മാത്രമല്ല; അത് ആത്മീയ വളർച്ചയ്ക്കും സാമൂഹിക വികസനത്തിനുമുള്ള ഒരു മികച്ച കേന്ദ്രമാണ്.",
        getInTouch: "ബന്ധപ്പെടുക",
        galleryTitle: "ഗാലറി",
        gallery1: "പ്രധാന പ്രാർത്ഥനാ ഹാൾ",
        gallery2: "മസ്ജിദ് പൂന്തോട്ടം",
        gallery3: "കമ്മ്യൂണിറ്റി ഹാൾ",
        gallery4: "പുറം കാഴ്ച",
        adminTitle: "ഭരണസമിതി",
        president: "പ്രസിഡന്റ്",
        presidentDesc: "നമ്മുടെ സമുദായ അംഗങ്ങളുടെ ഉന്നമനത്തിനായി ദീർഘവീക്ഷണത്തോടും ആത്മീയമായ ഉറപ്പോടും കൂടി നേതൃത്വം നൽകുന്നു.",
        presidentName: "എ.പി അബ്ദുൽ ഖാദർ",
        secretary: "സെക്രട്ടറി",
        secretaryDesc: "പള്ളിയുടെ എല്ലാ പ്രവർത്തനങ്ങളുടെയും പൊതു സേവനങ്ങളുടെയും ഏകോപനവും നടത്തിപ്പും നിർവ്വഹിക്കുന്നു.",
        secretaryName: "യു. ജമാലുദ്ദീൻ (മധു)",
        historyTitle: "ചരിത്രം",
        hist1: "ഒരു കമ്മ്യൂണിറ്റി സെന്റർ സ്ഥാപിക്കുന്നതിനായി സ്ഥാപക സമിതി കല്ലിട്ടു.",
        hist2: "പ്രധാന പ്രാർത്ഥനാ ഹാളിന്റെ നിർമ്മാണം പൂർത്തിയാക്കി പൊതു സേവനങ്ങൾക്കായി ഉദ്ഘാടനം ചെയ്തു.",
        hist3: "ആധുനിക മദ്രസയും വിദ്യാഭ്യാസ വിഭാഗവും സ്ഥാപിച്ചു.",
        hist4: "ഡിജിറ്റൽ സംരംഭങ്ങളും കമ്മ്യൂണിറ്റി വെൽഫെയർ പ്രോഗ്രാമുകളും നടപ്പിലാക്കുന്നു.",
        madrasaTitle: "മദ്രസ പ്രവർത്തനങ്ങൾ",
        madrasaCurr: "പാഠ്യപദ്ധതി",
        madrasaCurrDesc: "ഖുർആൻ പാരായണം, ഹദീസ്, ധാർമ്മിക പഠനം എന്നിവ ഉൾക്കൊള്ളുന്ന സമഗ്രമായ ഇസ്ലാമിക വിദ്യാഭ്യാസം.",
        madrasaExtra: "ഇതര പ്രവർത്തനങ്ങൾ",
        madrasaExtraDesc: "വിദ്യാർത്ഥികളുടെ സമഗ്ര വികസനത്തിനായി ഇസ്ലാമിക് കൾച്ചറൽ മത്സരങ്ങൾ, കലകൾ, കായികം എന്നിവ.",
        serviceTitle: "പൊതു സേവനം",
        charity: "കാരുണ്യ പ്രവർത്തനങ്ങൾ",
        charityDesc: "അശരണർക്കായുള്ള ക്ഷേമ പരിപാടികൾ, ചികിത്സാ സഹായം, അയൽപക്ക സഹായ സംരംഭങ്ങൾ.",
        community: "സാമൂഹിക ഐക്യം",
        communityDesc: "സംവാദങ്ങളിലൂടെയും സംയുക്ത സാമൂഹിക പ്രവർത്തനങ്ങളിലൂടെയും വിവിധ വിഭാഗങ്ങൾക്കിടയിൽ ബന്ധം സ്ഥാപിക്കുക.",
        eduTitle: "വിദ്യാഭ്യാസവും സംസ്കാരവും",
        lectures: "മാസിക പ്രഭാഷണങ്ങൾ",
        lecturesDesc: "സമകാലിക विषयोंത്തെ ഇസ്ലാമിക വീക്ഷണത്തിൽ ചർച്ച ചെയ്യുന്ന പ്രഗത്ഭ പണ്ഡിതന്മാരുടെ പ്രഭാഷണങ്ങൾ.",
        library: "മസ്ജിദ് ലൈബ്രറി",
        libraryDesc: "അംഗങ്ങൾക്കും പൊതുജനങ്ങൾക്കും പ്രയോജനപ്പെടുന്ന ക്ലാസിക്, മോഡേൺ ഇസ്ലാമിക് സാഹിത്യ ശേഖരം.",
        zakatTitle: "സകാത്ത് അവബോധം",
        whatIsZakat: "സകാത്തിന്റെ പ്രാധാന്യം",
        zakatDesc: "ഇസ്‌ലാമിലെ അഞ്ച് നിർബന്ധ കർമ്മങ്ങളിൽ മൂന്നാമത്തേതാണ് സകാത്ത്. സമ്പത്ത് ശുദ്ധീകരിക്കാനായി അർഹരായവർക്ക് നൽകുന്ന വിഹിതമാണിത്.",
        zakatNotice: "നിങ്ങളുടെ സകാത്ത് ബാध്യതകൾ എങ്ങനെ കണക്കാക്കാം എന്നതിനെക്കുറിച്ചുള്ള വിവരങ്ങൾക്ക് ഞങ്ങളുടെ ഓഫീസുമായി ബന്ധപ്പെടുക.",
        orgTitle: "പ്രസ്ഥാനം",
        mission: "ദൗത്യം",
        missionDesc: "സ്നേഹത്തിലും സേവനത്തിലും അധിഷ്ഠിതമായ ഒരു സുരക്ഷിത സമൂഹം കെട്ടിപ്പടുക്കുക.",
        vision: "വീക്ഷണം",
        visionDesc: "ശരിയായ ഇസ്ലാമിക മൂല്യങ്ങളുടെ ഭംഗി ലോകത്തിന് കാണിച്ചുകൊടുക്കുന്ന ഒരു വഴികാട്ടിയാകുക.",
        contactTitle: "ബന്ധപ്പെടുക",
        addressLabel: "വിലാസം",
        addressValue: "മസ്ജിദുൽ ഫലഹ്, വലിയപറമ്പ്, പുളിക്കൽ, കേരളം 673602",
        phoneLabel: "ഫോൺ",
        emailLabel: "ഇമെയിൽ",
        modelSoon: "3D മോഡൽ ഉടൻ ലഭ്യമാകും",
        footerNote: "ആത്മീയ ഐക്യവും മികവും വളർത്തുന്നു"
    }
};

/* 2. INITIALIZATION ON LOAD */
document.addEventListener('DOMContentLoaded', () => {
    // Check if the user has already picked a language from a previous session
    const savedLanguage = localStorage.getItem('language');
    
    // If NO language saved, it means it's their first time → Show the Modal
    if (!savedLanguage) {
        showLanguagePopup();
    } else {
        // If they have picked before → Apply it immediately
        applyLanguage(savedLanguage);
    }
    
    // Setup UI components
    initScrollObserver();
    initNavbarBehavior();
    initMobileMenu();
});

/* 3. LANGUAGE LOGIC FUNCTONS */

// Shows the full-screen modal
function showLanguagePopup() {
    const modal = document.getElementById('lang-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevents scrolling behind the popup
}

// Called when a user clicks a language button in the modal or navbar
function setLanguage(lang) {
    // Save to browser memory permanently
    localStorage.setItem('language', lang);
    applyLanguage(lang);
    
    // Close modal if it was open
    const modal = document.getElementById('lang-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Updates all text on the page instantly
function applyLanguage(lang) {
    document.documentElement.lang = lang; // Set HTML lang attribute for SEO
    
    // Find every element with data-t="key" and replace its text from our dictionary
    const elements = document.querySelectorAll('[data-t]');
    elements.forEach(el => {
        const key = el.getAttribute('data-t');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update the small toggle button at the top right
    const toggleBtn = document.getElementById('lang-toggle-btn');
    if (toggleBtn) {
        toggleBtn.innerHTML = lang === 'en' ? '🌐 ML' : '🌐 EN';
    }
}

// Triggered by the small navbar globe button
function toggleLanguage() {
    const currentLang = localStorage.getItem('language') || 'en';
    const nextLang = currentLang === 'en' ? 'ml' : 'en';
    setLanguage(nextLang);
}

/* 4. UI ENHANCEMENTS */

// Detects scroll direction to show/hide navbar and change transparency
function initNavbarBehavior() {
    const navbar = document.getElementById('navbar');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        // Hides navbar when scrolling down, shows when scrolling up
        if (window.scrollY > lastScrollY && window.scrollY > 200) {
            navbar.classList.add('nav-hidden');
        } else {
            navbar.classList.remove('nav-hidden');
        }
        
        // Adds blur and shadow after scrolling 100px
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        lastScrollY = window.scrollY;
    });
}

// Logic to open/close the side-drawer mobile menu
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = mobileMenu.querySelectorAll('a');

    const toggleMenu = () => {
        const isActive = mobileMenu.classList.toggle('active');
        
        // Toggles between the 'Hamburger' icon and the 'Close' (X) icon
        if (isActive) {
            hamburgerIcon.className = 'fa-solid fa-xmark icon';
        } else {
            hamburgerIcon.className = 'fa-solid fa-bars icon';
        }
        
        // Lock page scroll while menu is open
        document.body.style.overflow = isActive ? 'hidden' : 'auto';
    };

    hamburger.addEventListener('click', toggleMenu);
    
    // Close menu automatically when a user clicks a link
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('active')) toggleMenu();
        });
    });
}

/* 5. SCROLL ANIMATIONS (Intersection Observer) */
function initScrollObserver() {
    const observerOptions = { 
        threshold: 0.1, // Trigger when 10% of the section is visible
        rootMargin: "0px 0px -100px 0px" // Trigger slightly before it hits bottom
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Adds the .visible class (which has the CSS fade-in animation)
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animates only once
            }
        });
    }, observerOptions);

    // Apply this logic to all <section> tags
    document.querySelectorAll('section').forEach(section => observer.observe(section));
}
