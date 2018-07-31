
import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Http, Response } from "@angular/http";

import 'rxjs/add/operator/map';

@Component({
  selector: 'cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent {
  title = 'Cyberjaya Weather Webapp';

  private apiUrl = 'https://api.openweathermap.org/data/2.5/group?id=6697380&units=metric&appid=110ff02ed24ccd819801248373c3b208';
  //private apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=110ff02ed24ccd819801248373c3b208';
  
  data: any = {};

  constructor(private http: Http) {
    console.log('Sad ce data ...');
    this.getTest();
    this.getData();
  }

  getData() {
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json())
  }

  getTest() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }
}

