import React from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 1000px;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  
`;
export const Thead = styled.thead``;
export const Tbody = styled.tbody``;
export const Tr = styled.tr``;
export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;
export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const Grid = ({ users }) => {
  
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>#</Th>
          <Th>Tipo</Th>
          <Th>Entrada</Th>
          <Th>Crédito</Th>
          <Th>Parcelas</Th>
          <Th>Ativo</Th>
        </Tr>
      </Thead>
      <Tbody>
        
        {users.map((item, i) => (          
          <Tr key={i}>
            <Td alignCenter width="5%">
              {item.numero}
            </Td>
            <Td width="30%">
              {item.tipo}
            </Td>
            <Td width="30%">
              {item.valorEntrada}
            </Td>
            <Td width="20%" onlyWeb>
              {item.valorCredito}
            </Td>  
            <Td width="20%" onlyWeb>
              {item.qtdParcelas}
            </Td>
            <Td width="20%" onlyWeb>
              {item.ativo}
            </Td>          
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;
