import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import "./App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home";
import Contact from "./pages/contact";
function App() {
  /*const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 10000);
  });
  if (loading) <BarLoader color="red" loading />;*/
  return (
    <div className="App">
      <div className="red-box"></div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-me" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
