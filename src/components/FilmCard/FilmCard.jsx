import PropTypes from "prop-types";
import React from "react";
import { useNavigate } from "react-router-dom";

import * as Style from "./style";

const FilmCard = ({ film }) => {
  const navigate = useNavigate();

  const handleClick = () => navigate(`${film.id}`);

  return (
    <Style.Card onClick={handleClick}>
      <Style.Image src={film.image} alt="Avatar" />
      <Style.Container>
        <Style.Title>{film.title}</Style.Title>
        <p>{film.release_date}</p>
      </Style.Container>
    </Style.Card>
  );
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
  }),
};
FilmCard.defaultProps = {
  film: {},
};

export default FilmCard;
