import React from "react";
import Temperature from "./ControllerTemp";

export default function Card(props) {
  // acá va tu código
  const { max, min, name, img, onClose, wind, clouds } = props;
  return (
    <div>
      <button onClick={onClose}>x</button>
      <div>{name}</div>
      <div>
        <Temperature text="Min" temp={min} />
      </div>
      <div>
        <Temperature text="Max" temp={max} />
      </div>
      <div>Wind {wind} knt</div>
      <div>Clouds {clouds}%</div>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="icono" />
    </div>
  );
}
