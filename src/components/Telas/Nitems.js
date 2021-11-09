import React, { useEffect, useState } from "react";

import FindnItems from "../Search/findnameitems";
const Nitems = () => {
  const [exec, setExec] = useState("");

  const Sitems = () => {
    let camp = document.getElementById("nitems").value;
    setExec(camp);
  };
  useEffect(() => {
    Sitems();
  }, [exec]);
  return (
    <>
      <div id="boxMenu">
        <input
          className="inputs"
          type="text"
          id="nitems"
          name="dados"
          placeholder="Item"
        ></input>
        <button type="button" id="btNitems" onClick={Sitems}>
          Buscar
        </button>
      </div>
      {exec && <FindnItems />}
    </>
  );
};

export default Nitems;
