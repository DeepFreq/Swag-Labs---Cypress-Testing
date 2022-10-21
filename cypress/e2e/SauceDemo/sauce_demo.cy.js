// import { should } from "chai";

describe('SauceDemo Basic e2e', () => {
    it('The home page will be visible', () => {
        cy.visit('/')
        cy.get('.bot_column').should('be.visible')
        cy.get('.login_logo').should('be.visible')
        cy.get('[data-test="login-button"]').contains('Login')
    });
    it('Success login with standard_user', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.wait(1000)
    });
    it('Add to cart inventory', () => {
        cy.get('.app_logo').should('be.visible')
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
        cy.wait(1000)
        cy.get('.shopping_cart_link').click()
        cy.wait(1000)
    });
    it('Comprobe the checkout', () => {
        cy.get('.app_logo').should('be.visible')
        cy.get('#checkout').click()
        cy.wait(1000)
    });
    it('Fill information on checkout', () => {
        cy.get('#first-name').type('Falsename')
        cy.get('#last-name').type('Otherfalse')
        cy.get('#postal-code').type('2000')
        cy.get('#continue').click()
        cy.wait(1000)
    });
    it('Finish the buy', () => {
        cy.get('#finish').click()
        cy.url().contains('https://www.saucedemo.com/checkout-complete.html')
    });
});