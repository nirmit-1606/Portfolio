import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Portfolio" element={<Home />} />
        <Route path="/Portfolio/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}
