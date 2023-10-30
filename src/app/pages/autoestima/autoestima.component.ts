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
  cartaTransform: string[];
  cartaMargin: string[]

  constructor() {
    this.cartas = [];
    this.cartasSeleccionadas = []
    this.maximoCartasSeleccionadas = 3;
    this.cartaTransform = [];
    this.cartaMargin = [];
  }

  async ngOnInit() {
    this.cartas = await this.cartasService.getAll();
    this.barajar(this.cartas);
    this.cartaTransform = this.cartas.map(carta => '');
    console.log(this.cartas)
  }

  // reordenar aleatoriamente el array de cartas
  private barajar(array_de_cartas: any[]) {
    for (let i = array_de_cartas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array_de_cartas[i], array_de_cartas[j]] = [array_de_cartas[j], array_de_cartas[i]];
    }
  }

  mostrarDetalles($event: any, i: number, carta: Carta) {
    if (!this.cartasSeleccionadas.includes(carta) && this.cartasSeleccionadas.length < this.maximoCartasSeleccionadas) {
      // this.cartas.length

      /*  const rect = $event.target.getBoundingClientRect()
       let translateX = rect.x - 250;
       if (this.cartasSeleccionadas.length === 1) {
         translateX = 0;
       } else if (this.cartasSeleccionadas.length === 2) {
         translateX = rect.x + 250;
       } */

      /*  let margen = 0;
       if (this.cartasSeleccionadas.length === 1) {
         margen = 50;
       } else if (this.cartasSeleccionadas.length === 2) {
         margen = 100;
       }
       console.log(margen); */

      this.cartaTransform[i] = `translateY(450px) rotateY(360deg)`
      setTimeout(() => {
        this.cartasSeleccionadas.push(carta);
        const posicion = this.cartasSeleccionadas.length;
        $event.target.classList.add(`posicion-${posicion}`)
      }, 600);

      // this.cartaMargin[i] = `${margen}px`
    }
  }

}
