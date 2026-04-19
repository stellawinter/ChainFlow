// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainFlow title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainFlow/i);
    expect(titleElement).toBeInTheDocument();
});
