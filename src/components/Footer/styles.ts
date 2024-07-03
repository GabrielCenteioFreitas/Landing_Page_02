import styled from "styled-components";

export const Container = styled.footer`
  max-width: 144rem;
  margin: 0 auto;
  padding: 8rem 8rem 5.6rem;
  display: flex;
  flex-direction: column;
  gap: 10rem;
`

export const LogoMenuContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;

  & > a {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    h2 {
      font-weight: 700;
      font-size: 1.7rem;
      color: var(--gray);
    }
  }

  & > div {
    width: fit-content;
    display: flex;
    flex: 1;
    justify-content: end;
    gap: 2.4rem;

    div {
      width: 100%;
      max-width: 19.2rem;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 3.2rem;

      h3, a {
        color: var(--gray);
        font-size: 1.6rem;
      }

      a {
        font-weight: 500;
      }
    }
  }
`

export const CopyrightSocialsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-weight: 500;
    font-size: 1.6rem;
    color: var(--gray);
  }

  div {
    display: flex;
    align-items: center;
    gap: 5.6rem;
  }
`