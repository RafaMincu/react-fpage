import { Link } from "react-router-dom";
import './App.css';
import Header from './routes/Header'
import Home from './routes/Home'
import Footer from './routes/Footer'

export default function App() {
  return (
    <div>
        <Header />
            <Home />
        <Footer />  
    </div>
  );
}