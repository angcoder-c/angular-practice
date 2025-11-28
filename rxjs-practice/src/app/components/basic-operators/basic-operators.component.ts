import { Component, numberAttribute } from '@angular/core';
import { delay, delayWhen, filter, map, merge, of, single, Subscription, tap, timer } from 'rxjs';

@Component({
  selector: 'app-basic-operators',
  imports: [],
  templateUrl: './basic-operators.component.html',
  styleUrl: './basic-operators.component.css'
})
export class BasicOperatorsComponent {
  // observable
  private data = of(1,2,3,4)
  private other = of(5,6,7)

  subscribes: Subscription[] = []

  ngOnInit() {
    this.subscribes.push(
      this.data
      .pipe(
        //delay sirve para ponerle una espera a las emisiones
        delay(1000),
        // delayWhen(()=>timer(1000)),
        // mapear los valores emitidos por un observable
        map((num: number) => num+1),
        // espejo del operador anterior, útil para debugear
        tap((num: number) => console.log('EMISIONES CON DELAY')),
        tap((num: number) => console.log(num))
      )
      .subscribe()
    )

    this.subscribes.push(
      //unir de forma asincrona dos observables
      merge(this.data, this.other).pipe(
        tap((res: number) => console.log('MERGE')),
        tap((res: number) => console.log(res))
      ).subscribe()
    )

    this.subscribes.push(
      this.data.pipe(
        filter((num: number) => num % 2 === 0),
        tap((res: number) => console.log('FILTER')),
        tap((res: number) => console.log(res))
      ).subscribe()
    )

    this.subscribes.push(
      this.data.pipe(
        single((num: number) => num === 3),
        tap((res: number) => console.log('SINGLE')),
        tap((res: number) => console.log(res))
      ).subscribe()
    )
  }

  ngOnDestroy () {
    console.log('clean')
    this.subscribes.forEach(sub => sub.unsubscribe())
  }
}
