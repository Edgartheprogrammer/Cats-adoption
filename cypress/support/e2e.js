import './commands' 

// Add error handling for uncaught exceptions
Cypress.on('uncaught:exception', (err) => {
  console.error('Uncaught exception:', err);
  return false;
});