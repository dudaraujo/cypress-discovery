// Quando importamos assim, temos que instanciar a classe no arquivo de cadastro
//import SigupPage from '../pages/SignupPage';

//Quando exportamos assim, não precisamor instanciar a class depois
import signup from '../pages/SignupPage';

describe('Signup', () => {

    beforeEach(function() {
        //Como é um função assincrona, e preciso passar uma promessa (then)
        //Para pegar o resultado dessa promessa eu uso o this
        //This pe uma palavra reservada para eu criar um variável de contexto
        cy.fixture('deliver').then((massa) => {

            //Armazenando todo o conteudo da massa de testes na variável massa
            //Uso o this para ter acesso a essa informação nos outros casos de teste
            this.deliver = massa;
        })
    })

    //Para eu conseguir utilziar as funções que foram instanciadas, 
    //Eu preciso instanciar a class SigupPage 
    //var signup = new SigupPage();

    it('User should be a deliver', function() {

        signup.go();
        signup.fillForm(this.deliver.signup);
        signup.submit();

        const expetedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';
        signup.modalContentShouldBe(expetedMessage);

    })

    it('Invalid document', function() {

        signup.go();
        signup.fillForm(this.deliver.cpf_inv);
        signup.submit();
        signup.alertMessageShouldBe('Oops! CPF inválido');

    })

    it('Invalid mail', function() {

        signup.go();
        signup.fillForm(this.deliver.mail_inv);
        signup.submit();
        signup.alertMessageShouldBe('Oops! Email com formato inválido.');

    })
})