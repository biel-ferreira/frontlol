import React, { useState, useEffect } from "react";
import ReactLoading from 'react-loading';

const ListarChampions = (props) => {
  const [champions, setChampions] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState();


  useEffect(() => {
    fetch(`http://localhost:3001/findall`)
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
  }, []);
  if (error) {
    return <div>Error : {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="load">{<ReactLoading className= "loading" color={'#EDB852'}type={'spinningBubbles'} height={350} width={250}/>}</div>;
  } else {
    console.log(champions)
    
    return (
    
      <div>
        
        {champions.map((item) => (
          
          <li id="caixas" key={item.id} onClick={()=> (props.trocaExec(item.name))}>
            <img
              src={`assets/${item.id}_0.jpg`}
              alt={item.id}
              id="imgs"
            ></img>
            <div className = "champname">
            {item.name}
            </div>
            <br></br>
            
            
          </li>
            
        ))}
       
      </div>
    );
  }
};

export default ListarChampions;
// {<ReactLoading className= "loading" type={'spin'} height={400} width={300}/>}