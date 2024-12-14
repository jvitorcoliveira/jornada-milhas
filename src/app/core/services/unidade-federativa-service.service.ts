import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUnidadeFederativa } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class UnidadeFederativaServiceService {

  private apiUrl: string = environment.apiUrl;
  private cache$?: Observable<IUnidadeFederativa[]>;

  constructor(private httpClient : HttpClient) { }

  listar(): Observable<IUnidadeFederativa[]> {
    if (!this.cache$){
      this.cache$ = this.requestEstados().pipe(
        shareReplay(1)
      )
    }
    return this.cache$;

  }

  private requestEstados(): Observable<IUnidadeFederativa[]> {
    return this.httpClient.get<IUnidadeFederativa[]>(`${this.apiUrl}/estados`);
  }


}
