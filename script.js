// Language Translations
const translations = {
    tr: {
      "nav.home": "Ana Sayfa",
      "nav.about": "Hakkımda",
      "nav.skills": "Yetenekler",
      "nav.projects": "Projeler",
      "nav.experience": "Deneyim",
      "nav.contact": "İletişim",
      
      "hero.greeting": "Merhaba, ben",
      "hero.typing": ["Web Geliştirici", "UI/UX Tasarımcı", "3D Etkileşim Uzmanı"],
      "hero.subtitle": "Etkileyici dijital deneyimler yaratmaya odaklanmış tam yığın geliştirici.",
      "hero.cta1": "Projelerimi Gör",
      "hero.cta2": "İletişime Geç",
      
      "about.title": "Hakkımda",
      "about.subtitle": "Dijital Deneyimler Yaratıyorum",
      "about.description1": "Web geliştirme ve tasarım tutkumu keşfettiğim 1 yıllık profesyonel deneyime sahibim. Modern teknolojiler ve yaratıcı çözümler kullanarak estetik ve işlevsel web uygulamaları oluşturmaya odaklanıyorum.",
      "about.description2": "Three.js ve GSAP gibi modern kütüphaneleri kullanmadaki uzmanlığım, etkileyici ve akılda kalıcı kullanıcı deneyimleri yaratmama olanak tanır. Her projede, teknik mükemmellik ve yaratıcı tasarım arasında mükemmel bir denge kurmayı amaçlıyorum.",
      "about.name.label": "Ad",
      "about.name.value": "Fatih Mete Sert",
      "about.email.label": "E-posta",
      "about.email.value": "fthmetesert@gmail.com",
      "about.phone.label": "Telefon",
      "about.phone.value": "+90 552 818 7407",
      "about.location.label": "Lokasyon",
      "about.location.value": "İzmir, Türkiye",
      "about.resume": "Özgeçmişi İndir",
      
      "skills.title": "Yeteneklerim",
      "skills.subtitle": "Yıllar içinde geliştirdiğim teknik ve yaratıcı yeteneklerim.",
      "skills.technical.title": "Teknik Yetenekler",
      "skills.creative.title": "Yaratıcı Yetenekler",
      "skills.tools.title": "Araçlar ve Teknolojiler",
      
      "projects.title": "Projelerim",
      "projects.subtitle": "Geliştirdiğim bazı önemli projeler.",
      "projects.project1.title": "3D İnteraktif Portföy",
      "projects.project1.description": "Three.js ve GSAP kullanılarak oluşturulmuş, tam ekran 3D deneyim sunan interaktif bir portföy sitesi.",
      "projects.project2.title": "E-ticaret Platformu",
      "projects.project2.description": "Next.js, Tailwind CSS ve MongoDB ile oluşturulmuş, tam özellikli modern bir e-ticaret platformu.",
      "projects.project3.title": "İçerik Yönetim Sistemi",
      "projects.project3.description": "Vue.js ve Firebase kullanılarak geliştirilmiş, kullanıcı dostu bir içerik yönetim sistemi.",
      "projects.live": "Canlı Demo",
      "projects.code": "Kaynak Kodu",
      "projects.viewAll": "Tüm Projeleri Gör",
      
     "experience.title": "Deneyim",
     "experience.subtitle": "Şu anda profesyonel iş deneyimim bulunmamaktadır, ancak kişisel projelerim ve eğitimlerimle kendimi sürekli geliştiriyorum.",
      // "experience.job1.title": "Kıdemli Front-end Geliştirici",
      // "experience.job1.company": "Teknoloji Firması A.Ş.",
      // "experience.job1.description": "Şirketin ana ürününün kullanıcı arayüzünü geliştirdim ve bakımını yaptım. Three.js ve GSAP ile 3D etkileşimli gösterge panelleri tasarladım.",
      // "experience.job2.title": "Full Stack Geliştirici",
      // "experience.job2.company": "Yazılım Çözümleri Ltd.",
      // "experience.job2.description": "Farklı sektörlerden müşteriler için web uygulamaları geliştirdim. Son teknoloji çözümler uyguladım ve API entegrasyonları gerçekleştirdim.",
      // "experience.job3.title": "Web Geliştirici",
      // "experience.job3.company": "Dijital Ajans",
      // "experience.job3.description": "Çeşitli kurumsal web siteleri ve e-ticaret uygulamaları oluşturdum. Tasarım ekibiyle yakın çalışarak mükemmel kullanıcı deneyimleri sağladım.",
      
      "education.title": "Eğitim",
      "education.degree1.title": "Lise-Devam Ediyor",
      "education.degree1.school": "Göztepe Mesleki ve Teknik Anadolu Lisesi",
      "education.degree1.description": "Algoritmik düşünme becerilerimi geliştiriyor; frontend ve backend alanlarında aktif olarak kendimi eğitiyorum.",
      "education.degree2.title": "Ortaokul",
      "education.degree2.school": "19 Mayıs Ortaokulu",
      "education.degree2.description": "Bilgisayarın temel donanım parçalarını öğrenme ve algoritma mantığını kavrama.",
      
      "contact.title": "İletişime Geç",
      "contact.subtitle": "Benimle iletişime geçmek veya bir proje hakkında konuşmak için aşağıdaki bilgileri kullanabilirsiniz.",
      "contact.email.title": "E-posta",
      "contact.email.value": "fthmetesert@gmail.com",
      "contact.phone.title": "Telefon",
      "contact.phone.value": "+90 552 818 7407",
      "contact.location.title": "Lokasyon",
      "contact.location.value": "İzmir, Türkiye",
      "contact.social.title": "Sosyal Medya",
      "contact.form.title": "Mesaj Gönder",
      "contact.form.name": "Adınız",
      "contact.form.email": "E-posta Adresiniz",
      "contact.form.subject": "Konu",
      "contact.form.message": "Mesajınız",
      "contact.form.send": "Gönder",
      
      "footer.copyright": "© 2025 Tüm Hakları Saklıdır."
    },
    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.experience": "Experience",
      "nav.contact": "Contact",
      
      "hero.greeting": "Hello, I'm",
      "hero.typing": ["Web Developer", "UI/UX Designer", "3D Interaction Specialist"],
      "hero.subtitle": "A full stack developer focused on creating impressive digital experiences.",
      "hero.cta1": "View My Work",
      "hero.cta2": "Contact Me",
      
      "about.title": "About Me",
      "about.subtitle": "Creating Digital Experiences",
      "about.description1": "I have 1 years of professional experience where I discovered my passion for web development and design. I focus on creating aesthetic and functional web applications using modern technologies and creative solutions.",
      "about.description2": "My expertise in using modern libraries like Three.js and GSAP allows me to create impressive and memorable user experiences. In every project, I aim to strike a perfect balance between technical excellence and creative design.",
      "about.name.label": "Name",
      "about.name.value": "Fatih Mete Sert",
      "about.email.label": "Email",
      "about.email.value": "fthmetesrt@gmail.com",
      "about.phone.label": "Phone",
      "about.phone.value": "+90 552 818 7407",
      "about.location.label": "Location",
      "about.location.value": "Izmır, Turkey",
      "about.resume": "Download Resume",
      
      "skills.title": "My Skills",
      "skills.subtitle": "Technical and creative skills I've developed over the years.",
      "skills.technical.title": "Technical Skills",
      "skills.creative.title": "Creative Skills",
      "skills.tools.title": "Tools & Technologies",
      
      "projects.title": "My Projects",
      "projects.subtitle": "Some significant projects I've developed.",
      "projects.project1.title": "3D Interactive Portfolio",
      "projects.project1.description": "An interactive portfolio site built with Three.js and GSAP, providing a full-screen 3D experience.",
      "projects.project2.title": "E-commerce Platform",
      "projects.project2.description": "A modern, fully-featured e-commerce platform built with Next.js, Tailwind CSS, and MongoDB.",
      "projects.project3.title": "Content Management System",
      "projects.project3.description": "A user-friendly content management system developed using Vue.js and Firebase.",
      "projects.live": "Live Demo",
      "projects.code": "Source Code",
      "projects.viewAll": "View All Projects",
      
       "experience.title": "Experience",
      "experience.subtitle": "I do not currently have professional work experience, but I continuously improve myself through personal projects and ongoing education.",
      // "experience.job1.title": "Senior Frontend Developer",
      // "experience.job1.company": "Technology Company Inc.",
      // "experience.job1.description": "Developed and maintained the user interface of the company's main product. Designed 3D interactive dashboards with Three.js and GSAP.",
      // "experience.job2.title": "Full Stack Developer",
      // "experience.job2.company": "Software Solutions Ltd.",
      // "experience.job2.description": "Developed web applications for clients from different sectors. Implemented cutting-edge solutions and performed API integrations.",
      // "experience.job3.title": "Web Developer",
      // "experience.job3.company": "Digital Agency",
      // "experience.job3.description": "Created various corporate websites and e-commerce applications. Worked closely with the design team to provide excellent user experiences.",
      
      "education.title": "Education",
      "education.degree1.title": "High School - Ongoing",
      "education.degree1.school": "Göztepe Vocational and Technical Anatolian High School",
      "education.degree1.description": "I am developing my algorithmic thinking skills and actively educating myself in both frontend and backend       development.",
      "education.degree2.title": "Middle School",
      "education.degree2.school": "19 Mayıs Middle School",
      "education.degree2.description": "Learning the basic hardware components of computers and understanding the fundamentals of algorithms.",
      
      "contact.title": "Get In Touch",
      "contact.subtitle": "You can use the information below to contact me or discuss a project.",
      "contact.email.title": "Email",
      "contact.email.value": "fthmetesrt@gmail.com",
      "contact.phone.title": "Phone",
      "contact.phone.value": "+90 552 818 7407",
      "contact.location.title": "Location",
      "contact.location.value": "Izmır, Turkey",
      "contact.social.title": "Social Media",
      "contact.form.title": "Send Message",
      "contact.form.name": "Your Name",
      "contact.form.email": "Your Email",
      "contact.form.subject": "Subject",
      "contact.form.message": "Your Message",
      "contact.form.send": "Send",
      
      "footer.copyright": "© 2025 All Rights Reserved."
    },
    de: {
      "nav.home": "Startseite",
      "nav.about": "Über Mich",
      "nav.skills": "Fähigkeiten",
      "nav.projects": "Projekte",
      "nav.experience": "Erfahrung",
      "nav.contact": "Kontakt",
      
      "hero.greeting": "Hallo, ich bin",
      "hero.typing": ["Webentwickler", "UI/UX Designer", "3D-Interaktionsspezialist"],
      "hero.subtitle": "Ein Full-Stack-Entwickler, der sich auf die Erstellung beeindruckender digitaler Erlebnisse konzentriert.",
      "hero.cta1": "Meine Arbeit Ansehen",
      "hero.cta2": "Kontaktiere Mich",
      
      "about.title": "Über Mich",
      "about.subtitle": "Digitale Erlebnisse Schaffen",
      "about.description1": "Ich verfüge über 1 Jahre Berufserfahrung, in denen ich meine Leidenschaft für Webentwicklung und Design entdeckt habe. Ich konzentriere mich auf die Erstellung ästhetischer und funktionaler Webanwendungen mit modernen Technologien und kreativen Lösungen.",
      "about.description2": "Meine Expertise in der Verwendung moderner Bibliotheken wie Three.js und GSAP ermöglicht es mir, beeindruckende und unvergessliche Benutzererlebnisse zu schaffen. Bei jedem Projekt strebe ich eine perfekte Balance zwischen technischer Exzellenz und kreativem Design an.",
      "about.name.label": "Name",
      "about.name.value": "Fatih Mete Sert",
      "about.email.label": "E-Mail",
      "about.email.value": "fthmetesrt@gmail.com",
      "about.phone.label": "Telefon",
      "about.phone.value": "+90 552 818 7407",
      "about.location.label": "Standort",
      "about.location.value": "Izmır, Türkei",
      "about.resume": "Lebenslauf Herunterladen",
      
      "skills.title": "Meine Fähigkeiten",
      "skills.subtitle": "Technische und kreative Fähigkeiten, die ich im Laufe der Jahre entwickelt habe.",
      "skills.technical.title": "Technische Fähigkeiten",
      "skills.creative.title": "Kreative Fähigkeiten",
      "skills.tools.title": "Werkzeuge & Technologien",
      
      "projects.title": "Meine Projekte",
      "projects.subtitle": "Einige bedeutende Projekte, die ich entwickelt habe.",
      "projects.project1.title": "3D Interaktives Portfolio",
      "projects.project1.description": "Eine interaktive Portfolio-Website, die mit Three.js und GSAP erstellt wurde und ein vollständiges 3D-Erlebnis bietet.",
      "projects.project2.title": "E-Commerce-Plattform",
      "projects.project2.description": "Eine moderne, vollständig ausgestattete E-Commerce-Plattform, die mit Next.js, Tailwind CSS und MongoDB erstellt wurde.",
      "projects.project3.title": "Content-Management-System",
      "projects.project3.description": "Ein benutzerfreundliches Content-Management-System, das mit Vue.js und Firebase entwickelt wurde.",
      "projects.live": "Live-Demo",
      "projects.code": "Quellcode",
      "projects.viewAll": "Alle Projekte Ansehen",
      
       "experience.title": "Erfahrung",
      "experience.subtitle": "Ich habe derzeit noch keine berufliche Erfahrung, entwickle mich jedoch stetig durch persönliche Projekte und kontinuierliche Weiterbildung weiter.",
      // "experience.job1.title": "Senior Frontend-Entwickler",
      // "experience.job1.company": "Technologieunternehmen GmbH",
      // "experience.job1.description": "Entwicklung und Wartung der Benutzeroberfläche des Hauptprodukts des Unternehmens. Gestaltung von 3D-interaktiven Dashboards mit Three.js und GSAP.",
      // "experience.job2.title": "Full-Stack-Entwickler",
      // "experience.job2.company": "Software-Lösungen GmbH",
      // "experience.job2.description": "Entwicklung von Webanwendungen für Kunden aus verschiedenen Branchen. Implementierung modernster Lösungen und Durchführung von API-Integrationen.",
      // "experience.job3.title": "Webentwickler",
      // "experience.job3.company": "Digitalagentur",
      // "experience.job3.description": "Erstellung verschiedener Unternehmenswebsites und E-Commerce-Anwendungen. Enge Zusammenarbeit mit dem Designteam, um hervorragende Benutzererlebnisse zu bieten.",
      
      "education.title": "Ausbildung",
      "education.degree1.title": "Oberschule – Laufend",
      "education.degree1.school": "Göztepe Berufliches und Technisches Anatolisches Gymnasium",
      "education.degree1.description": "Ich entwickle meine algorithmischen Denkfähigkeiten weiter und bilde mich aktiv im Frontend- und      Backend-Bereich weiter.",
      "education.degree2.title": "Mittelschule",
      "education.degree2.school": "19 Mayıs Mittelschule",
      "education.degree2.description": "Grundlegende Hardwarekomponenten des Computers erlernen und das Verständnis für die Algorithmuslogik      entwickeln.",
      
      "contact.title": "Kontakt Aufnehmen",
      "contact.subtitle": "Sie können die folgenden Informationen verwenden, um mich zu kontaktieren oder ein Projekt zu besprechen.",
      "contact.email.title": "E-Mail",
      "contact.email.value": "fthmetesrt@gmail.com",
      "contact.phone.title": "Telefon",
      "contact.phone.value": "+90 552 818 7407",
      "contact.location.title": "Standort",
      "contact.location.value": "Izmır, Türkei",
      "contact.social.title": "Soziale Medien",
      "contact.form.title": "Nachricht Senden",
      "contact.form.name": "Ihr Name",
      "contact.form.email": "Ihre E-Mail",
      "contact.form.subject": "Betreff",
      "contact.form.message": "Ihre Nachricht",
      "contact.form.send": "Senden",
      
      "footer.copyright": "© 2025 Alle Rechte Vorbehalten."
    }
  };
  
 // Constants
