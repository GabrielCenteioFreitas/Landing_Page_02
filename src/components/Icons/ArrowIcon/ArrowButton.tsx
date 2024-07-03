import { Container } from "./styles";

interface ArrowIconProps {
  arrowColor: string;
  bgColor: string;
}

export const ArrowIcon = ({ arrowColor, bgColor }: ArrowIconProps) => {
  return (
    <Container bgColor={bgColor}>
      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.83325 8H13.1666" stroke={arrowColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.5 3.33331L13.1667 7.99998L8.5 12.6666" stroke={arrowColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </Container>
  );
}
