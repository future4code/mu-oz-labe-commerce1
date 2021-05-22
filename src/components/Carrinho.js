import React from 'react';
import styled from 'styled-components'

const CarrinhoDiv = styled.div`
    border: 1px solid black;
    height: 500px;
`

export default class Carrinho extends React.Component {
    render() {
        let valores = 0
        for (let i = 0; i < this.props.itemCarrinho.length; i++) {
            valores = valores + (this.props.itemCarrinho[i].value * this.props.itemCarrinho[i].quantidade)
        }

        return (
            <CarrinhoDiv>
                {this.props.listaCompras}
                <p>{valores ? `Valor Total: ${valores}` : ``}</p>
            </CarrinhoDiv>
        )
    }
}