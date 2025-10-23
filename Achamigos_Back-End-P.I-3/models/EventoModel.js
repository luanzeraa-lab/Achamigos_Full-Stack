const mongoose = require('mongoose');

const EventoSchema = new mongoose.Schema({
    ///PK
    idEvento : {type: Number},
    //FK
    idUsuario: {type: Number},
    
    data_Publicacao: {type: Date, default: Date.now },
    data_Exclusao :{type: Date, default: Date.now },
    tipo_Evento: {type: String},
    texto: {type: String},
    eventoStatus :{type: String},
    imagem: {type: String}
});
const Evento = mongoose.model("Evento", EventoSchema)

const listarEvento = async (req, res) => {
    return await Evento.find();
}


const cadastrarEvento = async (dados, file) =>{
    const newEvento = new Evento({
        ...dados,
         imagem: file? `../public/${file.filename}` : null
    });
    return await newEvento.save();
}
const alterarEvento = async (id, dados) =>{
    return await Evento.findByIdAndUpdate(
        id,
        dados,
        {new:true});
}
const excluirEvento = async (id) => {
    return await Evento.findByIdAndDelete(id);
}

module.exports = {Evento, listarEvento, cadastrarEvento, alterarEvento, excluirEvento};
