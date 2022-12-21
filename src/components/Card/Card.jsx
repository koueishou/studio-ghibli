import PropTypes from "prop-types";
import React from "react";

import * as Style from "./style";

const Card = ({ film }) => (
  <Style.Card>
    <Style.Image src={film.image} alt="Avatar" />
    <Style.Container>
      <Style.Title>{film.title}</Style.Title>
      <p>{film.release_date}</p>
    </Style.Container>
  </Style.Card>
);

Card.propTypes = {
  film: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
  }),
};
Card.defaultProps = {
  film: {},
};

export default Card;
