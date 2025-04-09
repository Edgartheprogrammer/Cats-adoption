/**
 * Gets current theme from header attribute
 * @memberOf Cypress.Chainable#
 * @name getHeaderTheme
 */
Cypress.Commands.add('getHeaderTheme', () => {
  return cy.get('header').invoke('attr', 'data-theme');
});

/**
 * Verifies theme consistency between UI and store
 * @param {string} expectedTheme - Expected theme value
 * @memberOf Cypress.Chainable#
 * @name assertTheme
 */
Cypress.Commands.add('assertTheme', (expectedTheme) => {
  cy.getHeaderTheme().should('equal', expectedTheme);
  cy.window()
    .its('useThemeStore')
    .then((store) => {
      expect(store.getState().theme).to.equal(expectedTheme);
    });
});

/**
 * Resets theme to default light state
 * @memberOf Cypress.Chainable#
 * @name resetTheme
 */
Cypress.Commands.add('resetTheme', () => {
  cy.window().then((win) => {
    win.localStorage.clear();
    if (win.useThemeStore) {
      win.useThemeStore.setState({ theme: 'light' });
    }
  });
});

/**
 * Ensures Zustand store is available
 * @memberOf Cypress.Chainable#
 * @name ensureStore
 */
Cypress.Commands.add('ensureStore', () => {
  cy.window().should((win) => {
    expect(win).to.have.property('useThemeStore');
    expect(win.useThemeStore.getState).to.be.a('function');
  });
});

Cypress.Commands.add('addToFavorites', (index = 0) => {
  cy.get(`[data-testid="favorite-button"]:eq(${index})`).click();
});

Cypress.Commands.add('verifyFavoriteStatus', (index = 0, isFavorited = true) => {
  const expectedSrc = isFavorited ? 'gold-star' : 'white-star';
  cy.get(`[data-testid="favorite-button"]:eq(${index}) img`)
    .should('have.attr', 'src')
    .and('include', expectedSrc);
});

Cypress.Commands.add('navigateSlider', (direction = 'next') => {
  const buttonId = direction === 'next' ? 'slider-next' : 'slider-prev';
  cy.get(`[data-testid="${buttonId}"]`).click();
});

Cypress.Commands.add('resetFavorites', () => {
  cy.window().then((win) => {
    win.localStorage?.clear?.();
    if (win.useFavoritesStore?.getState) {
      win.useFavoritesStore.getState().resetFavorites();
    }
  });
});
