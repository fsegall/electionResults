import React, { Component } from 'react';
import './App.css';
import './setLocalStorage';
import Candidato from './candidato.js';

// How to sort an array of objects by numerical value
const itensEleitos = JSON.parse(localStorage.getItem("eleicao")).sort(function (
  obj1,
  obj2
) {
  return obj1.seq - obj2.seq;
});


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itensEleitos
    }
    this.onchange = this.onChange.bind(this);
  }

  onChange = (e) => {
    let updatedList = itensEleitos.filter(item => item.nm.toLowerCase().search(e.target.value.toLowerCase()) !== -1
    )

    this.setState({
      itensEleitos: updatedList
    })
  }

  render() {
    return (
      <div className="App">
        <form>
          <label>
            Filtrar por nome:
          <input
              type="text"
              onChange={this.onChange}
            />
            <button type="submit" onSubmit={() => console.log("lista completa")} >Lista Completa</button>
          </label>
        </form>
        <h1
          style={{
            color: "tomato",
            padding: 20,
            marginTop: 20
          }}
        >
          Resultados das Eleições 2018
        </h1>
        <ul className="list-group">
          <Candidato itens={this.state.itensEleitos} />
        </ul>
      </div>
    );
  }
}

export default App;
