const cartas = [
    {'id': 1, 
    "tipo": 'imoveis', 
    "valorEntrada": 12000, 
    "valorCredito": 50000, 
    "qtdParcelas": 20,
    "ativo": false  },

    {'id': 2, 
    "tipo": 'veiculos', 
    "valorEntrada": 22000, 
    "valorCredito": 200000, 
    "qtdParcelas": 60,
    "ativo": true  }

]

getCartas = (req, res) =>{
    res.status(200).send(cartas)
}

getOneCarta = (req,res) =>{
    let id = req.params.id;
    const carta = cartas.find((item) => item.id === Number(id))
    if(carta){
        res.status(200).send(carta)
    } else{
        res.status(404).send("Não á cartas contempladas com esse id")
    }
    
}

createCartas = (req, res) => {
    const carta = req.body;
    
    // Verifica se já existe uma carta com o mesmo ID
    const existingCarta = cartas.find(item => item.id === carta.id);
    if (existingCarta) {
      return res.status(400).json({ error: 'Já existe uma carta com esse ID.' });
    }
    
    if (Object.keys(carta).length > 0) {
      cartas.push(carta);
      res.status(201).send(carta);
    } else {
      res.status(406).send("Não foi possível adicionar essa carta!");
    }
  }

module.exports = {getCartas, getOneCarta, createCartas}