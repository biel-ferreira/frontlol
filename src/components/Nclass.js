import React, { useEffect, useState } from "react";
import Findclasschamp from "./findclassChamp"
const Nclass = () =>{

    const [exec, setExec] = useState('')
    const classitem = () =>{
        let camp = document.getElementById("nclass").value
        setExec(camp)
    }
    useEffect(()=>{
        classitem();
    }, [exec])
    return(
        <>
        <div id = "boxMenu">
           
            <input type="text" class ="inputs" id="nclass" name="dados" placeholder="Classe"></input>
            <button type="button" id="btNclass" onClick={classitem}>Buscar</button>
            
            

        </div>
        
        {
            exec && <Findclasschamp/>
        }
        </>
    )
}

export default Nclass;