import { map, of } from "rxjs";

// observable
const numbers = of(1,2,3,4)

// operators for observable values
const doubleNumbers = numbers.pipe(
    map(x => x * 2)
)

// suscripcion para recibir el valor
doubleNumbers.subscribe({
    next: value => console.log(value),
    error: err => console.error('ERROR: ', err),
    complete: () => console.log('done')
})