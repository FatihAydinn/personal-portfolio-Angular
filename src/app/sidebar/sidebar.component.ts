import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
}