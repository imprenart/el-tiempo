import React from "react";
import "../components/About.css";

import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <div>
      <div className="container">
        <span>
          Información obtenida de :
          <NavLink
            to={{ pathname: "https://openweathermap.org/api" }}
            target="_blank"
          >
            https://openweathermap.org/api
          </NavLink>
        </span>
        <h3>Datos meteorológicos actuales</h3>
        <ul>
          <li>
            Acceda a datos meteorológicos actuales para cualquier ubicación,
            incluidas más de 200.000 ciudades
          </li>
          <li>
            Recopilamos y procesamos datos meteorológicos de diferentes fuentes,
            como modelos meteorológicos globales y locales, satélites, radares y
            una amplia red de estaciones meteorológicas.
          </li>
          <li>Formatos JSON, XML y HTML</li>
          <li>Incluido en suscripciones gratuitas y de pago</li>
        </ul>
      </div>
      <NavLink
        className="btn btn-primary"
        to={{ pathname: "https://openweathermap.org/api" }}
        target="_blank"
      >
        Más info...
      </NavLink>
    </div>
  );
}
