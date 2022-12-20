import PropTypes from "prop-types";
import React from "react";

import * as Style from "./style";

const Card = ({ film }) => (
  <Style.Card>
    <Style.Image src={film.image} alt="Avatar" />
    <Style.Container>
      <h4>
        <b>{film.original_title}</b>
        <br />
        <b>{film.title}</b>
        <br />
        <i>{film.original_title_romanized}</i>
      </h4>
      <p>{film.description}</p>
    </Style.Container>
  </Style.Card>
);

Card.propTypes = {
  film: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    original_title: PropTypes.string,
    original_title_romanized: PropTypes.string,
    description: PropTypes.string,
  }),
};
Card.defaultProps = {
  film: {},
};

export default Card;
