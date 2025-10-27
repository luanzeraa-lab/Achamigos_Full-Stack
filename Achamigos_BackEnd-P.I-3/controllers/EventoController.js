const EventoModel = require('../models/EventoModel');

exports.listarEvento = async (req, res) =>{
  try {
    const eventos = await EventoModel.listarEvento();
    if(!eventos){
      return res.status(404).json({message: "Nenhum evento encontrado"})
    }
    res.status(200).json(eventos)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}


exports.cadastrarEvento = async (req, res) => {
    try {
        const newEvento = await EventoModel.cadastrarEvento(req.body, req.file);
        if(!newEvento){
            res.status(400).json({message: "Erro ao cadastrar Evento"})
        }
        res.status(201).json(newEvento)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.alterarEvento = async (req, res) => {
    try {
        const {id} = req.params;
        const dados = req.body;
        const eventoAtualizado = await EventoModel.alterarEvento(id, dados);
        
        if(!eventoAtualizado){
             res.status(400).json({message: "Erro ao alterar Evento"})
        }
        res.status(201).json(eventoAtualizado);

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.excluirEvento = async (req, res) => {
    try {
        const {id} = req.params;
        const eventoDeletado = await EventoModel.excluirEvento(id);
        
        if(!eventoDeletado){
             res.status(400).json({message: "Erro ao alterar Evento"})
        }
        res.status(201).json(eventoDeletado);

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}