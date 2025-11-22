const mongoose = require('mongoose');

const VacinaSchema = new mongoose.Schema({
    nome: {type: String, required: true}
})

const AnimalSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    idade: {type: Number},
    raca: {type: String, required: true},
    sexo: {type: String, required: true},
    porte: {type: String, required:true},
    peso: {type: Number}, 
    observacoes: {type: String},
    linkAnimal: {type: String},
    castracao: {type: Boolean, required:true},
    vacinas: [VacinaSchema],
    imagem: {type: String},
    tipo: {type: String, required:true},
    userId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
});

const Animal = mongoose.model("Animal", AnimalSchema)

const listarAnimais = async (req, res) => {
    return await Animal.find();
}

const buscarAnimalPorId = async (id) =>{
  try {
    return await Animal.findById(id);
  } catch (error) {
    throw error;
  }
}

const cadastrarAnimal = async (dados, file) => {
  const novoAnimal = new Animal({
    ...dados,
    vacinas: dados.vacinas || [],
    imagem: file? `/public/${file.filename}` : null
  });
  return await novoAnimal.save();
};

const alterarAnimal = async (id, dados) => {
   return await Animal.findByIdAndUpdate(
    id,
    dados,
  {new: true});
}

const excluirAnimal = async (id) => {
  return await Animal.findByIdAndDelete(
    id
  );
}

module.exports = {Animal, cadastrarAnimal, alterarAnimal, excluirAnimal, listarAnimais, buscarAnimalPorId};




