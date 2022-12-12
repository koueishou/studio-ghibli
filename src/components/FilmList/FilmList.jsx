import PropTypes from "prop-types";
import React from "react";

import Card from "@/components/Card/Card";

import * as Style from "./style";

const FilmList = ({ films }) => (
  <Style.Container>
    {(films || []).map((film) => (
      <Card key={film.id} film={film} />
    ))}
  </Style.Container>
);

FilmList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};
FilmList.defaultProps = {
  films: [],
};

export default FilmList;
