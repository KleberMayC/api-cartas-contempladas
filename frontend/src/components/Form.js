
import React from "react";
import styled from "styled-components";
import axios from "axios";



const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({users,setUsers,getUsers}) => {  
  const saveData = async (e) => {
    const corpo = {
      "numero": parseInt(e.target.elements.numero.value),
      "tipo": e.target.elements.tipo.value,
      "valorEntrada": parseFloat(e.target.elements.valorEntrada.value),
      "valorCredito": parseFloat(e.target.elements.valorCredito.value),
      "qtdParcelas": parseInt(e.target.elements.qtdParcelas.value),
      "ativo": true
    }
    if( e.target.elements.numero.value !== "" && e.target.elements.tipo.value !== "") {
      await axios.post('http://localhost:5000/cartas', corpo)
    }else{
      alert('Não é permitido enviar o formulario vazio!')
    }
    
    e.preventDefault();
  };

  return (
    <FormContainer onSubmit={saveData}>
      <InputArea>
        <Label>Número</Label>
        <Input name="numero" />
      </InputArea>
      <InputArea>
        <Label>Tipo</Label>
        <Input name="tipo" />
      </InputArea>
      <InputArea>
        <Label>Entrada</Label>
        <Input name="valorEntrada" />
      </InputArea>
      <InputArea>
        <Label>Crédito</Label>
        <Input name="valorCredito" />
      </InputArea>
      <InputArea>
        <Label>Parcelas</Label>
        <Input name="qtdParcelas" />
      </InputArea>
      <InputArea>
        <Label>Ativo</Label>
        <Input name="ativo" />
      </InputArea>

      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form;
