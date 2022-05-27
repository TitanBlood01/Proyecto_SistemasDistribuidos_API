const {Schema, model}= require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    nombre: String,
    nickName: String,
    pin: String
});

UserSchema.methods.encryptPasword = async(pin)=>{
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(pin, salt);
};

UserSchema.methods.validatePin = function(pin){
    return bcrypt.compare(pin, this.pin);
};

UserSchema.methods.encryptNombre = async(nombre)=>{
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(nombre, salt);
};

UserSchema.methods.validateNombre = function(nombre){
    return bcrypt.compare(nombre, this.nombre);
};


module.exports = model('Usuario', UserSchema)