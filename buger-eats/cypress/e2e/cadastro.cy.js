
describe('cadastro', () => {
    it('Usuário deve se torar um deliver', () => {
        cy.viewport(1440, 900);
        cy.visit('https://buger-eats.vercel.app');

        cy.get('a[href="/deliver"]').click();

        //Essa parte é um checkpoint para garantir que o usuário pelo menos esteja na página certa
        //Não garante que o usuário se torne um deliver
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas');

        //Essa variável é um obejto JS nativo
        var deliver = {
            name: 'Maria Eduarda',
            cpf: '00000014141',
            email: 'duda@gmail.com',
            whatsapp: '11999999999',
            address: {
                cep: '06765000',
                street: 'Estrada São Francisco',
                number: '1000',
                details: 'Ap 45',
                district: 'Parque Taboão',
                city_state: 'Taboão da Serra/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'

        }

        cy.get('input[name="name"]').type(deliver.name);
        cy.get('input[name="cpf"]').type(deliver.cpf);
        cy.get('input[name="email"]').type(deliver.email);
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp);

        cy.get('input[name="postalcode"]').type(deliver.address.cep);
        cy.get('input[type="button"][value="Buscar CEP"]').click();

        

        cy.get('input[name="address-number"]').type(deliver.address.number);
        cy.get('input[name="address-details"]').type(deliver.address.details);

        cy.get('input[name="address"]').should('have.value', deliver.address.street);
        cy.get('input[name="address"]').should('be.disabled');

        cy.get('input[name="district"]').should('have.value', deliver.address.district);
        cy.get('input[name="district"]').should('be.disabled');

        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state);
        cy.get('input[name="city-uf"]').should('be.disabled');

        //Clicando no item de lista cujo o método de entrega seja igual ao que colcamos na massa
        cy.contains('.delivery-method li', deliver.delivery_method).click();

        //Concatenando o nome do arquivo com a pasta em que ele está inserido
        //Se o arquivo estivesse diretamente em em fixture, era só colocaro nome dele
        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh);

        cy.get('form button[type="submit"]').click();

        const expetedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';

        cy.get('.swal2-container .swal2-html-container').should('have.text', expetedMessage);


    })

    it('CPF incorreto', () => {
        cy.viewport(1440, 900);
        cy.visit('https://buger-eats.vercel.app');

        cy.get('a[href="/deliver"]').click();

        //Essa parte é um checkpoint para garantir que o usuário pelo menos esteja na página certa
        //Não garante que o usuário se torne um deliver
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas');

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

        cy.get('input[name="name"]').type(deliver.name);
        cy.get('input[name="cpf"]').type(deliver.cpf);
        cy.get('input[name="email"]').type(deliver.email);
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp);

        cy.get('input[name="postalcode"]').type(deliver.address.postalcode);
        cy.get('input[type="button"][value="Buscar CEP"]').click();

        

        cy.get('input[name="address-number"]').type(deliver.address.number);
        cy.get('input[name="address-details"]').type(deliver.address.details);

        cy.get('input[name="address"]').should('have.value', deliver.address.street);
        cy.get('input[name="address"]').should('be.disabled');

        cy.get('input[name="district"]').should('have.value', deliver.address.district);
        cy.get('input[name="district"]').should('be.disabled');

        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state);
        cy.get('input[name="city-uf"]').should('be.disabled');

        //Clicando no item de lista cujo o método de entrega seja igual ao que colcamos na massa
        cy.contains('.delivery-method li', deliver.delivery_method).click();

        //Concatenando o nome do arquivo com a pasta em que ele está inserido
        //Se o arquivo estivesse diretamente em em fixture, era só colocaro nome dele
        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh);

        cy.get('form button[type="submit"]').click();

        cy.get('.alert-error').should('have.text', 'Oops! CPF inválido')

    })
})