import { IDepoimento, IPromocao } from './../../core/types/type';
import { Component, OnInit } from '@angular/core';
import { DepoimentoService } from 'src/app/core/services/depoimento.service';
import { PromocaoService } from 'src/app/core/services/promocao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(){
  }

}