const LANGUAGES = {
tr: {
  name: "Türkçe",
  flag: "https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.14.0/flags/4x3/tr.svg"
},
en: {
  name: "English",
  flag: "https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.14.0/flags/4x3/gb.svg"
},
de: {
  name: "Deutsch",
  flag: "https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.14.0/flags/4x3/de.svg"
}
};

class PortfolioApp {
  constructor() {
    this.initDOM();
    this.initState();
    this.init();
  }

  initDOM() {
    this.DOM = {
      currentLang: document.getElementById("current-lang"),
      currentFlag: document.getElementById("current-flag"),
      lightIcon: document.getElementById("light-icon"),
      darkIcon: document.getElementById("dark-icon"),
      typingElement: document.querySelector(".typing-text"),
      threeContainer: document.getElementById("three-container"),
      langSelect: document.querySelector(".lang-select"),
      langDropdown: document.querySelector(".lang-dropdown"),
      themeToggle: document.querySelector(".theme-toggle"),
      mobileMenuBtn: document.querySelector(".mobile-menu-btn"),
      mobileMenu: document.querySelector(".mobile-menu"),
      contactForm: document.querySelector(".contact-form")
    };
  }

  initState() {
    this.threeJS = {
      scene: null,
      camera: null,
      renderer: null,
      particles: null
    };
    this.typedInstance = null;
    this.lenis = null;
    this.isMobile = /Mobi|Android/i.test(navigator.userAgent);
  }

