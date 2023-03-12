///<reference types = "cypress"/>

class LoginPage 
{
    URL()
    {
        cy.visit('https://qa-test.dmzrwbdiwhv33.amplifyapp.com/login')
    }


    FillEmail(value)
    {
        const email = cy.get('#input-live')
        email.type(value);
        return this;
    }

    FillPassword(value)
    {
        const password = cy.get(':nth-child(2) > .form-control')
        password.type(value);
        return this;
    }

    SubmitButton()
    {
        const submit = cy.get('[type="submit"]')
        cy.wait(6000)
        submit.click();
    }
}

export default LoginPage