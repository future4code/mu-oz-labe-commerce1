import React from 'react';
import styled from 'styled-components'

import Filtros from './components/Filtros.js'
import Produtos from './components/Produtos.js'
import Carrinho from './components/Carrinho'
import CardProdutos from './components/CardProdutos'
import ListaCompras from './components/ListaCompras'


export default class App extends React.Component {

  state = {
    produtos: [
      {
        id: 1,
        name: "Nave Espacial",
        value: 50.00,
        imageUrl: "https://picsum.photos/200/200",
      },
      {
        id: 2,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200",
      },
      {
        id: 3,
        name: "Ônibus Espacial",
        value: 200.00,
        imageUrl: "https://picsum.photos/200/200",
      }
    ],
    lista: []
  }

  adicionarProduto = (id) => {
    const listaCarrinho = [...this.state.lista]

    const novaListaCarrinho = this.state.produtos.filter((produto) => {
      if (id === produto.id) {
        return true
      }
    })

    const checagem = this.state.lista.find((produtoCarrinho) => {
      if (produtoCarrinho.id === id) {
        return true
      } else { return false }
    })

    const produtoSeraAdicionado = {
      ...novaListaCarrinho[0],
      quantidade: 1
    }

    if (!checagem) {
      listaCarrinho.push(produtoSeraAdicionado)

      this.setState({ lista: listaCarrinho })
    } else {
      const adicionarQuantidade = this.state.lista.map((produtoJaAdicionado) => {
        if (produtoJaAdicionado.id === id) {
          return {
            ...produtoJaAdicionado,
            quantidade: produtoJaAdicionado.quantidade + 1
          }
        } else {
          return produtoJaAdicionado
        }
      })
      this.setState({ lista: adicionarQuantidade })
    }


  }

  removerProdutoCarrinho = (id) => {
    const novaListaCompras = this.state.lista.map((produto) => {
      if (produto.id === id) {
        const produtoAtt = {
          ...produto,
          quantidade: produto.quantidade - 1
        }
        return produtoAtt
      } else {return produto}
    })

    const novaListaComprasAtt = novaListaCompras.filter((produto) => {
      if (produto && produto.quantidade !== 0){
        return true
      }
    })

    this.setState({ lista: novaListaComprasAtt })
  }

  render() {

    return (
      <div className="App">
        <h1>Galaxy Kids </h1>
        <Filtros />
        <Produtos
          cardProdutos={this.state.produtos.map((produto) => {
            return (
              <CardProdutos
                imageUrl={produto.imageUrl}
                name={produto.name}
                value={produto.value}
                adicionarAoCarrinho={() => { this.adicionarProduto(produto.id) }}
              />)
          })}
        />
        <Carrinho
          itemCarrinho={this.state.lista}
          listaCompras={this.state.lista.map((produto) => {
            return (
              <ListaCompras
                quantidade={produto.quantidade}
                name={produto.name}
                removerProdutoCarrinho={() => { this.removerProdutoCarrinho(produto.id) }}
              />)
          })}

        />
      </div>
    )
  }
}