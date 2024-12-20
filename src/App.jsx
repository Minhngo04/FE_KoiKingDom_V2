import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.scss';

const NotFound = () => (
  <div className="container mt-3 alert alert-danger">404. Not found data with your current URL</div>
);

const App = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default App;
