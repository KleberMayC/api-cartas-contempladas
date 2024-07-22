
# API DE CARTAS CONTEMPLADAS

Projeto desenvolvido com a ideia de ser um facilitador para o usúario onde o mesmo pode acrescentar os dados atráves de um Dashboard e ser renderizado no Front-End.


## Documentação da API

#### Retorna todos os itens

```http
  GET /cartas
```


#### Retorna um item

```http
  GET /cartas/${numero}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `numero`      | `number` | **Obrigatório**. O NÚMERO do item que você quer |

#### OBS:

API feita com base no número da cota do consorcio e não no ID, pois o ID vem direto do Banco de Dados


## Autores

- [@KleberMayC](https://www.github.com/KleberMayC)


## Funcionalidades

- Função de adicionar uma nova carta
- Função de editar a carta pelo Número 
- Função de excluir a carta pelo Número



## Stack utilizada

**Front-end:** React.

**Back-end:** Node, Express e MySql

