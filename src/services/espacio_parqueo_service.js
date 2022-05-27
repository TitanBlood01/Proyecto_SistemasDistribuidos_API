const espParqModel = require('../model/espacio_parqueo');

class EspParqueoService {
    EspParqueoService() {}

    async consultarEspParq(numerParq){
        try {
            return await espParqModel.findOne({numero: numerParq});
        } catch (error) {
            return error;
        }
    }

    async consultarGeneEspParq(){
        try {
            return await espParqModel.find();
        } catch (error) {
            return error;
        }
    }

    async guardarEspParq(parqueo = new espParqModel()){
        try {
            var parqueoGuardado;
            await espParqModel.create(parqueo).then((value) => {
                parqueoGuardado = value;
            });

            return parqueoGuardado;
        } catch (error) {
            console.log(error);
        }
    }

    async eliminarEspParq(ida){
        console.log(ida);
        var parqueoEliminado;
        try {
            await espParqModel.findOneAndRemove({
                _id: ida
            }).then((value) => {
                parqueoEliminado = value;
            });

            return parqueoEliminado;
        } catch (error) {
            console.log(error);
        }
    } 

    async modificarEspParq(parmod){
        var parqueoModificado;
        try {
            await espParqModel.findOneAndUpdate({
                _id: parmod._id
            }, parmod).then((value) => {
                parqueoModificado = value;
            })

            return parqueoModificado;
        } catch (error) {
            console.log(error);
        }
    }
}


module.exports = new EspParqueoService();