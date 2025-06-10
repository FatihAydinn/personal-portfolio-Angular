import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedDataService } from '../shared-data.service';

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
  constructor(private http: HttpClient, private sharedData: SharedDataService) {}

  ngOnInit(): void {
    const username = 'FatihAydinn'; 
    const url = `https://api.github.com/users/${username}/repos?sort=created&direction=desc`;

    this.http.get<any[]>(url).subscribe(data => {
      this.repositories = data.slice(0, 4); 
      this.sharedData.setArray(this.repositories);
    });
  }

  //ngOnInit() {
  //}
}
