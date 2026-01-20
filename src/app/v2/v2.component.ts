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
  private hamburger: HTMLElement | null = null;
  private mobileSidebar: HTMLElement | null = null;
  private observer: IntersectionObserver | null = null;

  ngAfterViewInit() {
  }

  ngOnDestroy() {
  }

 @HostListener('window:scroll')
  private updateActiveSection() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.navbar-link');
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
      const sectionHeight = section.clientHeight;
      
      if (window.pageYOffset >= (sectionTop - 100)) {
        current = section.id;
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  }
}