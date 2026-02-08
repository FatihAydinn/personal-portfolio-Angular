import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedDataService } from '../shared-data.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-githubapi',
  imports: [],
  templateUrl: './githubapi.component.html',
  styleUrl: './githubapi.component.css'
})
export class GithubapiComponent implements OnInit {
  repositories: any = [];

  private apiUrl = 'https://api.github.com/users/<kullanici-adin>/repos?sort=created&direction=desc';

  array = [0,1,2,3,4,"5"];
  constructor(
  private http: HttpClient, 
  private sharedData: SharedDataService, 
  @Inject(PLATFORM_ID) private platformId: Object
) {}
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const url = `https://api.github.com/users/FatihAydinn/repos?sort=updated&direction=desc`;
      this.http.get<any[]>(url).subscribe(data => {
        this.repositories = data.slice(0, 6); 
        this.sharedData.setArray(this.repositories);
      });
    }
  }

  //ngOnInit() {
  //}
}
