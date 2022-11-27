import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafic1',
  templateUrl: './grafic1.component.html',
  styles: [
  ]
})
export class Grafic1Component implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  data1: object = {
    labels: ['Cafes' , 'PasaBocas', 'Enpanadas'],
    datasets: [{ data: [550, 200, 1200]},]
  };

  
  data2: object = {
    labels:  ['Indefinido' , 'Prestaciones', 'Obra labor'],
    datasets: [{ data: [5, 4, 2]},]
  };

  
  data3: object = {
    labels: ['Mesero' , 'Cajero', 'Supervisor'],
    datasets: [{ data: [900000, 2000000, 5000000]},]
  };


  
  data4: object = {
    labels: ['Cafes' , 'PasaBocas', 'Enpanadas'],
    datasets: [{ data: [850, 700, 550]},]
  };  

}
