import { FeatureInfoContainer } from "./styles";

export interface FeatureInfoProps {
  feature: Pick<TFeature,
    'color' |
    'feature' |
    'title' |
    'text'
  >
}

export const FeatureInfo = ({ feature }: FeatureInfoProps) => {
  return (
    <FeatureInfoContainer color={feature.color}>
      <h3>{feature.feature}</h3>
    
      <h2>{feature.title}</h2>  
    
      <p>{feature.text}</p>
    </FeatureInfoContainer>
  );
}
