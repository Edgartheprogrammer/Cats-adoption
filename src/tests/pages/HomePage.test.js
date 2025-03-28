// HomePage.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage.jsx';

test('displays welcome text on render', async () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );

  expect(
    await screen.findByText(/give a loving home to a furry friend!/i)
  ).toBeInTheDocument();
});
