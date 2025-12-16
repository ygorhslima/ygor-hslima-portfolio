import Header from './components/Header/Header.jsx';
import MainComponent from './components/MainComponent.jsx'
import SectionFicha from './components/SectionFicha';
import SectionDetalhes from './components/SectionDetalhes';
import Footer from './components/Footer'
function App() {
  return (
    <div>
      <Header/>
      <MainComponent>
        <SectionFicha/>
        <SectionDetalhes/>
      </MainComponent>
      <Footer/>
    </div>
  )
}

export default App
