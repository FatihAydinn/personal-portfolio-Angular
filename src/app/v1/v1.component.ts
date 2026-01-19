import { Component, ViewEncapsulation  } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { GithubapiComponent } from '../githubapi/githubapi.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-v1',
  imports: [SidebarComponent, ContentComponent, GithubapiComponent],
  templateUrl: './v1.component.html',
  styleUrl: './v1.component.css',
  encapsulation: ViewEncapsulation.None
})
export class V1Component {

}
