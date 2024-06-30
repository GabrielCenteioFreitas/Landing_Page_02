import { ReactNode } from "react";
import { FeatureContentContainer } from "./styles";

export interface FeatureContentProps {
  children: ReactNode;
  position: TFeature["image"]["position"];
}

export const FeatureContent = ({ children, position }: FeatureContentProps) => {
  return (
    <FeatureContentContainer position={position}>
      {children}
    </FeatureContentContainer>
  );
}
