import React, { useEffect, useState } from "react";
import Findclasschamp from "../Search/findclassChamp";
import Onechamp from "../Cards/onechamp";
const Nclass = (props) => {
  const [exec, setExec] = useState("");
  const [execclass, setExecclass] = useState("");
  const classitem = () => {
    let camp = document.getElementById("nclass").value;
    setExec(camp);
    setExecclass("");
  };
  useEffect(() => {
    classitem();
  }, [exec]);
  return (
    <>
      <div id="boxMenu">
        <input
          type="text"
          className="inputs"
          id="nclass"
          name="dados"
          placeholder="Classe"
        ></input>
        <button type="button" id="btNclass" onClick={classitem}>
          Buscar
        </button>
      </div>

      {exec && execclass === "" && <Findclasschamp trocaExec={setExecclass} />}
      {execclass !== "" && <Onechamp nomeChamp={execclass} />}
    </>
  );
};

export default Nclass;
