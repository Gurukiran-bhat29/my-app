import { render, screen } from "@testing-library/react"
import InfoCard from "../InfoCard"
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from '../../MockData/articlesData.json'

it('should render article on load', () => {
  const article = MOCK_DATA[0];

  const infoCard = render(
    <BrowserRouter>
      <InfoCard title={article.title} summary={article.summary} />
    </BrowserRouter>
  )

  const button = screen.getByText('Exploring the Wonders of the Great Barrier Reef');
  
  expect(button).toBeInTheDocument();

  expect(infoCard).toMatchSnapshot(); // good to write seperate test cases for Snap shot
})