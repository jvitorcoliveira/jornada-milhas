import { Component, OnInit } from '@angular/core';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { IPromocao } from 'src/app/core/types/type';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.scss']
})
export class PromocoesComponent implements OnInit{
  promocoes! : IPromocao[];

  constructor(private service: PromocaoService){

  }

  ngOnInit(): void {
      this.service.listar().subscribe(
        res => {
          this.promocoes = res;
        }
      )
  }




}
