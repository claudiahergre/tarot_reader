import { Component, inject } from '@angular/core';
import { CartasService } from '../../services/cartas.service';
import { Carta } from 'src/app/interfaces/carta.interface';

@Component({
  selector: 'app-consejo',
  templateUrl: './consejo.component.html',
  styleUrls: ['./consejo.component.css']
})
export class ConsejoComponent {
  private cartasService = inject(CartasService)

  cartas: Carta[];
  cartasSeleccionadas: Carta[];
  maximoCartasSeleccionadas: number;
  cartaTransform: string[];
  cartaVistaStyles: any;

  constructor() {
    this.cartas = [];
    this.cartasSeleccionadas = []
    this.maximoCartasSeleccionadas = 3;
    this.cartaTransform = [];
    this.cartaVistaStyles = [];
  }

  async ngOnInit() {
    this.cartas = await this.cartasService.getAll();
    this.barajar(this.cartas);
    this.cartaTransform = this.cartas.map(carta => '');
  }

  // reordenar aleatoriamente el array de cartas

  private barajar(array_de_cartas: any[]) {
    for (let i = array_de_cartas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array_de_cartas[i], array_de_cartas[j]] = [array_de_cartas[j], array_de_cartas[i]];
    }
  }


  // seleccionar cartas

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

    }
  }


  // ocultacion dorsos - revelación caras

  onMouseEnter(event: MouseEvent) {
    this.cartaVistaStyles.opacity = 1;
  }

  onMouseEnterDorso(event: any, pos: number) {
    const target = event.target;
    if (target && (target.classList.contains('posicion-1') || target.classList.contains('posicion-2') || target.classList.contains('posicion-3'))) {
      event.target.style.opacity = 0;

      const cartaSeleccionada = document.querySelector(`.cartaSeleccionada.cartaMostrada-${pos}`)! as HTMLElement;

      cartaSeleccionada.style.opacity = '1';
    }
  }
}