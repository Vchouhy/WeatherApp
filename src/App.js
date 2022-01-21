import React from "react";
import "./App.css";
import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import fetchCity from "./components/ControllerFetch";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  function onSearch(ciudad) {
    if (data.length > 3) {
      alert(" No puedes agregar mas ciudades");
    } else {
      fetchCity(ciudad, setData);
    }
  }

  function handleRemove(id) {
    setData((prevData) => {
      return prevData.filter((city) => city.id !== id);
    });
  }

  return (
    <div className="App">
      <div>
        <SearchBar onSearch={onSearch} />
      </div>
      <div>
        {data.length > 0 ? (
          <>
            <Card
              max={data[data.length - 1].max}
              min={data[data.length - 1].min}
              name={data[data.length - 1].name}
              img={data[data.length - 1].img}
              // wind={Cairns.wind}
              // clouds={Cairns.clouds}
              // onClose={handleRemove}
            />
            <div>
              <Cards cities={data} onClose={handleRemove} />
            </div>
          </>
        ) : (
          <>Busca una nueva ciudad</>
        )}
      </div>
    </div>
  );
}
export default App;
