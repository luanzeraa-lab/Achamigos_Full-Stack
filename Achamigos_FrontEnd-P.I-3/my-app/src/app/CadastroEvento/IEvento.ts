export interface IEvento{
    idEvento : number;
    idUsuario:  number;
    nomeEvento: string;
    data_Publicacao: Date;
    data_Exclusao : Date;
    tipo_Evento: string;
    texto: string;
    eventoStatus: string;
    imagemEvento: string;
}