
describe('cadastro', () => {
    it('Usuário deve se torar um entregador', () => {
        cy.viewport(1440, 900);
        cy.visit('https://buger-eats.vercel.app');

        cy.get('a[href="/deliver"]').click();

        //Essa parte é um checkpoint para garantir que o usuário pelo menos esteja na página certa
        //Não garante que o usuário se torne um entregador
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas');

        //Essa variável é um obejto JS nativo
        var entregador = {
            nome: 'Maria Eduarda',
            cpf: '00000014141',
            email: 'duda@gmail.com',
            whatsapp: '11999999999',
            endereco: {
                cep: '06765000',
                rua: 'Estrada São Francisco',
                numero: '1000',
                complemnto: 'Ap 45',
                bairo: 'Parque Taboão',
                cidade_uf: 'Taboão da Serra/SP'
            },
            metodo_entrega: 'Moto',

        }

        cy.get('input[name="name"]').type(entregador.nome);
        cy.get('input[name="cpf"]').type(entregador.cpf);
        cy.get('input[name="email"]').type(entregador.email);
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp);

        cy.get('input[name="postalcode"]').type(entregador.endereco.cep);
        cy.get('input[type="button"][value="Buscar CEP"]').click();

        

        cy.get('input[name="address-number"]').type(entregador.endereco.numero);
        cy.get('input[name="address-details"]').type(entregador.endereco.complemnto);

        cy.get('input[name="address"]').should('have.value', entregador.endereco.rua);
        cy.get('input[name="address"]').should('be.disabled');

        cy.get('input[name="district"]').should('have.value', entregador.endereco.bairo);
        cy.get('input[name="district"]').should('be.disabled');

        cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidade_uf);
        cy.get('input[name="city-uf"]').should('be.disabled');

        //Clicando no item de lista cujo o método de entrega seja igual ao que colcamos na massa
        
        cy.contains('.delivery-method li', entregador.metodo_entrega).click();


    })
})