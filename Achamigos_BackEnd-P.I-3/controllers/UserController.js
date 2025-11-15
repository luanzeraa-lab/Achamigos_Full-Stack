
const UserModel = require ('../models/UserModel')
const bcrypt = require("bcryptjs");

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

exports.alterarUser = async(req, res) => {
    try {
        const {id} = req.params;
        const dadosAtualizados = {...req.body};

        if (dadosAtualizados.senha && dadosAtualizados.senha.trim() !== "") {
          dadosAtualizados.senha = bcrypt.hashSync(dadosAtualizados.senha, 10);
        }

        const usuarioAtualizado = await UserModel.alterarUser(id, dadosAtualizados, {
          new: true,
        });
           
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