import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Article } from '../utils/article';
import { infoUrl } from '../utils/constants';
import InfoCard from './InfoCard';
import ErrorBoundary from './ErrorBoundary';

function MainPage() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(false);

  const getInfo = async () => {
    try {
      const res = await fetch(infoUrl);

      if (!res.ok) {
        setError(true);
      }

      const jsonRes = await res.json();
      setArticles(jsonRes);
    } catch (error) {
      console.log('Error: ', error);
    }
  }

  useEffect(() => {
    getInfo();
  }, [])

  if (error) {
    return <ErrorBoundary />
  }

  return (
    <div className='main-container'>
      {articles.length > 0 && articles.map(({ id, title, summary }: Article) => {
        return (
          <Link data-testid='info-cards' className='info-card' key={id} to={'results?v=' + id}>
            <InfoCard title={title} summary={summary} />
          </Link>
        )
      })}
    </div>
  );
}

export default MainPage;
