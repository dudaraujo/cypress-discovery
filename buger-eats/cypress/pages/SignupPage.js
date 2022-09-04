
class SigupPage {

    go() {
        //cy.viewport(1440, 900);
        //cy.visit('https://buger-eats.vercel.app');
        cy.visit('/');

        cy.get('a[href="/deliver"]').click();

        //Essa parte é um checkpoint para garantir que o usuário pelo menos esteja na página certa
        //Não garante que o usuário se torne um deliver
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas');
    }

    fillForm(deliver) {
        cy.get('input[name="fullName"]').type(deliver.name);
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

    }

    submit() {
        cy.get('form button[type="submit"]').click();
    }

    modalContentShouldBe(expetedMessage) {
        cy.get('.swal2-container .swal2-html-container').should('have.text', expetedMessage);
    }

    alertMessageShouldBe(expetedMessage) {
        cy.get('.alert-error').should('have.text', expetedMessage)
    }
}

// Quando exportamos assim, temos que instanciar a classe no arquivo de cadastro
//export default SigupPage;

//Quando exportamos assim, não precisamor instanciar a class depois
export default new SigupPage;



