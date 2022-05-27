const parqueoService = require('../services/espacio_parqueo_service');

const consultarEspParq = async(req, res) => {
    res.json({
        parqueos: await parqueoService.consultarEspParq(req.params.numero)
    });
}

const consultarGeneEspParq = async(req, res) => {
    res.json({
        parqueos: await parqueoService.consultarGeneEspParq()
    });
}

const guardarEspParq = async(req, res) => {
    res.json({
        parqueos: await parqueoService.guardarEspParq(req.body)
    });
}

const eliminarEspParq = async(req,res) => {
    res.json({
        parqueos: await parqueoService.eliminarEspParq(req.params.id)
    });
}

const modificarEspParq = async(req, res) => {
    res.json({
        parqueos: await parqueoService.modificarEspParq(req.body)
    });
}

module.exports = {consultarEspParq, consultarGeneEspParq, guardarEspParq, eliminarEspParq, modificarEspParq};