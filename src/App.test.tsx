import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Haipeng Liu's first react App./i);
  expect(linkElement).toBeInTheDocument();
});