  init() {
    this.disableScrollRestoration();
    this.loadPreferences();
    this.initThreeJS();
    this.initTypingAnimation();
    this.initGSAPAnimations();
    this.setupEventListeners();
  }

  disableScrollRestoration() {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    window.addEventListener('load', () => window.scrollTo(0, 0));
    
    if (this.isMobile) {
      setTimeout(() => window.scrollTo(0, 0), 100);
    }
  }

  loadPreferences() {
    window.scrollTo(0, 0);
    this.showDefaultContent();
    
    const language = localStorage.getItem("language") || "tr";
    this.setLanguage(language);

    const theme = localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    this.setTheme(theme);
  }

  showDefaultContent() {
    document.querySelectorAll("#about [data-key]").forEach(element => {
      if (!element.textContent.trim()) {
        element.textContent = element.dataset.default || element.textContent;
      }
    });
  }

  setLanguage(lang) {
    if (!translations[lang]) {
      console.error(`Dil verileri yüklenemedi: ${lang}`);
      return;
    }

    // Dil verilerini uygula
    this.DOM.currentLang.textContent = LANGUAGES[lang].name;
    this.DOM.currentLang.dataset.lang = lang;
    this.DOM.currentFlag.src = LANGUAGES[lang].flag;
    document.documentElement.lang = lang;

    // Çevirileri uygula
    document.querySelectorAll("[data-key]").forEach(element => {
      const key = element.dataset.key;
      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });

    this.initTypingAnimation();
    localStorage.setItem("language", lang);
  }

