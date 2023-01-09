import styled from "styled-components";

export const Card = styled.div`
  box-shadow: 0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 0.8rem 1.6rem 0 rgba(0, 0, 0, 0.2);
  }
  cursor: pointer;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
  padding: 0px 1.6rem;
`;

export const Title = styled.h4`
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
