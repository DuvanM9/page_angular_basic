import { Component, OnInit } from '@angular/core';
import { filter, interval, map, Observable, retry, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {


  intervalObservable: Subscription;

  constructor() {


    // this.retornaObservable().pipe(
    //   // importante para reintentar si no se envian valores lo hace infinitamente
    //   retry()
    // ).subscribe(
    //   valor => console.log('subs: ', valor),
    //   error => console.warn('Error: ', error),
    //   () => console.info('observable terminado')
    // )

    this.intervalObservable =  this.retornaIntervalo().subscribe(console.log)
  }

  ngOnInit(): void {
  }

  // cuando el componente se destruya el observable se desuscribe
  ngOnDestroy(): void {
    this.intervalObservable.unsubscribe();
    
  }

  retornaIntervalo(): Observable<number> {
    return  interval(500)
    .pipe(
      take(10),
      map(valor => valor +1),
      filter(valor => valor % 2 === 0? true: false )
    )
  }

  retornaObservable(): Observable<number> {
    let i = -1;
    const obs$ = new Observable<number>(observer => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i)

        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 2) {
          observer.error('i llego a 2')
        }

      }, 1000)
    })

    return obs$;

  }

}
