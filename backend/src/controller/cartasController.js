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

module.exports = {getCartas}