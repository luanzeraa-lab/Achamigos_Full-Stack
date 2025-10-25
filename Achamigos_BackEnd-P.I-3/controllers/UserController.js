
const UserModel = require ('../models/UserModel')

exports.listarUser = async (req, res) =>{
  try {
    const users = await UserModel.listarUser();
    if(!users){
      return res.status(404).json({message: "Nenhum usuário encontrado"})
    }
    res.status(200).json(users)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// exports.cadastrarUser = async(req, res) => {
//     try {
//         const newUser = await UserModel.cadastrarUser(req.body);
        
//         res.status(200).json(newUser);

//     } catch (error) {
//         res.status(400).json({error: error.message})
//     }
// }

exports.alterarUser = async(req, res) => {
    try {
        const {id} = req.params;
        const {nome, telefone, cnpj, userLogin, senha, email,
               endereco, tipo, userStatus, linkUser} = req.body;
        const usuarioAtualizado = await UserModel.alterarUser(
          id,
          {nome, telefone, cnpj, userLogin, senha, email,
           endereco, tipo, userStatus, linkUser},
           {new: true})
           
           if (!usuarioAtualizado){
            return res.status(400).json({message: "Usuário não encontrado"})
           }
           res.status(200).json(usuarioAtualizado) 
        } catch (error) {
           res.status(400).json({error: "Erro"})
        }
}

exports.excluirUser = async(req, res) =>{
  try {
    const {id} = req.params;
    const usuarioDeletado = await UserModel.excluirUser(id)
    console.log(usuarioDeletado)
       if (!usuarioDeletado){
        return res.status(400).json({message: "Usuário não encontrado"})
       }
       res.status(200).json(usuarioDeletado) 
    } catch (error) {
       res.status(400).json({error: "Erro"})
    }
}