const { json } = require('express');
const AnimalModel = require('../models/AnimalModel');

exports.listarAnimal = async (req, res) =>{
  try {
    const animais = await AnimalModel.listarAnimais();
    if(!animais){
      return res.status(404).json({message: "Nenhum animal encontrado"})
    }
    res.status(200).json(animais)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

exports.buscarAnimalPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const animal = await AnimalModel.buscarAnimalPorId(id);

    if (!animal) {
      return res.status(404).json({ message: "Animal não encontrado" });
    }

    res.status(200).json(animal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.cadastrarAnimal = async (req, res) => {
    const animalData = { ...req.body };
    if (animalData.vacinas && typeof animalData.vacinas === 'string') {
        try {
            animalData.vacinas = JSON.parse(animalData.vacinas);
        } catch (e) {
            console.error("Erro ao parsear JSON de vacinas:", e);
            return res.status(400).json({ error: "O formato JSON das vacinas é inválido." });
        }
    }

    try {
        const animalCadastrado = await AnimalModel.cadastrarAnimal(animalData, req.file);
        res.status(201).json(animalCadastrado);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

exports.alterarAnimal = async (req, res) =>{
    try {
    const {id} = req.params;
    const dados = req.body
    const animalAlterado = await AnimalModel.alterarAnimal(id, dados);
   
    if (!animalAlterado) {
      return res.status(404).json({ error: "Animal não encontrado" });
    }
   
     res.status(200).json(animalAlterado)
     } catch (error) {
    return res.status(400).json({error: error.message})
  }
}

exports.excluirAnimal = async (req, res) =>{
    try {
        const {id} = req.params;
        const animalDeletado = await AnimalModel.excluirAnimal(id)
        if (!animalDeletado){
          return res.status(400).json({message: "Animal não encontrado"})
        }
        res.status(200).json({message: "Animal deletado com sucesso"})
      } catch (error) {
        res.status(400).json({error: "Erro ao deletar animal"})
      }
}

