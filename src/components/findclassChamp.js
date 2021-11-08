import React, { useState, useEffect } from "react";
import ReactLoading from 'react-loading';
const ListarNclass = () => {
  const [champions, setChampions] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState();
  const nomeX = document.getElementById("nclass").value;
  console.log(nomeX);

  useEffect(() => {
    fetch(`http://localhost:3001/findclass/${nomeX}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setChampions(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [nomeX]);
  console.log(champions)
  if (error) {
    return <div>Error : {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="load">{<ReactLoading className= "loading" color={'#EDB852'}type={'spinningBubbles'} height={350} width={250}/>}</div>;
  } else {
    return (
      <p>
        {champions.map((item) => (
          <li id="caixas" key={item.id}>
             <img
              src={`assets/${item.id}_0.jpg`}
              alt={item.name}
              id="imgs"
            ></img>
            <div className = "champname">{item.name}</div>
            
           
           
            <br></br>
          
          </li>
        ))}
      </p>
    );
  }
};

export default ListarNclass;
