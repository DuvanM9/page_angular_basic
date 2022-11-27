import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  this.btnClass = `btn ${this.btnClass}`
  }

  
  @Input() porcentaje: number = 10;
  @Input() btnClass: string = 'btn-primary'

  @Output() valorPorcentaje: EventEmitter<number> = new EventEmitter();


  get getPorcentaje(){
    return `${this.porcentaje}%`
  }

  cambiarValor(valor: number): any{

    if(this.porcentaje >= 100 && valor >= 0){
      this.valorPorcentaje.emit(100)
      return this.porcentaje = 100;
    }

    
    if(this.porcentaje <= 0 && valor < 0){
      this.valorPorcentaje.emit(0)
      return this.porcentaje = 0;
    }

    this.porcentaje = this.porcentaje + valor;
    this.valorPorcentaje.emit(this.porcentaje);
  }

  onChange(valor: number){

    if(valor >= 100){
      this.porcentaje = 100;
    }else if(valor <= 0){
      this.porcentaje = 0;
    }else{
      this.porcentaje = valor;
    }

    this.valorPorcentaje.emit(valor);
  }
}
