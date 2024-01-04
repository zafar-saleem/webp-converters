import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  // text-align: center;
  max-width: ${props=> props.theme.breakpoints.m};
  margin: auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Lynk = styled(Link)`
  display: block;
  margin: auto;
  margin: 1rem auto;
  color: blue;

  @media (hover: hover) {
    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.m}) {
    // display: none;
  }
`;
