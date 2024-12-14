import { Component, OnInit,  Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith} from 'rxjs';
import { map } from 'rxjs/operators';
import { UnidadeFederativaServiceService } from 'src/app/core/services/unidade-federativa-service.service';
import { IUnidadeFederativa } from 'src/app/core/types/type';


@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss']
})
export class DropdownUfComponent implements OnInit{

  @Input() label: string = '';
  @Input() iconePrefixo: string = '';
  @Input() placeholder : string = '';
  @Input() control! : FormControl;

  unidadesFederativas: IUnidadeFederativa[] = [];
  filteredOptions$? : Observable<IUnidadeFederativa[]>;

  constructor(private unidadeFederativaService : UnidadeFederativaServiceService){
  }

  ngOnInit(): void {
      this.unidadeFederativaService.listar()
        .subscribe(dados => {
          this.unidadesFederativas = dados;
          console.log(this.unidadesFederativas)
        })

      this.filteredOptions$ = this.control.valueChanges.pipe(
        startWith(''),
        map(value => this.filtrarUfs(value))
      )
  }


  filtrarUfs(value: string | IUnidadeFederativa): IUnidadeFederativa[] {
    const nomeUf = typeof value === 'string' ? value: value?.nome;
    const valorFiltrado = nomeUf?.toLowerCase();
    const result = this.unidadesFederativas.filter(
      estado => estado.nome.toLowerCase().includes(valorFiltrado)
    )

    return result;
  }

  displayFn (estado: IUnidadeFederativa): string {
    return estado && estado.nome ? estado.nome : '';
  }
}

