import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders the app with button, a quote and a button', () => {
  render(<App />);
 
  const buttonEL = screen.getByRole('button');
  const imageEl = screen.getByRole('img');
  const textEl = screen.getByText(/Speaker/);

  expect(buttonEL).toBeInTheDocument();
  expect(imageEl).toBeInTheDocument();
  expect(textEl).toBeInTheDocument();





});
