const {Animal}= require ('../models/AnimalModel');
const {User} = require ('../models/UserModel');


class FiltroService{

    static async filtarAnimais(filtros ={}){
        const {tipo, porte, cidade, castrado, idade } = filtros
        let userIDs = null
        const animaisFiltrados = {};

        if (cidade){
            const usuarios = await User.find({'endereco.cidade': cidade})
            if (!usuarios.length){
                return [];
            }
            userIDs = usuarios.map(user => user._id);
            animaisFiltrados.userId = {$in: userIDs};
        }
        
        if (tipo){
            animaisFiltrados.tipo = tipo;
        }
        if (porte){
            animaisFiltrados.porte = porte;
        }
        if (castrado !== undefined){
            animaisFiltrados.castrado = castrado;
        }
        if (idade){
            animaisFiltrados.idade = idade;
        }
        
        const animais = await Animal.find(animaisFiltrados);
        return animais;
    }
}
module.exports = FiltroService;