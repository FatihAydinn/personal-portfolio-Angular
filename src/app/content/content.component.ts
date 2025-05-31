import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-content',
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  // @ViewChild('myTarget') targetElement!: ElementRef;

  @ViewChild('target') targetRef!: ElementRef;
  private subscription!: Subscription;
  constructor(private sharedService: SharedService) {}

  ngAfterViewInit() {
    this.subscription = this.sharedService.hideTarget$.subscribe(() => {
      this.targetRef.nativeElement.style.display = 'none';
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  //idVisible: boolean = true;
//
  //hideTarget() {
  //  this.idVisible = !this.idVisible;
  //}
}
