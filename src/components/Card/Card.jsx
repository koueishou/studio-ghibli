import React from "react";
import * as Style from "./style";

const Card = ({ film }) => {
  return (
    <Style.Card>
      <Style.Image src={film.image} alt="Avatar" />
      <Style.Container>
        <h4>
          <b>{film.title}</b>
        </h4>
        <p>{film.description}</p>
      </Style.Container>
    </Style.Card>
  );
};

export default Card;
