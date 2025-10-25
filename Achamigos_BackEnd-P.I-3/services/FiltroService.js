const {Animal}= require ('../models/AnimalModel');
const {User} = require ('../models/UserModel');


class FiltroService{
    static async filtrarAnimaisPorCidade(cidade){
        const usuarios = await User.find({'endereco.cidade': cidade})
        if (!usuarios.length){
            return [];
        }
        const userIds = usuarios.map(user => user._id);

        const animaisFiltrados = await Animal.find({userId: {$in: userIds}});

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