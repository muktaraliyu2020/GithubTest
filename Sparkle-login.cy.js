import Login from "../PageObject/Sparkle-Login.js";

describe('pom', () => {
    //General approach
    it('verify login page1', () => {
        cy.visit('https://virtualaccounts.uat.sparkle.ng/login')
        cy.get('#email').type('Bull@sharklasers.com')
        cy.get('#password').type('Shola1010')
        cy.get("button[type='submit']").click()
        cy.get('.page-title').should('have.text', 'Overview')
    })

    //using pom
    it.only('verify login page2', () => {
        cy.visit('https://virtualaccounts.uat.sparkle.ng/login')
        const ln=new Login();
        ln.setEmailAddress("Bull@sharklasers.com")
        ln.setPassword("Shola1010")
        ln.clickLogin(),
        ln.verifyLogin()
        // cy.get('#email').type('Bull@sharklasers.com')
        // cy.get('#password').type('Shola1010')
        // cy.get("button[type='submit']").click()
        // cy.get('.page-title').should('have.text', 'Overview')
    })

    it('verify Settings Page', () => {
        cy.get('#settings').click()
    })
})