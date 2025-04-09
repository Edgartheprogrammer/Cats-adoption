/// <reference types="cypress" />

describe('Theme Functionality', { testIsolation: true }, () => {
  beforeEach(() => {
    cy.resetTheme();
    cy.visit('/');
    cy.ensureStore();
  });

  context('Theme Persistence', () => {
    it('should maintain theme state after page reload', () => {
      cy.get('[data-testid="theme-toggle"]')
        .should('be.visible')
        .click();
      
      cy.assertTheme('dark');
      
      cy.reload();
      cy.assertTheme('dark');
      cy.get('header[data-theme="dark"]').should('exist');
    });
  });

  context('Theme Toggling', () => {
    it('should switch from light to dark theme', () => {
      cy.assertTheme('light');
      
      cy.get('[data-testid="theme-toggle"]')
        .should('be.visible')
        .click();
      
      cy.assertTheme('dark');
      cy.get('header[data-theme="dark"]').should('exist');
    });

    it('should switch back to light theme', () => {
      cy.get('[data-testid="theme-toggle"]')
        .should('be.visible')
        .click()
        .click();
      
      cy.assertTheme('light');
      cy.get('header[data-theme="light"]').should('exist');
    });
  });
});