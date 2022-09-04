//Criando um módulo 

var faker = require('faker');
var cpf = require('gerador-validador-cpf');

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()


        var data = {
                name: `${firstName} ${lastName}`,
                cpf: cpf.generate(),
                email: faker.internet.email(firstName),
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

        return data
    }
}