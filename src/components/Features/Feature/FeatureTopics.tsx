import { FeatureTopicsContainer } from "./styles";
import Check from "@/assets/check.svg";

export interface FeatureTopicsProps {
  topics: TFeature['topics'];
}

export const FeatureTopics = ({ topics }: FeatureTopicsProps) => {
  if (!topics) return null;
  
  return (
    <FeatureTopicsContainer>
      {topics.map((topic: string) => 
        <li key={topic}>
          <img src={Check} alt="Check" />
          {topic}
        </li>
      )}
    </FeatureTopicsContainer>
  );
}
