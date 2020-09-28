import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-found-page',
  templateUrl: './found-page.component.html',
  styleUrls: ['./found-page.component.css']
})
export class FoundPageComponent implements OnInit {

  constructor() { }

  page: string = "Finder's Page "

  latitude: number = 39.107705;
  longitude: number = -94.582979;


  ngOnInit(): void {
  }

}
