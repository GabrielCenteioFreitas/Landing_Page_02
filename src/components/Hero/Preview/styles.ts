import styled from "styled-components";

export const Container = styled.div`
  width: 115.06rem;
  height: 73.8rem;
  position: relative;

  img {
    position: absolute;
  }

  img:first-child {
    left: 0;
    top: 0;
    width: 95.733rem;
    box-shadow: 0 5.6rem 23.2rem -5.6rem #00000025;
  }

  img:nth-child(2) {
    right: 0;
    bottom: 0;
    width: 27.147rem;
  }
`