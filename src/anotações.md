<figure class="banner">
  <img 
    src="{{ src }}" 
    alt="{{ alt }}">
</figure>

<div>
  <img [src]="fonteImagem" [alt]="textoAlternativo">
</div>


[src] = "ofoo " - outra maneira vc diz pro angular que a propriedade src vai ser preenchida dinamicamente
{{ variable }} - interpolação - para acessar valores de variáveis do typescript



export class BannerComponent {
  @Input() src: string = '';
  @input() alt: string = '';
}

@Input() - Indicar pro angular que esses valores vão ser recebidos via atributo
sinaliza que é uma propriedade de entrada que serão recebidos e injetados no 
componente.

Quanto tem @Input() eu posso passar as variaveis no seletor via html

<ng-content></ng-content> tudo que estiver dentro dele
vai adquirir as propriedades dele

<ng-content> - O ng-content é uma diretiva do Angular que permite a criação de componentes flexíveis e reutilizáveis, capazes de receber e exibir conteúdo dinâmico. É uma ferramenta poderosa para criar componentes genéricos que podem se adaptar a diferentes necessidades de conteúdo.

<app-outlet></app-outlet> - verifica app-routing.module.ts e 
substitui a pagina de acordo com o link acessado


@Injectable({
  providedIn: 'root' // em toda aplicação só vai haver uma instancia do serviço
                      // é um singleton
})
Diz que é possível injetar o serviço anotado
dentro das classes


ng generate environments - cria um diretorio com dois arquivos
environments.ts - colocar as variaveis de producao
environments.development.ts - colocar as variaveis de desenvolvimento. Localhost por exemplo


HttpClientModule - precisa ser inserido no array de imports
pra funcionar as requisições http

ReactiveFormsModule - Para lidar com formulários

Ex:
formBuscaService.formBusca.get('somenteIda')?.value -
o sinal de ? significa que só vai pegar o atributo value se ele existir

@Input() label!: string; quando coloco o ! depois de uma variavel
eu estou dizendo pro typescript que eu sei o que eu to fazendo
aquela label vai sempre existir inicializada


Notice the "$" on the end of the observable name. The "$" signifies that the variable is an observable "$tream" of values.

startWith(this.control.value) quando alguém assina um 
Observable, o subscriber só é notificado quando o valor muda.
Mas não se notifica do valor inicial



