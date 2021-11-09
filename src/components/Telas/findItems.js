import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";

const ListarItems = (props) => {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(`http://localhost:3001/findallitems`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
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
        {items.map((item) => (
          <li
            id="caixas"
            key={item.id}
            onClick={() => props.trocaExecit(item.item_id)}
          >
            <img
              src={`item/${item.item_id}.png`}
              alt={item.name}
              id="imgsitem"
            ></img>
            <div className="champname">{item.name}</div>
            <br></br>
          </li>
        ))}
      </div>
    );
  }
};

export default ListarItems;
