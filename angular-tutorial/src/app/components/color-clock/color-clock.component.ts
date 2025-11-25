import { compileClassDebugInfo } from '@angular/compiler';
import { Component, computed, effect, inject, Injector, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-color-clock',
  imports: [
    FormsModule
  ],
  templateUrl: './color-clock.component.html',
  styleUrl: './color-clock.component.css'
})
export class ColorClockComponent {
  private injector = inject(Injector)
  color = signal<string>('#000000')
  counterSelector = signal<boolean>(false)
  counter = signal<number>(0)
  time = signal<string>(new Date().toLocaleTimeString())
  timeVars = computed<{ 
    hours:number, 
    minutes:number, 
    seconds:number, 
    status: string 
  }>(()=>{
    const [currentTime, status] = this.time().split(' ')
    const [hours, minutes, seconds] = currentTime.split(':')
    const cleanhours = (Number.parseInt(hours) + this.counter()) % 12
    return { 
      hours: cleanhours == 0 ? 12 : cleanhours, 
      minutes: Number.parseInt(minutes), 
      seconds: Number.parseInt(seconds),
      status
    }
  })


  constructor() {
    effect(onCleanup=>{
      const id = setInterval(()=>{
        this.time.set(new Date().toLocaleTimeString())
      }, 1000)

      onCleanup(()=> clearInterval(id))
    }, { injector: this.injector })
  }

  plus(){
    this.counter.update(value=>{
      return value + 1*(this.counterSelector() ? 2 : 1)
    })
  }

  set counterSelectorValue(value: boolean) {
    this.counterSelector.set(value);
  }

  set colorPicker(value: string) {
    this.color.set(value);
  }
}
