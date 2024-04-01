import React from "react";

import { useEffect, useState } from "react";
import api from "../../services/api";
import "./styles.css";

export default function CartasList() {
  const [cartas, setCartas] = useState([]);

  useEffect(() => {
    api.get("cartas").then(({ data }) => {
      setCartas(data);
    });
  }, []);

  return (
    <div className="cartas-list-container">
      <h1>Cartas Contempladas</h1>
      <div className="cartas-grid">
        <div className="carta-item">
          <h2>Número da Carta</h2>
          <h2>Parcelas</h2>
          <h2>Tipo de Carta</h2>
          <h2>Crédito</h2>
          <h2>Entrada</h2>
          {cartas?.map((carta) => (
            <React.Fragment key={carta.numero}>
              <h3># {carta.numero}</h3>
              <h3>{carta.qtdParcelas}</h3>
              <h3>{carta.tipo}</h3>
              <h3>R$ {carta.valorCredito}</h3>
              <h3>R$ {carta.valorEntrada}</h3>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
