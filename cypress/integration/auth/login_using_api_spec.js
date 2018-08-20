describe('/auth', () => {
  it('gets a valid auth token', () => {
    cy.fixture('users.json').as('users')
    cy.get('@users').then( (users) => {
      const user = users[1]
      cy.request({
        method: 'POST',
        url: '/api/v1/sessions',
        body: {
          session: {
          email: user.email,
          password: user.password
          }
        }
      }).then( (resp) => {
        expect(resp.body).to.have.property('jwt')
      })
    })
  })
})
