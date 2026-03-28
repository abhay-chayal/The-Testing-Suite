import { render, screen } from '@testing-library/react';
import Card from '../components/Card';

describe('Card Component', () => {
  test('renders title and description from props', () => {
    const testTitle = 'My Test Card';
    const testDesc = 'This is a test description for the card.';
    
    render(<Card title={testTitle} description={testDesc} />);
    
    const titleElement = screen.getByText(testTitle);
    const descElement = screen.getByText(testDesc);
    
    expect(titleElement).toBeInTheDocument();
    expect(descElement).toBeInTheDocument();
  });

  test('has correct styling classes', () => {
    const { container } = render(<Card title="Title" description="Desc" />);
    const cardDiv = container.firstChild;
    expect(cardDiv).toHaveClass('shadow-sm');
  });
});
