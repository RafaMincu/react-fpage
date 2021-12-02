import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from "./routes/Header";
import Footer from "./routes/Footer";
import Home from "./routes/Home";
import About from "./routes/About";
import Services from "./routes/Services";
import './assets/css/App.css';

const routing = (
  <BrowserRouter>
  <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
    </Routes>
  <Footer />
  </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById("root"));