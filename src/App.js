import React, { Component } from "react";
import "./App.css";
import Eleicao from "./dadosPresidente.json";

localStorage.setItem("eleicao", JSON.stringify(Eleicao.cand));

// How to sort an array of objects by numerical value
const itensEleitos = JSON.parse(localStorage.getItem("eleicao")).sort(function(
  obj1,
  obj2
) {
  return obj1.seq - obj2.seq;
});

const candidato = itensEleitos.map(eleito => {
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
  );
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1
          style={{
            color: "tomato",
            padding: 20,
            marginTop: 20
          }}
        >
          Resultados das Eleições 2018
        </h1>
        <ul className="list-group">{candidato}</ul>
      </div>
    );
  }
}

export default App;
