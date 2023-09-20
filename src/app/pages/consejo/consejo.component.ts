import { Component, inject } from '@angular/core';
import { CartasService } from '../../services/cartas.service';




@Component({
  selector: 'app-consejo',
  templateUrl: './consejo.component.html',
  styleUrls: ['./consejo.component.css']
})
export class ConsejoComponent {
  private cartasService = inject(CartasService)

  async ngOnInit() {
    const cartas = await this.cartasService.getAll()
    console.log(cartas);
  }

}
