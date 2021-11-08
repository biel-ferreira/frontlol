import React, { useState, useEffect } from "react";
import ReactLoading from 'react-loading';
const ListarNchampions = (props) => {
  const [champions, setChampions] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState();
    const nomeC = document.getElementById("nchamp").value;
    console.log(nomeC)
    const trocarL = (title) =>{
      const split = title.split('');
      split[0] = split[0].toUpperCase();
      const split2 = split.join('');
      return split2;
    }
  useEffect(() => {
    fetch(`http://localhost:3001/findname/${nomeC}`)
      .then((res) => res.json())
      .then(
        (result) => {

          console.log(result)
          setChampions(result);
          setIsLoaded(true);

        },
        
      ).catch((error) => {
        console.log(error)
        setError(error);
        setIsLoaded(true);

      });
  }, [nomeC]);
  if (error) {
    return <div>Error : {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="load">{<ReactLoading className= "loading" color={'#EDB852'}type={'spinningBubbles'} height={350} width={250}/>}</div>;
  } else {
    console.log(champions)
    return (
        <div>
         { champions && <li id="box"  style={{backgroundImage: (`URL(splash/${champions.id}_0.jpg)`)}}>
              <div class = "cont1" >
            <h3 id="titlechamp">{champions.name}</h3>
            <img
              src={`loading/${champions.id}_0.jpg`}
              alt={champions.id}
              id="champimage"
            ></img>
            </div>
            <div class = "cont2" >
                <div class= "headerchamp">
                <div id="subtitle">{trocarL(champions.title)}</div>
                <div id="tip"> Classe : </div> <div id="resclass">{champions.tags[0]} </div>
                </div>
                <br></br>
                <div id= "skills">
                    SKILLS
                </div>
                <br></br>
                {
                    <img
                    src={`spell/${champions.id}E.png`}
                    alt={champions.id}
                    id="skillimg"
                  ></img>
                }
                {
                    <img
                    src={`spell/${champions.id}Q.png`}
                    alt={champions.id}
                    id="skillimg"
                  ></img>
                }
                {
                    <img
                    src={`spell/${champions.id}W.png`}
                    alt={champions.id}
                    id="skillimg"
                  ></img>
                }
                {
                    <img
                    src={`spell/${champions.id}R.png`}
                    alt={champions.id}
                    id="skillimg"
                  ></img>
                }
            <div class = "desc">
                <p id="champdesc">
                    {champions.blurb}
                </p>

            </div>
                
            <div class = "ct1"></div>  

            </div>

          </li>
          }
        )
              
      </div>

    );
  }

};

export default ListarNchampions;
