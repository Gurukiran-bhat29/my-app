import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Article } from '../utils/article';
import { IndividualUrl } from '../utils/constants';
import { useSearchParams } from "react-router-dom";
import ErrorBoundary from './ErrorBoundary';

const initialVal = {
  id: '',
  title: '',
  summary: '',
  fullText: ''
}

function DetailContent() {
  const [selectedArticle, setSelectedArticles] = useState<Article>(initialVal);
  const [error, setError] = useState(false);

  const [searchParam] = useSearchParams();
  const navigate = useNavigate();

  const showContent = async (id: any) => {
    try {
      const res = await fetch(IndividualUrl + id);

      if (!res.ok) {
        setError(true);
      }

      const jsonRes = await res.json();
      setSelectedArticles(jsonRes)
    } catch (error) {
      console.log('Error: ', error);
    }
  }

  useEffect(() => {
    showContent(searchParam.get('v'));
  }, [searchParam])

  if (error) {
    return <ErrorBoundary />
  }

  const { title, summary, fullText } = selectedArticle;


  return (
    <div className='content-container'>
      {title && (
        <>
          <div className='detail-content'>
            <h1>{title}</h1>
            <h3>{summary}</h3>
            <p className='full-text'>{fullText}</p>
          </div>
          <button className='back-button' onClick={() => navigate('/')}>Back</button>
        </>
      )}
    </div>
  );
}

export default DetailContent;
