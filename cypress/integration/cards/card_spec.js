describe('/cards', () => {
  beforeEach(() => {
    cy.fixture('users.json').as('users')
    cy.visit('/sign_in')
    cy.get('@users').then( (users) => {
      const user = users[1]

      // sign in to seeded user -- slow, would prefer to sign in using a direct request but could not figure out how to
      // navigate the single page app using it's internal routes in enough time
      cy.get('#user_email').type(user.email)
      cy.get('#user_password').type(user.password)
      cy.get('#sign_in_form').submit()

      // conditionally add a board
      // would prefer to simply seed the board state for certain users but I've never used Elixir!
      cy.get('[class=boards-wrapper]').then( (boardsWrapper) => {
        if (boardsWrapper.find('[class=board]').length) {
          Cypress.$('[class=board]').first().click()
        } else {
          cy.get('#add_new_board').click()
          cy.get('#board_name').type('TestBoard')
          cy.get('#new_board_form [type=submit]').click()
        }
      })

      // conditionally add a list -- same as above, would be better to seed this state and use a dynamic test env
      cy.get('[class=lists-wrapper]').then( (listsWrapper) => {
        if (listsWrapper.find('[class=list]').length) {
          Cypress.$('[class=list]').first().click()
        } else {
          cy.get('.list.add-new').click()
          cy.get('#list_name').type('TestList')
          cy.get('#new_list_form [type=submit]').click()
        }
      })
    })
  })

  const addACard = (count) => {
    cy.get('.add-new').click()
    cy.get('#card_name').type('Am I a real card? Or am I just fantasy?')
    cy.get('#new_card_form [type=submit]').click()
    cy.get('[class=card]').should('have.length', count + 1)
  }

  it('adds a new card', () => {
    cy.get('[class=list]').first().within( (list) => {
      if (list.find('[class=card]').length) {
        cy.get('[class=card]').then( (cards) => {
          addACard(cards.length)
        })
      } else {
        addACard(0)
      }
    })
  })
})
