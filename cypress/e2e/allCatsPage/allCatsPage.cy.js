/// <reference types="cypress" />

describe('All Cats Page', { testIsolation: true }, () => {
  const mockCats = Array.from({ length: 10 }, (_, i) => ({
    id: `cat-${i}`,
    url: `https://cdn2.thecatapi.com/images/${i + 1}.jpg`,
    breeds: [
      {
        name: `Fluffy ${i + 1}`,
        description: 'A very affectionate cat that loves cuddles. '.repeat(10),
      },
    ],
  }));

  beforeEach(() => {
    cy.intercept('GET', '**/images/search*', {
      statusCode: 200,
      body: mockCats,
      delay: 100,
    }).as('apiRequest');
    cy.visit('/allCats');
    cy.wait('@apiRequest', { timeout: 10000 });
  });

  context('Error Handling', () => {
    it('should show server errors', () => {
      cy.intercept('GET', '**/images/search*', {
        statusCode: 500,
        body: { error: 'Server error' },
        delay: 100,
      }).as('serverError');

      cy.reload();
      cy.wait('@serverError', { timeout: 10000 });

      cy.get('[data-testid="error-state"]')
        .should('be.visible')
        .and('contain', 'Server error');
    });

    it('should handle network errors', () => {
      cy.intercept('GET', '**/images/search*', {
        forceNetworkError: true,
        delay: 100,
      }).as('networkError');

      cy.reload();
      cy.wait('@networkError', { timeout: 10000 });

      cy.get('[data-testid="error-state"]')
        .should('be.visible')
        .and('contain', 'Failed to fetch cats');
    });
  });

  context('Cat Interactions', () => {
    it('should toggle and persist favorites', () => {
      cy.get('[data-testid="favorite-button"]').first().as('favoriteBtn');
      cy.get('@favoriteBtn').click();

      cy.reload();
      cy.wait('@apiRequest');
      cy.get('[data-testid="favorite-button"]')
        .first()
        .as('favoriteBtnReloaded');

      cy.get('@favoriteBtnReloaded')
        .find('img')
        .should('have.attr', 'src', '/src/assets/icons/gold-star.png');

      cy.get('@favoriteBtnReloaded').click();
      cy.get('@favoriteBtnReloaded')
        .find('img')
        .should('have.attr', 'src', '/src/assets/icons/white-star.png');
    });

    it('should navigate to adoption page with valid state', () => {
      cy.get('[data-testid="adopt-button"]').first().click();
      cy.location('pathname').should('eq', '/adopt');
      cy.window().then((win) => {
        const navigationState = win.history.state?.usr || win.history.state;
        expect(navigationState).to.have.property('cat');
        expect(navigationState.cat.breeds[0].name).to.eq('Fluffy 1');
      });
    });
  });

  context('Slider Functionality', () => {
    it('should handle keyboard navigation', () => {
      cy.get('[data-testid="cat-card"]')
        .first()
        .should('have.attr', 'tabIndex', '0')
        .focus({ force: true })
        .type('{rightarrow}');

      cy.get('[data-testid="breed-name"]')
        .first()
        .should('contain', 'Fluffy 2');
    });
  });

  context('Breadcrumbs', () => {
    it('should display and function correctly', () => {
      cy.get('[data-testid="breadcrumb-home"]')
        .should('contain', 'Home')
        .click();

      cy.location('pathname').should('eq', '/');
      cy.go('back');
      cy.get('[data-testid="breadcrumb-current"]')
        .should('contain', 'All Cats')
        .and('be.visible');
    });
  });
});
