import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 128rem;
  padding-block: 8rem;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4.8rem;

  background: url("./gradient.png");
  border-radius: 1.6rem;
  color: var(--white);

  h2 {
    font-weight: 500;
    font-size: 5.6rem;
    max-width: 62.8rem;
    text-align: center;
  }

  p {
    font-size: 1.8rem;
  }

  & > div {
    margin-top: .8rem;
    display: flex;
    align-items: center;
    gap: 4rem;

    a {
      display: flex;
      align-items: center;
      gap: 1.2rem;
      color: var(--white);

      font-weight: 500;
      font-size: 1.8rem;
    }
  }
`