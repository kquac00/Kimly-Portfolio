import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Layout/Header'
import Projectv1 from './Pages/Projectv1';
import Hobby from './Pages/Hobby'
import Footer from './Layout/Footer'
import History from './Pages/History';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Projectv1 />} />
          <Route path="/hobby" element={<Hobby />} />
          <Route path="/history" element={<History />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
