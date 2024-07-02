import styled from "styled-components";

export const Container = styled.section<{ color: string }>`
  display: flex;
  padding: 8rem;

  div:first-child {
    max-width: 52rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    padding: 3.2rem 5.6rem 3.2rem 0;

    h3 {
      font-weight: 500;
      font-size: 1.8rem;
      color: ${props => props.color};
    }

    h2 {
      font-weight: 500;
      font-size: 4.2rem;
      color: var(--black);
    }

    p {
      font-weight: 400;
      font-size: 1.8rem;
      color: var(--gray);
    }
  }

  div:nth-child(2) {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    details {
      width: 100%;
      padding: 2.4rem;
      background-color: var(--lightBlue);

      summary {
        font-weight: 500;
        font-size: 1.8rem;
        color: var(--black);

        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1.6rem;

        &:after {
          content: '';
          flex-shrink: 0;
          width: 2.4rem;
          height: 2.4rem;
          background: url('plus.svg');
          transition: all .2s;
        }
      }

      &[open] > summary::after {
        background: url('minus.svg');
      }

      p {
        margin: 1.6rem 6.4rem 0 0;
        font-size: 1.8rem;
        color: var(--gray);
      }
    }
  }
`