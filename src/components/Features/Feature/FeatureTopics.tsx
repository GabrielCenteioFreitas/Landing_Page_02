import { CheckIcon } from "../../Icons/CheckIcon/CheckIcon";
import { FeatureTopicsContainer } from "./styles";

export interface FeatureTopicsProps {
  topics: TFeature['topics'];
}

export const FeatureTopics = ({ topics }: FeatureTopicsProps) => {
  if (!topics) return null;
  
  return (
    <FeatureTopicsContainer>
      {topics.map((topic: string) => 
        <li key={topic}>
          <CheckIcon />
          {topic}
        </li>
      )}
    </FeatureTopicsContainer>
  );
}
