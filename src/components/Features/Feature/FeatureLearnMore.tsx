import { ArrowIcon } from "../../Icons/ArrowIcon/ArrowButton";
import { FeatureLearnMoreContainer } from "./styles";

export interface FeatureLearnMoreProps {
  color: string;
}

export const FeatureLearnMore = ({ color }: FeatureLearnMoreProps) => {
  return (
    <FeatureLearnMoreContainer color={color}>
      <a href="#">
        Learn More

        <ArrowIcon
          arrowColor={color}
          bgColor={`${color}15`}
        />
      </a>
    </FeatureLearnMoreContainer>
  );
}
