import "@testing-library/jest-dom";
import { render, screen, act } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';

// Unit under test
import ClipsPage from '../../../app/component/ClipsPage';

// Mock that fetch guy
fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});

test('renders ClipsPage', async () => {
  // Mock API response
  fetchMock.mockResponseOnce(JSON.stringify({ clipsJson: [{
    id: 1,
    source: "UNITTESTING",
    date: "2022-01-01", 
    time: "12:00 PM"
  },
  {
    id: 2,
    source: "TEST",
    date: "2022-01-08",
    time: "12:00 PM"
  }]}));

  // Use the asynchronous act to wait for the component to render
  await act(async () => {
    render(<ClipsPage />);
  });

  // Idk this is the first time I've used unit testing, sooooo plain-text assertions it is
  const linkElement = screen.getByText(/UNITTESTING/i);
  expect(linkElement).toBeInTheDocument();
});