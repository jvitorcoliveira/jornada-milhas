import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { IPessoaUsuaria } from '../types/type';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<IPessoaUsuaria | null>(null);

  constructor(
    private tokenService: TokenService
  ) {
    if(this.tokenService.possuiToken()){
      this.decodificarJWT();
    }
  }

  decodificarJWT(){
    const token = this.tokenService.retornarToken();
    const user = jwtDecode(token) as IPessoaUsuaria;
    this.userSubject.next(user);
  }

  retornarUser(){
    return this.userSubject.asObservable();
  }


  salvarToken(token:string){
    this.tokenService.salvarToken(token);
    this.decodificarJWT();
  }

  logout(){
    this.tokenService.excluirToken();
    this.userSubject.next(null);
  }

  estaLogado(){
    return this.tokenService.possuiToken();
  }



}
