import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroService } from 'src/app/core/services/cadastro.service';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { IPessoaUsuaria } from 'src/app/core/types/type';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  perfilComponent = false;

  constructor(
    private formularioService: FormularioService,
    private cadastroService: CadastroService,
    private router: Router
  ){

  }

  cadastrar(){
    console.log("Cadastrando formulario")
    const formCadastro = this.formularioService.getCadastro()

    if(formCadastro?.valid){
      const novoCadastro = formCadastro.getRawValue() as IPessoaUsuaria;
      this.cadastroService.cadastrar(novoCadastro)
      .subscribe({
        next:
          (value) => {
            console.log("Cadastro realizado com sucesso ", value);
            this.router.navigate(['/login']);
          },
          error:
            (err) => {
              console.log("Erro ao realizar cadasto ", err)
            }
      });
    }


    console.log("Cadastro realizado", formCadastro?.getRawValue() as IPessoaUsuaria);
  }

}
