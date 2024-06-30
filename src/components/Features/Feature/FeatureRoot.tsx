import { ReactNode } from "react";
import { Container } from "./styles";

export interface FeatureRootProps {
  children: ReactNode;
}

export const FeatureRoot = ({ children }: FeatureRootProps) => {
  return (
    <Container>
      {children}
    </Container>
  );
}
