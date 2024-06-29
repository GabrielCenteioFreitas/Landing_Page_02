import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  padding: 4rem 8rem 8rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6.4rem;
`

export const GradientsContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  img {
    position: absolute;
  }

  img:first-child {
    z-index: -2;
    bottom: 0;
  }

  img:nth-child(2) {
    z-index: -1;
    bottom: 0;
  }
`