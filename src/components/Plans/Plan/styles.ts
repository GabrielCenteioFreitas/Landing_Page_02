import styled from "styled-components";
import { colors } from "@/constants/colors";

export const Container = styled.div<{ type: TPlan['type'] }>`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 2.4rem;
  border-radius: .8rem;
  background-color: ${props => props.type === 'primary'
    ? 'var(--purple)'
    : 'var(--lightPurple)'
  };

  h4 {
    font-weight: 500;
    font-size: 3.2rem;
      color: ${props => props.type === 'primary'
        ? 'var(--white)'
        : 'var(--black)'
      };
  }
`

export const HeadingContainer = styled.div<{ type: TPlan['type'] }>`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  h3 {
    font-weight: 500;
    font-size: 2rem;
    color: ${props => props.type === 'primary'
      ? 'var(--white)'
      : 'var(--purple)'
    };
  }

  span {
    font-size: 1.8rem;
    color: ${props => props.type === 'primary'
      ? 'var(--white)'
      : 'var(--gray)'
    };
  }
`

export const BenefitsContainer = styled.div<{ type: TPlan['type'] }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  div {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    
    & * {
      color: ${props => props.type === 'primary'
        ? 'var(--white)'
        : 'var(--gray)'
      };
    }
  }
`

export const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  & * {
    font-size: 1.6rem;
    color: var(--gray);
  }
`

export const ButtonContainer = styled.button<{ type: TPlan['type'] }>`
  width: 100%;
  padding: 1.6rem 3.2rem;

  
  border-radius: .4rem;
  background-color: var(--white);
  transition: all .3s;
  
  color: var(--purple);
  text-align: center;
  font-weight: 500;
  font-size: 1.6rem;

  &:hover {
    background-color: ${props => props.type === 'primary'
      ? `${colors.white}99`
      : `${colors.purple}25`
    };
  }
`