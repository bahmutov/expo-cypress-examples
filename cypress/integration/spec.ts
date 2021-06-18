describe('Expo app tabs', () => {
  it('loads and navigates', () => {
    cy.visit('/')
    // automatically goes to the first tab
    cy.location('pathname').should('equal', '/one')
    cy.contains('[role=heading]', 'Tab One Title')

    cy.log('**going to the second tab**')
    cy.contains('[role=link]', 'TabTwo').click()
    cy.location('pathname').should('equal', '/two')
    cy.contains('[role=heading]', 'Tab Two Title')

    // alternative selector
    cy.get('[role=heading]:visible')
      .should('have.text', 'Tab Two Title')
  })

  it('goes to not found tab', () => {
    cy.visit('/two')
    cy.location('pathname').should('equal', '/two')

    cy.visit('/unknown')
    cy.location('pathname').should('equal', '/NotFound')
    cy.contains('Go to home').click()
    cy.location('pathname').should('equal', '/one')
  })
})
