const mongoose = require('mongoose');

const VacinaSchema = new mongoose.Schema({
    id: {type: String, required: true},
    nome: {type: String, required: true},
    validade: {type: String, required: true}
});

const Vacina = mongoose.model("Vacina", VacinaSchema)

const listarVacina = async (req, res) => {
    return await Vacina.find();
}

module.exports = {Vacina, listarVacina};