import { css } from "styled-components";

export const btn = css`
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid #f55252;
  background: #f55252;
  margin-top: 1rem;
  color: #ffffff;
  transition: all 0.6s;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      opacity: 0.8;
    }
  }
`;
