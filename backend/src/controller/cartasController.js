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

module.exports = {getCartas, getOneCarta}