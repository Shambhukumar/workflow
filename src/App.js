
import './App.scss';
import Faq from './FAQ/Faq';
import Features from './Features/Features';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Testomonie from './Testomonie/Testomonie';
const App = () => {
  return (
    <div className="App">
     <Hero/>
     <Features/>
     <Testomonie/>
     <Faq/>
     <Footer/>
    </div>
  );
}

export default App;
