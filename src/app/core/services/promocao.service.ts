import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPromocao } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {

  private apiUrl: string = environment.apiUrl;

  constructor(
    private httpCliente : HttpClient
  ) { }

  listar (): Observable<IPromocao[]> {
    return this.httpCliente.get<IPromocao[]>(`${this.apiUrl}/promocoes`);
  }

}
