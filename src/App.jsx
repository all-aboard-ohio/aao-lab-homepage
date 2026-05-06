import Header from './components/Header';
import Hero from './components/Hero';
import ProjectGallery from './components/ProjectGallery';
import WhyItMatters from './components/WhyItMatters';
import Community from './components/Community';
import DevDocs from './components/DevDocs';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-body">
      <aao-site-header mode="compact"></aao-site-header>
      <aao-notification
        config-url="https://raw.githubusercontent.com/all-aboard-ohio/aao-dev-components/main/banner.json"
      ></aao-notification>
      <Header />
      <main className="flex-1">
        <Hero />
        <ProjectGallery />
        <WhyItMatters />
        <Community />
        <DevDocs />
      </main>
      <Footer />
    </div>
  );
}

export default App;

