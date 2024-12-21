import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
import HomePage from './pages/HomePage';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <HomePage />
  </BrowserRouter>,
);
