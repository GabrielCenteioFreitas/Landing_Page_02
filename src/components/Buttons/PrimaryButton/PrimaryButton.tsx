import { ButtonContainer } from "./styles";

interface PrimaryButtonProps {
  text: string;
  textColor: string;
  bgColor: string;
  hoverBgColor?: string;
}

export const PrimaryButton = ({ text, textColor, bgColor, hoverBgColor }: PrimaryButtonProps) => {
  return (
    <ButtonContainer
      textColor={textColor}
      bgColor={bgColor}
      hoverBgColor={hoverBgColor}
    >
      {text}
    </ButtonContainer>
  );
}
