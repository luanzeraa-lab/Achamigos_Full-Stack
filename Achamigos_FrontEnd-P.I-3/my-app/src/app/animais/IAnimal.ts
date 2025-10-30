export interface IAnimal {
  _id: number;
  nome: string;
  idade: string;
  raca: string;
  sexo: string;
  porte: string;
  peso: string;
  vacinas:string[],
  observacoes: string;
  castracao: boolean;
  imagem: File;
}
