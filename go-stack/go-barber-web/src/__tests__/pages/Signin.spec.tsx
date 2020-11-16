import React from 'react';
import { render } from '@testing-library/react';
import SignIn from '../../pages/Signin';

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }: { children: React.ReactNode }) => children,
    useHistory: () => ({ push: jest.fn() }),
  };
});

describe('SignIn Page', () => {
  it('should be able to sign in', () => {
    const { debug } = render(<SignIn />);

    debug();
  });

  it('should be rendered', () => {
    const component = render(<SignIn />);
    expect(component).toMatchSnapshot();
  });
});
