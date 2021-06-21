import './App.css';
import NavigationBar from './components/navigation-bar';
import SearchBar from './components/search-bar';
import LoginControls from './components/login-controls';
import HeroSection from './components/hero-section';
import NewsletterForm from './components/newsletter-form';
import StatsBar from './components/stats-bar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavigationBar />
      <div className="push-right">
      <div className="search-control__div">
      <SearchBar />
      <LoginControls />
      </div>
      </div>
      </header>
      <main>
      <HeroSection />
      <NewsletterForm />
      <div className="stats-bar">
        <StatsBar />
      </div>
      </main>
    </div>
  );
}

export default App;
