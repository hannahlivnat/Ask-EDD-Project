context('Actions', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Opens automatically to help center page', () => {

    cy.get('.Home_container__1EcsU')
      .should('contain', 'Welcome to Next.js!')
  })
});