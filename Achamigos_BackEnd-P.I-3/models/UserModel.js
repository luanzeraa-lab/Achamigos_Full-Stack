const mongoose = require('mongoose');

const EnderecoSchema = new mongoose.Schema({
    cep: {type: String, required: true},
    rua:{type: String, required: true},
    cidade: {type: String, required: true},
    numero: {type: String, required: true}
})

const UserSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    cnpj: {type: String, required: true},
    telefone: {type: String, required: true},
    userLogin: {type: String, required: true},
    senha: {type: String, required: true},
    email: {type: String, required: true},
    endereco: EnderecoSchema,
    linkUser: {type: String}
});
const User = mongoose.model("User", UserSchema)

const listarUser = async (req, res) => {
    return await User.find();
}


// const cadastrarUser = async (dados) => {
//   const newUser = new User({
//     ...dados
//   });
//   return await newUser.save();
// };

const alterarUser = async (id, dados) => {
   return await User.findByIdAndUpdate(
    id,
    dados,
  {new: true});
}

const excluirUser = async (id) => {
  return await User.findByIdAndDelete(id);
}

module.exports = {User, listarUser,  alterarUser, excluirUser};
