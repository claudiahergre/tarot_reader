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

      /*  const cartasEnPosicion = document.querySelector('.carta.posicion-3');
       if (cartasEnPosicion) {
         const cartasEnPosicionElements = document.querySelectorAll('.carta');
 
 
         // pero el cartaDorsoStyles, ¿cómo se lo agrego a .carta.posición?
         // este mouseenter se aplicaría solo a .carta.posicion-3, no? porque si es así, esta idea tampoco me sirve
 
 
         cartasEnPosicionElements.forEach((element) => {
           element.addEventListener('mouseenter', () => {
             //element.classList.add('active');
             this.cartaDorsoStyles.opacity = 0;
           });
         });
 
 
       } */

    }
  }

  onMouseEnter(event: MouseEvent) {
    this.cartaVistaStyles.opacity = 1;

  }

  onMouseEnterDorso(event: any, pos: number) {
    const target = event.target;
    if (target && (target.classList.contains('posicion-1') || target.classList.contains('posicion-2') || target.classList.contains('posicion-3'))) {
      event.target.style.opacity = 0;
      console.log(`.cartaSeleccionada.cartaMostrada-${pos}`);

      const cartaSeleccionada = document.querySelector(`.cartaSeleccionada.cartaMostrada-${pos}`)! as HTMLElement;
      console.log(cartaSeleccionada);

      cartaSeleccionada.style.opacity = '1';
    }
  }

}
