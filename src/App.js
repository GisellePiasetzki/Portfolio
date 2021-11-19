import Header from './components/Header';
import Banner from './components/Banner';
import SobreMim from './components/SobreMim';
import Projetos from './components/Projetos';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Favicon from 'react-favicon'
import favicon from '../src/components/img/favicon.png'


import './App.scss';

function App() {

  return (
    <>
    <Favicon url={favicon}></Favicon>
    <Header/>
    <Banner/>
    <SobreMim/>
    <Projetos/>
    <Skills/>
    <Footer/>
    </>
  );
}

export default App;
