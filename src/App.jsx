
import { Header } from './components/Header'
import { GlobalStyles } from "./styleGlobal"
import{ThemeProvider} from "styled-components"
import{Routes, Route}from "react-router-dom"
import { Post } from './components/post'
import { Calcados } from './components/produtos/Calcados'
import { Blusas } from './components/produtos/Blusas'
import { Oculos } from './components/produtos/Oculos'
import { Acessorios } from './components/produtos/Acessorios'
import { Contatos } from './components/contatos'
import { Protudos } from './components/todos'


function App() {

  const theme={
    primary:'#0097FF', 
    text:'#6fbaec',
    text900:'#000000'
  }

  return (
    <>
     <ThemeProvider theme={theme}> 
        <GlobalStyles/>
        <Header/>
            <Routes>
                  <Route path="/" element={<Post/>}/>
                  <Route path='/calcados'element={<Calcados/>}/>
                  <Route path='/blusas'element={<Blusas/>}/>
                  <Route path='/oculos'element={<Oculos/>}/>
                  <Route path='/acessorios'element={<Acessorios/>}/>
                  <Route path='/produtos'element={<Protudos/>}/>

            </Routes>
            <Contatos/>
</ThemeProvider> 
     </>
        

)
}

export default App


