import { Component, inject, signal } from '@angular/core';
import { Pokemon } from '../../types';
import { ApiService } from '../../services/api/api.service';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private api = inject(ApiService)
  data = signal<Pokemon[]>([])

  constructor () {
    // get data
    this.api.getPokemons().subscribe(res => {
      this.data.set(res)
      console.log(res)
    })
  }
}
