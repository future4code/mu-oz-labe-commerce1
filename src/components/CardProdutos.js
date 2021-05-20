import React from 'react';

export default class CardProdutos extends React.Component {
    render(){
        return (
            <div>
                <img src={this.props.imageUrl}/>
                <p>{this.props.name}</p>
                <p>{this.props.value}</p>
                <button onClick={this.props.adicionarAoCarrinho}>Comprar</button>
            </div>
        )
    }
}
    