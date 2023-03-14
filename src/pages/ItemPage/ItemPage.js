import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import pokemonBg from "../../assets/Imges/pokemonBg.jpg";

import "./Item.scss";

function ItemPage() {
  const [itemData, setItemData] = useState([]);
  const { state } = useLocation();
  let id = state.id;
  let name = state.name;
  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => {
          setItemData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 3000);
  }, []);

  return (
    <>
      {itemData.length !== 0 ? (
        <div
          className="item-container"
          style={{ backgroundImage: `url(${pokemonBg})` }}
        >
          <div className="img-container">
            <img src={itemData?.sprites?.front_default} />
          </div>
          <div className="name-container">{name}</div>
          <div className="type-container">
            {itemData?.types?.map((item, index) => {
              return <span className="type-card">{item.type.name}</span>;
            })}
          </div>

          <div className="abilities-Movies">
            <h1 className="abilities-heading">Abilities</h1>
            <div className="abilities-Items ">
              {itemData?.abilities?.map((item, index) => {
                return (
                  <span className="abilities-El">{item.ability.name}</span>
                );
              })}
            </div>
          </div>

          <div className="abilities-Movies">
            <h1 className="abilities-heading">Movies</h1>
            <div className="abilities-Items ">
              {itemData?.moves?.map((item, index) => {
                return <span className="abilities-El">{item.move.name}</span>;
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      )}
    </>
  );
}

export default ItemPage;
