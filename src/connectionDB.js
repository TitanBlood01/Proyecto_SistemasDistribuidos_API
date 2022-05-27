const mongoose = require('mongoose')

const dbConnection = async() => {
    try {
        console.log('Conectando DB....')
        await mongoose.connect('mongodb://127.0.0.1/sistemaDB', {
           useNewUrlParser: true, 
           useUnifiedTopology: true
        });
        console.log('Conectado.....')    
    } catch (error) {
        throw new Error(error);
    }
}

module.exports={
    dbConnection
};
    