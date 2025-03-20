import { render, screen, waitFor } from "@testing-library/react"
import MainPage from "../MainPage"
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from '../../MockData/articlesData.json'

beforeEach(() => {
  jest.clearAllMocks();
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve(MOCK_DATA),
    })
  ) as jest.Mock;
});

test('should render articles list on load', async () => {
  const articleContainer = render(
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  );
  
  await waitFor(() => expect(screen.getAllByTestId('info-cards').length).toBe(10));

  expect(articleContainer).toMatchSnapshot();
})
