import { FeatureImageContainer } from "./styles";

export interface FeatureImageProps {
  image: TFeature['image'];
}

export const FeatureImage = ({ image }: FeatureImageProps) => {
  return (
    <FeatureImageContainer position={image.position}>
      <img
        src={`./images/${image.src}`}
        alt={image.alt}
      />
    </FeatureImageContainer>
  );
}
