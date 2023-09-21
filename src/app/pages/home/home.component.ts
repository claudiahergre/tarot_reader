import { Component, inject } from '@angular/core';
import { CartasService } from '../../services/cartas.service';
import { Carta } from 'src/app/interfaces/carta.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private cartasService = inject(CartasService)

  cartas: Carta[];

  constructor() {
    this.cartas = [];
  }

  async ngOnInit() {
    this.cartas = await this.cartasService.getAll()

  }
}
