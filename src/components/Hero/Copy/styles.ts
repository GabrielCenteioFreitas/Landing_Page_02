import styled from "styled-components";

export const Container = styled.div`
  max-width: 84.6rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  text-align: center;

  h1 {
    font-size: 6.4rem;
    font-weight: 600;
  }

  p {
    font-size: 1.8rem;
  }

  div {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 4rem;

    a {
      display: flex;
      align-items: center;
      gap: 1.2rem;

      color: var(--purple);
      font-weight: 500;
      font-size: 1.8rem;
    }
  }
`