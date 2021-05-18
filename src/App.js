import React from 'react';
import styled from 'styled-components'
import Filtros from './components/Filtros.js'
import Produtos from './components/Produtos.js'


export default class App extends React.Component {
 
  state ={ 
    lista:[]
  }

    adicionarProduto= ( ) =>{
      
    }


  render() {
    const produtos = [
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
  ]

  return (
    <div className="App">
      <h1>Galaxy Kids </h1>
      <Filtros />
      <Produtos 
        produtos={produtos}
      
      />

      
      
    </div>
  );
}
}

