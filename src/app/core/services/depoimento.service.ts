import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDepoimento } from '../types/type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepoimentoService {

  private apiUrl = environment.apiUrl;

  constructor(
    private httpCliente: HttpClient
  ) { }


  listar() : Observable<IDepoimento[]> {
    return this.httpCliente.get<IDepoimento[]>(`${this.apiUrl}/depoimentos`);
  }


}
