import { render, fireEvent } from '@testing-library/react';
import Form from '../app/components/Form';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('Form Component', () => {
  test('redirects to dashboard after successful login', () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push });

    const { getByPlaceholderText, getByText } = render(<Form />);
    const usernameInput = getByPlaceholderText('user');
    const passwordInput = getByPlaceholderText('Same as username');
    const loginButton = getByText('LOGIN');

    fireEvent.change(usernameInput, { target: { value: 'user' } });
    fireEvent.change(passwordInput, { target: { value: 'user' } });
    fireEvent.click(loginButton);

    expect(push).toHaveBeenCalledWith('/dashboard');
  });

  test('shows alert on invalid credentials', () => {
    global.alert = jest.fn();
    const { getByPlaceholderText, getByText } = render(<Form />);
    const usernameInput = getByPlaceholderText('user');
    const passwordInput = getByPlaceholderText('Same as username');
    const loginButton = getByText('LOGIN');

    fireEvent.change(usernameInput, { target: { value: 'wronguser' } });
    fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } });
    fireEvent.click(loginButton);

    expect(global.alert).toHaveBeenCalledWith('Invalid credentials');
  });
});
