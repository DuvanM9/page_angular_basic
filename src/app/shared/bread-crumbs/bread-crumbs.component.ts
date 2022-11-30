import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styles: [
  ]
})
export class BreadCrumbsComponent implements OnInit {

  title: string = "partial title"
  subGetTitle: Subscription;

  constructor(private _router: Router) {
    this.subGetTitle = this.getTitleForRoputes().subscribe(({ titulo }) => {
      this.title = titulo;
      document.title = `Admin pro - ${titulo}`;
    })
  }


  getTitleForRoputes() {
    return this._router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: any) => event.snapshot.firstChild === null),
      map((event: any) => event.snapshot.data)
    )
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subGetTitle.unsubscribe();
  }

}
