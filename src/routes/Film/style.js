import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FilmContainer = styled.div`
  max-width: 640px;

  & a[href*="twitter"] {
    display: flex;
    font-size: 24px;
    color: #3992ff;
    text-decoration: none;
  }
  & a[href*="twitter"]:hover {
    text-decoration: underline;
  }
`;

export const FilmBanner = styled.img`
  display: block;
  width: 100%;
  border-radius: 24px;
  object-fit: cover;
  box-shadow: 0px 0px 3px 5px #f2e1f2;
`;

export const FavoriteForm = styled.div`
  & form {
    display: flex;
    align-items: center;
    margin-top: 4px;
  }
`;

export const FavoriteButton = styled.button`
  border: none;
  background-color: white;
  color: #3992ff;
  font-size: 24px;
  font-weight: 400;
  cursor: pointer;

  &[value="true"] {
    color: #a4a4a4;
  }
  &[value="true"]:hover,
  &[value="false"] {
    color: #eeb004;
  }
`;

export const Title = styled.h1`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  text-align: center;

  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
  & + p {
    margin: 0;
  }
  & + p + p {
    white-space: break-spaces;
  }
  &:focus {
    outline: none;
    color: hsl(224, 98%, 58%);
  }
  & ~ div {
    display: flex;
    gap: 8px;
    margin: 16px 0;
  }
`;

export const Score = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: orange;
  color: #fff;
  width: 24px;
  height: 24px;
  box-shadow: 0px 0px 3px 5px orange;
`;

export const Description = styled.p`
  line-height: 2;
  text-align: justify;
`;
