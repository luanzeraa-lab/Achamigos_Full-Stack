
const FiltroService = require('../services/FiltroService')

exports.filtrarAnimais = async (req, res) =>{
    try {
        const {cidade} = req.params;
        const animaisFiltrados = await FiltroService.filtrarAnimaisPorCidade(cidade);
        if(!animaisFiltrados){
            return res.status(404).json({ error: "Animal não encontrado" });
        }
        return res.status(200).json(animaisFiltrados)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

exports.filtrarPorte = async (req, res) =>{
    try {
        const {porte} = req.params;
        const animaisFiltradosPorPorte = await FiltroService.filtrarAnimaisPorPorte(porte);
        if(!animaisFiltradosPorPorte){
            res.status(404).json({error: "Animais não encontrados"});
        }
        return res.status(200).json(animaisFiltradosPorPorte);
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}