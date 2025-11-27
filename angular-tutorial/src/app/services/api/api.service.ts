import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PokemonApiResponse, Pokemon, PokemonReference } from '../../types';
import { forkJoin, map, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient)
  baseURL = 'https://pokeapi.co/api/v2/pokemon/'
  getPokemons() {
    return this.http.get<PokemonApiResponse>(this.baseURL, { observe: 'response' })
    .pipe(
      switchMap(res => {
        if (!res.body?.results) {
          return of([])
        }

        const pokemonRequests = res.body.results.map(poke => 
          this.http.get<Pokemon>(poke.url)
        )

        return forkJoin(pokemonRequests)
      })
    )
  }
}
