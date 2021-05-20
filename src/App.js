import React from 'react';
import styled from 'styled-components'

import Filtros from './components/Filtros.js'
import Produtos from './components/Produtos.js'
import Carrinho from './components/Carrinho'


export default class App extends React.Component {

  state = {
    produtos: [
      {
        id: 1,
        name: "Nave Espacial",
        value: 50.00,
        imageUrl: "https://picsum.photos/200/200"
      },
      {
        id: 2,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200"
      },
      {
        id: 3,
        name: "Ônibus Espacial",
        value: 200.00,
        imageUrl: "https://picsum.photos/200/200"
      }
    ],
    lista: [
      {
        id: "",
        name: "",
        value: "",
        imageUrl: ""
      }
    ]
  }

  adicionarProduto = (id) => {
    const listaCarrinho = [...this.state.produtos]
    let novoProduto
    const novaListaCarrinho = this.state.produtos.filter((produto) => {
      if (id === produto.id) {
        novoProduto = {
          ...produto
        }
        return novoProduto
      }
    })
    listaCarrinho.push(novoProduto)

      this.setState({ lista: listaCarrinho })
  }

  render() {
    return (
      <div className="App">
        <h1>Galaxy Kids </h1>
        <Filtros />
        <Produtos
          produtos={this.state.produtos}
          adicionarAoCarrinho={() => this.adicionarProduto()}
        />
        <Carrinho
          itemCarrinho={this.state.lista}
        />
      </div>
    )
  }
}

    //   let novoProduto
  //   for(let index = 0; index < this.state.produtos.length; index++) {
  //     novoProduto = {
  //      id: this.state.produtos[index].id,
  //      name: this.state.produtos[index].name,
  //      value:this.state.produtos[index].value,
  //      imageUrl: this.state.produtos[index].imageUrl
  //  };
  //  console.log(novoProduto)
  // }