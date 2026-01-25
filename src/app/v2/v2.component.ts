import { Component, ViewChild, ViewEncapsulation, OnInit, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { GithubapiComponent } from '../githubapi/githubapi.component';
import { SharedDataService } from '../shared-data.service';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-v2',
  standalone: true,
  imports: [CommonModule, GithubapiComponent],
  templateUrl: './v2.component.html',
  styleUrl: './v2.component.css',
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false
})
export class V2Component implements AfterViewInit, OnDestroy {
  @ViewChild(GithubapiComponent) githubApi!: GithubapiComponent;
  get githubRepos() {
    return this.githubApi?.repositories || [];
  }
  experienceitems : { title: string, description: string, technologies: string[] } [] = [
    {title: "Product Tracking Panel", description: "Tracks the entry date, part count, and invoice number of products received from suppliers. Instantly transfers weight data from a physical scale to the web page.", technologies: ["C# Form", ".NET Core"]},
    {title: "RFID Tracking System", description: "Each product is tagged with RFID labels. The system logs entry dates, determines shelf location via antenna signals, and detects potential theft events. All data is accessible through a web interface.", technologies: ["RFID", "API", "C# Form", ".NET Core", "MSSQL"]},
    {title: "Gmail API Integration", description: "Connects to Gmail using Google OAuth 2.0 to access incoming emails. Automatically downloads and forwards .pdf attachments from partner companies.", technologies: ["Google OAuth 2.0", "Gmail API", ".NET Core"]},
    {title: "Azure Communication Project", description: "Web-based project that enables secure video and voice calls between multiple users using Azure Communication Services.", technologies: ["Azure Communication Services", "JavaScript", "jQuery"]},
    {title: "Employee Management System", description: "Calculates employee working hours, salaries, payroll, and overtime payments based on tax regulations. Built with an N-Tier architecture.", technologies: [".NET Core", "N-Tier Architecture", "JavaScript", "jQuery", "MSSQL"]},
    {title: "Microsoft OAuth Integration", description: "Handles user registration and login through Microsoft Entra. Only allows access to users with accounts under a specific domain.", technologies: ["Microsoft Entra", "Azure Active Directory"]},
    {title: "E-Commerce API Integration System", description: "Combines multiple e-commerce platforms (Trendyol, N11, Pazarama) into a unified system. Streamlines product uploads, updates, deletions, and order tracking with a single operation.", technologies: [".NET Core", "Web API"]}
  ]

  educationitems : { title: string, program: string, description: string, dates: string } [] = [
    {title: "Anadolu University", program: "Bachelor's Degree, Management Information Systems", description: "Currently pursuing a Bachelor's Degree in Management Information Systems with a focus on integrating business processes and information technologies. Developed proficiency in database management, system analysis, and enterprise software solutions. Gained practical experience in SQL, project management, and decision support systems, building a strong foundation in both managerial and technical domains.", dates: "September 2025 - Present"},
    {title: "Kastamonu University", program: "Associate Degree, Computer Programming", description: "Studied Computer Programming with a focus on software fundamentals and development. Gained hands-on experience in C, C#, and ASP.NET, building a strong foundation in web technologies and backend systems.", dates: "September 2019 - June 2021"}
    // {title: "Infotech Academy", program: "Software Development Expertise-MCSD", description: "Completed a Software Expertise course focused on full-stack development, including C# OOP, ASP.NET Core, Web API, and Microservices, with hands-on training in both Code First and DB First approaches using Entity Framework.", dates: "November 2022 - May 2023"},
    // {title: "Techcareer.net", program: "Bootcamp", description: "The bootcamp provided training in ASP.NET Core MVC for building web applications. It included practice with databases and using the MVC model. A project was developed at the end and presented to a senior instructor.", dates: "August 2023 - September 2023"}
  ]

  stack: {title: string, skill: string[]} [] = [
    {title: "Backend & API Development", skill: ["ASP.NET Core", "Entity Framework", "Identity", "ADO.Net"]},
    {title: "Frameworks & Architectures", skill: ["Onion Architecture", "N-Layer Architecture", "WinForms", "MVC"]},
    {title: "Databases & Data Management", skill: ["MSSQL Server", "MongoDB", "Redis"]},
    {title: "Languages & Fundamentals", skill: ["C#","JavaScript","TypeScript", "OOP"]},
    {title: "Principles & Patterns", skill: ["SOLID", "Dependency Injection (DI)", "Repository Pattern", "Open-closed Principle"]},
    {title: "Frontend & UI", skill: ["HTML", "CSS", "Angular", "jQuery", "Bootstrap", "UX/UI"]},
    {title: "Integrations & Specializations", skill: ["RFID Solutions", "E-commerce API Integrations"]},
    {title: "Testing ", skill: ["Postman", "Swagger", "xUnit & Integration Test"]},
    {title: "Version Control", skill: ["Git", "GitHub"]},
    {title: "Soft Skills", skill: ["Problem Solving", "Self-Discipline", "Teamwork & Collaboration", "Continuous Learning", "Self-motivated"]},
    {title: "Language Proficiency", skill: ["Turkish – Native" , "English – Upper-Intermediate"]},
  ]

  certificates: {title: string, company: string, description: string, imgurl: string, link: string } [] = [
    {title: "Backend Development with .Net Core", company: "Microsoft", description: "Focused on backend development with .NET Core, the course covered key principles for building robust and maintainable systems. It refined my abilities in creating RESTful APIs, managing data effectively, and implementing secure middleware pipelines.", imgurl: "/certificates/certf1.jpg", link: "https://www.coursera.org/account/accomplishments/records/FJ16052QVIQU"},
    {title: "Software Specialization - MCSD", company: "Infotech Academy", description: "This program offered comprehensive training in modern software development practices, including backend and frontend technologies, project structuring, and essential programming concepts. It equipped me with practical skills to develop scalable and maintainable applications.", imgurl: "/certificates/certf2.jpg", link: "https://www.linkedin.com/feed/update/urn:li:activity:7087064046780215296/"},
    {title: "ASP.Net MVC Bootcamp", company: "Techcareer", description: "Gaining hands-on experience in ASP.NET MVC, the training offered practical insight into web application development using the MVC pattern. It strengthened my understanding of routing, controller actions, and structured application design within the .NET framework.", imgurl: "/certificates/certf3.png", link: "https://certificates.techcareer.net/tr/verify/52061439390497"}
  ]

  array: any[] = [];

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
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // 1. Önce smooth dene
          try {
            targetElement.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          } 
          // 2. Hata alırsa polyfill ile veya instant yap
          catch (error) {
            // Polyfill yoksa direkt geç
            targetElement.scrollIntoView({ behavior: 'auto', block: 'start' });
          }
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