import "./App.css";
import Landingpage from "./components/LandingPage/Landingpage";
import { Routes, Route} from "react-router-dom"
import Services from "./components/Services/Services";
import Gallery from "./components/Gallery/Gallery";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route exact path="/" element={<Landingpage/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/contactus" element={<ContactUs/>} />
      </Routes>

    </div>
  );
}

export default App;