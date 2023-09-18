import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carta } from '../interfaces/carta.interface';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartasService {

  private httpClient = inject(HttpClient)
  private baseUrl: string

  constructor() {
    this.baseUrl = ''
  }

  getAll(): Promise<Carta[]> {
    return firstValueFrom(
      this.httpClient.get<Carta[]>(`${this.baseUrl}`)
    )
  }
}
