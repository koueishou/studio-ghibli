import PropTypes from "prop-types";
import React, { useEffect } from "react";

import * as Style from "./style";

const Card = ({ film }) => {
  useEffect(() => {}, []);

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

Card.propTypes = {
  film: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};
Card.defaultProps = {
  film: {},
};

export default Card;
