describe('Expo app tabs', () => {
  it('loads and navigates', () => {
    cy.visit('/')
    // automatically goes to the first tab
    cy.location('pathname').should('equal', '/one')
    cy.get('[role=heading]').should('have.text', 'Tab One Title')
    cy.log('navigate to the second tab')
    cy.contains('[role=link]', 'TabTwo').click()
    cy.location('pathname').should('equal', '/two')
    cy.get('[role=heading]:visible')
      .should('have.text', 'Tab Two Title')
  })
})
