const VacinaModel = require('../models/VacinaModel');

exports.listarVacina = async (req, res) =>{
  try {
    const vacinas = await VacinaModel.listarVacina();
    if(!vacinas){
      return res.status(404).json({message: "Nenhuma vacina encontrada"})
    }
    res.status(200).json(vacinas)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}