import { Link } from "react-router-dom";
import './App.css';
import Header from './routes/Header'
import Home from './routes/Home'
import Footer from './routes/Footer'

export default function App() {
  return (
    <div>
        <head>
            <meta charset="UTF-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta classclassName="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta className="description" content="Affordable and professional web design"/>
            <meta className="keywords" content="web design, affordable web design"/>
            <meta className="author" content="Mincu Rafael"/>
            <title>Boost Web Design | Welcome</title>
            <link rel="stylesheet" href="./App.css"/>
        </head>
        <Header />
            <Home />
        <Footer />  
    </div>
  );
}