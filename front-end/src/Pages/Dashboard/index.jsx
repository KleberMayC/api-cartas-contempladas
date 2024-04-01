import { useState, useEffect } from "react";
import api from "../../services/api";
import "./styles.css";

export default function Dashboard() {
  const [cartas, setCartas] = useState([]);
  const [numero, setNumero] = useState("");
  const [qtdParcelas, setQtdParcelas] = useState("");
  const [tipo, setTipo] = useState("");
  const [valorCredito, setValorCredito] = useState("");
  const [valorEntrada, setValorEntrada] = useState("");
  const [editingCarta, setEditingCarta] = useState(null);
  // const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    loadCartas();
  }, []);

  const loadCartas = async () => {
    try {
      const response = await api.get("cartas");
      setCartas(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addCarta = async () => {
    try {
      const newCarta = {
        numero: numero,
        qtdParcelas: parseInt(qtdParcelas),
        tipo: tipo,
        valorCredito: parseFloat(valorCredito),
        valorEntrada: parseFloat(valorEntrada),
      };
      clearForm();

      const response = await api.post("cartas", newCarta);

      if (response.ok) {
        const updatedCartas = [...cartas, response.data];
        setCartas(updatedCartas);
        clearForm();
      } else {
        throw new Error("Falha ao adicionar a carta");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editCarta = async () => {
    try {
      const updatedCarta = {
        numero,
        qtdParcelas,
        tipo,
        valorCredito,
        valorEntrada,
      };
      const response = await api.put(
        `cartas/${editingCarta.numero}`,
        updatedCarta
      );
      const updatedCartas = cartas.map((carta) =>
        carta.numero === response.data.numero ? response.data : carta
      );
      setCartas(updatedCartas);
      clearForm();
      setEditingCarta(null);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCarta = async (numeroDaCarta) => {
    try {
      await api.delete(`cartas/${numeroDaCarta}`);
      setCartas(cartas.filter((carta) => carta.numero !== numeroDaCarta));
    } catch (error) {
      console.log(error);
    }
  };

  const clearForm = () => {
    setNumero("");
    setQtdParcelas("");
    setTipo("");
    setValorCredito("");
    setValorEntrada("");
  };

  const startEditing = (carta) => {
    setNumero(carta.numero);
    setQtdParcelas(carta.qtdqtdParcelas);
    setTipo(carta.tipo);
    setValorCredito(carta.credito);
    setValorEntrada(carta.entrada);
    setEditingCarta(carta);
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="form-container">
        <h2>{editingCarta ? "Editar Carta" : "Adicionar Carta"}</h2>
        <input
          type="text"
          placeholder="Número da Carta"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
        <input
          type="text"
          placeholder="Parcelas"
          value={qtdParcelas}
          onChange={(e) => setQtdParcelas(e.target.value)}
        />
        <input
          type="text"
          placeholder="Tipo de Carta"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Crédito"
          value={valorCredito}
          onChange={(e) => setValorCredito(e.target.value)}
        />
        <input
          type="text"
          placeholder="Entrada"
          value={valorEntrada}
          onChange={(e) => setValorEntrada(e.target.value)}
        />
        {editingCarta ? (
          <button onClick={editCarta}>Salvar</button>
        ) : (
          <button onClick={addCarta}>Adicionar</button>
        )}
        <button onClick={clearForm}>Limpar</button>
      </div>

      <div className="cartas-list-container">
        <h2>Cartas</h2>
        {cartas.map((carta) => (
          <div key={carta.numero} className="carta-item">
            <h3>{carta.numero}</h3>
            <h3>{carta.qtdParcelas}</h3>
            <h3>{carta.tipo}</h3>
            <h3>{carta.valorCredito}</h3>
            <h3>{carta.valorEntrada}</h3>
            <div className="button-group">
              <button onClick={() => startEditing(carta)}>Editar</button>
              <button onClick={() => deleteCarta(carta.numero)}>Excluir</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
