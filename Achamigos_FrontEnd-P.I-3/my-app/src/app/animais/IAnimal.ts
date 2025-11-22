export interface IAnimal {
  _id: number;
  nome: string;
  idade: number;
  raca: string;
  sexo: string;
  porte: string;
  peso: number;
  vacinas:string[],
  observacoes: string;
  linkAnimal: string;
  castracao: boolean;
  imagem: File;
  tipo: string;
}
