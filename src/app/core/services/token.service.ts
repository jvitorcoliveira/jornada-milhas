import { Injectable } from '@angular/core';

const KEY = 'token'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  salvarToken (token : string) {
    return localStorage.setItem(KEY, token);
  }

  excluirToken(): void{
    localStorage.removeItem(KEY);
  }

  retornarToken(){
    return localStorage.getItem(KEY) ?? ""; // ?? serve para dizer que se não existe o valor retorna o outro
  }

  possuiToken(){
    return !!this.retornarToken() // !! - faz a conversão de um valor pra boolean
  }


}
