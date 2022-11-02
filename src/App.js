import "./App.css";
import Landingpage from "./components/Landingpage";
import { Routes, Route} from "react-router-dom";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
  
      <Routes>
        <Route path="/" element={<Landingpage/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>

    </div>
  );
}

export default App;