import { IDepoimento } from 'src/app/core/types/type';
import { DepoimentoService } from './../../../core/services/depoimento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss']
})
export class DepoimentosComponent implements OnInit{

  depoimentos! : IDepoimento[];

  constructor(
    private depoimentoService : DepoimentoService
  ){}

  ngOnInit(): void {
    this.depoimentoService.listar()
    .subscribe(resposta => {
      this.depoimentos = resposta;
    })
  }

}
