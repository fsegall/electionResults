import React from "react";

const Candidato = (props) => {


  const items = props.itens.map(eleito => {
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

export default Candidato;