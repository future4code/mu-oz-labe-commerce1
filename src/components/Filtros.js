import React from 'react';
import styled from 'styled-components'

const Titulo = styled.h3`

  color: white;
  font: bold 20px arial, sans-serif; 
  margin: 0 20px;

`;

const Inputs = styled.input`
    display: flex;
    flex-direction: row;

    width: 100px;
    height: 20px;
   

    /* max-width: 100px;
    margin-bottom:10px; */
`;

const InputNome = styled.input`
    display: flex;
    flex-direction: row;

    width: 500px;
    height: 20px;
  
  `

const Label = styled.label`
    display: flex;
    flex-direction: row;
    color: white;
    font: 16px arial, sans-serif; 
    margin: 0 20px;
  `;

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
    margin-right: 40px;
    height: 20px;
    padding:10px;
    
`;

export default class Filtros extends React.Component {
    
  

   
    render(){
        return (
            <Div>
                <Titulo>Filtros:</Titulo>
                <Label>Valor mínimo:</Label>
                
                <Inputs type='number'value={this.props.filtroMin} onChange={this.props.valorMin}></Inputs>

                <Label>Valor máximo:</Label>
                <Inputs  type='number' value={this.props.filtroMax} onChange={this.props.valorMax}></Inputs>

                <Label>Busca por nome:</Label>
                <InputNome  type='text' value={this.props.nomeProduto} onChange={this.props.produtoPorNome} placeholder='ex.: Nave espacial'></InputNome>
                <Label>Ordenação:</Label>
                <select value={this.props.ordenacao} onChange={this.props.onChangeSelect}>
                    <option value='crescente'>Crescente</option>
                    <option value='decrescente'>Decrescente</option>
                </select>
                

            </Div>
        )
    }
}