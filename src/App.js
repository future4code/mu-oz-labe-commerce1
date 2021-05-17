import React from 'react';
import styled from 'styled-components'


class App extends React.Component {
  render(){
  return (
    <div>
      <h3>Filtros</h3>
      <label>Valor mínimo:</label>
      <input type="number"></input>
      <label>Valor máximo:</label>
      <input type="number"></input>
      <label>Busca por nome:</label>
    </div>
  )}
}

export default App;
