import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'articles', element: <ArticlePage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;