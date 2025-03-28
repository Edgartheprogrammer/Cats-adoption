import { render, screen, waitFor } from '@testing-library/react';
import AllCatsPage from '../../pages/AllCatsPage/AllCatsPage';
import { fetchCats } from '../../services/catService';

// Mock all child components and dependencies
jest.mock('../../components/CatSlider/CatSlider', () => ({ cats }) => (
  <div data-testid="cat-slider">
    {cats.map(cat => (
      <div key={cat.id}>{cat.breeds[0].name}</div>
    ))}
  </div>
));

jest.mock('../../services/catService');

describe('AllCatsPage Unit Tests', () => {
  const mockCats = [
    { 
      id: '1',
      url: 'cat1.jpg',
      breeds: [{ name: 'Siamese' }] 
    }
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // @unitTest - Core rendering
  test('renders loading state initially', () => {
    fetchCats.mockImplementation(() => new Promise(() => {}));
    render(<AllCatsPage />);
    expect(screen.getByText('Loading cats...')).toBeInTheDocument();
  });

  // @unitTest - Successful data fetch
  test('displays cat data after successful fetch', async () => {
    fetchCats.mockResolvedValue(mockCats);
    render(<AllCatsPage />);
    
    await waitFor(() => {
      expect(screen.queryByText('Loading cats...')).not.toBeInTheDocument();
    });
    
    expect(screen.getByText('Siamese')).toBeInTheDocument();
  });

  // @unitTest - Error handling
  test('displays error state when fetch fails', async () => {
    fetchCats.mockRejectedValue(new Error('Failed to fetch'));
    render(<AllCatsPage />);
    
    await waitFor(() => {
      expect(screen.getByText('Failed to fetch')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Retry' })).toBeInTheDocument();
    });
  });

  // @unitTest - Empty state
  test('displays empty state when no cats', async () => {
    fetchCats.mockResolvedValue([]);
    render(<AllCatsPage />);
    
    await waitFor(() => {
      expect(screen.getByText('No cats available')).toBeInTheDocument();
    });
  });
});