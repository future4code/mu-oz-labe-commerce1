import React from 'react';
import CardProdutos from './CardProdutos'

export default class Produtos extends React.Component {
    render(){

        return (
            <div>
                {this.props.cardProdutos}
            </div>
        )
    }
}
       

