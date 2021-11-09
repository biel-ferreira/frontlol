import "./App.css";
import React, { useState } from "react";
import Footer from "./components/footer";
// ---- IMPORTACAO DAS TELAS ------ //
import Nchamp from "./components/Telas/Nchamp";
import Nclass from "./components/Telas/Nclass";
import Nitems from "./components/Telas/Nitems";
import FindChamp from "./components/Telas/findChamp";
import Finditems from "./components/Telas/findItems";
import Home from "./components/Home";
// ---- IMPORTACAO DOS CARDS ----- //
import Onechamp from "./components/Cards/onechamp";
import Oneitem from "./components/Cards/oneitem";

function App() {
  const [execchamp, setExecchamp] = useState("Yasuo");
  const [execitems, setExecitems] = useState("1001");
  const [exectelas, setExectelas] = useState("");
  const [exec3, setExec3] = useState("");
  const [home, setHome] = useState("init");
  console.log(execitems);
  const ListChamp = () => {
    setExecchamp("");
    setExectelas("");
    setExecitems("d");
    setHome("");
    setExec3("d");
  };

  const ListItem = () => {
    setExectelas("item");
    setExec3("");
    setExecitems("");
    setExecchamp("d");
    setHome("");
  };

  const namechamp = () => {
    setExectelas("nchamp");
    setExecchamp("d");
    setExecitems("d");
    setHome("");
    setExec3("d");
  };

  const nameitems = () => {
    setExectelas("nitems");
    setExecchamp("d");
    setExecitems("d");
    setHome("");
    setExec3("d");
  };

  const nameclass = () => {
    setExectelas("nclass");
    setExecchamp("d");
    setExecitems("d");
    setHome("");
    setExec3("d");
  };

  const inicio = () => {
    setHome("init");
    setExecchamp("d");
    setExecitems("d");
    setExectelas("");
    setExec3("d");
  };

  return (
    <div className="App">
      <header>
        <img
          id="iconlol"
          src="lolicon.png"
          alt="iconlol"
          onClick={inicio}
        ></img>
        <div id="nomepgn">League of Legends DEX</div>

        <nav id="menu">
          <ul>
            <li>
              <a href="#menu"> Buscar</a>
              <ul class="drop">
                <li>
                  <a href="#menu" onClick={namechamp}>
                    Nome dos Campeoes
                  </a>
                </li>
                <li>
                  <a href="#menu" onClick={nameclass}>
                    Classe dos campeoes
                  </a>
                </li>
                <li>
                  <a href="#menu" onClick={nameitems}>
                    Nome dos Items
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#menu" onClick={ListChamp}>
                {" "}
                Campeoes{" "}
              </a>
            </li>
            <li>
              <a href="#menu" onClick={ListItem}>
                {" "}
                Items{" "}
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {home === "init" && <Home />}
      {execchamp === "" && (
        <FindChamp trocaExec={setExecchamp} rota={execchamp} />
      )}
      {execchamp !== "" && exectelas === "" && home === "" && (
        <Onechamp nomeChamp={execchamp} />
      )}
      {execitems === "" && (
        <Finditems trocaExecit={setExecitems} rota={execitems} />
      )}

      {execitems !== "" && home === "" && execchamp !== "" && exec3 === "" && (
        <Oneitem idItem={execitems} />
      )}
      {exectelas === "nchamp" && <Nchamp />}
      {exectelas === "nitems" && <Nitems />}
      {exectelas === "nclass" && <Nclass />}
      <Footer />
    </div>
  );
}

export default App;
