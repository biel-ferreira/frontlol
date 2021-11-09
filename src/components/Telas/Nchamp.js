import React, { useEffect, useState } from "react";
import FindNchamp from "../Search/findnameChamp";
const Nchamp = () => {
  const [execucao, setExecucao] = useState("");

  const listarchamps = () => {
    let camp = document.getElementById("nchamp").value;
    setExecucao(camp);
    console.log(camp);
  };

  useEffect(() => {
    listarchamps();
  }, [execucao]);

  return (
    <>
      <div id="boxMenu">
        <input
          type="text"
          className="inputs"
          id="nchamp"
          name="dados"
          placeholder="Campeao"
        ></input>
        <button type="button" id="btNchamp" onClick={listarchamps}>
          Buscar
        </button>
      </div>
      <div className="resposta">{execucao && <FindNchamp />}</div>
    </>
  );
};

export default Nchamp;
