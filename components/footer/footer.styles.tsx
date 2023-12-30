import styled from "styled-components";

export const Footer = styled.footer`
  transform: rotate(-90deg);
  position: fixed;
  text-align: center;
  width: 100vw;
  left: -49vw;
  top: 49vh;
  color: #ccc;
  
  a {
    font-weight: bold;

    @media (hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
