function verificaIdade() {
            
           
    var nome = document.querySelector('input[name=nome]');

    // procurando/selecionando nesse documento o input cujo nome seja 
    // "idade", e adicionando na variável
    var pegaIdade = document.querySelector('input[name=idade]');

    if (pegaIdade.value.length == 0) {
        alert('Por favor, preencha todos os campos');
        return;
    }
    
    var idade = parseInt(pegaIdade.value);


    if (idade >= 18) {
        alert('Ok, você pode tirar sua CNH');
    } else if (idade > 4){
        alert('Você é menor de idade, vá de bike');
    } else {
        alert('Você precisa andar de carrinho')
    }

     // var nome = prompt("Qual o seu nome?");
        // var idade = parseInt(prompt("Qual a sua idade?"));
       
        // console.log(nome);
        // //imprimindo o tipo da variável
        // console.log(typeof nome);

        // console.log(idade);
        // console.log(typeof idade);

     

        // // acessando o id "nome" do html por meio do objeto "document"
        // // innerText define um valor que vai ser colocado na propriedade
        // // nesse caso, estamos colocando o valor da variável nome
        // document.getElementById("nome").innerText = nome;

}