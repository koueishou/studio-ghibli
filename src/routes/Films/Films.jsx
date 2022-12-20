import React from "react";
import { useLoaderData } from "react-router-dom";

import Card from "@/components/Card/Card";
import { getFilms } from "@/utils/films";

import * as Style from "./style";

export const loader = async () => {
  const films = await getFilms();
  return { films };
};

const Films = () => {
  const { films } = useLoaderData();

  return (
    <Style.Container>
      {(films || []).map((film) => (
        <Card key={film.id} film={film} />
      ))}
    </Style.Container>
  );
};

export default Films;
