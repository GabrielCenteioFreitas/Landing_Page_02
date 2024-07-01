import styled from "styled-components";

export const Container = styled.div`
  width: 52rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 2.4rem;
  background-color: var(--white);
  border-radius: 1.6rem;
  white-space: wrap;

  div {
    display: flex;
    justify-content: space-between;

    div:first-child {
      display: flex;
      align-items: center;
      gap: 1.6rem;

      img {
        width: 6.4rem;
        height: 6.4rem;
        border-radius: 100%;
      }

      div {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: .4rem;

        span:first-child {
          font-weight: 500;
          font-size: 1.6rem;
          color: var(--black);
        }

        span:nth-child(2) {
          font-size: 1.6rem;
          color: var(--light-gray);
        }
      }
    }

    img:nth-child(2) {
      width: 4.8rem;
      height: 4.8rem;
    }
  }

  p {
    font-size: 1.8rem;
    color: var(--gray);
  }
`