import { colors } from "@/constants/colors";
import { CheckIcon } from "@/components/Icons/CheckIcon/CheckIcon";
import {
  Container,
  HeadingContainer,
  ButtonContainer,
  TextContainer,
  BenefitsContainer,
} from "./styles";

interface PlanProps {
  plan: TPlan;
}

export const Plan = ({ plan }: PlanProps) => {
  return (
    <Container type={plan.type}>
      <HeadingContainer type={plan.type}>
        <h3>{plan.title}</h3>

        <span>{plan.subtitle}</span>
      </HeadingContainer>

      <h4>{plan.price}</h4>

      {plan.benefits && (
        <BenefitsContainer type={plan.type}>
          {plan.benefits.map(benefit =>
            <div>
              <CheckIcon color={
                plan.type === 'primary'
                  ? colors.white
                  : colors.gray
              } />

              <p>{benefit}</p>
            </div>
          )}
        </BenefitsContainer>
      )}

      {plan.text && (
        <TextContainer>
          {plan.text.map(text =>
            <p>
              {text}
            </p>
          )}
        </TextContainer>
      )}

      <ButtonContainer type={plan.type}>
        {plan.buttonText}
      </ButtonContainer>
    </Container>
  );
}
