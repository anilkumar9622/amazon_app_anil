import { render, screen } from '@testing-library/react';
import ItemsPay from './itemsPay';

test('renders learn react link', () => {
  render(<ItemsPay />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
