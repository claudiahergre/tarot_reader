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

  constructor() {
    this.cartas = [];
  }

  async ngOnInit() {
    this.cartas = await this.cartasService.getAll()

  }

}
