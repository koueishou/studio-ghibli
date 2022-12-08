import React from "react";
import Card from "@/components/Card/Card";
import * as Style from "./style";

const FilmList = ({ films }) => {
  return (
    <Style.Container>
      {(films || []).map((film) => (
        <Card key={film.id} film={film}></Card>
      ))}
    </Style.Container>
  );
};

export default FilmList;
