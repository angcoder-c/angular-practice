import { Component, inject, signal } from '@angular/core';
import { map, mergeMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pokemon, PokemonApiResponse, PokemonReference } from '../../../types';

@Component({
  selector: 'app-pokemon-fetch',
  imports: [],
  templateUrl: './pokemon-fetch.component.html',
  styleUrl: './pokemon-fetch.component.css'
})
export class PokemonFetchComponent {
  private http = inject(HttpClient)
  pokemons = signal<Pokemon[]>([])
  
  ngOnInit() {
    this.http.get<PokemonApiResponse>('https://pokeapi.co/api/v2/pokemon/')
    .pipe(
      map((res: PokemonApiResponse) => res.results),
      mergeMap(ref => ref),
      mergeMap(ref => this.http.get<Pokemon>(ref.url))
      /*
      en papralelo
      mergeMap(ref => ref),
      mergeMap(ref => this.http.get<Pokemon>(ref.url))

      o switchMap para mostrar solo el ultimo
      switchMap(ref => this.http.get<Pokemon>(ref.url))

      o concatMap para ejecutar la peticiones secuencialemnete
      concatMap(ref => this.http.get<Pokemon>(ref.url))


      mergeMap((res: PokemonReference[]) =>  forkJoin(
        res.map(pokemon => this.http.get<Pokemon>(pokemon.url)
      )))
      */
    )
    .subscribe({
      next: (response) => {
        // this.pokemons.set(response)
        this.pokemons.update(value => [...value, response])
        console.log(response)
      },
      error: (err)=>{
        console.error('Error ', err)
      },
      complete: () => {
        console.log('done')
      }
    })
  }
}
