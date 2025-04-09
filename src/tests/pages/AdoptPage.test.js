// AdoptPage.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import { MemoryRouter } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({ state: null }),
  useNavigate: () => jest.fn(),
}));

test('does not allow submitting the form with empty fieldsи полями', async () => {
  render(
    <MemoryRouter>
      <ContactForm />
    </MemoryRouter>
  );

  const submitButton = screen.getByRole('button', { name: /submit adoption request/i });

  fireEvent.click(submitButton);

  await screen.findByText(/name needs 2\+ letters/i);
  await screen.findByText(/invalid email/i);
  await screen.findByText(/9-digit number required/i);
  await screen.findByText(/message needs 20\+ characters/i);
});