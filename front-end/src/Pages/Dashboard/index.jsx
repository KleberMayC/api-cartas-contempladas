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
  const [message, setMessage] = useState(""); // Novo estado para controlar as mensagens

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

  // Função para exibir a mensagem
  const showMessage = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage("");
    }, 5000);
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

      if (response.status === 201) {
        const updatedCartas = [...cartas, response.data];
        setCartas(updatedCartas);
        clearForm();
        showMessage("Carta adicionada com sucesso!"); // Exibir mensagem de sucesso
      } else {
        throw new Error("Falha ao adicionar a carta");
      }
    } catch (error) {
      console.log(error);
      showMessage("Falha ao adicionar a carta"); // Exibir mensagem de erro
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
      showMessage("Carta atualizada com sucesso!"); // Exibir mensagem de sucesso
    } catch (error) {
      console.log(error);
      showMessage("Falha ao atualizar a carta"); // Exibir mensagem de erro
    }
  };

  const deleteCarta = async (numeroDaCarta) => {
    try {
      await api.delete(`cartas/${numeroDaCarta}`);
      setCartas(cartas.filter((carta) => carta.numero !== numeroDaCarta));
      showMessage("Carta excluída com sucesso!"); // Exibir mensagem de sucesso
    } catch (error) {
      console.log(error);
      showMessage("Falha ao excluir a carta"); // Exibir mensagem de erro
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
    setQtdParcelas(carta.qtdParcelas);
    setTipo(carta.tipo);
    setValorCredito(carta.valorCredito);
    setValorEntrada(carta.valorEntrada);
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
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="">Selecione um tipo</option>
          <option value="IMOVEL">IMOVEL</option>
          <option value="VEICULO">VECULOS</option>
        </select>
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
      <div className="message-container">
        {message && <div className="message">{message}</div>}
      </div>
    </div>
  );
}
