import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPessoaUsuaria } from '../types/type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private apiUrl : string = environment.apiUrl;

  constructor(
    private http : HttpClient
  ) { }

  cadastrar(pessoaUsuaria: IPessoaUsuaria): Observable<IPessoaUsuaria>{
    return this.http.post<IPessoaUsuaria>(`${this.apiUrl}/auth/cadastro`, pessoaUsuaria);
  }

  buscarCadastro(): Observable<IPessoaUsuaria>{
    return this.http.get<IPessoaUsuaria>(`${this.apiUrl}/auth/perfil`);
  }


  editarCadastro(pessoaUsuaria: IPessoaUsuaria): Observable<IPessoaUsuaria>{
    return this.http.patch<IPessoaUsuaria>(`${this.apiUrl}/auth/perfil`, pessoaUsuaria);
  }



}
