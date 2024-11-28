/// <reference types="cypress" />

describe('Testes para a agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app')
    })

    it('Deve renderizar a lista de contatos', () => {
        cy.get('ul').should('have.length', 3)
    })

    it('Deve adicionar um novo contato', () => {
        cy.get('[type="text"]').type('David')
        cy.get('[type="email"]').type('david@email.com')
        cy.get('[type="tel"]').type('11 123456789')
        cy.get('.adicionar').click()
        cy.get('ul').should('have.length', 4)
    })

    it('Deve remover um contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
        cy.get('ul').should('have.length', 3)
    })

    it('Deve iniciar a edição de um contato e cancelar', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('.cancelar').click()
        const textos = ['gian Souza', '11912345678', 'gian@ebac.com.br']
        cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR').then($el => {
            textos.forEach(texto => {
                expect($el.text()).to.include(texto)
            })
        })
    })

    it('Deve editar um contato', () => {
        cy.get(':nth-child(3) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear().type('Nome alterado')
        cy.get('[type="email"]').clear().type('teste@email.com')
        cy.get('[type="tel"]').clear().type('11 123456789')
        cy.get('.alterar').click()
        const textos = ['Nome alterado', 'teste@email.com', '11 123456789']
        cy.get(':nth-child(3) > .sc-dmqHEX > .sc-eDDNvR').then($el => {
            textos.forEach(texto => {
                expect($el.text()).to.include(texto)
            })
        })
    })
})