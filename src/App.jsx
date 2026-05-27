import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Commission from './pages/Commission';
import Contribute from './pages/Contribute';
import About from './pages/About';
import NotFound from './pages/NotFound';
import './index.css';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-body">
        <ScrollToTop />
        <aao-site-header mode="compact" dev-url="https://lab.allaboardohio.org"></aao-site-header>
        <aao-notification
          config-url="https://raw.githubusercontent.com/all-aboard-ohio/aao-lab-components/main/banner.json"
        ></aao-notification>
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/commission" element={<Commission />} />
            <Route path="/contribute" element={<Contribute />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

