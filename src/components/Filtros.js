import React from 'react';

export default class Filtros extends React.Component {
    render(){
        return (
            <div>
                <h3>Filtros</h3>
                <label>Valor mínimo:</label>
                <input type='number'></input>

                <label>Valor máximo:</label>
                <input type='number'></input>

                <label>Busca por nome:</label>
                <input type='text' placeholder='ex.: Nave espacial'></input>
            </div>
        )
    }
}