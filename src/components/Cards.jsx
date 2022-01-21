import React from "react";
import Card from "./Card";

export default function Cards({ cities, onClose }) {
  return (
    <div>
      {cities.map((c) => (
        <Card
          key={c.id}
          name={c.name}
          min={c.min}
          max={c.max}
          img={c.img}
          wind={c.wind}
          clouds={c.clouds}
          onClose={() => onClose(c.id)}
        />
      ))}
    </div>
  );
}
