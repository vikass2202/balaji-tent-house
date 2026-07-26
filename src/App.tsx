import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Homepage from './Pages/Homepage/Homepage';
import About from './Pages/About/About';
import Contact from './Component/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        {/* jaise-jaise naye pages banate jao, yahan Route add karte jao: */}
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/wedding-planner" element={<WeddingPlanner />} /> */}
        {/* <Route path="/gallery" element={<Gallery />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;