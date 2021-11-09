import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
const Onechamp = (props) => {
  const [champions, setChampions] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState();
  const trocarL = (title) => {
    const split = title.split("");
    split[0] = split[0].toUpperCase();
    const split2 = split.join("");
    return split2;
  };
  console.log(props.nomeChamp);

  useEffect(() => {
    fetch(`http://localhost:3001/findname/${props.nomeChamp}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setChampions(result);
          setIsLoaded(true);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      );
  }, [props.nomeChamp]);
  if (error) {
    return <div>Error : {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div className="load">
        {
          <ReactLoading
            className="loading"
            color={"#EDB852"}
            type={"spinningBubbles"}
            height={350}
            width={250}
          />
        }
      </div>
    );
  } else {
    return (
      <div>
        <li
          id="box"
          key={champions.id}
          style={{ backgroundImage: `URL(splash/${champions.id}_0.jpg)` }}
        >
          <div className="cont1">
            <h3 id="titlechamp">{champions.name}</h3>

            <img
              src={`loading/${champions.id}_0.jpg`}
              alt={champions.id}
              id="champimage"
            ></img>
          </div>
          <div className="cont2">
            <div className="headerchamp">
              <div id="subtitle">{trocarL(champions.title)}</div>

              <div id="tip">
                {" "}
                Classe : <div id="resclass">{champions.tags[0]} </div>
              </div>
            </div>
            <br></br>
            <div id="skills">SKILLS</div>
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
            <div className="desc">
              <div id="champdesc">{champions.blurb}</div>
            </div>

            <div className="ct1"></div>
          </div>
        </li>
        )
      </div>
    );
  }
};

export default Onechamp;
