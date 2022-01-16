import React from "react";
import "../components/Ciudad.css";
import { NavLink } from "react-router-dom";

export default function Ciudad({ city }) {
  if (city) {
    return (
      <>
        <div className="ciudad">
          <div className="container">
            <h2>Tiempo en {city.name}</h2>
            <div className="info">
              <div>Temperatura: {city.temp} ºC</div>
              <div>Clima: {city.weather}</div>
              <div>Viento: {city.wind} km/h</div>
              <div>Cantidad de nubes: {city.clouds}</div>
              <div>Latitud: {city.latitud}º</div>
              <div>Longitud: {city.longitud}º</div>
              <img
                src={`http://openweathermap.org/img/wn/${city.img}@2x.png`}
                alt=""
                width="150"
                height="150"
              />
            </div>
          </div>
        </div>
        <NavLink to="/">
          <h4>Volver</h4>
        </NavLink>
      </>
    );
  } else {
    return (
      <div>
        <h3>Ciudad no encontrada</h3>
      </div>
    );
  }
}
