import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  gap: .8rem;
  align-items: center;

  &:hover span {
    filter: brightness(50%);
    text-decoration: underline;
  }
`