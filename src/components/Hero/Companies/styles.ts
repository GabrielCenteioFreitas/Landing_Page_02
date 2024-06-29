import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 7.2rem;

  div {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  span {
    font-size: 1.8rem;
    color: var(--white);
  }
`