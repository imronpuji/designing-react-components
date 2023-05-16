
/// <reference types="cypress"/>


describe('shoud get title and description', () => {
  beforeEach(() => {
    cy.visit('/')

  })
  it('passes', () => {
    cy.get("[data-cy=Title]")
    cy.get("[data-cy=Description]")
  })
})