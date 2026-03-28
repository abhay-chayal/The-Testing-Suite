import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../components/Input';

describe('Input Component', () => {
  test('renders with correct placeholder', () => {
    render(<Input placeholder="Enter name" />);
    const inputElement = screen.getByPlaceholderText(/Enter name/i);
    expect(inputElement).toBeInTheDocument();
  });

  test('displays correctly controlled value', () => {
    render(<Input value="Hello World" onChange={() => {}} />);
    const inputElement = screen.getByDisplayValue(/Hello World/i);
    expect(inputElement).toBeInTheDocument();
  });

  test('calls onChange when typing', () => {
    const handleChange = jest.fn();
    render(<Input value="" onChange={handleChange} placeholder="Type here" />);
    const inputElement = screen.getByPlaceholderText(/Type here/i);
    
    fireEvent.change(inputElement, { target: { value: 'New Value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
