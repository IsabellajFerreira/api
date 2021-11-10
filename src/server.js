const app = require ('./app'); // vai trazer o app

app.listen(8080, ()=>{  //listar qual é a porta do servidor que está recebendo as transições
    console.log("App is running at port 8080");
})