import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemCard from "../../components/ItemCard";
import "./HomePage.scss";
import { useNavigate } from "react-router-dom";
import pokemonMain from "../../assets/Imges/pokemonMain.jpg";

function HomePage() {
  const [getData, setGetData] = useState([]);
  const [offset, setOffset] = useState([{ count: 0 }]);
  const history = useNavigate();

  const getPokemomDeatils = (id, Name) => {
    console.log(id);
    history(`/itempage?id=${id}`, { state: { id: id, name: Name } });
  };

  const RandomData = () => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset[0].count}&limit=20`
      )
      .then((res) => {
        setGetData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const preData = () => {
    let data = [...offset];
    if (data[0].count > 0) {
      data[0].count -= 20;
      setOffset(data);
    }
    RandomData();
  };
  const nextData = () => {
    let data = [...offset];
    data[0].count += 20;
    setOffset(data);

    RandomData();
  };

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset[0].count}&limit=20`
        )
        .then((res) => {
          setGetData(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 3000);
  }, []);
  return (
    <>
      {getData.length != 0 ? (
        <div
          className="Home-container"
          style={{ backgroundImage: `url(${pokemonMain})` }}
        >
          <div className="element-container">
            {getData.results?.map((item, index) => {
              return (
                <ItemCard
                  OnClickEvent={getPokemomDeatils}
                  Name={item.name}
                  Index={index + 1 + offset[0].count}
                  Key={index}
                />
              );
            })}
          </div>
          <div>
            <button className="button-el" onClick={preData}>
              Prev
            </button>
            <button className="button-el" onClick={nextData}>
              Next
            </button>
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

export default HomePage;
