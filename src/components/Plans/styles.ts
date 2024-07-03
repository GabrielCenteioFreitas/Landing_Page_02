import styled from "styled-components";

export const Container = styled.section`
  padding: 8rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 6.4rem;
`

export const HeadingContainer = styled.div`
  max-width: 62.8rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  text-align: center;

  h2 {
    font-weight: 500;
    font-size: 4.2rem;
    color: var(--black);
  }

  span {
    font-size: 1.8rem;
    color: var(--gray);
  }
`

export const PlansContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.4rem;
`