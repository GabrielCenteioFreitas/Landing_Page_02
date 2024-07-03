import styled from "styled-components";

export const Container = styled.div<{ bgColor: string }>`
  width: 2.8rem !important;
  height: 2.8rem !important;
  border-radius: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.bgColor};
`