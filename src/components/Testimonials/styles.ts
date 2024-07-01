import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 7.2rem;
  padding-block: 9.6rem;
  background: var(--snow);
  overflow: hidden;
`

export const Heading = styled.div`
  max-width: 68rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.6rem;
  text-align: center;

  h2 {
    font-weight: 500;
    font-size: 4.2rem;
    color: var(--black);
  }

  p {
    font-size: 1.8rem;
    color: var(--gray);
  }
`

export const TestimonialsWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`

export const TestimonialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`

export const TestimonialsRowContainer = styled.div<{ number: number }>`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 2.4rem;
  margin-left: ${props => props.number % 2 === 0 ? "-5.6rem" : "-16rem"};
`