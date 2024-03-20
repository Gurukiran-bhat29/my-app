import './App.css';
import { lazy, Suspense } from 'react';
import MainPage from './components/MainPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
const DetailContent = lazy(() => import('./components/DetailContent'));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorBoundary />
  },
  {
    path: 'results',
    element:
      <Suspense fallback="Loading..!!">
        <DetailContent />
      </Suspense>,
  }
])

function App() {
  return (
    <RouterProvider router={appRouter} />
  )
}

export default App;
