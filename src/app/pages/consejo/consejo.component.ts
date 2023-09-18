import { Component, inject } from '@angular/core';
import { Carta } from 'src/app/interfaces/carta.interface';
import { CartasService } from 'src/app/services/cartas.service';

@Component({
  selector: 'app-consejo',
  templateUrl: './consejo.component.html',
  styleUrls: ['./consejo.component.css']
})
export class ConsejoComponent {

  private cartasService = inject(CartasService)

  cartas: Carta[]

  constructor() {
    this.cartas = []
  }

  async ngOnInit() {
    try {
      this.cartas = await this.cartasService.getAll()
    } catch (error) {
      console.log(error)
    }
  }

}
