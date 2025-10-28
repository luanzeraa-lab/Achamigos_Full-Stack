import { IEndereco } from './IEndereco';

export interface IUser {
  _id?: number;
  nome: string;
  telefone: string;
  cnpj: string;
  userLogin: string;
  senha: string;
  email: string;
  endereco: IEndereco;
  tipo: string;
  userStatus: string;
  linkUser: string;
}
