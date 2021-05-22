import React from 'react';
import styled from 'styled-components'

import Filtros from './components/Filtros.js'
import Produtos from './components/Produtos.js'
import Carrinho from './components/Carrinho'
import CardProdutos from './components/CardProdutos'


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
        value: 1000.0,
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
      // {
      //   id: "",
      //   name: "",
      //   value: "",
      //   imageUrl: ""
      // }
    ],
    filtroMin: 0,
    filtroMax: 2000,
    nomeProduto: ''
  }
   
  valorMin = (event) =>{
    this.setState({filtroMin: event.target.value})
    
  }
  valorMax =(event) =>{
    this.setState({filtroMax: event.target.value})
   
  }
  produtoPorNome = (event) =>{
    this.setState({nomeProduto: event.target.value})
  }

  adicionarProduto = (id) => {
    const novaListaCarrinho = this.state.produtos.filter((produto) => {
      if (id === produto.id) {
        return true
      } 
    })

    const listaCarrinho = [...this.state.lista]
    listaCarrinho.push(...novaListaCarrinho)

    this.setState({ lista: listaCarrinho })
  }

  render() {
   
   
    
    const valoresFiltrados = this.state.produtos.filter((produto)=>{
      if(produto.value >= this.state.filtroMin){
        return true
      } else {
        return false
      }
      
    })
    .filter((produto)=>{
      if(produto.value <= this.state.filtroMax){
        return true
      } else{
        return false
      }
    })
    .filter((produto)=>{
      if(
        produto.name.toLowerCase()
        .includes(this.state.nomeProduto.toLowerCase())){
          return true
        } else {
          return false
        }
        
    }
    )

    return (
      <div className="App">
        <h1>Galaxy Kids </h1>
        <Filtros
          valorMin={this.valorMin}
          filtroMin={this.state.filtroMin}
          valorMax={this.valorMax}
          filtroMax={this.state.filtroMax}
          produtoPorNome={this.produtoPorNome}
          nomeProduto={this.state.nomeProduto}
        />
       
        
        <Produtos
         cardProdutos={valoresFiltrados.map((produto)=>{
          return(
            <CardProdutos
            imageUrl={produto.imageUrl}
                name={produto.name}
                value={produto.value}
                adicionarAoCarrinho={() => {this.adicionarProduto(produto.id)}}
            />
          )
        })}
        
         /* cardProdutos={this.state.produtos.map((produto) => {
            return (
              <CardProdutos
                imageUrl={produto.imageUrl}
                name={produto.name}
                value={produto.value}
                adicionarAoCarrinho={() => {this.adicionarProduto(produto.id)}}
                
              />)
          })}*/
         

          
         
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