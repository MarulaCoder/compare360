import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  provinces = [
    "Gauteng",
    "North-West",
    "Limpopo",
    "Mpumalanga",
    "Free State",
    "KwaZulu Natal",
    "Northern Cape",
    "Eastern Cape",
    "Western Cape"
  ]

  findSchemes()
  {

  }
}
