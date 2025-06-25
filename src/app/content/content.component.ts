import { Component, ViewChild, ViewChildren, QueryList, OnDestroy, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';
import { SharedDataService } from '../shared-data.service';
declare var bootstrap: any;

@Component({
  selector: 'app-content',
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements AfterViewInit, OnDestroy, OnInit {

  array: any[] = [];
  @ViewChildren('target') targetRefs!: QueryList<ElementRef>;

  experienceitems : { title: string, description: string, technologies: string } [] = [
    {title: "Product Tracking Panel", description: "Tracks the entry date, part count, and invoice number of products received from suppliers. Instantly transfers weight data from a physical scale to the web page.", technologies: "C# Form, .NET Core"},
    {title: "RFID Tracking System", description: "Each product is tagged with RFID labels. The system logs entry dates, determines shelf location via antenna signals, and detects potential theft events. All data is accessible through a web interface.", technologies: "RFID, API, C# Form, .NET Core, MSSQL"},
    {title: "Gmail API Integration", description: "Connects to Gmail using Google OAuth 2.0 to access incoming emails. Automatically downloads and forwards .pdf attachments from partner companies.", technologies: "Google OAuth 2.0, Gmail API, .NET Core"},
    {title: "Azure Communication Project", description: "Web-based project that enables secure video and voice calls between multiple users using Azure Communication Services.", technologies: "Azure Communication Services, JavaScript, jQuery"},
    {title: "Employee Management System", description: "Calculates employee working hours, salaries, payroll, and overtime payments based on tax regulations. Built with an N-Tier architecture.", technologies: ".NET Core, N-Tier Architecture, JavaScript, jQuery, MSSQL"},
    {title: "Microsoft OAuth Integration", description: "Handles user registration and login through Microsoft Entra. Only allows access to users with accounts under a specific domain.", technologies: "Microsoft Entra, Azure Active Directory"},
    {title: "E-Commerce API Integration System", description: "Combines multiple e-commerce platforms (Trendyol, N11, Pazarama) into a unified system. Streamlines product uploads, updates, deletions, and order tracking with a single operation.", technologies: ".NET Core, Web API"}
  ]

  educationitems : { title: string, program: string, description: string, dates: string } [] = [
    {title: "Kastamonu University", program: "Associate Degree, Computer Programming", description: "Studied Computer Programming with a focus on software fundamentals and development. Gained hands-on experience in C, C#, and ASP.NET, building a strong foundation in web technologies and backend systems.", dates: "September 2019 - June 2021"},
    {title: "Infotech Academy", program: "Software Development Expertise-MCSD", description: "Completed a Software Expertise course focused on full-stack development, including C# OOP, ASP.NET Core, Web API, and Microservices, with hands-on training in both Code First and DB First approaches using Entity Framework.", dates: "November 2022 - May 2023"},
    {title: "Techcareer.net", program: "Bootcamp", description: "The bootcamp provided training in ASP.NET Core MVC for building web applications. It included practice with databases and using the MVC model. A project was developed at the end and presented to a senior instructor.", dates: "August 2023 - September 2023"}
  ]

  stack: {title: string, skill: string[]} [] = [
    {title: "Languages & Fundamentals", skill: ["C#","JavaScript","TypeScript", "OOP"]},
    {title: "Frameworks & Architectures", skill: ["WinForms", "MVC", "N-Layer Architecture", "Onion Architecture", "Microservices"]},
    {title: "Backend & API Development", skill: ["ASP.NET Core", "Entity Framework", "Identity"]},
    {title: "Frontend & UI", skill: ["HTML", "CSS", "Angular", "jQuery", "Bootstrap"]},
    {title: "Principles & Patterns", skill: ["SOLID", "Dependency Injection (DI)", "Repository Pattern"]},
    {title: "Databases & Data Management", skill: ["SQL Server", "MongoDB", "Redis"]},
    {title: "Integrations & Specializations", skill: ["RFID Integration", "E-commerce API Integrations"]},
    {title: "Testing ", skill: ["Postman", "Swagger"]},
    {title: "Version Control", skill: ["Git", "GitHub"]},
    {title: "Soft Skills", skill: ["Problem Solving", "Self-Discipline", "Teamwork & Collaboration", "Continuous Learning", "Self-motivated"]},
    {title: "Language Proficiency", skill: ["Turkish – Native" , "English – Upper-Intermediate"]},
  ]

  certificates: {title: string, company: string, description: string, imgurl: string, link: string } [] = [
    {title: "Backend Development with .Net Core", company: "Microsoft", description: "Focused on backend development with .NET Core, the course covered key principles for building robust and maintainable systems. It refined my abilities in creating RESTful APIs, managing data effectively, and implementing secure middleware pipelines.", imgurl: "/certificates/certf1.jpg", link: "www.coursera.org/account/accomplishments/records/FJ16052QVIQU"},
    {title: "Software Specialization - MCSD", company: "Infotech Academy", description: "This program offered comprehensive training in modern software development practices, including backend and frontend technologies, project structuring, and essential programming concepts. It equipped me with practical skills to develop scalable and maintainable applications.", imgurl: "/certificates/certf2.jpg", link: "https://www.linkedin.com/feed/update/urn:li:activity:7087064046780215296/"},
    {title: "ASP.Net MVC Bootcamp", company: "Techcareer", description: "Gaining hands-on experience in ASP.NET MVC, the training offered practical insight into web application development using the MVC pattern. It strengthened my understanding of routing, controller actions, and structured application design within the .NET framework.", imgurl: "/certificates/certf3.png", link: "https://certificates.techcareer.net/tr/verify/52061439390497"}
  ]

  private subscription!: Subscription;
  private currentIndex = 0;
  constructor(private sharedService: SharedService, private sharedData: SharedDataService) {}

  ngAfterViewInit() {
    this.subscription = this.sharedService.hideTarget$.subscribe((newIndex: number) => {
      if (newIndex === this.currentIndex) {
        return;
      }
      
      const targetArray = this.targetRefs.toArray();
      const currentPage = targetArray[this.currentIndex].nativeElement;
      const nextPage = targetArray[newIndex].nativeElement;

      const currentMyCard = currentPage.querySelector('.mycard');
      const nextMyCard = nextPage.querySelector('.mycard');

      if (currentMyCard) {
        currentMyCard.classList.remove('shadow-visible');
      }

      setTimeout(() => {
        
        currentPage.classList.remove('active');
        nextPage.classList.add('active');
        this.currentIndex = newIndex;

        setTimeout(() => {
          
          setTimeout(() => {
            
            if (nextMyCard) {
              nextMyCard.classList.add('shadow-visible');
            }

          }, 250);

        }, 250); 

      }, 350); 

    });
  }

    // ngAfterViewInit() {
    //   this.subscription = this.sharedService.hideTarget$.subscribe((val: number) => {
    //     const targetArray = this.targetRefs.toArray();

    //     for (let i = 0; i < targetArray.length; i++) {
    //       targetArray[i].nativeElement.style.display = 'none';
    //     }
    //     targetArray[val].nativeElement.style.display = 'block';
    //   });
    // }

    ngOnInit() {
      this.sharedData.array$.subscribe(value => {
        this.array = value;
      });
    }
    
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }

    clickedrepo (repo: any, id: number): void{
      window.open(this.array[id].clone_url, '_blank');
    }

    certfImg(imgmUrl: string) {
      const modalcontent = document.getElementById('modalbody');
      const certModalElement = document.getElementById('certModal');
      if (modalcontent && certModalElement) {
        modalcontent.innerHTML = `<img src="${imgmUrl}" class="img-fluid" style="height: 25rem; width: 100%; border-radius: 10px;">`;
        const modal = new (window as any).bootstrap.Modal(certModalElement);
        modal.show();
      }
    }

    // certfImg(){
    //     const modalElement = document.getElementById('certModal');
    //     console.log(modalElement);
    //     const modal = new bootstrap.Modal(modalElement);
    //     modal.show();
    // }
}
