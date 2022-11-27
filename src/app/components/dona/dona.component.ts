import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {

  
  @Input() title: string = "Default title";

  @Input() data: any = {
    labels: ["Default1", "Default2", "Default1"],
    datasets: [{ data: [200, 200 , 100]},]
  };


  constructor() { }
  
  ngOnInit(): void {

  }

  

}
