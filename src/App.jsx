import Header from './components/Header/Header.jsx';
import MainComponent from './components/MainComponent.jsx'
import SectionFicha from './components/SectionFicha';
import SectionDetalhes from './components/SectionDetalhes';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';



function App() {
  
  const [temaEscuro, setTemaEscuro] = useState(false)

  useEffect(()=>{
      if(temaEscuro){
          document.body.classList.add("escuro")
      }else{
          document.body.classList.remove("escuro")
      }
  },[temaEscuro])

  return (
    <div>
      <Header temaEscuro={temaEscuro} setTemaEscuro={setTemaEscuro}/>
      <MainComponent>
        <SectionFicha temaEscuro={temaEscuro}/>
        <SectionDetalhes/>
      </MainComponent>
      <Footer/>
    </div>
  )
}

export default App
