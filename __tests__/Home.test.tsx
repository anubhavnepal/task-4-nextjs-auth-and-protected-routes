import { render } from '@testing-library/react';
import Home from '../app/page';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('Home Component', () => {
  test('redirects authenticated users to the dashboard', () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push });

    // Mocking the cookie for authenticated users
    document.cookie = "auth=true"; 

    render(<Home />);

    expect(push).toHaveBeenCalledWith('/dashboard');
  });
});
