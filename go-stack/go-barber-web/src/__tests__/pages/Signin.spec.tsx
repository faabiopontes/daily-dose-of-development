import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import SignIn from '../../pages/Signin';

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }: { children: React.ReactNode }) => children,
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
  };
});

jest.mock('../../hooks/auth', () => ({
  useAuth: () => ({
    signIn: jest.fn(),
  }),
}));

jest.mock('../../hooks/toast', () => ({
  useToast: () => ({
    addToast: jest.fn(),
  }),
}));

describe('SignIn Page', () => {
  it('should be able to sign in', async () => {
    const { getByPlaceholderText, getByText } = render(<SignIn />);

    const emailField = getByPlaceholderText('E-mail');
    const passwordField = getByPlaceholderText('Senha');
    const buttonElement = getByText('Entrar');

    fireEvent.change(emailField, {
      target: { value: 'faabiopontes@gmail.com' },
    });
    fireEvent.change(passwordField, {
      target: { value: '12345678' },
    });

    fireEvent.click(buttonElement);

    await waitFor(() => expect(mockedHistoryPush).toHaveBeenCalledWith('/dashboard'));
  });

  it('should be rendered', () => {
    const component = render(<SignIn />);
    expect(component).toMatchSnapshot();
  });
});
