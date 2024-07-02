import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`

export const FeatureImageContainer = styled.div<{ position: string }>`
  order: ${props => props.position === 'right' ? 1 : -1};
`

export const FeatureContentContainer = styled.div<{ position: string }>`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 5.6rem 
    ${props => props.position === 'right' ? "5.6rem" : 0}
    5.6rem
    ${props => props.position === 'right' ? 0 : "5.6rem"}
  ;
`

export const FeatureInfoContainer = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

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
    color: var(--gray);
  }
`

export const FeatureTopicsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  li {
    display: flex;
    align-items: center;
    gap: 1.6rem;

    font-size: 1.8rem;
    color: var(--gray);
  }
`

export const FeatureStatisticsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  padding-top: 1.6rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    span:first-child {
      font-size: 3.2rem;
      font-weight: 500;
      color: var(--black);
    }

    span:nth-child(2) {
      font-size: 1.8rem;
      color: var(--lightGray);
    }
  }
`

export const FeatureLearnMoreContainer = styled.a<{ color: string }>`
  width: fit-content;
  padding-block: 2.4rem;

  a {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    cursor: pointer;
    
    font-size: 1.8rem;
    font-weight: 500;
    color: ${props => props.color};
  }
`