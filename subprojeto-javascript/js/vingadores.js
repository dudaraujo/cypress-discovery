// API
var avengers = ['Tony Stark', 'Clint Barton', 'Natasha Romanoff', 'Steve Rogers','Bruce Benner'];

function listaVingadores() {

    // Adicionando na variável a lista criada em html
    var ul = document.getElementById('listaV');

    //Limpando o valor da lista toda vez que o botão é clicado
    ul.innerHTML = "";


    avengers.forEach(function(a) {

        //Montando as linhas da lista de forma dinâmica
        var li = document.createElement('li');

        //Montando o texto que será colocado em cada linha 
        //O texto está na variável "a" que guarda o array
        var text = document.createTextNode(a);

        //Colocando o texto nas linhas
        li.appendChild(text);

        //Colocando cada linha dentro da ul do html 
        ul.appendChild(li);

    });
}