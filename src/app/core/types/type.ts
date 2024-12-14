export interface IPromocao {
  id: string;
  destino: string;
  imagem: string;
  preco: string;
}

export interface IUnidadeFederativa {
  id: string;
  nome: string;
  sigla: string;
}

export interface IDepoimento {
  id: string;
  texto: string;
  autor: string;
  avatar: string;
}


export interface IPessoaUsuaria
{
  nome: string;
  nascimento: Date;
  cpf: string;
  telefone: string;
  email: string;
  senha: string;
  cidade: string;
  estado: IUnidadeFederativa;
  genero: string;
}
