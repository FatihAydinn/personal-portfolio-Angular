import { Component, ViewChild, ViewChildren, QueryList, OnDestroy, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-content',
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements AfterViewInit, OnDestroy {

  @ViewChildren('target') targetRefs!: QueryList<ElementRef>;

  private subscription!: Subscription;
  constructor(private sharedService: SharedService) {}

  ngAfterViewInit() {
    this.subscription = this.sharedService.hideTarget$.subscribe((val: number) => {
      const targetArray = this.targetRefs.toArray();
      
      for (let i = 0; i < targetArray.length; i++) {
        targetArray[i].nativeElement.style.display = 'none';
      }
      targetArray[val].nativeElement.style.display = 'block';

    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
