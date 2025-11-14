const mongoose = require('mongoose');

const EventoSchema = new mongoose.Schema({
    nomeEvento: {type: String, required: false},
    data: {type: Date, default: Date.now },
    tipo_Evento: {type: String},
    texto: {type: String},
    linkEvento: {type: String},
    imagem: {type: String}
});
const Evento = mongoose.model("Evento", EventoSchema)

const listarEvento = async (req, res) => {
    return await Evento.find();
}


const cadastrarEvento = async (dados, file) => {
  const newEvento = new Evento({
    tipo_Evento: dados.tipo_Evento,
    texto: dados.texto,
    data: dados.data,
    linkEvento: dados.linkEvento,
    nomeEvento: dados.nomeEvento || dados.tipo_Evento,
    imagem: file ? `/public/${file.filename}` : null, 
  });

  return await newEvento.save();
};

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
