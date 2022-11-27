import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  constructor() { }

  progreso: number = 10;
  progreso2: number = 20;

  ngOnInit(): void {
  }

  get getPorcentaje(){
    return `${this.progreso}%`
  }

  get getPorcentaje2(){
    return `${this.progreso2}%`
  }

}
