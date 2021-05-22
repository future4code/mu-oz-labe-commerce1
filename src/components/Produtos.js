import React from 'react';
import CardProdutos from './CardProdutos'

export default class Produtos extends React.Component {
    
    
   
    render(){
        const produtos = [{
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
        }]
       

        return (
            <div>
                {this.props.cardProdutos}
            </div>
        )
    }
}