  setTheme(theme) {
    if (theme === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      this.DOM.lightIcon.style.display = "inline-block";
      this.DOM.darkIcon.style.display = "none";
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
      this.DOM.lightIcon.style.display = "none";
      this.DOM.darkIcon.style.display = "inline-block";
    }
    localStorage.setItem("theme", theme);
  }

  initThreeJS() {
    try {
      this.threeJS.scene = new THREE.Scene();
      const { clientWidth: width, clientHeight: height } = this.DOM.threeContainer;
      
      this.threeJS.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      this.threeJS.camera.position.z = 5;

      this.threeJS.renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
      });
      this.threeJS.renderer.setSize(width, height);
      this.threeJS.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.DOM.threeContainer.appendChild(this.threeJS.renderer.domElement);

      // Particle sistemini oluştur
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = 500;
      const posArray = new Float32Array(particlesCount * 3);

      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10;
      }

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      const particlesMaterial = new THREE.PointsMaterial({ size: 0.05, color: 0xff6b00 });
      this.threeJS.particles = new THREE.Points(particlesGeometry, particlesMaterial);
      this.threeJS.scene.add(this.threeJS.particles);

      // Animasyon döngüsü
      const animate = () => {
        requestAnimationFrame(animate);
        this.threeJS.particles.rotation.x += 0.0005;
        this.threeJS.particles.rotation.y += 0.0005;
        this.threeJS.renderer.render(this.threeJS.scene, this.threeJS.camera);
      };
      animate();

      window.addEventListener('resize', this.handleResize.bind(this));
    } catch (error) {
      console.error("Three.js başlatılırken hata oluştu:", error);
    }
  }

  handleResize() {
    const { clientWidth: width, clientHeight: height } = this.DOM.threeContainer;
    this.threeJS.camera.aspect = width / height;
    this.threeJS.camera.updateProjectionMatrix();
    this.threeJS.renderer.setSize(width, height);
  }

  initTypingAnimation() {
    try {
      const lang = this.DOM.currentLang.dataset.lang;
      if (!translations[lang] || !translations[lang]["hero.typing"]) return;

      if (this.typedInstance) {
        this.typedInstance.destroy();
      }

      this.typedInstance = new Typed(this.DOM.typingElement, {
        strings: translations[lang]["hero.typing"],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        startDelay: 1000,
        loop: true
      });
    } catch (error) {
      console.error("Typed animasyonu başlatılırken hata oluştu:", error);
    }
  }

  initGSAPAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      console.error("GSAP veya ScrollTrigger yüklenmemiş");
      return;
    }

    try {
      gsap.registerPlugin(ScrollTrigger);

      // Tüm section'lar için genel animasyon
      gsap.utils.toArray("section").forEach(section => {
        this.animateSection(section);
      });

      // Özel section animasyonları
      this.animateHeroSection();
      this.animateAboutSection();
      this.animateSkillsSection();
      this.animateProjectsSection();
      this.animateExperienceSection();
      this.animateEducationSection();
      this.animateContactSection();

      // Progress bar animasyonları
      this.animateProgressBars();

    } catch (error) {
      console.error("GSAP animasyonları başlatılırken hata oluştu:", error);
    }
  }

  animateSection(section) {
    const heading = section.querySelector('h2');
    const subtitle = section.querySelector('.subtitle');
    const content = section.querySelectorAll('.section-content > *');

    // Başlık animasyonu
    if (heading) {
      gsap.from(heading, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out"
      });
    }

    // Alt başlık animasyonu
    if (subtitle) {
      gsap.from(subtitle, {
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: 0.2,
        ease: "power2.out"
      });
    }

    // İçerik animasyonu
    if (content.length > 0) {
      gsap.from(content, {
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.4,
        ease: "power2.out"
      });
    }
  }

  animateHeroSection() {
    const hero = document.querySelector('#home');
    if (!hero) return;

    gsap.from(hero.querySelector('h1'), {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.2
    });

    gsap.from(hero.querySelector('p'), {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.4
    });

    gsap.from(hero.querySelectorAll('.btn'), {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.6,
      stagger: 0.2
    });
  }

  // GSAP Animasyonları için güncellenmiş kod
