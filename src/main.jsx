import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
import HomePage from './pages/HomePage';
import { BrowserRouter } from 'react-router-dom';
import Header from '../src/components/Home/Header';
import Footer from '../src/components/Home/Footer';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
    <HomePage />
    <Footer />
  </BrowserRouter>,
);
