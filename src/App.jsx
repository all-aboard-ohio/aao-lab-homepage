import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Commission from './pages/Commission';
import Contribute from './pages/Contribute';
import About from './pages/About';
import './index.css';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col font-body">
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
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;

