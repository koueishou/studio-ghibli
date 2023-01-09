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
  max-width: 64rem;

  & a[href*="twitter"] {
    display: flex;
    font-size: 2.4rem;
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
  border-radius: 2.4rem;
  object-fit: cover;
  box-shadow: 0px 0px 0.3rem 0.5rem #f2e1f2;
`;

export const FavoriteForm = styled.div`
  & form {
    display: flex;
    align-items: center;
    margin-top: 0.4rem;
    & button {
      box-shadow: none;
      font-size: 2.4rem;
      font-weight: 400;
      padding: 0;
      cursor: pointer;
    }
    & button[value="true"] {
      color: #a4a4a4;
    }
    & button[value="true"]:hover,
    & button[value="false"] {
      color: #eeb004;
    }
  }
`;

export const Title = styled.h1`
  display: flex;
  align-items: flex-start;
  gap: 1.6rem;
  text-align: center;

  font-size: 3.2rem;
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
    gap: 0.8rem;
    margin: 1.6rem 0;
  }
`;

export const Score = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: orange;
  color: #fff;
  width: 2.4rem;
  height: 2.4rem;
  box-shadow: 0px 0px 0.3rem 0.5rem orange;
`;

export const Description = styled.p`
  line-height: 2;
  text-align: justify;
`;
