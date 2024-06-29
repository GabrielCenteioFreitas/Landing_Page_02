import styled from "styled-components";

export const Container = styled.header`
  max-width: 144rem;
  margin: 0 auto;
  padding: 2.4rem 8rem;
  display: flex;
  justify-content: space-between;

  * {
    color: var(--gray);
    font-size: 1.6rem;
    font-weight: 500;
  }
`

export const MenuContainer = styled.div`
  display: flex;
  gap: 7.2rem;
  align-items: center;

  ul {
    display: flex;
    gap: 5.6rem;
    list-style: none;

    a:hover {
      filter: brightness(50%);
      text-decoration: underline;
    }
  }
`

export const AccountLinksContainer = styled.nav`
  display: flex;
  gap: 5.6rem;
  align-items: center;

  a:hover:first-child {
    filter: brightness(50%);
    text-decoration: underline;
  }
`