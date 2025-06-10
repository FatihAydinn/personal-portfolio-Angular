import { Component, ViewChild, ViewChildren, QueryList, OnDestroy, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';
import { SharedDataService } from '../shared-data.service';

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

  private subscription!: Subscription;
  constructor(private sharedService: SharedService, private sharedData: SharedDataService) {}
  
    ngAfterViewInit() {
      this.subscription = this.sharedService.hideTarget$.subscribe((val: number) => {
        const targetArray = this.targetRefs.toArray();

        for (let i = 0; i < targetArray.length; i++) {
          targetArray[i].nativeElement.style.display = 'none';
        }
        targetArray[val].nativeElement.style.display = 'block';
      });
    }

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
}
