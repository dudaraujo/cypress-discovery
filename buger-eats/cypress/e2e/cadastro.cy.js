import SigupPage from '../pages/SignupPage';

describe('cadastro', () => {
    it('Usuário deve se torar um deliver', () => {
       
        //Essa variável é um obejto JS nativo
        var deliver = {
            name: 'Maria Eduarda',
            cpf: '00000014141',
            email: 'duda@gmail.com',
            whatsapp: '11999999999',
            address: {
                postalcode: '06765000',
                street: 'Estrada São Francisco',
                number: '1000',
                details: 'Ap 45',
                district: 'Parque Taboão',
                city_state: 'Taboão da Serra/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'

        }

        //Para eu conseguir utilziar as funções que foram instanciadas, 
        //Eu preciso instanciar a class SigupPage 
        var signup = new SigupPage();

        signup.go();
        signup.fillForm(deliver);
        signup.submit();

        const expetedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';
        signup.modalContentShouldBe(expetedMessage);


    })

    it('CPF incorreto', () => {

        //Essa variável é um obejto JS nativo
        var deliver = {
            name: 'Maria Eduarda',
            cpf: '00000014dd1',
            email: 'duda@gmail.com',
            whatsapp: '11999999999',
            address: {
                postalcode: '06765000',
                street: 'Estrada São Francisco',
                number: '1000',
                details: 'Ap 45',
                district: 'Parque Taboão',
                city_state: 'Taboão da Serra/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'

        }

        var signup = new SigupPage();

        signup.go();
        signup.fillForm(deliver);
        signup.submit();
        signup.alertMessageShouldBe('Oops! CPF inválido');

    })
})