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
      {name: "ABOUT", icon: "person-fill", val: 0 },
      {name: "RESUME", icon: "file-earmark-text", val: 1 },
      {name: "WORK", icon: "code-slash", val: 2 },
      {name: "CONTACT", icon: "envelope", val: 3 },
      {name: "BLOG", icon: "substack", val: 4 }
    ];

    clickedItem: number = 0;

    handleClick(val: number) {
      this.clickedItem = val;
      
      if (this.clickedItem != 0){
        const element = document.getElementById('sidebarbtn0');
        if (element)
          element.style.setProperty('background-color', 'transparent', 'important');
      }
    }
    
    constructor(private sharedService: SharedService) {}

    onButtonClick() {
      this.sharedService.requestHide(this.clickedItem);
    }
}