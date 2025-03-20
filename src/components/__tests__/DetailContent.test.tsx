import { render, screen, waitFor } from "@testing-library/react"
import DetailContent from "../DetailContent"
import { BrowserRouter } from "react-router-dom"
import MOCK_DATA from '../../MockData/article.json';

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

it('should render article details with back button', async () => {
  render(
    <BrowserRouter>
      <DetailContent />
    </BrowserRouter>
  )

  expect(screen.getByTestId('article-contents'));

  const button = await waitFor(() => screen.getByRole("button"));

  expect(button).toBeInTheDocument();
})