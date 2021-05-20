import React from 'react';
import styled from 'styled-components'

const CarrinhoDiv = styled.div`
    border: 1px solid black;
    height: 25px;
`

export default class Carrinho extends React.Component {
    render(){
        return (
            <CarrinhoDiv>
              {this.props.itemCarrinho.map((item) => {
                  return <p>{item.name}</p>
              })}
            </CarrinhoDiv>
        )
    }
}