import React from 'react';

export default class Filtros extends React.Component {
    
  

   
    render(){
        return (
            <div>
                <h3>Filtros</h3>
                <label>Valor mínimo:</label>
                <input   type='number'value={this.props.filtroMin} onChange={this.props.valorMin}></input>

                <label>Valor máximo:</label>
                <input  type='number' value={this.props.filtroMax} onChange={this.props.valorMax}></input>

                <label>Busca por nome:</label>
                <input  type='text' value={this.props.nomeProduto} onChange={this.props.produtoPorNome} placeholder='ex.: Nave espacial'></input>
                <label>Ordenação:</label>
                <select>
                    <option>Crescente</option>
                    <option>Decrescente</option>
                </select>

            </div>
        )
    }
}