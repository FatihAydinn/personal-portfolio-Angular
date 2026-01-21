import { Component, ViewEncapsulation, OnInit, AfterViewInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-v2',
  imports: [],
  templateUrl: './v2.component.html',
  styleUrl: './v2.component.css',
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false
})
export class V2Component implements AfterViewInit, OnDestroy {
  hamburger: any;
  mobileSidebar: any;
  navbarLinks: any;
  sections: any;
  navItems: any;
  sidebarItems: any;
  copyEmailBtn: any;
  copiedMessage: any;
  certificateModal: any;
  modalImage: any;
  modalClose: any;
  certificateImages: any;
  observer: any;

  // private hamburger: HTMLElement | null = null;
  // private mobileSidebar: HTMLElement | null = null;
  // private observer: IntersectionObserver | null = null;

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.initAllFunctions();
    }, 100);    
  }

  initAllFunctions() {
    // Tüm JS kodlarını bu fonksiyonda topla
    
    // 1. Mobile sidebar toggle - JS KODU
    this.hamburger = document.querySelector('.hamburger');
    this.mobileSidebar = document.querySelector('.mobile-sidebar');
    this.navbarLinks = document.querySelector('.navbar-links');

    if (this.hamburger) {
      this.hamburger.addEventListener('click', () => {
        this.hamburger.classList.toggle('active');
        this.mobileSidebar.classList.toggle('active');
      });
    }

    // 2. Close mobile sidebar when clicking a link - JS KODU
    document.querySelectorAll('.sidebar-link').forEach((link: any) => {
      link.addEventListener('click', () => {
        if (this.hamburger) this.hamburger.classList.remove('active');
        if (this.mobileSidebar) this.mobileSidebar.classList.remove('active');
      });
    });

    // 3. Smooth scroll for navigation links - JS KODU
    document.querySelectorAll('a[href^="#"]').forEach((anchor: any) => {
      anchor.addEventListener('click', (e: Event) => {  // arrow function kullan
        e.preventDefault();
        const targetId = anchor.getAttribute('href');  // 'anchor' değişkenini kullan
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // 4. Highlight active section in navigation - JS KODU
    this.sections = document.querySelectorAll('section');
    this.navItems = document.querySelectorAll('.navbar-link');
    this.sidebarItems = document.querySelectorAll('.sidebar-link');

    // Scroll event'i zaten @HostListener ile dinlenecek

    // 5. Scroll animation - JS KODU
    const observerOptions = {
      threshold: 0.1
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    if (this.sections) {
      this.sections.forEach((section: any) => {
        this.observer.observe(section);
      });
    }

    // 6. Copy email to clipboard - JS KODU
    this.copyEmailBtn = document.getElementById('copy-email');
    this.copiedMessage = document.getElementById('copied-message');

    if (this.copyEmailBtn) {
      this.copyEmailBtn.addEventListener('click', (e: Event) => {
        e.preventDefault();
        navigator.clipboard.writeText('hello@codecanvas.dev').then(() => {
          if (this.copiedMessage) {
            this.copiedMessage.classList.add('show');
            setTimeout(() => {
              this.copiedMessage.classList.remove('show');
            }, 2000);
          }
        });
      });
    }

    // 7. Certificate modal functionality - JS KODU
    this.certificateModal = document.getElementById('certificate-modal');
    this.modalImage = document.getElementById('modal-image');
    this.modalClose = document.getElementById('modal-close');
    this.certificateImages = document.querySelectorAll('.certificate-image');

    if (this.certificateImages) {
      this.certificateImages.forEach((img: any) => {
        img.addEventListener('click', () => {
          if (this.modalImage) {
            this.modalImage.src = img.src;
            this.modalImage.alt = img.alt;
          }
          if (this.certificateModal) {
            this.certificateModal.classList.add('active');
            document.body.style.overflow = 'hidden';
          }
        });
      });
    }

    if (this.modalClose) {
      this.modalClose.addEventListener('click', () => {
        if (this.certificateModal) {
          this.certificateModal.classList.remove('active');
          document.body.style.overflow = 'auto';
        }
      });
    }

    if (this.certificateModal) {
      this.certificateModal.addEventListener('click', (e: Event) => {
        if (e.target === this.certificateModal) {
          this.certificateModal.classList.remove('active');
          document.body.style.overflow = 'auto';
        }
      });
    }

    // 8. Initialize Feather Icons - JS KODU
    // Angular zaten DOMContentLoaded gibi çalıştığı için doğrudan çalıştır
    if (typeof (window as any).feather !== 'undefined') {
      (window as any).feather.replace();
    }
  }

  // 9. Scroll event için HostListener - JS fonksiyonunu çağır
  @HostListener('window:scroll')
  onWindowScroll() {
    this.updateActiveSection(); // JS fonksiyonunu çağır
  }

  // 10. updateActiveSection fonksiyonu - JS KODU
  updateActiveSection() {
    let current = '';
    
    if (this.sections) {
      this.sections.forEach((section: any) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= (sectionTop - 100)) {
          current = section.getAttribute('id');
        }
      });
    }

    if (this.navItems) {
      this.navItems.forEach((item: any) => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
          item.classList.add('active');
        }
      });
    }

    if (this.sidebarItems) {
      this.sidebarItems.forEach((item: any) => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
          item.style.backgroundColor = 'rgba(105, 210, 2, 0.1)';
          item.style.color = 'var(--accent)';
        } else {
          item.style.backgroundColor = '';
          item.style.color = '';
        }
      });
    }
  }

  // 11. Component yok edilirken observer'ı temizle
  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}