animateAboutSection() {
  const about = document.querySelector('#about');
  if (!about) return;

  // Fotoğraf animasyonu - soldan sağa
  gsap.from(about.querySelector('.about-image-wrapper'), {
    scrollTrigger: {
      trigger: about,
      start: "top 75%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    x: -100,
    duration: 0.8,
    ease: "power2.out"
  });

  // Yazı içeriği animasyonu - sağdan sola
  gsap.from(about.querySelector('.about-content-wrapper'), {
    scrollTrigger: {
      trigger: about,
      start: "top 75%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    x: 100,
    duration: 0.8,
    ease: "power2.out"
  });

  // İçerikteki öğelerin sıralı animasyonu
  gsap.from(about.querySelectorAll('.about-content-wrapper > *'), {
    scrollTrigger: {
      trigger: about,
      start: "top 70%"
    },
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.15,
    delay: 0.3,
    ease: "power2.out"
  });

  // Özgeçmiş butonu için özel animasyon
  gsap.from(about.querySelector('.btn-primary'), {
    scrollTrigger: {
      trigger: about,
      start: "top 60%",
    },
    opacity: 0,
    y: 30,
    duration: 0.6,
    delay: 0.4,
    ease: "back.out"
  });
}

  animateSkillsSection() {
    const skills = document.querySelector('#skills');
    if (!skills) return;

    gsap.from(skills.querySelectorAll('.skill-category'), {
      scrollTrigger: {
        trigger: skills,
        start: "top 70%"
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.3,
      ease: "power2.out"
    });
  }

  animateProjectsSection() {
    const projects = document.querySelector('#projects');
    if (!projects) return;

    gsap.from(projects.querySelectorAll('.project-card'), {
      scrollTrigger: {
        trigger: projects,
        start: "top 70%"
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out"
    });
  }

  animateExperienceSection() {
    const experience = document.querySelector('#experience');
    if (!experience) return;

    gsap.from(experience.querySelectorAll('.timeline-item'), {
      scrollTrigger: {
        trigger: experience,
        start: "top 70%"
      },
      opacity: 0,
      x: -50,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out"
    });
  }

  animateEducationSection() {
    const education = document.querySelector('#education');
    if (!education) return;

    gsap.from(education.querySelectorAll('.timeline-item'), {
      scrollTrigger: {
        trigger: education,
        start: "top 70%"
      },
      opacity: 0,
      x: -50,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out"
    });
  }

  

  animateContactSection() {
    const contact = document.querySelector('#contact');
    if (!contact) return;

    gsap.from(contact.querySelectorAll('.card'), {
      scrollTrigger: {
        trigger: contact,
        start: "top 70%"
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out"
    });
  }

  animateProgressBars() {
    document.querySelectorAll('.progress-bar').forEach(bar => {
      const progress = bar.dataset.progress;
      gsap.to(bar, {
        width: `${progress}%`,
        scrollTrigger: {
          trigger: bar,
          start: "top 90%",
        },
        duration: 1.5,
        ease: "power2.out"
      });
    });
  }

  setupEventListeners() {
    this.setupLanguageSelector();
    this.setupThemeToggle();
    this.setupMobileMenu();
    this.setupContactForm();
    this.setupSmoothScrolling();
    this.initLenis();
  }

  setupLanguageSelector() {
    this.DOM.langSelect?.addEventListener("click", (e) => {
      e.stopPropagation();
      this.DOM.langDropdown.classList.toggle("hidden");
    });

    document.querySelectorAll(".lang-option").forEach(option => {
      option.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setLanguage(option.dataset.lang);
        this.DOM.langDropdown.classList.add("hidden");
      });
    });

    document.addEventListener("click", () => {
      this.DOM.langDropdown?.classList.add("hidden");
    });
  }

  setupThemeToggle() {
    this.DOM.themeToggle?.addEventListener("click", () => {
      const isDark = document.body.classList.contains("dark");
      this.setTheme(isDark ? "light" : "dark");
    });
  }

  setupMobileMenu() {
    this.DOM.mobileMenuBtn?.addEventListener("click", this.toggleMobileMenu.bind(this));
  }

  toggleMobileMenu() {
    if (this.DOM.mobileMenu?.classList.contains("hidden")) {
      this.DOM.mobileMenu.classList.remove("hidden");
      setTimeout(() => this.DOM.mobileMenu.classList.add("active"), 10);
    } else {
      this.DOM.mobileMenu?.classList.remove("active");
      setTimeout(() => this.DOM.mobileMenu?.classList.add("hidden"), 300);
    }
  }

  setupContactForm() {
    this.DOM.contactForm?.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
      };
      console.log("Form submitted:", formData);
      this.DOM.contactForm.reset();
      this.showNotification("Message sent successfully!");
    });
  }

  showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg";
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  }

  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
          });
          this.closeMobileMenu();
        }
      });
    });
  }

  closeMobileMenu() {
    if (this.DOM.mobileMenu && !this.DOM.mobileMenu.classList.contains("hidden")) {
      this.DOM.mobileMenu.classList.remove("active");
      setTimeout(() => this.DOM.mobileMenu.classList.add("hidden"), 300);
    }
  }

  initLenis() {
    if (typeof Lenis === 'undefined') {
      console.error("Lenis yüklenmemiş");
      return;
    }

    try {
      this.lenis = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        lerp: 0.1,
        wheelMultiplier: 1,
        gestureOrientation: 'vertical',
        normalizeWheel: false,
        autoResize: true
      });

      // Sayfa yüklendiğinde en üste git
      this.lenis.scrollTo(0, { immediate: true });

      // ScrollTrigger ile entegrasyon
      this.lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => this.lenis.raf(time * 1000));

      ScrollTrigger.scrollerProxy(document.body, {
        scrollTop(value) {
          return arguments.length ? this.lenis.scrollTo(value, { immediate: true }) : window.scrollY;
        },
        getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.body.style.transform ? "transform" : "fixed"
      });

      ScrollTrigger.defaults({ scroller: document.body });
      ScrollTrigger.refresh();

    } catch (error) {
      console.error("Lenis başlatılırken hata oluştu:", error);
    }
  }
}

// Uygulamayı başlat
document.addEventListener("DOMContentLoaded", () => {
  new PortfolioApp();
});