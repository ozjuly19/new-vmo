import "@testing-library/jest-dom";
import { render, screen, act } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';

// Unit under test
import DateSelectTable from '../../../app/component/DateSelectTable';

// Mock that fetch guy
fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});

test('renders DateSelectTable', async () => {
  // Mock API response
  fetchMock.mockResponseOnce(JSON.stringify({ clipDatesJson: [{
    id: 1,
    source: "UNITTESTING",
    date: "2022-01-01",
    clipCount: "17",
  },
  {
    id: 2,
    source: "TEST",
    date: "2022-01-08",
    clipCount: "27",
  }]}));

  // Use the asynchronous act to wait for the component to render
  await act(async () => {
    render(<DateSelectTable />);
  });

  // Idk this is the first time I've used unit testing, sooooo plain-text assertions it is
  const linkElement = screen.getByText(/UNITTESTING/i);
  expect(linkElement).toBeInTheDocument();
});