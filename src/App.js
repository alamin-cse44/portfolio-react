import './App.scss';

import Navbar from './components/navbar/Navbar';
import Poster from './components/poster/Poster';
import Features from './components/features/Features';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';

function App() {
  return (
    <div className="root"> 
      <Navbar />
      <Poster />
      <Features />
      <Portfolio />
      <Resume />
    </div>
  );
}

export default App;
