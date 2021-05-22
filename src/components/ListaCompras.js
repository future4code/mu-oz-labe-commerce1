import React from 'react'

export default class ListaCompras extends React.Component {

    render() {
        return (
            <div>
                <p>{this.props.quantidade}x {this.props.name}</p>
                <button onClick={this.props.removerProdutoCarrinho}>Remover</button>
            </div>
        )
    }
}