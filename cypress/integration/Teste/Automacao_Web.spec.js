/// <reference types="cypress"/>

describe('Automação_Web', () => {
    it('Clique em todos os 3 botões apresentados em tela', () => {
        cy.visit('https://the-internet.herokuapp.com/challenging_dom')

        cy.get('4dc5d20-cd40-013a-7595-5e6ff3f5ca72').click();
        cy.get('4dc89b0-cd40-013a-7596-5e6ff3f5ca72').click();
        cy.get('4dc8cc0-cd40-013a-7597-5e6ff3f5ca72').click();
        
    });

    it('Clicar em todos os botões edit e delete da grid apresentada.', () => {
        
       
        //Botão Edit 
        cy.get(':nth-child(1) > :nth-child(7) > [href="#edit"]').click();
        cy.get(':nth-child(2) > :nth-child(7) > [href="#edit"]').click();
        cy.get(':nth-child(3) > :nth-child(7) > [href="#edit"]').click();
        cy.get(':nth-child(4) > :nth-child(7) > [href="#edit"]').click();
        cy.get(':nth-child(5) > :nth-child(7) > [href="#edit"]').click();
        cy.get(':nth-child(6) > :nth-child(7) > [href="#edit"]').click();
        cy.get(':nth-child(7) > :nth-child(7) > [href="#edit"]').click();
        cy.get(':nth-child(8) > :nth-child(7) > [href="#edit"]').click();
        cy.get(':nth-child(9) > :nth-child(7) > [href="#edit"]').click();
        cy.get(':nth-child(10) > :nth-child(7) > [href="#edit"]').click();

         //Botão Delete 
         cy.get(':nth-child(1) > :nth-child(7) > [href="#delete"]').click();
         cy.get(':nth-child(2) > :nth-child(7) > [href="#delete"]').click();
         cy.get(':nth-child(3) > :nth-child(7) > [href="#delete"]').click();
         cy.get(':nth-child(4) > :nth-child(7) > [href="#delete"]').click();
         cy.get(':nth-child(5) > :nth-child(7) > [href="#delete"]').click();
         cy.get(':nth-child(6) > :nth-child(7) > [href="#delete"]').click();
         cy.get(':nth-child(7) > :nth-child(7) > [href="#delete"]').click();
         cy.get(':nth-child(8) > :nth-child(7) > [href="#delete"]').click();
         cy.get(':nth-child(9) > :nth-child(7) > [href="#delete"]').click();
         cy.get(':nth-child(10) > :nth-child(7) > [href="#delete"]').click();
         
         


    });
    
});

