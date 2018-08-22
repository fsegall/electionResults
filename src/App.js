import React, { Component } from "react";
import "./App.css";
import Eleicao from "./dadosPresidente.json";

localStorage.setItem("eleicao", JSON.stringify(Eleicao.cand));

// How to sort an array of objects by numerical value
const itensEleitos = JSON.parse(localStorage.getItem("eleicao")).sort(function (
  obj1,
  obj2
) {
  return obj1.seq - obj2.seq;
});

class Candidato extends Component {
  render() {

    const items = this.props.itens.map(eleito => {
      const classEleito =
        eleito.e === "s"
          ? "list-group-item list-group-item-action list-group-item-primary"
          : "list-group-item list-group-item-action list-group-item-danger";

      return (

        <li className={classEleito} key={eleito.sqcand}>
          {eleito.e === "s"
            ? `O candidato ${eleito.nm} foi eleito com ${
            eleito.v
            } votos e ficou em ${eleito.seq}º lugar.`
            : `O candidato ${eleito.nm} não foi eleito com ${
            eleito.v
            } votos e ficou em ${eleito.seq}º lugar.`}
        </li>

      )
    });

    return items

  }

}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itensEleitos
    }
    this.onchange = this.onChange.bind(this);
  }

  onChange = (e) => {
    let updatedList = this.state.itensEleitos.filter(item => item.nm.toLowerCase().search(e.target.value.toLowerCase()) !== -1
    )

    this.setState({
      itensEleitos: updatedList
    })
  }

  render() {
    return (
      <div className="App">
        <label>
          Filtrar por nome:
          <input
            type="text"
            onChange={this.onChange}
          />
        </label>
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
