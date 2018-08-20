describe('/auth', () => {
  beforeEach(() => {
    cy.fixture('users.json').as('users')
    cy.visit('/sign_in')
  })

  it('displays the phoenix logo', () => {
    cy.get('.logo').should('be.visible')
  })

  it('requires an email address', () => {
    cy.get('#user_email').should('have.attr', 'required')
    cy.get('#user_password').type('password')
    cy.get('#sign_in_form').submit()
    cy.get('.error').should('be.visible') // not handled - fails as server returns 500
    cy.get('.error').contains('Invalid email or password')
  })

  it('requires a password', () => {
    cy.get('#user_password').should('have.attr', 'required')
    cy.get('#user_email').type('email@phoenix-trello.com')
    cy.get('#sign_in_form').submit()
    cy.get('.error').should('be.visible')
    cy.get('.error').contains('Invalid email or password')
  })

  it('successfully signs in with a valid username and password', () => {
    cy.get('@users').then( (users) => {
      const user = users[0]

      cy.get('#user_email').type(user.email)
      cy.get('#user_password').type(user.password)
      cy.get('#sign_in_form').submit()
      cy.url().should('eq', 'http://localhost:4000/')
    })
  })
})
