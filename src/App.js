import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Store from "./components/Store";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Journey from "./components/Journey";
import Home from "./components/Home";

function App() {
  return ( <>
      
      <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Journey" element={<Journey />} />
          <Route exact path="/Team" element={<Team />} />
          <Route exact path="/Store" element={<Store />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
      </>
  );
}

export default App;
