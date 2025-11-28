import { Component } from '@angular/core';
import { interval, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-takeuntil-operator',
  imports: [],
  templateUrl: './takeuntil-operator.component.html',
  styleUrl: './takeuntil-operator.component.css'
})
export class TakeuntilOperatorComponent {
  private stop$ = new Subject<string>()
  counter = 0

  start() {
    this.stop$.next('')
    interval(50)
    .pipe(
      takeUntil(this.stop$),
      tap((num:number)=>this.counter = num)
    ).subscribe()
  }

  stop(){
    this.stop$.next('')
  }

  reset() {
    this.stop$.next('')
    this.counter = 0
  }
}
