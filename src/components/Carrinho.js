import React from 'react';
import styled from 'styled-components'

const Titulo = styled.h3`
 padding-top: 1px;  color: black;
  font: bold 25px arial, sans-serif; 
  

`;

// const CarrinhoDiv = styled.div`
//   background-color: rgba(248, 248, 255, 0.8);
//   display: grid;
//   grid-template-columns: repeat(1, 1fr);
//   border-radius: 10px;
//   justify-content: stretch;
//   align-items: center;
//   //margin-left: 5px;
//   padding: 10px;
//   width: 20vw;
//   height: 100vh;
//   border: 1px solid black;
//   color: black;
//   font: bold 16px arial, sans-serif;
    
//   border-radius: 10px;
//   justify-content: space-around;
//   align-items: center;
 
//   margin-left:90%; 
// `



export default class Carrinho extends React.Component {
    render() {
        let valores = 0
        for (let i = 0; i < this.props.itemCarrinho.length; i++) {
            valores = valores + (this.props.itemCarrinho[i].value * this.props.itemCarrinho[i].quantidade)
        }

        return (
            <div>
                <Titulo>Carrinho</Titulo>
                {this.props.listaCompras}
                <p>{valores ? `Valor Total: ${valores.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}` : ``}</p>
            </div>
        )
    }
}