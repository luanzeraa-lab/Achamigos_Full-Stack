const {Animal}= require ('../models/AnimalModel');
const Users = require ('../models/UserModel');


class FiltroService{
    static async filtrarAnimaisPorCidade(cidade){
        const usuarios = await Users.find({'endereco.cidade': cidade})
        if (!usuarios.length){
            return [];
        }
        const userIds = usuarios.map(user => user._id);

        const animaisFiltrados = await Animal.find({userId: {$in: userIds}});
console.log("Usuários encontrados:", usuarios);
console.log("IDs dos usuários:", userIds);
console.log("Animais encontrados:", animaisFiltrados);
        return animaisFiltrados;

    }

    static async filtrarAnimaisPorPorte(porte){
        const porteAnimal = await Animal.find({'porte': porte});
        if (!porteAnimal.length){
            return [];
        }
        return porteAnimal;
    }
}
module.exports = FiltroService;