import './App.css';
import Menu from './Components/Menu';
import TechStack from './Components/TechStack';
import Header from './Components/Header';
import About from './Components/About'
import ImageSlider from './Components/ImageSlider';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App w-[100vw] overflow-hidden">
      <div className="overflow-hidden bg-[url('./Images/phoenix-hero-background.png')]  bg-custom sm:bg-custom-sm md:bg-custom-md lg:bg-custom-lg xl:bg-custom-xl 2xl:bg-customtwoxl bg-cover 2xl:w-full bg-no-repeat">
        <Menu/>
        <Header/>
      </div>
      <TechStack/>
      <About/>
      <ImageSlider/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
