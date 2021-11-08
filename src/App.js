
import "./App.css";

import Footer from "./components/footer";


import Nchamp from "./components/Nchamp";
import Nclass from "./components/Nclass";
import Nitems from "./components/Nitems";

import FindChamp from "./components/findChamp";
import Finditems from "./components/findItems"

import Home from "./components/Home";

import React, { useState } from "react";
import Onechamp from "./components/onechamp";
import Oneitem from "./components/oneitem";

function App() {
  const [exec, setExec] = useState('Yasuo');
  const [execit, setExecit] = useState('1001');
  const [exec2, setExec2] = useState('');
  const [exec3, setExec3] = useState('');
  const [home, setHome] = useState('init');
  console.log(execit);
  const ListChamp = () =>{
      setExec('')
      setExec2('')
      setExecit('d')
      setHome('')
      setExec3('d')
  }

  const ListItem = () =>{
    setExec2('item')
    setExec3('')
    setExecit('')
    setExec('d')
    setHome('')
  }

  

  const namechamp = () =>{
    setExec2('nchamp')
    setExec('d')
    setExecit('d')
    setHome('')
    setExec3('d')
  }
  

  const nameitems = () =>{
    setExec2('nitems')
    setExec('d')
    setExecit('d')
    setHome('')
    setExec3('d')
  }
  

  const nameclass = () =>{
    setExec2('nclass')
    setExec('d')
    setExecit('d')
    setHome('')
    setExec3('d')
  }
  
  const inicio = () =>{
    setHome('init')
    setExec('d')
    setExecit('d')
    setExec2('')
    setExec3('d')
  }
  
  return (
    <div className="App">
      <header>
            <img id = "iconlol" src="lolicon.png" alt="iconlol" onClick={inicio}></img>
            <div id = "nomepgn">League of Legends DEX</div>

            <nav id="menu">
        <ul>
           <li><a href="#menu"> Buscar</a>
                <ul class = "drop">
                  <li><a href="#menu" onClick={namechamp}>Nome dos Campeoes</a></li>
                  <li><a href="#menu" onClick={nameclass}>Classe dos campeoes</a></li>
                  <li><a href="#menu" onClick={nameitems}>Nome dos Items</a></li>
             
                </ul>
            </li>
            <li><a href="#menu" onClick={ListChamp}>  Campeoes  </a></li>
            <li><a href="#menu" onClick={ListItem}>  Items  </a></li>
      
            
            
        </ul>
        </nav>
        </header>
          {
            home === 'init'  && <Home/>
          }
          {
            exec === '' && <FindChamp trocaExec={setExec} rota={exec}/>
          }
          {
            exec !== '' && exec2 === '' && home === '' && <Onechamp nomeChamp={exec}/>
          }
          {
            execit === '' && <Finditems trocaExecit={setExecit} rota={execit}/>
          }

          {
            execit !== '' && home === '' && exec !== '' && exec3 === '' && <Oneitem idItem={execit}/>
          }
          {
            exec2 === 'nchamp' && <Nchamp/>
          }
          {
            exec2 === 'nitems' && <Nitems/>
          }
          {
            exec2 === 'nclass' && <Nclass/>
          }
         
      
      <Footer />
    </div>
  );
}

export default App;
