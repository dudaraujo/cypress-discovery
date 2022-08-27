//importação do express
const express = require('express')

//instanciando o obejto, ativiando a aplicação do express
const app = express()

//criando um método get, que vai ser invocado através da barra (página principal)
app.get('/', function (req, res) {

  //o resultado que será devolvido será o hello word
  //res.send('Hello Cypress Dicovery')
  //mudei para json pois estav enviando html
  res.json({message: 'Hello Cypress Dicovery'})
})

//porta da aplicação
app.listen(3000)