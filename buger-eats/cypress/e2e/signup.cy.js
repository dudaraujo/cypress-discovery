// Quando importamos assim, temos que instanciar a classe no arquivo de cadastro
//import SigupPage from '../pages/SignupPage';

//Quando exportamos assim, não precisamor instanciar a class depois
import signup from '../pages/SignupPage';
import signupFactory from '../factories/SignupFactory';
//import { it } from 'faker/lib/locales';


describe('Signup', () => {

    // beforeEach(function() {
    //     //Como é um função assincrona, e preciso passar uma promessa (then)
    //     //Para pegar o resultado dessa promessa eu uso o this
    //     //This pe uma palavra reservada para eu criar um variável de contexto
    //     cy.fixture('deliver').then((massa) => {

    //         //Armazenando todo o conteudo da massa de testes na variável massa
    //         //Uso o this para ter acesso a essa informação nos outros casos de teste
    //         this.deliver = massa;
    //     })
    // })

    //Para eu conseguir utilziar as funções que foram instanciadas, 
    //Eu preciso instanciar a class SigupPage 
    //var signup = new SigupPage();

    it('User should be a deliver', function() {

        //Criando a massa de testes do arquivo SgnupFactory.js
        var deliver = signupFactory.deliver();

        signup.go();
        signup.fillForm(deliver);
        signup.submit();

        const expetedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';
        signup.modalContentShouldBe(expetedMessage);

    })

    it('Invalid document', function() {

        var deliver = signupFactory.deliver();

        deliver.cpf  = '00000014dd1'

        signup.go();
        //signup.fillForm(this.deliver.cpf_inv);
        signup.fillForm(deliver);
        signup.submit();
        signup.alertMessageShouldBe('Oops! CPF inválido');

    })

    it('Invalid mail', function() {

        var deliver = signupFactory.deliver()

        deliver.email = 'email.com.br'

        signup.go();
        signup.fillForm(deliver);
        signup.submit();
        signup.alertMessageShouldBe('Oops! Email com formato inválido.');

    })

    //Dessa forma, o cenário não vai parar sua execução caso uma msg esteja errada

    context('Required filds', function() {

        const messages = [
            { field: 'name', output: 'É necessário informar o nome'},
            { field: 'name', output: 'É necessário informar o CPF'},
            { field: 'name', output: 'É necessário informar o email'},
            { field: 'name', output: 'É necessário informar o CEP'},
            { field: 'name', output: 'É necessário informar o número do endereço'},
            { field: 'name', output: 'Selecione o método de entrega'},
            { field: 'name', output: 'Adicione uma foto da sua CNH'}
        ]

        before(function() {
            signup.go();
            signup.submit();
        })

        messages.forEach(function(message) {
            it(`${message.field} is required`, function() {
                signup.alertMessageShouldBe(message.output)
            })
        })
    })

    //Dessa forma, o cenário todo vai ter sua execução paarada caso uma msg esteja errada 
    // it('Required filds', function() {

    //     signup.go();
    //     signup.submit();

    //     signup.alertMessageShouldBe('É necessário informar o nome');
    //     signup.alertMessageShouldBe('É necessário informar o CPF');
    //     signup.alertMessageShouldBe('É necessário informar o email');
    //     signup.alertMessageShouldBe('É necessário informar o CEP');
    //     signup.alertMessageShouldBe('É necessário informar o número do endereço');
    //     signup.alertMessageShouldBe('Selecione o método de entrega');
    //     signup.alertMessageShouldBe('Adicione uma foto da sua CNH');
    // })
})