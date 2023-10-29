import { Component, inject } from '@angular/core';
import { CartasService } from '../../services/cartas.service';
import { Carta } from 'src/app/interfaces/carta.interface';

@Component({
  selector: 'app-autoestima',
  templateUrl: './autoestima.component.html',
  styleUrls: ['./autoestima.component.css']
})
export class AutoestimaComponent {
  private cartasService = inject(CartasService)

  cartas: Carta[];
  cartasSeleccionadas: Carta[];
  maximoCartasSeleccionadas: number

  constructor() {
    this.cartas = [];
    this.cartasSeleccionadas = []
    this.maximoCartasSeleccionadas = 3;
  }

  async ngOnInit() {
    this.cartas = await this.cartasService.getAll();
    this.barajar(this.cartas);
    console.log(this.cartas)
  }

  // reordenar aleatoriamente el array de cartas
  private barajar(array_de_cartas: any[]) {
    for (let i = array_de_cartas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array_de_cartas[i], array_de_cartas[j]] = [array_de_cartas[j], array_de_cartas[i]];
    }
  }

  mostrarDetalles(carta: Carta) {
    if (!this.cartasSeleccionadas.includes(carta) && this.cartasSeleccionadas.length < this.maximoCartasSeleccionadas) {
      this.cartasSeleccionadas.push(carta)
    }
  }

}
