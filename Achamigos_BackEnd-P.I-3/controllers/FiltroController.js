
const FiltroService = require('../services/FiltroService')

exports.filtrarAnimais = async (req, res) =>{
    try {
        const filtros = req.query; 

        const animaisFiltrados = await FiltroService.filtrarAnimais(filtros);

        if (!animaisFiltrados || animaisFiltrados.length === 0) {
            return res.status(200).json([]); 
        }

        return res.status(200).json(animaisFiltrados)
    } catch (error) {
        console.error("Erro ao buscar animais com filtros:", error);
        return res.status(500).json({ error: error.message })
    }
}
