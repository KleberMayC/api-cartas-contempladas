const cartas = [
    // {'numero': 1, 
    // "tipo": 'imoveis', 
    // "valorEntrada": 12000, 
    // "valorCredito": 50000, 
    // "qtdParcelas": 20,
    // "ativo": false  },

    // {'numero': 2, 
    // "tipo": 'veiculos', 
    // "valorEntrada": 22000, 
    // "valorCredito": 200000, 
    // "qtdParcelas": 60,
    // "ativo": true  }

]

getCartas = (req, res) =>{
    res.status(200).send(cartas)
}

getOneCarta = (req,res) =>{
    let numero = req.params.numero;
    const carta = cartas.find((item) => item.numero === Number(numero))
    if(carta){
        res.status(200).send(carta)
    } else{
        res.status(404).send("Não á cartas contempladas com esse numero")
    }
    
}

createCartas = (req, res) => {
    const carta = req.body;
    
    // Verifica se já existe uma carta com o mesmo numero
    const existingCarta = cartas.find(item => item.numero === carta.numero);
    if (existingCarta) {
      return res.status(400).json({ error: 'Já existe uma carta com esse numero.' });
    }
    
    if (Object.keys(carta).length > 0) {
      cartas.push(carta);
      res.status(201).send(carta);
    } else {
      res.status(406).send("Não foi possível adicionar essa carta!");
    }
  }

updateCarta = (req, res) =>{
    let numero = req.params.numero
    let indice = findCartaIndex(numero)
    cartas[indice] = req.body
    res.status(201).send("Carta atualizada com sucesso")
}

findCartaIndex = (numero) => {
    const indice = cartas.findIndex((item) => item.numero === Number(numero))
    return indice;
}

removeCarta = (req, res) =>{
    let numero = req.params.numero;
    let indice = findCartaIndex(numero)

    if(indice === -1){
        return res.status(404).send(`A carta de número ${numero} não existe ou foi removida`)
    }

    cartas.splice(indice,1)
    res.status(200).send(`A carta de número <strong>${numero}</strong> foi excluida com sucesso!`)
}

module.exports = {getCartas, getOneCarta, createCartas, updateCarta, removeCarta}