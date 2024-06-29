import { ButtonContainer } from "./styles";

interface PrimaryButtonProps {
  text: string;
  textColor: string;
  bgColor: string;
}

export const PrimaryButton = ({ text, textColor, bgColor }: PrimaryButtonProps) => {
  return (
    <ButtonContainer textColor={textColor} bgColor={bgColor}>
      {text}
    </ButtonContainer>
  );
}
