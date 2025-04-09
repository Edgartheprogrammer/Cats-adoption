// AllCatsPage.test.js
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AllCatsPage from '../../pages/AllCatsPage/AllCatsPage';
import { fetchCats } from '../../services/catService';

jest.mock('../../components/CatSlider/CatSlider', () => ({ cats }) => (
  <div data-testid="cat-slider">
    {cats?.map((cat) => (
      <div key={cat.id}>{cat.breeds[0]?.name}</div>
    ))}
  </div>
));

jest.mock('../../components/Breadcrumbs/Breadcrumbs.jsx', () => () => (
  <div data-testid="breadcrumbs-mock" />
));

jest.mock('../../services/catService');

describe('AllCatsPage Unit Tests', () => {
  const mockCats = [{
    id: '1',
    url: 'cat1.jpg',
    breeds: [{ name: 'Siamese' }],
  }];

  const renderWithRouter = (ui) => render(
    <MemoryRouter>
      {ui}
    </MemoryRouter>
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders loading state initially', () => {
    fetchCats.mockImplementation(() => new Promise(() => {}));
    renderWithRouter(<AllCatsPage />);
    expect(screen.getByText('Loading cats...')).toBeInTheDocument();
  });

  test('displays cat data after successful fetch', async () => {
    fetchCats.mockResolvedValue(mockCats);
    renderWithRouter(<AllCatsPage />);

    await waitFor(() => {
      expect(screen.queryByText('Loading cats...')).not.toBeInTheDocument();
    });

    expect(screen.getByText('Siamese')).toBeInTheDocument();
  });

  test('displays error state when fetch fails', async () => {
    fetchCats.mockRejectedValue(new Error('Failed to fetch'));
    renderWithRouter(<AllCatsPage />);

    await waitFor(() => {
      expect(screen.getByText('Failed to fetch cats')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Retry' })).toBeInTheDocument();
    });
  });

  test('displays empty state when no cats', async () => {
    fetchCats.mockResolvedValue([]);
    renderWithRouter(<AllCatsPage />);

    await waitFor(() => {
      expect(screen.getByText('No cats available')).toBeInTheDocument();
    });
  });
});