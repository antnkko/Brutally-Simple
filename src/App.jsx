import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import YoungLionsPage from './pages/YoungLionsPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/young-lions" element={<YoungLionsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
