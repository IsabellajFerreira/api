const { Router } = require('express');
const  LoginController = require('./app/controllers/LoginController');
const UserController = require('./app/controllers/UserController');
const User = require('./app/models/User');

/*const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api', {
useNewUrlParser: true,
}).then(()=>{
    console.log("Sucess: Conexão com o mongoDb foi realizado com sucesso!");
}).catch((error) =>{
    console.log("Erro: Conexão com o mongoDb não foi realizado com sucesso!" + error);
   
   
})*/
const routes = new Router();

/*routes.get('/insert', async(req, res)=>{
    await User.create({  //retorna uma promisse
        name: 'Isabella',
        email: 'isabellajferreira@gmail.com',
        password: '123'

    }, function(error, User){
        if(error) return res.status(400).json({message: "Erro: Usuário naõ cadastrado" })
    return res.status(200).json({
        message: "Sucess: Usuário cadastrado com sucesso!"
    });
   
    })
})*/

routes.post('/users', UserController.store);
routes.delete('/users/:id', UserController.delete);
routes.post('/login', LoginController.store);

routes.get('/', (req, res)=>{
    let name = 'Isabella tudo bem !?'
    res.send(`Hello World ${name}!`);

})

module.exports = routes;