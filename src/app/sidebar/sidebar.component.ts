import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  sidebaritems : { name: string; icon: string } [] = [
      {name: "ABOUT", icon: "person-fill" },
      {name: "RESUME", icon: "file-earmark-text" },
      {name: "WORK", icon: "code-slash" },
      {name: "CONTACT", icon: "envelope" },
      {name: "BLOG", icon: "substack" }
    ];
}
