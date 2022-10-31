import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar/navbar';
import Enlarged from './Components/Enlarged/Enlarged'
import Nestle from './Components/Nestle/Nestle'
import Toolkit from './Components/Toolkit/Toolkit';
import Creativity from './Components/Creativity/Creativity';
import Support from './Components/Support/Support';
import Pricing from './Components/Pricing/Pricing';
import Features from './Components/Features/Features';
import Footer from './Components/Footer/Footer';
import Blog from './Components/Blog/Blog';
import Apps from './Components/Apps/Apps';
import HowItWorks from './Components/HowItWorks/HowItWorks';
import Life from './Components/Life/Life';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Enlarged/>
     <Nestle/>
     {/* <Toolkit/> */}
     <Creativity/>
     <Support/>
     <Pricing/>
     <Features/>
     <HowItWorks/>
     <Blog/>
     <Apps/>
     <Life/>
     <Footer/>
    </div>
  );
}

export default App;