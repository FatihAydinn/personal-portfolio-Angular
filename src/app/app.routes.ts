import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { V2Component } from './v2/v2.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { V1Component } from './v1/v1.component';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./v2/v2.component').then(m => m.V2Component) 
  },
  { 
    path: 'v1', 
    loadComponent: () => import('./v1/v1.component').then(m => m.V1Component) 
  }
];
