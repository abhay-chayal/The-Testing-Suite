import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../components/Counter';

describe('Counter Component (Interaction Tests)', () => {
  test('renders initial count of 0', () => {
    render(<Counter />);
    const countElement = screen.getByTestId('counter-value');
    expect(countElement).toHaveTextContent('0');
  });

  test('increments count when clicking Increment button', async () => {
    const user = userEvent.setup();
    render(<Counter />);
    
    const incrementBtn = screen.getByRole('button', { name: /Increment/i });
    const countElement = screen.getByTestId('counter-value');
    
    await user.click(incrementBtn);
    expect(countElement).toHaveTextContent('1');
    
    await user.click(incrementBtn);
    expect(countElement).toHaveTextContent('2');
  });

  test('decrements count when clicking Decrement button', async () => {
    const user = userEvent.setup();
    render(<Counter />);
    
    const decrementBtn = screen.getByRole('button', { name: /Decrement/i });
    const countElement = screen.getByTestId('counter-value');
    
    await user.click(decrementBtn);
    expect(countElement).toHaveTextContent('-1');
  });
});
