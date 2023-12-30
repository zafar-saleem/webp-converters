import Link from "next/link";
import styled from "styled-components";

export const Main = styled.main`
  max-width: ${props => props.theme.breakpoints.xl};
  height: 80dvh;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0.2rem;

  @media screen and (max-width: ${props => props.theme.breakpoints.m}) {
    grid-template-columns: 1fr;
    width: 99vw;
  }
`;

export const Lynk = styled(Link)<{color: string;}>`
  padding: 4rem;
  box-shadow: 0 0 5px 0px #ccc;
  transition: all .5s;
  text-align: center;
  background-color: ${props => props.color};
  color: #ffffff;
  font-weight: bold;

  @media (hover: hover) {
    &:hover {
      opacity: 0.7;
    }
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.m}) {
    width: 99vw;
    text-align: center;
  }
`;
