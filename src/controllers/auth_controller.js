const { Router } = require('express')
const router = Router();

const Usuario = require('../model/usuario_model')
const verifyToken = require('./verifyToken')

const jwt = require('jsonwebtoken')
const config = require('../config')

router.post('/signup', async(req, res) =>{
    try {
        const {nombre, nickName, pin} = req.body;

        const usuario = new Usuario({
            nombre,
            nickName,
            pin
        });
        usuario.pin = await usuario.encryptPasword(pin);
        usuario.nombre = await usuario.encryptNombre(nombre);
        await usuario.save();

        const token = jwt.sign({ id: usuario.id}, config.secret,{
            expiresIn: '24h'
        });
        res.status(200).json({auth:true, token });
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un problema al entrar');
    }
});

router.post('/signin', async(req, res)=>{
    try {
        const user = await Usuario.findOne({nickName: req.body.nickName})
        if(!user){
            return res.status(404).send("The nickname doesn't exist")
        }
        const validPin = await user.validatePin(req.body.pin, user.pin);
        if(!validPin){
            return res.status(404).send({ auth: false, token: null});
        }
        const validNomb = await user.validateNombre(req.body.nombre, user.Nombre);
        if(!validNomb){
            return res.status(404).send({ auth: false, token: null});
        }
        const token = jwt.sign({ id: user._id }, config.secret,{
            expiresIn: '24h'
        });
        res.status(200).json({ auth: true, token });
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un problema al entrar');
    }
});

router.get('/logout', function(req, res){
    res.status(200).send({auth: false, token: null });
});


module.exports= router;