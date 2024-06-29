import styled from "styled-components";

export const ButtonContainer = styled.button<{
  bgColor: string;
  textColor: string;
}>`
  padding: 1.6rem 3.2rem;
  background-color: ${props => props.bgColor};
  border-radius: .8rem;
  
  font-weight: 500;
  font-size: 1.8rem;
  color: ${props => props.textColor};
`