// HomePage.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage.jsx';

// Mock the Zustand store
// jest.mock('../../stores/favoritesStore.js', () => ({
//   __esModule: true,
//   default: jest.fn(() => ({
//     favorites: [],
//     addFavorite: jest.fn(),
//     removeFavorite: jest.fn()
//   }))
// }));

// Mock any React Router components if needed
// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useNavigate: () => jest.fn()
// }));

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
