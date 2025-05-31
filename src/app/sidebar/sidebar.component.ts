import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  sidebaritems : { name: string; icon: string, val: number } [] = [
      {name: "ABOUT", icon: "person-fill", val: 1 },
      {name: "RESUME", icon: "file-earmark-text", val: 2 },
      {name: "WORK", icon: "code-slash", val: 3 },
      {name: "CONTACT", icon: "envelope", val: 4 },
      {name: "BLOG", icon: "substack", val: 5 }
    ];

    clickedItem: number = 0;

    handleClick(val: number) {
      this.clickedItem = val;
      
      if (this.clickedItem != 1){
        const element = document.getElementById('sidebarbtn1');
        if (element)
          element.style.setProperty('background-color', 'transparent', 'important');
      }
    }
    
    // @Output() hideRequested = new EventEmitter<void>();
    constructor(private sharedService: SharedService) {}

    onButtonClick() {
      this.sharedService.requestHide();
      // this.sharedService.emit();
    }
}