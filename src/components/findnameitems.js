import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
const Nitem = (props) => {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState();
  let nomeC = document.getElementById("nitems").value;
  console.log(nomeC);
  useEffect(() => {
    fetch(`http://localhost:3001/findnameitems/${nomeC}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result);
          setIsLoaded(true);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      );
  }, [nomeC]);

  const renderSuperItems = (item) =>{
    console.log(item)
    if(item.upper_item.length){
    return JSON.parse(item.upper_item[0].replace(/'/g, '"')).map((superitem)=>{
                
      return <img class = "itemsb" src={`item/${superitem}.png`} alt = "itemsb"></img>
      
    })
   }
   return <p>Sem items Superiores</p>
  }

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
    console.log(items);
    return (
      

      <div>
        {items && <li id="boxitem" key={items.id}>
          <div className="cont1">
            <h3 id="titlechamp">{items.name}</h3>

            <img
              src={`item/${items.item_id}.png`}
              alt={items.name}
              id="itemimage"
            ></img>
          </div>
          <div className="conteudo2">
            <div className="txtexp">{items.explain}</div>
          </div>
          <div className="pai">
            <div className="txtsup">Items Superiores </div>
            <div id="itemsup">
              {renderSuperItems(items)}
              {/* <img class = "itemsb" src={`item/${JSON.parse(item.upper_item.pop().replace(/'/g, '"'))[0]}.png`} alt = "itemsb"></img> */}
              {/* <img class = "itemsb" src={`item/${item.upper_item[1]}.png`} alt = "itemsb"></img> */}
            </div>
            <div id="prices">
              <div className="txtitem">
                <img className="icons" src="compra.png" alt=""></img>Preco de
                Compra : {items.buy_price}
              </div>

              <div className="txtitem">
                <img className="icons" src="compra.png" alt=""></img>Preco de
                Venda : {items.sell_price}
              </div>

              <div className="txtitem"> Tipo do Item : {items.tag}</div>
            </div>
          </div>
        </li>}
        
        )
      </div>
    );
  }
};

export default Nitem;
