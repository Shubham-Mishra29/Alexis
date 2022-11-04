import "./App.css";
import Landingpage from "./components/LandingPage/Landingpage";
import { Routes, Route} from "react-router-dom"
import Services from "./components/Services/Services";
import Gallery from "./components/Gallery/Gallery";



function App() {
  return (
    <div className="App">
  
      <Routes>
        <Route path="/" element={<Landingpage/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/gallery" element={<Gallery/>} />
      </Routes>

    </div>
  );
}

export default App;