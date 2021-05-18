import React from 'react';
import CardProdutos from './CardProdutos'

export default class Produtos extends React.Component {
    render(){

        return (
            <div>
                 {this.props.produtos.map((produto) => {
                     return (
                     <CardProdutos 
                     imageUrl={produto.imageUrl}
                     name= {produto.name}
                     value= {produto.value}
                     
                     />)})}
              

            </div>
        )
    }
}
       

