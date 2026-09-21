
const typedElement = document.getElementById('typed');
if (typedElement) {
  const words = ['هندسة البرمجيات','تقنية المعلومات', 'الأمن السيبراني', 'تحليل الأنظمة', 'إدارة المخاطر'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      typedElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 80 : 120;

    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }
  type();
}


const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('active');
  });
}, { threshold: 0.15 });

reveals.forEach(el => revealObserver.observe(el));


const counters = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = +counter.dataset.target;
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;

      const updateCounter = () => {
        current += step;
        if (current < target) {
          counter.textContent = Math.ceil(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };
      updateCounter();
      counterObserver.unobserve(counter);
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));


const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const progress = bar.dataset.progress;
      setTimeout(() => { bar.style.width = progress; }, 200);
      skillObserver.unobserve(bar);
    }
  });
}, { threshold: 0.3 });

skillBars.forEach(bar => skillObserver.observe(bar));


const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}


const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      e.preventDefault();
      alert('الرجاء ملء جميع الحقول المطلوبة');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      e.preventDefault();
      alert('الرجاء إدخال بريد إلكتروني صحيح');
      return;
    }

    setTimeout(() => {
      alert('شكراً لتواصلك! سيتم فتح بريدك الإلكتروني لإرسال الرسالة.');
    }, 100);
  });
}


window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroBg = document.querySelector('.hero-bg-grid');
  if (heroBg) {
    heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});


const year = new Date().getFullYear();
document.querySelectorAll('.footer-bottom p').forEach(p => {
  if (p.textContent.includes('2025')) {
    p.textContent = p.textContent.replace('2025', year);
  }
});


console.log(
  '%c D_RCT %c DRS © ' + year + ' ',
  'background: linear-gradient(135deg, #7b2ff7, #00d9ff); color: #fff; padding: 6px 12px; border-radius: 6px 0 0 6px; font-weight: 900; font-size: 14px; letter-spacing: 2px;',
  'background: linear-gradient(135deg, #f72585, #7b2ff7); color: #fff; padding: 6px 12px; border-radius: 0 6px 6px 0; font-weight: 900; font-size: 14px; letter-spacing: 2px;'
);

console.log(
  '%c🔐 Digital Risk & Cyber Tech — D_RCT',
  'color: #00d9ff; font-size: 12px; font-weight: bold;'
);