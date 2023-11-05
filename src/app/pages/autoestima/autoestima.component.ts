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
  maximoCartasSeleccionadas: number;
  cartaTransform: string[];
  cartaMargin: string[];
  cartaVistaStyles: any;
  cartaDorsoStyles: any

  constructor() {
    this.cartas = [];
    this.cartasSeleccionadas = [];
    this.maximoCartasSeleccionadas = 3;
    this.cartaTransform = [];
    this.cartaMargin = [];
    this.cartaVistaStyles = [];
    this.cartaDorsoStyles = [];
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


      this.cartaTransform[i] = `translateY(450px) rotateY(360deg)`

      setTimeout(() => {

        this.cartasSeleccionadas.push(carta);

        const posicion = this.cartasSeleccionadas.length;
        $event.target.classList.add(`posicion-${posicion}`);

        const cartaSeleccionada = document.querySelector('.cartaSeleccionada');
        if (cartaSeleccionada) {
          cartaSeleccionada.classList.add(`cartaMostrada-${posicion}`);
        }
      }, 600);

      const cartasEnPosicion = document.querySelector('.carta.posicion-3');
      if (cartasEnPosicion) {

        cartasEnPosicion.addEventListener('mouseenter', ($event) => {

        });

      }

    }
  }

  onMouseEnter(event: MouseEvent) {
    this.cartaVistaStyles.opacity = 1;

  }

}
