import React, { useEffect, useState } from "react";
import Findclasschamp from "./findclassChamp"
import Onechamp from "./onechamp";
const Nclass = (props) =>{

    const [exec, setExec] = useState('')
    const [execclass, setExecclass] = useState('');
    const classitem = () =>{
        let camp = document.getElementById("nclass").value
        setExec(camp)
        setExecclass('')
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
            exec && execclass === '' && <Findclasschamp trocaExec={setExecclass} />
        }
        {
            execclass !== '' && <Onechamp nomeChamp={execclass}/>
        }
        </>
    )
}

export default Nclass;