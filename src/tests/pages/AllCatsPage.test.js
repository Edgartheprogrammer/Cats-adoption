import { render, screen, waitFor } from '@testing-library/react';
import AllCatsPage from '../../pages/AllCatsPage/AllCatsPage';
import { fetchCats } from '../../services/catService';

jest.mock('../../services/catService');

describe('AllCatsPage', () => {
  const mockCats = [
    { 
      id: '1', 
      url: 'cat1.jpg', 
      breeds: [{ name: 'Siamese', description: 'Description' }] 
    },
    { 
      id: '2', 
      url: 'cat2.jpg', 
      breeds: [{ name: 'Persian', description: 'Description' }] 
    }
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('displays cats after successful fetch', async () => {
    // Mock the resolved value with delay to simulate real API
    fetchCats.mockResolvedValue(mockCats);
    
    render(<AllCatsPage />);
    
    // Wait for loading to disappear first
    await waitFor(() => {
      expect(screen.queryByText('Loading cats...')).not.toBeInTheDocument();
    });
    
    // Then verify content
    expect(screen.getByText('Available Cats')).toBeInTheDocument();
    expect(screen.getByText('Siamese')).toBeInTheDocument();
    expect(screen.getByText('Persian')).toBeInTheDocument();
  });

  test('displays loading state initially', () => {
    fetchCats.mockImplementation(() => new Promise(() => {}));
    render(<AllCatsPage />);
    expect(screen.getByText('Loading cats...')).toBeInTheDocument();
  });

  test('displays error message when fetch fails', async () => {
    fetchCats.mockRejectedValue(new Error('Network error'));
    render(<AllCatsPage />);
    
    await waitFor(() => {
      expect(screen.getByText('Network error')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /retry/i })).toBeInTheDocument();
    });
  });
});