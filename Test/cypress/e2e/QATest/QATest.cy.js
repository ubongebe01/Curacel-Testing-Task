///<reference types = "cypress"/>

import LoginPage from "../../PageObjects/LoginPage";

describe('Login',() => {

    const lp = new LoginPage()
    beforeEach(() => {
        lp.URL()
    })

    it('A user should be able to login with a valid Email and a valid password', () => {
        lp.FillEmail('info@curacel.co');
        lp.FillPassword('4.Success$');
        lp.SubmitButton();
        //cy.get('#swal2-content').should('be.visible')       
    });

    it('A user should not be able to login with a invalid email and a valid password', () => {
        lp.FillEmail('info@curcacel.co');
        lp.FillPassword('4.Success$');
        lp.SubmitButton();
        cy.get('#swal2-title').should('contain', 'Login Failed')
    });

    it('A user should not be able to login with valid email and invalid password', () => {
        lp.FillEmail('info@curacel.co');
        lp.FillPassword('4.Succccess$');
        lp.SubmitButton();
        cy.get('#swal2-title').should('contain', 'Login Failed')
    })
    
})