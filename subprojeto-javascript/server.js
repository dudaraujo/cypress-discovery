//importação do express
const express = require('express')

//instanciando o obejto, ativiando a aplicação do express
const app = express()

//criando um método get, que vai ser invocado através da barra (página principal)
app.get('/', function (req, res) {

  //o resultado que será devolvido será o hello 
  //res.send('Hello Cypress Dicovery')
  //mudei para json pois estav enviando html
  res.json({message: 'Hello Cypress Dicovery'})
})

app.get('/avengers', function (req, res) {
    var avengers = ['Tony Stark', 'Clint Barton', 'Natasha Romanoff', 'Steve Rogers','Bruce Benner']
    return res.json({data: avengers})
})

app.get('/cnh', function (req, res) {
    const pegaIdade = req.query.idade

    if (!pegaIdade) {
        return res.json({message: 'Por favor, preencha todos os campos'});
        
    }
    
    var idade = parseInt(pegaIdade);


    if (idade >= 18) {
        return res.json({message:'Ok, você pode tirar sua CNH'});
    } else if (idade > 4){
        return res.json({message:'Você é menor de idade, vá de bike'});
    } else {
        return res.json({message:'Você precisa andar de carrinho'});
    }


    return res.json({test: idade})
})
//porta da aplicação
app.listen(3000)